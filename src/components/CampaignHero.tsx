import React from 'react';
import { ArrowDownRight, FileText } from 'lucide-react';
import { cvDataMap, Language } from '../data/cvData';

interface CampaignHeroProps {
  lang: Language;
  onExploreProjects: () => void;
  onPrintCV: () => void;
}

export const CampaignHero: React.FC<CampaignHeroProps> = ({
  lang,
  onExploreProjects,
  onPrintCV,
}) => {
  const { personalInfo, ui } = cvDataMap[lang];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-ink text-canvas font-sans">
      {/* Background Editorial Visual with Subtle Atmospheric Contrast */}
      <div className="relative w-full min-h-[580px] lg:min-h-[680px] flex flex-col justify-between p-6 sm:p-12 lg:p-16">
        {/* Editorial Background Image with High Contrast Burn */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity filter grayscale"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80')`
          }}
        />

        {/* Ambient Dark Overlay for Maximum Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

        {/* Top Tagline & Status */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-success"></span>
            <span className="text-caption-sm tracking-wider uppercase font-semibold text-white">
              {personalInfo.availability}
            </span>
          </div>

          <span className="text-caption-sm text-stone uppercase tracking-widest">
            {personalInfo.headline}
          </span>
        </div>

        {/* Towering Display Campaign Headline */}
        <div className="relative z-10 my-auto py-12 max-w-5xl">
          <p className="text-caption-md sm:text-heading-md text-stone uppercase font-medium tracking-widest mb-3">
            {ui.hero.tag}
          </p>
          
          <h1 className="font-display text-white text-[56px] sm:text-[76px] lg:text-[104px] xl:text-[116px] leading-[0.88] uppercase tracking-tight">
            {personalInfo.fullName}
          </h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-x-4">
            <p className="font-display text-stone text-[30px] sm:text-[42px] lg:text-[54px] leading-[0.92] uppercase">
              {personalInfo.campaignStatement[0]}
            </p>
            <p className="font-display text-white text-[30px] sm:text-[42px] lg:text-[54px] leading-[0.92] uppercase">
              {personalInfo.campaignStatement[1]} {personalInfo.campaignStatement[2]}
            </p>
          </div>
        </div>

        {/* Bottom-left Pill CTA Hierarchy */}
        <div className="relative z-10 flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          <button
            onClick={onExploreProjects}
            className="btn-outline-on-image group"
          >
            <span>{ui.hero.exploreBtn}</span>
            <ArrowDownRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={onPrintCV}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white/90 border border-white/30 text-caption-md font-medium hover:bg-white/10 transition-colors uppercase tracking-tight"
          >
            <FileText className="w-4 h-4" />
            <span>{ui.hero.downloadPdfBtn}</span>
          </button>

          <div className="ml-auto hidden md:flex items-center space-x-6 text-caption-sm text-stone uppercase">
            <span>PYTHON & DJANGO</span>
            <span>·</span>
            <span>FASTAPI & AI-POWERED</span>
            <span>·</span>
            <span>PERFORMANCE & SQL AUDIT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
