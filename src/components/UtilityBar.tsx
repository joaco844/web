import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { cvDataMap, Language } from '../data/cvData';

interface UtilityBarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onPrintCV: () => void;
}

export const UtilityBar: React.FC<UtilityBarProps> = ({
  lang,
  onToggleLang,
  onPrintCV,
}) => {
  const { personalInfo, ui } = cvDataMap[lang];

  return (
    <div className="utility-bar bg-soft-cloud text-ink h-9 px-4 sm:px-8 flex items-center justify-between text-caption-sm border-b border-hairline-soft font-sans">
      <div className="flex items-center space-x-2 text-mute">
        <span className="inline-block w-2 h-2 rounded-full bg-success"></span>
        <span className="font-medium text-ink uppercase tracking-tight text-xs sm:text-caption-sm">
          {lang === 'en'
            ? 'BUENOS AIRES, AR · AVAILABLE FOR ROLES'
            : 'BUENOS AIRES, AR · DISPONIBLE PARA PROYECTOS'}
        </span>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-6 text-ink font-medium text-xs sm:text-caption-sm">
        {/* Language Pill Switcher (Nike Pill style) */}
        <div className="inline-flex items-center p-0.5 rounded-full bg-canvas border border-hairline">
          <button
            onClick={() => onToggleLang('en')}
            className={`px-2 py-0.5 text-[11px] font-bold rounded-full transition-all ${
              lang === 'en'
                ? 'bg-ink text-canvas shadow-xs'
                : 'text-mute hover:text-ink'
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            onClick={() => onToggleLang('es')}
            className={`px-2 py-0.5 text-[11px] font-bold rounded-full transition-all ${
              lang === 'es'
                ? 'bg-ink text-canvas shadow-xs'
                : 'text-mute hover:text-ink'
            }`}
            aria-label="Cambiar a Español"
          >
            ES
          </button>
        </div>

        <span className="text-hairline hidden sm:inline">|</span>

        <button
          onClick={onPrintCV}
          className="hidden md:inline-flex items-center space-x-1 hover:text-charcoal transition-colors uppercase tracking-tight"
          title={lang === 'en' ? 'Export as PDF / Print CV' : 'Exportar a PDF / Imprimir CV'}
        >
          <Download className="w-3.5 h-3.5" />
          <span>{ui.hero.downloadPdfBtn}</span>
        </button>

        <span className="text-hairline hidden md:inline">|</span>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center space-x-1 hover:text-charcoal transition-colors uppercase tracking-tight"
        >
          <span>LINKEDIN</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <span className="text-hairline hidden sm:inline">|</span>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center space-x-1 hover:text-charcoal transition-colors uppercase tracking-tight"
        >
          <span>GITHUB</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
