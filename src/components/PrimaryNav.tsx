import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { cvDataMap, Language } from '../data/cvData';

interface PrimaryNavProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const PrimaryNav: React.FC<PrimaryNavProps> = ({
  lang,
  onToggleLang,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ui, personalInfo } = cvDataMap[lang];

  const navItems = [
    { id: 'sobre-mi', label: ui.nav.about },
    { id: 'experiencia', label: ui.nav.experience },
    { id: 'proyectos', label: ui.nav.projects },
    { id: 'habilidades', label: ui.nav.skills },
    { id: 'educacion', label: ui.nav.education },
    { id: 'contacto', label: ui.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-canvas shadow-inset-hairline font-sans">
        <div className="max-w-[1440px] mx-auto h-16 px-4 sm:px-8 flex items-center justify-between">
          {/* Left: Monogram / Brand */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden btn-icon-circular"
              aria-label={lang === 'en' ? 'Open menu' : 'Abrir menú'}
            >
              <Menu className="w-5 h-5 text-ink" />
            </button>

            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="flex items-center space-x-2 group"
            >
              <span className="w-9 h-8 bg-ink text-canvas font-black flex items-center justify-center text-xs tracking-tighter">
                {personalInfo.monogram}
              </span>
              <span className="font-display text-2xl tracking-wide uppercase text-ink hidden sm:inline">
                {personalInfo.fullName}
              </span>
            </a>
          </div>

          {/* Center: Primary Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative h-full flex items-center text-body-strong font-medium uppercase tracking-tight text-ink transition-colors hover:text-charcoal ${
                    isActive
                      ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink'
                      : ''
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Search Pill + Quick Action */}
          <div className="flex items-center space-x-3">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-mute absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={ui.nav.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-pill pl-9 pr-4 w-44 xl:w-60 text-caption-md placeholder:text-mute focus:w-60 transition-all"
              />
            </div>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contacto');
              }}
              className="btn-primary text-caption-md h-10 px-5"
            >
              <span>{ui.nav.contactBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden px-4 pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-mute absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={ui.nav.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-pill pl-9 pr-4 w-full text-caption-md placeholder:text-mute"
            />
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Left Slide-in) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative bg-canvas w-[280px] max-w-full h-full shadow-2xl p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-hairline">
                <div className="flex items-center space-x-2">
                  <span className="w-9 h-8 bg-ink text-canvas font-black flex items-center justify-center text-xs">
                    {personalInfo.monogram}
                  </span>
                  <span className="font-display text-xl uppercase tracking-wide">
                    {personalInfo.fullName}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-icon-circular w-8 h-8"
                  aria-label={lang === 'en' ? 'Close menu' : 'Cerrar menú'}
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="py-4 border-b border-hairline flex items-center justify-between">
                <span className="text-caption-sm text-mute uppercase font-semibold">
                  {lang === 'en' ? 'LANGUAGE' : 'IDIOMA'}
                </span>
                <div className="inline-flex items-center p-0.5 rounded-full bg-soft-cloud border border-hairline">
                  <button
                    onClick={() => onToggleLang('en')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                      lang === 'en' ? 'bg-ink text-canvas' : 'text-mute hover:text-ink'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => onToggleLang('es')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                      lang === 'es' ? 'bg-ink text-canvas' : 'text-mute hover:text-ink'
                    }`}
                  >
                    ES
                  </button>
                </div>
              </div>

              <nav className="mt-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left font-display text-2xl uppercase tracking-wide text-ink hover:text-mute transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-hairline space-y-4">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contacto');
                }}
                className="btn-primary w-full text-center text-caption-md"
              >
                {ui.contact.submitBtn}
              </a>
              <p className="text-utility-xs text-mute text-center uppercase tracking-wider">
                BUENOS AIRES · {lang === 'en' ? 'REMOTE' : 'REMOTO'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
