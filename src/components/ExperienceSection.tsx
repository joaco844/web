import React, { useState } from 'react';
import { cvDataMap, Language } from '../data/cvData';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const { experiences, ui } = cvDataMap[lang];
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'exp-mybig': true,
    'exp-unsam': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experiencia" className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-12 font-sans">
      {/* 1px Hairline Divider with Section Header */}
      <div className="border-t border-hairline pt-4 mb-8 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-heading-xl font-medium tracking-tight text-ink uppercase">
          {ui.experience.sectionNum} / {ui.experience.sectionTitle}
        </h2>
        <span className="text-caption-md font-medium text-mute uppercase">
          {ui.experience.sectionSubtitle}
        </span>
      </div>

      {/* Stack of pdp-disclosure-row components */}
      <div className="divide-y divide-hairline border-b border-hairline">
        {experiences.map((exp) => {
          const isOpen = openItems[exp.id];

          return (
            <div key={exp.id} className="py-6 transition-colors">
              {/* Row Header (Clickable) */}
              <button
                onClick={() => toggleItem(exp.id)}
                className="w-full text-left flex items-start sm:items-center justify-between gap-4 group"
                aria-expanded={isOpen}
              >
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                  {/* Role and Company */}
                  <div className="sm:col-span-6">
                    <h3 className="text-body-strong sm:text-heading-md font-medium text-ink uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-caption-md text-charcoal font-medium">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period & Location */}
                  <div className="sm:col-span-4 text-caption-md text-mute font-medium uppercase">
                    <span>{exp.period}</span>
                    <span className="mx-2">·</span>
                    <span>{exp.location}</span>
                  </div>

                  {/* Pill badge showing count of achievements */}
                  <div className="sm:col-span-2 hidden sm:block text-right">
                    <span className="text-caption-sm text-mute uppercase font-medium">
                      {exp.achievements.length} {ui.experience.achievementsCountSuffix}
                    </span>
                  </div>
                </div>

                {/* Right chevron button-icon-circular */}
                <div className="btn-icon-circular flex-shrink-0 w-8 h-8 group-hover:bg-hairline-soft transition-colors">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-ink" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-ink" />
                  )}
                </div>
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="pt-6 pb-2 pl-0 sm:pl-0 space-y-6">
                  <p className="text-body-md text-charcoal font-normal max-w-4xl leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-3 max-w-4xl">
                    <h4 className="text-caption-sm text-mute font-semibold uppercase tracking-wider">
                      {ui.experience.achievementsTitle}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start text-body-md text-ink">
                          <span className="inline-block w-1.5 h-1.5 bg-ink rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Pills */}
                  <div className="pt-2">
                    <h4 className="text-caption-sm text-mute font-semibold uppercase tracking-wider mb-3">
                      {ui.experience.techTitle}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-soft-cloud text-ink text-caption-sm font-medium px-3.5 py-1.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
