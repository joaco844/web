import React from 'react';
import { cvDataMap, Language } from '../data/cvData';
import { GraduationCap, Award, Globe, ExternalLink } from 'lucide-react';

interface EducationSectionProps {
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  const { education, certifications, languages, ui } = cvDataMap[lang];

  return (
    <section id="educacion" className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-12 font-sans">
      {/* 1px Hairline Divider with Section Header */}
      <div className="border-t border-hairline pt-4 mb-8 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 className="text-heading-xl font-medium tracking-tight text-ink uppercase">
            {ui.education.sectionNum} / {ui.education.sectionTitle}
          </h2>
          <p className="text-caption-md font-medium text-mute uppercase mt-1">
            {ui.education.sectionSubtitle}
          </p>
        </div>
        <span className="text-caption-sm text-mute uppercase tracking-wider font-semibold">
          {ui.education.verifiedTag}
        </span>
      </div>

      {/* Grid: Formal Education (Left) & Certifications/Languages (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Formal Education */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-body-strong font-semibold text-ink uppercase tracking-wider border-b border-hairline pb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-ink" />
            <span>{ui.education.academicTitle}</span>
          </h3>

          <div className="divide-y divide-hairline">
            {education.map((item) => (
              <div key={item.id} className="py-5 space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-heading-md font-medium text-ink uppercase tracking-tight">
                    {item.degree}
                  </h4>
                  <span className="text-caption-sm font-semibold text-ink uppercase flex-shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-caption-md text-mute font-medium">
                  {item.institution}
                </p>
                <p className="text-body-md text-charcoal font-normal pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Languages Block */}
          <div className="pt-4 border-t border-hairline">
            <h3 className="text-body-strong font-semibold text-ink uppercase tracking-wider mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-ink" />
              <span>{ui.education.languagesTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languages.map((l, idx) => (
                <div key={idx} className="bg-soft-cloud p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-body-strong text-ink font-bold uppercase">{l.language}</span>
                    <span className="text-caption-sm font-semibold bg-canvas px-2.5 py-1 rounded-full border border-hairline">
                      {l.level}
                    </span>
                  </div>
                  {l.certification && (
                    <p className="text-utility-xs text-mute uppercase mt-2">
                      {l.certification}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Certifications (faq-row style) */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-body-strong font-semibold text-ink uppercase tracking-wider border-b border-hairline pb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-ink" />
            <span>{ui.education.certsTitle} ({certifications.length})</span>
          </h3>

          <div className="divide-y divide-hairline">
            {certifications.map((cert) => (
              <div key={cert.id} className="py-4 flex flex-col justify-between group">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-body-strong font-medium text-ink uppercase tracking-tight">
                    {cert.title}
                  </h4>
                  <span className="text-caption-sm text-mute font-semibold uppercase">
                    {cert.year}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <p className="text-caption-md text-charcoal">
                    <span className="font-semibold text-ink">{cert.issuer}</span> · {cert.details}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption-sm text-ink hover:text-charcoal inline-flex items-center gap-1 font-semibold uppercase ml-2 flex-shrink-0"
                    >
                      <span>{ui.education.credentialBtn}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
