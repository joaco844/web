import { useState, useEffect } from 'react';
import { Language } from './data/cvData';
import { UtilityBar } from './components/UtilityBar';
import { PrimaryNav } from './components/PrimaryNav';
import { CampaignHero } from './components/CampaignHero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintCV } from './components/PrintCV';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      // Auto scroll to projects grid if user starts searching
      const projectsEl = document.getElementById('proyectos');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrintCV = () => {
    window.print();
  };

  // Observe scroll position to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'sobre-mi', 'experiencia', 'proyectos', 'habilidades', 'educacion', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic SEO metadata synchronization on language switch
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'en') {
      document.title = 'Joaquin Diaz Syrotink | Full Stack Software Developer · Python, Django, FastAPI';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Portfolio & CV of Joaquin Diaz Syrotink — Full Stack Software Developer specialized in Python, Django, FastAPI, database performance optimization, and scalable backend architecture in Buenos Aires, Argentina.'
        );
      }
    } else {
      document.title = 'Joaquin Diaz Syrotink | Desarrollador de Software Full Stack · Python, Django, FastAPI';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Portafolio y CV de Joaquín Díaz Syrotink — Desarrollador de Software Full Stack especializado en Python, Django, FastAPI, optimización de bases de datos y arquitectura backend en Buenos Aires, Argentina.'
        );
      }
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      {/* Web Presentation Chrome (hidden during printing) */}
      <div className="no-print flex-1 flex flex-col">
        <UtilityBar
          lang={lang}
          onToggleLang={setLang}
          onPrintCV={handlePrintCV}
        />
        <PrimaryNav
          lang={lang}
          onToggleLang={setLang}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        <main className="flex-1">
          <CampaignHero
            lang={lang}
            onExploreProjects={() => handleNavigate('proyectos')}
            onPrintCV={handlePrintCV}
          />
          <AboutSection lang={lang} />
          <ExperienceSection lang={lang} />
          <ProjectsGrid lang={lang} searchQuery={searchQuery} />
          <SkillsSection lang={lang} />
          <EducationSection lang={lang} />
          <ContactSection lang={lang} />
        </main>

        <Footer
          lang={lang}
          onNavigate={handleNavigate}
          onPrintCV={handlePrintCV}
        />
      </div>

      {/* Dedicated Clean Print View (Only visible during window.print()) */}
      <PrintCV lang={lang} />
    </div>
  );
}

export default App;
