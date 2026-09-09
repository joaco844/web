import React, { useState } from 'react';
import { cvDataMap, Language, ProjectItem } from '../data/cvData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsGridProps {
  lang: Language;
  searchQuery?: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ lang, searchQuery = '' }) => {
  const { projects, ui } = cvDataMap[lang];
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeSwatches, setActiveSwatches] = useState<Record<string, number>>({});

  const filterCategories = [
    { label: ui.projects.allFilter, value: 'ALL' },
    { label: 'FULL STACK & 3D', value: 'FULL STACK & 3D SIMULATION' },
    { label: 'AI & FASTAPI', value: 'AI-POWERED SYSTEMS & FASTAPI' },
    { label: 'JPMORGAN HACKATHON', value: 'HACKATHON / JPMORGAN CHASE' },
    { label: 'TESTING & QA', value: 'QA & TEST AUTOMATION' },
  ];

  // Swatch color palette matching tech themes
  const swatchColors = ['#111111', '#707072', '#0a7281', '#1151ff', '#007d48'];

  // Filter projects by category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedFilter === 'ALL' || project.category === selectedFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const handleSwatchClick = (projectId: string, index: number) => {
    setActiveSwatches((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <section id="proyectos" className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-12 font-sans">
      {/* 1px Hairline Divider with Section Header */}
      <div className="border-t border-hairline pt-4 mb-8 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 className="text-heading-xl font-medium tracking-tight text-ink uppercase">
            {ui.projects.sectionNum} / {ui.projects.sectionTitle}
          </h2>
          <p className="text-caption-md font-medium text-mute uppercase mt-1">
            {ui.projects.sectionSubtitle} · {filteredProjects.length} {ui.projects.deliveriesCount}
          </p>
        </div>

        {/* Filter Chips Pill Bar (Sub-nav strip) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-0">
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedFilter(cat.value)}
                className={`transition-all ${
                  isActive ? 'filter-chip-active' : 'filter-chip-default hover:border-ink'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Card Grid: 3-up desktop, 2-up tablet, 1-up mobile */}
      {filteredProjects.length === 0 ? (
        <div className="bg-soft-cloud p-12 text-center my-8">
          <p className="text-heading-md font-medium text-ink uppercase">
            {ui.projects.noResults} "{searchQuery}".
          </p>
          <button
            onClick={() => setSelectedFilter('ALL')}
            className="btn-primary mt-4"
          >
            {ui.projects.viewAllBtn}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: ProjectItem) => {
            const activeIndex = activeSwatches[project.id] ?? 0;

            return (
              <article
                key={project.id}
                className="bg-canvas rounded-none p-0 flex flex-col justify-between"
              >
                {/* Image Area: 1:1 Square on soft-cloud with zero radius */}
                <div className="relative aspect-square w-full bg-soft-cloud overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Promo Badge anchored top-left */}
                  {project.promoBadge && (
                    <div className="absolute top-3 left-3 bg-canvas border border-hairline text-ink text-caption-sm font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.promoBadge}
                    </div>
                  )}

                  {/* Overlay Quick Pill CTA on Hover/Focus */}
                  {project.demoUrl && (
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-on-image text-caption-sm py-2 px-4 shadow-sm"
                      >
                        {ui.projects.demoBtn}
                      </a>
                    </div>
                  )}
                </div>

                {/* Metadata Column below image with strict 8px rhythm */}
                <div className="pt-4 flex flex-col flex-1 justify-between space-y-2">
                  {/* Swatch Dot Row */}
                  <div className="flex items-center space-x-2 py-1">
                    {swatchColors.map((color, sIdx) => {
                      const isSelected = activeIndex === sIdx;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => handleSwatchClick(project.id, sIdx)}
                          style={{ backgroundColor: color }}
                          className={`w-3 h-3 rounded-full transition-all ${
                            isSelected
                              ? 'ring-2 ring-ink ring-offset-2 ring-offset-canvas'
                              : 'hover:opacity-80'
                          }`}
                          aria-label={`Tech variant ${sIdx + 1}`}
                        />
                      );
                    })}
                    <span className="text-utility-xs text-mute uppercase ml-2">
                      {project.technologies.length} {ui.projects.techsCountSuffix}
                    </span>
                  </div>

                  {/* Title and Category */}
                  <div>
                    <h3 className="text-body-strong font-medium text-ink uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-caption-md text-mute font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-caption-md text-charcoal leading-relaxed py-1 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metric / Price Row */}
                  <div className="pt-1 pb-2 border-t border-hairline flex items-center justify-between">
                    <span className="text-body-strong text-sale font-semibold uppercase tracking-tight">
                      {project.metrics}
                    </span>
                    <span className="text-caption-sm text-mute uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Two-tone Action Buttons */}
                  <div className="flex items-center space-x-3 pt-2">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 text-caption-sm h-10 px-4"
                      >
                        <span>{ui.projects.demoBtn}</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                      </a>
                    ) : (
                      <span className="flex-1"></span>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-caption-sm h-10 px-4"
                        title={lang === 'en' ? 'View Repository on GitHub' : 'Ver Repositorio en GitHub'}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
