import React from 'react';
import { ArrowUp } from 'lucide-react';
import { cvDataMap, Language } from '../data/cvData';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onPrintCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate, onPrintCV }) => {
  const { personalInfo, ui } = cvDataMap[lang];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas border-t border-hairline pt-12 pb-8 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Four-Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Navegación */}
          <div className="space-y-4">
            <h4 className="text-body-strong font-medium text-ink uppercase tracking-tight">
              {ui.footer.sectionsCol}
            </h4>
            <ul className="space-y-2.5 text-caption-md text-mute font-medium">
              <li>
                <button
                  onClick={() => onNavigate('sobre-mi')}
                  className="hover:text-ink transition-colors uppercase"
                >
                  {ui.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experiencia')}
                  className="hover:text-ink transition-colors uppercase"
                >
                  {ui.nav.experience}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('proyectos')}
                  className="hover:text-ink transition-colors uppercase"
                >
                  {ui.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('habilidades')}
                  className="hover:text-ink transition-colors uppercase"
                >
                  {ui.nav.skills}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('educacion')}
                  className="hover:text-ink transition-colors uppercase"
                >
                  {ui.nav.education}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Recursos & Descargas */}
          <div className="space-y-4">
            <h4 className="text-body-strong font-medium text-ink uppercase tracking-tight">
              {ui.footer.resourcesCol}
            </h4>
            <ul className="space-y-2.5 text-caption-md text-mute font-medium">
              <li>
                <button
                  onClick={onPrintCV}
                  className="hover:text-ink transition-colors uppercase text-left"
                >
                  {ui.footer.downloadPdf}
                </button>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors uppercase block"
                >
                  {ui.footer.githubRepos}
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('proyectos')}
                  className="hover:text-ink transition-colors uppercase text-left"
                >
                  {ui.footer.projectMetrics}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Redes & Contacto */}
          <div className="space-y-4">
            <h4 className="text-body-strong font-medium text-ink uppercase tracking-tight">
              {ui.footer.connectCol}
            </h4>
            <ul className="space-y-2.5 text-caption-md text-mute font-medium">
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors uppercase block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors uppercase block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-ink transition-colors uppercase block"
                >
                  {lang === 'en' ? 'Direct Email' : 'Correo Electrónico'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Manifiesto & Back to Top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-body-strong font-medium text-ink uppercase tracking-tight">
                {ui.footer.manifestoCol}
              </h4>
              <p className="text-caption-md text-mute font-normal mt-2 leading-relaxed">
                {ui.footer.manifestoDesc}
              </p>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 text-caption-md font-medium text-ink hover:text-charcoal transition-colors uppercase"
              >
                <span>{ui.footer.backToTop}</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-hairline pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center space-x-4 text-utility-xs text-mute font-medium uppercase tracking-wider">
            <span>© {new Date().getFullYear()} {personalInfo.fullName}. {ui.footer.rights}</span>
            <span>·</span>
            <span>BUENOS AIRES, AR</span>
            <span>·</span>
            <span>{lang === 'en' ? 'EDITORIAL DESIGN SYSTEM' : 'SISTEMA DE DISEÑO EDITORIAL'}</span>
          </div>

          <div className="flex items-center space-x-6 text-utility-xs text-mute font-medium uppercase tracking-wider">
            <span>{ui.footer.availableHire}</span>
            <span>·</span>
            <span className="text-ink font-bold">{ui.footer.edition}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
