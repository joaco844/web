import React from 'react';
import { cvDataMap, Language } from '../data/cvData';

interface PrintCVProps {
  lang: Language;
}

export const PrintCV: React.FC<PrintCVProps> = ({ lang }) => {
  const { personalInfo, experiences, projects, education, certifications, languages } = cvDataMap[lang];

  return (
    <div className="hidden print:block p-8 bg-white text-black font-sans max-w-4xl mx-auto leading-normal">
      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-5">
        <h1 className="text-3xl font-bold tracking-tight uppercase text-black">
          {personalInfo.fullName}
        </h1>
        <p className="text-sm font-semibold text-gray-800 mt-1">
          {personalInfo.headline}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-700 mt-2">
          <span>{personalInfo.email}</span>
          <span>|</span>
          <span>linkedin.com/in/joaquin-diaz-syrotink</span>
          <span>|</span>
          <span>github.com/joaco844</span>
          <span>|</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
          {lang === 'en' ? 'SUMMARY' : 'RESUMEN PROFESIONAL'}
        </h2>
        <p className="text-xs leading-relaxed text-gray-800 mb-2">
          {personalInfo.about.join(' ')}
        </p>
        <p className="text-xs text-gray-900 font-semibold">
          <span className="font-bold">{lang === 'en' ? 'Current stack:' : 'Stack actual:'}</span> {personalInfo.currentStack.join(' · ')}
        </p>
      </div>

      {/* Experience */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-3">
          {lang === 'en' ? 'EXPERIENCE' : 'EXPERIENCIA LABORAL'}
        </h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold uppercase text-black">
                  {exp.role} · {exp.company}
                </span>
                <span className="text-xs text-gray-600 font-medium">{exp.period} · {exp.location}</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-gray-800">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="leading-snug">
                    {ach}
                  </li>
                ))}
              </ul>
              <div className="text-[11px] text-gray-700 mt-1">
                <span className="font-semibold">{lang === 'en' ? 'Stack:' : 'Tecnologías:'}</span> {exp.technologies.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-3">
          {lang === 'en' ? 'PROJECTS & HACKATHONS' : 'PROYECTOS & HACKATHONS'}
        </h2>
        <div className="space-y-3">
          {projects.map((proj) => (
            <div key={proj.id}>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold uppercase text-black">
                  {proj.title}
                </span>
                <span className="text-[11px] text-gray-600 font-medium">{proj.category}</span>
              </div>
              <p className="text-xs text-gray-800 mt-0.5 leading-snug">
                {proj.description}
              </p>
              <div className="text-[11px] text-gray-700 mt-0.5">
                <span className="font-semibold">{lang === 'en' ? 'Stack:' : 'Tecnologías:'}</span> {proj.technologies.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
          {lang === 'en' ? 'TECHNICAL SKILLS' : 'HABILIDADES TÉCNICAS'}
        </h2>
        <div className="text-xs text-gray-800 space-y-1">
          <p><span className="font-bold">Backend:</span> Python, Django, FastAPI</p>
          <p><span className="font-bold">{lang === 'en' ? 'Databases:' : 'Bases de datos:'}</span> MariaDB, MySQL, SQL optimization, indexing strategy</p>
          <p><span className="font-bold">{lang === 'en' ? 'Debugging & Performance:' : 'Diagnóstico y Rendimiento:'}</span> {lang === 'en' ? 'Production profiling (pyinstrument, django-debug-toolbar), platform-wide performance audits (ORM, memory, background jobs), root-cause analysis, query optimization' : 'Profiling en producción (pyinstrument, django-debug-toolbar), auditorías de rendimiento en plataforma (ORM, memoria, background jobs), análisis de causa raíz, optimización de queries'}</p>
          <p><span className="font-bold">{lang === 'en' ? 'Tools:' : 'Herramientas:'}</span> Git, GitHub, Postman, Linux, Docker, Generative AI tools (Claude Code, ChatGPT)</p>
          <p><span className="font-bold">{lang === 'en' ? 'Testing:' : 'Testing:'}</span> Selenium, functional testing</p>
          <p><span className="font-bold">Frontend:</span> JavaScript, jQuery, HTML/CSS, Bootstrap, Three.js, Chart.js</p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
          {lang === 'en' ? 'EDUCATION' : 'EDUCACIÓN'}
        </h2>
        <div className="space-y-2 text-xs">
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-baseline">
              <div>
                <span className="font-bold text-black">{edu.degree}</span>
                <span className="text-gray-700"> · {edu.institution}</span>
              </div>
              <span className="text-gray-600 font-medium">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Languages */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
          {lang === 'en' ? 'CERTIFICATIONS & LANGUAGES' : 'CERTIFICACIONES E IDIOMAS'}
        </h2>
        <ul className="list-disc list-outside ml-4 text-xs text-gray-800 space-y-1 mb-3">
          {certifications.map((cert) => (
            <li key={cert.id}>
              <span className="font-semibold text-black">{cert.title}</span> — {cert.issuer} · {cert.year} ({cert.details})
            </li>
          ))}
        </ul>

        <div className="text-xs text-gray-900">
          <span className="font-bold">{lang === 'en' ? 'Languages:' : 'Idiomas:'}</span> {languages.map(l => `${l.language} — ${l.level}${l.certification ? ` (${l.certification})` : ''}`).join(' | ')}
        </div>
      </div>
    </div>
  );
};
