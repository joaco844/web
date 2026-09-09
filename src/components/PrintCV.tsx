import React from 'react';
import { cvDataMap, Language } from '../data/cvData';

interface PrintCVProps {
  lang: Language;
}

export const PrintCV: React.FC<PrintCVProps> = ({ lang }) => {
  const { personalInfo, experiences, projects, education } = cvDataMap[lang];

  return (
    <div className="hidden print:block p-8 bg-white text-black font-sans max-w-4xl mx-auto leading-normal">
      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-4">
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
          <span>gitlab.com/joaco_diaz</span>
        </div>
      </div>

      {/* Experiencia Laboral */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2.5">
          {lang === 'en' ? 'WORK EXPERIENCE' : 'EXPERIENCIA LABORAL'}
        </h2>
        <div className="space-y-3.5">
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
            </div>
          ))}
        </div>
      </div>

      {/* Proyectos Destacados y Hackathons */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2.5">
          {lang === 'en' ? 'SELECTED PROJECTS & HACKATHONS' : 'PROYECTOS DESTACADOS Y HACKATHONS'}
        </h2>
        <div className="space-y-3">
          {projects.map((proj) => (
            <div key={proj.id}>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-black">
                  {proj.title}
                </span>
                <span className="text-[11px] text-gray-600 font-medium">{proj.subtitle}</span>
              </div>
              <p className="text-xs text-gray-800 mt-0.5 leading-snug">
                {proj.description}
              </p>
              <div className="text-[11px] text-gray-700 mt-0.5">
                <span className="font-semibold">{lang === 'en' ? 'Stack:' : 'Stack:'}</span> {proj.technologies.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educación */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
          {lang === 'en' ? 'EDUCATION' : 'EDUCACIÓN'}
        </h2>
        <div className="space-y-2 text-xs">
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-baseline">
              <div>
                <span className="font-bold text-black">{edu.degree}</span>
                <span className="text-gray-700"> — {edu.institution}</span>
              </div>
              <span className="text-gray-600 font-medium">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Habilidades Técnicas y Certificaciones */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
          {lang === 'en' ? 'TECHNICAL SKILLS & CERTIFICATIONS' : 'HABILIDADES TÉCNICAS Y CERTIFICACIONES'}
        </h2>
        <div className="text-xs text-gray-800 space-y-1">
          <p>
            <span className="font-bold">{lang === 'en' ? 'Languages:' : 'Lenguajes:'}</span>{' '}
            {lang === 'en'
              ? 'Python (Advanced), SQL (Intermediate), Java (OOP Fundamentals), JavaScript (ES6+), HTML5/CSS3'
              : 'Python (Avanzado), SQL (Intermedio), Java (Fundamentos OOP), JavaScript (ES6+), HTML5/CSS3'}
          </p>
          <p>
            <span className="font-bold">{lang === 'en' ? 'Backend & Architecture:' : 'Backend y Arquitectura:'}</span>{' '}
            {lang === 'en'
              ? 'Django, FastAPI, RESTful APIs, Gunicorn, Celery, ORM Optimization (N+1), Asynchronous Processing'
              : 'Django, FastAPI, APIs RESTful, Gunicorn, Celery, Optimización de ORM (N+1), Procesamiento Asíncrono'}
          </p>
          <p>
            <span className="font-bold">{lang === 'en' ? 'Databases & DevOps:' : 'Bases de Datos y DevOps:'}</span>{' '}
            {lang === 'en'
              ? 'MariaDB, MySQL, PostgreSQL, Docker, Git, GitLab CI/CD, Linux (Ubuntu/Debian), Postman'
              : 'MariaDB, MySQL, PostgreSQL, Docker, Git, GitLab CI/CD, Linux (Ubuntu/Debian), Postman'}
          </p>
          <p>
            <span className="font-bold">{lang === 'en' ? 'Certifications:' : 'Certificaciones:'}</span>{' '}
            {lang === 'en'
              ? 'EF SET English C1 Advanced (Score: 63/100 · cert.efset.org/3GPEHs), HackerRank SQL and REST API (Intermediate)'
              : 'EF SET English C1 Advanced (Puntaje: 63/100 · cert.efset.org/3GPEHs), HackerRank SQL y REST API (Intermedio)'}
          </p>
          <p>
            <span className="font-bold">{lang === 'en' ? 'Languages:' : 'Idiomas:'}</span>{' '}
            {lang === 'en'
              ? 'Spanish (Native), English (C1 Advanced / Full Professional Proficiency)'
              : 'Español (Nativo), Inglés (C1 Avanzado / Capacidad Profesional Completa)'}
          </p>
        </div>
      </div>
    </div>
  );
};
