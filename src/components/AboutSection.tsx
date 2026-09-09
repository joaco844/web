import React from 'react';
import { cvDataMap, Language } from '../data/cvData';
import { MapPin, Briefcase, Zap, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const { personalInfo, metrics, ui } = cvDataMap[lang];

  return (
    <section id="sobre-mi" className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-12 font-sans">
      {/* 1px Hairline Divider with Section Header */}
      <div className="border-t border-hairline pt-4 mb-10 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-heading-xl font-medium tracking-tight text-ink uppercase">
          {ui.about.sectionNum} / {ui.about.sectionTitle}
        </h2>
        <span className="text-caption-md font-medium text-mute uppercase">
          {ui.about.sectionSubtitle}
        </span>
      </div>

      {/* Main Content Grid: 12-column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Long-form Statement */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-heading-lg text-ink font-medium leading-snug">
            {personalInfo.about[0]}
          </p>
          <p className="text-body-md text-charcoal leading-relaxed">
            {personalInfo.about[1]}
          </p>
          {personalInfo.about[2] && (
            <p className="text-body-md text-charcoal leading-relaxed">
              {personalInfo.about[2]}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-soft-cloud p-6 border-l-2 border-ink">
              <div className="flex items-center space-x-2 text-ink mb-2">
                <Zap className="w-5 h-5 text-ink" />
                <h3 className="text-body-strong font-medium uppercase">{ui.about.performanceTitle}</h3>
              </div>
              <p className="text-caption-md text-mute">
                {ui.about.performanceDesc}
              </p>
            </div>

            <div className="bg-soft-cloud p-6 border-l-2 border-ink">
              <div className="flex items-center space-x-2 text-ink mb-2">
                <ShieldCheck className="w-5 h-5 text-ink" />
                <h3 className="text-body-strong font-medium uppercase">{ui.about.robustnessTitle}</h3>
              </div>
              <p className="text-caption-md text-mute">
                {ui.about.robustnessDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics on Soft Cloud Surfaces */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Quick Specs Block */}
          <div className="bg-soft-cloud p-6 space-y-4">
            <h3 className="text-caption-sm text-mute uppercase tracking-wider font-semibold border-b border-hairline pb-2">
              {ui.about.specTitle}
            </h3>
            
            <div className="space-y-3 text-caption-md">
              <div className="flex items-center justify-between">
                <span className="text-mute flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-ink" /> {ui.about.locationLabel}
                </span>
                <span className="font-medium text-ink uppercase">{personalInfo.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mute flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-ink" /> {ui.about.statusLabel}
                </span>
                <span className="font-medium text-success uppercase">{ui.about.statusValue}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mute">{ui.about.modalityLabel}</span>
                <span className="font-medium text-ink uppercase">{ui.about.modalityValue}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-mute">{ui.about.stackLabel}</span>
                <span className="font-medium text-ink uppercase">PYTHON · DJANGO · FASTAPI · SQL</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-soft-cloud p-5 flex flex-col justify-between">
                <span className="font-display text-4xl sm:text-5xl text-ink leading-none">
                  {metric.value}
                </span>
                <span className="text-utility-xs text-mute font-medium uppercase tracking-wider mt-3">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
