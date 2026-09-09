import React from 'react';
import { cvDataMap, Language } from '../data/cvData';
import { Code2, Server, Cloud, Cpu } from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const { skillCategories, ui } = cvDataMap[lang];

  const categoryIcons = [
    <Code2 className="w-5 h-5 text-ink" />,
    <Server className="w-5 h-5 text-ink" />,
    <Cpu className="w-5 h-5 text-ink" />,
    <Cloud className="w-5 h-5 text-ink" />,
  ];

  return (
    <section id="habilidades" className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-12 font-sans">
      {/* 1px Hairline Divider with Section Header */}
      <div className="border-t border-hairline pt-4 mb-8 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 className="text-heading-xl font-medium tracking-tight text-ink uppercase">
            {ui.skills.sectionNum} / {ui.skills.sectionTitle}
          </h2>
          <p className="text-caption-md font-medium text-mute uppercase mt-1">
            {ui.skills.sectionSubtitle}
          </p>
        </div>
        <span className="text-caption-sm text-mute uppercase tracking-wider font-semibold">
          {ui.skills.tag}
        </span>
      </div>

      {/* 4-up Grid: Flat Soft Cloud Tiles (0px radius, 0px shadow) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-soft-cloud p-6 flex flex-col justify-between border-t-2 border-ink"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                {categoryIcons[idx % categoryIcons.length]}
                <h3 className="text-body-strong font-medium text-ink uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pill List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-canvas border border-hairline text-ink text-caption-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-hairline-soft">
              <span className="text-utility-xs text-mute uppercase tracking-widest font-semibold">
                {ui.skills.footerTag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
