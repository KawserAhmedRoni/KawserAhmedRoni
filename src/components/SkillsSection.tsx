import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  Sparkles,
  Code2,
  Smartphone,
  Palette,
  Server,
  Database,
  Gauge,
  GitBranch,
} from 'lucide-react';
import { CORE_SKILL_GROUPS, ADDITIONAL_SKILLS } from '../data';
import { CyberAccent } from '../types';

type FilterTab = 'all' | 'frontend' | 'backend' | 'platform';

const ACCENT_MAP: Record<
  CyberAccent,
  {
    topBar: string;
    iconBox: string;
    hoverBorder: string;
    check: string;
  }
> = {
  cyan: {
    topBar: 'from-[#00f0ff] to-[#00ff66]',
    iconBox: 'bg-[#00f0ff]/10 border-[#00f0ff]/30 text-[#00f0ff]',
    hoverBorder: 'hover:border-[#00f0ff]/50 hover:shadow-[0_12px_32px_-12px_rgba(0,240,255,0.22)]',
    check: 'text-[#00f0ff]',
  },
  emerald: {
    topBar: 'from-[#00ff66] to-[#00f0ff]',
    iconBox: 'bg-[#00ff66]/10 border-[#00ff66]/30 text-[#00ff66]',
    hoverBorder: 'hover:border-[#00ff66]/50 hover:shadow-[0_12px_32px_-12px_rgba(0,255,102,0.2)]',
    check: 'text-[#00ff66]',
  },
  violet: {
    topBar: 'from-[#bd00ff] to-[#00f0ff]',
    iconBox: 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-[#bd00ff]',
    hoverBorder: 'hover:border-[#bd00ff]/50 hover:shadow-[0_12px_32px_-12px_rgba(189,0,255,0.22)]',
    check: 'text-[#bd00ff]',
  },
  pink: {
    topBar: 'from-[#ff007a] to-[#bd00ff]',
    iconBox: 'bg-[#ff007a]/10 border-[#ff007a]/30 text-[#ff007a]',
    hoverBorder: 'hover:border-[#ff007a]/50 hover:shadow-[0_12px_32px_-12px_rgba(255,0,122,0.22)]',
    check: 'text-[#ff007a]',
  },
};

const GROUP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  fullstack: Code2,
  'cross-platform': Smartphone,
  frontend: Palette,
  server: Server,
  databases: Database,
  architecture: Gauge,
  workflow: GitBranch,
};

export default function SkillsSection() {
  const [filter, setFilter] = useState<FilterTab>('all');

  const visibleGroups =
    filter === 'all'
      ? CORE_SKILL_GROUPS
      : CORE_SKILL_GROUPS.filter((g) => g.category === filter);

  return (
    <section
      id="skills"
      className="relative scroll-mt-16 py-12 sm:py-22 bg-[#05070a] bg-grid-pattern-dense border-b border-[#151b2a] overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-[#bd00ff]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#00f0ff]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-[#151b2a]">
          <div className="space-y-2 sm:space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/25 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00ff66]">
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>Technical Stack &amp; Core Skills</span>
            </div>
            <h2 className="text-[1.65rem] sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Full-Stack &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#bd00ff]">
                Cross-Platform Expertise
              </span>
            </h2>
            <p className="text-[13.5px] sm:text-base text-slate-400 max-w-2xl">
              Production-proven engineering stack spanning SSR web apps, RESTful backends, Android
              Capacitor builds, Electron desktop tools, databases, and Linux/NGINX servers.
            </p>
          </div>

          {/* Filter Tabs (2x2 clean grid on mobile, inline pill on desktop) */}
          <div className="grid grid-cols-2 sm:inline-flex gap-1.5 bg-[#080a0f] p-1.5 rounded-xl border border-[#151b2a] w-full sm:w-fit">
            {[
              { id: 'all', label: 'All Skills' },
              { id: 'frontend', label: 'Frontend & UI' },
              { id: 'backend', label: 'Backend & Infra' },
              { id: 'platform', label: 'Mobile & Workflow' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as FilterTab)}
                className={`px-3 py-2 sm:px-3.5 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-semibold text-center transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#00f0ff] text-[#05070a] shadow-[0_0_18px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-[#151b2a]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dark Bento Grid */}
        <div className="mt-7 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visibleGroups.map((group) => {
            const style = ACCENT_MAP[group.accent];
            const Icon = GROUP_ICONS[group.id] || Code2;

            return (
              <div
                key={group.id}
                className={`relative rounded-2xl border border-[#151b2a] bg-[#080a0f]/95 p-4.5 sm:p-6 overflow-hidden transition-all duration-200 ${style.hoverBorder} ${
                  filter === 'all' && group.spanWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${style.topBar}`}
                />

                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className={`p-2 sm:p-2.5 rounded-xl border ${style.iconBox} shrink-0`}>
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-lg font-bold text-white">{group.title}</h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-lg bg-[#0d111a] border border-[#202b40] text-[11px] sm:text-xs font-mono font-medium text-slate-200"
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${style.check} shrink-0`} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional & Domain Skills Gradient Banner */}
        <div className="mt-6 sm:mt-8 relative rounded-2xl bg-gradient-to-r from-[#080a0f] via-[#101626] to-[#080a0f] border border-[#202b40] p-4.5 sm:p-7 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#bd00ff] via-[#00f0ff] to-[#00ff66]" />

          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#00f0ff] mb-3.5 sm:mb-4">
            <Sparkles className="w-4 h-4 text-[#bd00ff] shrink-0" />
            <span>Additional Frameworks, E-Commerce CMS &amp; Domain Skills</span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {ADDITIONAL_SKILLS.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#05070a]/90 border border-[#202b40] hover:border-[#00f0ff]/45 text-[11.5px] sm:text-sm font-mono text-slate-200 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
