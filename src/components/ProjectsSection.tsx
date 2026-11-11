import { useState } from 'react';
import { FolderGit2, ExternalLink, Globe, Award, ArrowUpRight } from 'lucide-react';
import {
  MEDIASOFT_ECOM_PROJECTS,
  THEMEFOREST_PROJECTS,
  PROFILE_DATA,
} from '../data';
import { CyberAccent } from '../types';

type ProjectFilter = 'all' | 'mediasoft' | 'themeforest';

const ACCENT_CLASSES: Record<
  CyberAccent,
  { sector: string; borderHover: string; visit: string }
> = {
  cyan: {
    sector: 'text-[#00f0ff]',
    borderHover: 'hover:border-[#00f0ff]/50 hover:shadow-[0_14px_34px_-14px_rgba(0,240,255,0.28)]',
    visit: 'text-[#00f0ff]',
  },
  emerald: {
    sector: 'text-[#00ff66]',
    borderHover: 'hover:border-[#00ff66]/50 hover:shadow-[0_14px_34px_-14px_rgba(0,255,102,0.24)]',
    visit: 'text-[#00ff66]',
  },
  violet: {
    sector: 'text-[#bd00ff]',
    borderHover: 'hover:border-[#bd00ff]/50 hover:shadow-[0_14px_34px_-14px_rgba(189,0,255,0.28)]',
    visit: 'text-[#bd00ff]',
  },
  pink: {
    sector: 'text-[#ff007a]',
    borderHover: 'hover:border-[#ff007a]/50 hover:shadow-[0_14px_34px_-14px_rgba(255,0,122,0.26)]',
    visit: 'text-[#ff007a]',
  },
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectFilter>('all');

  const showMediasoft = activeTab === 'all' || activeTab === 'mediasoft';
  const showThemeForest = activeTab === 'all' || activeTab === 'themeforest';

  return (
    <section
      id="projects"
      className="relative scroll-mt-16 py-12 sm:py-22 bg-[#05070a] bg-grid-pattern-dense border-b border-[#151b2a] overflow-hidden"
    >
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-24 left-1/4 w-96 h-96 rounded-full bg-[#00f0ff]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#ff007a]/7 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-[#151b2a]">
          <div className="space-y-2 sm:space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/25 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00f0ff]">
              <FolderGit2 className="w-3.5 h-3.5 shrink-0" />
              <span>Featured Production Portfolio</span>
            </div>
            <h2 className="text-[1.65rem] sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Live E-Commerce &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#bd00ff]">
                Marketplace Work
              </span>
            </h2>
            <p className="text-[13.5px] sm:text-base text-slate-400 max-w-2xl">
              Production retail storefronts engineered at Mediasoft alongside featured commercial
              templates from 95+ global ThemeForest builds.
            </p>
          </div>

          {/* Filter Tabs (1 crisp row on mobile, exact desktop style) */}
          <div className="flex sm:inline-flex items-center gap-1 sm:gap-1.5 bg-[#080a0f] p-1 sm:p-1.5 rounded-xl border border-[#151b2a] w-full sm:w-fit">
            {[
              { id: 'all', mobile: 'All Work', desktop: 'All Work' },
              {
                id: 'mediasoft',
                mobile: `Mediasoft (${MEDIASOFT_ECOM_PROJECTS.length})`,
                desktop: `Mediasoft (${MEDIASOFT_ECOM_PROJECTS.length})`,
              },
              {
                id: 'themeforest',
                mobile: 'ThemeForest',
                desktop: 'ThemeForest (7 / 95+)',
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProjectFilter)}
                className={`flex-auto sm:flex-none px-2 py-2 sm:px-3.5 sm:py-1.5 rounded-lg text-[10.5px] sm:text-xs font-mono font-semibold text-center whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#00f0ff] text-[#05070a] shadow-[0_0_18px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-[#151b2a]/60'
                }`}
              >
                <span className="sm:hidden">{tab.mobile}</span>
                <span className="hidden sm:inline">{tab.desktop}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. Mediasoft Live E-Commerce Projects */}
        {showMediasoft && (
          <div className="mt-7 sm:mt-10 space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="px-2.5 py-1.5 sm:px-3 rounded-lg bg-[#0d111a] border border-[#202b40] shrink-0">
                  <img
                    src={PROFILE_DATA.companyLogoWhite}
                    alt="Mediasoft"
                    className="h-4.5 sm:h-5 w-auto object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white leading-snug">
                  Live E-Commerce Platforms (Mediasoft Work)
                </h3>
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] text-[11px] sm:text-xs font-mono font-semibold w-fit">
                {MEDIASOFT_ECOM_PROJECTS.length} Live Production Storefronts
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
              {MEDIASOFT_ECOM_PROJECTS.map((project) => {
                const style = ACCENT_CLASSES[project.accent];
                return (
                  <a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group rounded-xl sm:rounded-2xl border border-[#151b2a] bg-[#080a0f] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${style.borderHover}`}
                  >
                    <div>
                      {/* Atmospheric Dark Gradient Header Shape */}
                      <div
                        className={`h-12 sm:h-16 bg-gradient-to-br ${project.bannerGradient} px-3 sm:px-4 pt-2.5 sm:pt-3 flex items-start justify-between border-b border-[#151b2a]`}
                      >
                        <div className="flex items-center gap-1 sm:gap-1.5 pt-1">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00f0ff]/60" />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ff66]/50" />
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#bd00ff]/50" />
                        </div>
                        <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-[#05070a]/75 border border-white/10 text-[9px] sm:text-[10px] font-mono text-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                          <span>LIVE</span>
                        </span>
                      </div>

                      {/* Centered Logo Plate */}
                      <div className="px-2.5 sm:px-5 -mt-5 sm:-mt-6">
                        <div
                          className={`h-11 sm:h-14 rounded-lg sm:rounded-xl border px-2.5 sm:px-4 flex items-center justify-center shadow-lg ${
                            project.logo && !project.darkLogoSurface
                              ? 'bg-slate-100/95 border-white/20'
                              : 'bg-[#0d111a] border-[#202b40]'
                          }`}
                        >
                          {project.logo ? (
                            <img
                              src={project.logo}
                              alt={project.name}
                              className="max-h-7 sm:max-h-9 max-w-full sm:max-w-[135px] object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                          ) : (
                            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white uppercase text-center truncate">
                              {project.name}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-3 sm:p-5 pt-2.5 sm:pt-4 space-y-0.5 sm:space-y-1">
                        <span className={`block text-[9.5px] sm:text-[11px] font-mono font-semibold truncate ${style.sector}`}>
                          {project.sector}
                        </span>
                        <h4 className="text-[13px] sm:text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors truncate">
                          {project.name}
                        </h4>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-3 py-2.5 sm:px-5 sm:py-3 bg-[#0d111a]/80 border-t border-[#151b2a] flex items-center justify-between gap-1.5 text-[10px] sm:text-xs font-mono">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 text-slate-400 truncate min-w-0">
                        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </span>
                      <span className={`inline-flex items-center gap-0.5 sm:gap-1 font-semibold shrink-0 ${style.visit}`}>
                        <span>Visit</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. ThemeForest / KodeSolution Portfolio */}
        {showThemeForest && (
          <div className="mt-10 sm:mt-14 space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-semibold text-[#bd00ff]">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>KodeSolution (ThemeMascot Portfolio)</span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white leading-snug">
                  Featured ThemeForest Commercial Templates (7 Highlighted of 95+)
                </h3>
              </div>

              <a
                href={PROFILE_DATA.themeForestUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-lg bg-[#0d111a] border border-[#202b40] hover:border-[#00f0ff]/50 text-[11px] sm:text-xs font-mono font-semibold text-white hover:text-[#00f0ff] w-full sm:w-fit transition-all"
              >
                <span>View 95+ Templates on ThemeForest</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
              {THEMEFOREST_PROJECTS.map((item, idx) => {
                const style = ACCENT_CLASSES[item.accent];
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group rounded-2xl border border-[#151b2a] bg-[#080a0f] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${style.borderHover}`}
                  >
                    <div>
                      <div className={`h-[3px] bg-gradient-to-r ${item.accentGradient}`} />

                      <div className="px-4 pt-3.5 sm:px-5 sm:pt-4 flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          TF-0{idx + 1}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full bg-[#0d111a] border border-[#202b40] text-[10px] font-mono font-semibold truncate ${style.sector}`}
                        >
                          {item.category}
                        </span>
                      </div>

                      <div className="p-4 pt-2.5 sm:p-5 sm:pt-3 space-y-3 sm:space-y-3.5">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                          {item.name}
                        </h4>

                        <div className="flex flex-wrap gap-1.5">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-2.5 py-0.5 rounded-md bg-[#0d111a] border border-[#151b2a] text-[10.5px] sm:text-[11px] font-mono text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`px-4 py-2.5 sm:px-5 sm:py-3 bg-[#0d111a]/80 border-t border-[#151b2a] flex items-center justify-between text-xs font-mono font-semibold ${style.visit}`}
                    >
                      <span>Open Live Preview</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                );
              })}

              {/* 95+ Spotlight Gradient Card */}
              <a
                href={PROFILE_DATA.themeForestUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl bg-gradient-to-br from-[#00f0ff]/15 via-[#bd00ff]/15 to-[#00ff66]/15 border border-[#00f0ff]/40 hover:border-[#00ff66]/70 p-5 sm:p-6 flex flex-col justify-between gap-4 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(0,240,255,0.3)]"
              >
                <div className="space-y-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#05070a]/75 border border-[#00f0ff]/30 text-[10px] font-mono font-bold uppercase tracking-wider text-[#00f0ff]">
                    Envato Elite Work
                  </span>
                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    95+ Additional Projects
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Explore the full ThemeMascot catalog across React, Next.js, Angular, Vue.js,
                    and responsive Sass/BEM templates.
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00ff66] pt-3 border-t border-white/10">
                  <span>Browse ThemeForest Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
