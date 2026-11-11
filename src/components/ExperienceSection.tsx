import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-16 py-12 sm:py-22 bg-[#05070a] bg-grid-pattern border-b border-[#151b2a] overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-12 right-[10%] w-80 h-80 rounded-full bg-[#00ff66]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-12 left-[10%] w-80 h-80 rounded-full bg-[#bd00ff]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="pb-6 sm:pb-8 border-b border-[#151b2a] space-y-2 sm:space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bd00ff]/10 border border-[#bd00ff]/30 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#bd00ff]">
            <Briefcase className="w-3.5 h-3.5 shrink-0" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-[1.65rem] sm:text-4xl font-bold text-white tracking-tight leading-snug">
            Career History &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#bd00ff]">
              Engineering Impact
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-base text-slate-400 max-w-2xl">
            Nearly 7 years of hands-on full-stack experience delivering enterprise commerce
            platforms at Mediasoft and 95+ global marketplace builds with ThemeMascot.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-7 sm:mt-10 relative space-y-6 sm:space-y-8">
          {/* Glowing Gradient Vertical Spine */}
          <div className="hidden md:block absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#00ff66] to-[#bd00ff] rounded-full opacity-75" />

          {EXPERIENCE_LIST.map((exp) => (
            <div key={exp.id} className="relative md:pl-16">
              {/* Glowing Node */}
              <div
                className={`hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#05070a] z-10 ${
                  exp.isCurrent
                    ? 'bg-[#00ff66] shadow-[0_0_16px_#00ff66]'
                    : 'bg-[#bd00ff] shadow-[0_0_14px_#bd00ff]'
                }`}
              />

              <article
                className={`relative rounded-2xl border bg-[#080a0f]/95 p-4.5 sm:p-8 overflow-hidden transition-all ${
                  exp.isCurrent
                    ? 'border-[#00f0ff]/35 shadow-[0_18px_50px_-20px_rgba(0,240,255,0.22)]'
                    : 'border-[#151b2a] hover:border-[#bd00ff]/40'
                }`}
              >
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${
                    exp.isCurrent
                      ? 'from-[#00f0ff] via-[#00ff66] to-[#bd00ff]'
                      : 'from-[#bd00ff] to-[#ff007a]'
                  }`}
                />

                {/* Role Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 sm:gap-4 pb-5 sm:pb-6 border-b border-[#151b2a]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
                    {exp.companyLogo && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 w-fit px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0d111a] border border-[#202b40] hover:border-[#00f0ff]/50 transition-colors"
                      >
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="h-6 sm:h-7 w-auto object-contain"
                        />
                      </a>
                    )}

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/35 text-[#00ff66] text-[11px] sm:text-xs font-mono font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
                            <span>Current Role</span>
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-400">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-[#00f0ff] hover:underline"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{exp.location}</span>
                        </span>
                        <span className="text-slate-500">· {exp.employmentType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#0d111a] border border-[#202b40] text-white text-[11px] sm:text-xs font-mono font-semibold w-fit shrink-0">
                    <Calendar
                      className={`w-3.5 h-3.5 ${
                        exp.isCurrent ? 'text-[#00ff66]' : 'text-[#bd00ff]'
                      }`}
                    />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-4.5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {exp.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          exp.isCurrent ? 'text-[#00ff66]' : 'text-[#bd00ff]'
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack Pills */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#151b2a] flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[10.5px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mr-1">
                    Tech Stack:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 sm:px-2.5 rounded-lg bg-[#0d111a] border border-[#202b40] text-[11px] sm:text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
