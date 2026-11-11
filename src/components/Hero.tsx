import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Facebook,
  ArrowRight,
  User,
  Layers,
  Share2,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE_DATA, KEY_HIGHLIGHTS } from '../data';

type CockpitTab = 'profile' | 'stack' | 'connect';

const HIGHLIGHT_STYLES = {
  cyan: {
    bar: 'from-[#00f0ff] to-[#00ff66]',
    label: 'text-[#00f0ff]',
    borderHover: 'hover:border-[#00f0ff]/45',
  },
  emerald: {
    bar: 'from-[#00ff66] to-[#00f0ff]',
    label: 'text-[#00ff66]',
    borderHover: 'hover:border-[#00ff66]/45',
  },
  violet: {
    bar: 'from-[#bd00ff] to-[#00f0ff]',
    label: 'text-[#bd00ff]',
    borderHover: 'hover:border-[#bd00ff]/45',
  },
  pink: {
    bar: 'from-[#ff007a] to-[#bd00ff]',
    label: 'text-[#ff007a]',
    borderHover: 'hover:border-[#ff007a]/45',
  },
} as const;

export default function Hero() {
  const [activeTab, setActiveTab] = useState<CockpitTab>('profile');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="overview"
      className="relative pt-22 pb-12 sm:pt-30 sm:pb-22 bg-[#05070a] bg-grid-pattern border-b border-[#151b2a] overflow-hidden"
    >
      {/* Signature Gradient Ambient Shapes */}
      <div className="absolute -top-20 left-[12%] w-96 h-96 rounded-full bg-[#00f0ff]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-[8%] w-[26rem] h-[26rem] rounded-full bg-[#bd00ff]/12 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[32rem] h-72 rounded-full bg-[#00ff66]/7 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Developer Identity & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Status Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/25 text-[#00f0ff] text-[10px] sm:text-[11px] font-mono font-semibold tracking-wide sm:tracking-wider uppercase max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66] animate-pulse shrink-0" />
              <span className="leading-snug">
                Open to Full-Time Remote · Night Shift Ready (7 PM – 2 AM BD)
              </span>
            </div>

            {/* Name, Gradient Headline & Summary */}
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-[1.95rem] sm:text-5xl lg:text-[3.55rem] font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
                {PROFILE_DATA.name}
                <span className="block mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#bd00ff] text-glow-blue text-[1.25rem] sm:text-4xl lg:text-[2.35rem]">
                  {PROFILE_DATA.role}
                </span>
              </h1>

              <p className="text-[13.5px] sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {PROFILE_DATA.summary}
              </p>
            </div>

            {/* Primary Tech Chips */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                'Next.js',
                'React + Vite',
                'Laravel',
                'Node.js',
                'Capacitor (Android)',
                'Electron (Desktop)',
                'MySQL / PostgreSQL',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 sm:px-3 rounded-lg bg-[#0d111a] border border-[#151b2a] hover:border-[#00f0ff]/45 text-[11px] sm:text-xs font-mono text-slate-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary CTA Row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
              <button
                onClick={scrollToContact}
                className="col-span-2 sm:w-auto group inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#00ff66] hover:brightness-110 text-[#05070a] text-xs sm:text-sm font-mono font-bold shadow-[0_6px_26px_rgba(0,240,255,0.28)] transition-all cursor-pointer"
              >
                <span>Hire / Contact</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={PROFILE_DATA.cvUrl}
                download="Kawser_Ahmed_Roni_CV.pdf"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-3 sm:px-5 sm:py-3.5 rounded-lg bg-[#080a0f] hover:bg-[#0d111a] border border-[#202b40] hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff] text-[11.5px] sm:text-sm font-mono font-semibold transition-all"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00f0ff] shrink-0" />
                <span className="truncate">Download CV</span>
              </a>

              <a
                href={PROFILE_DATA.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3 sm:px-4 sm:py-3.5 rounded-lg bg-[#080a0f] hover:bg-[#0d111a] border border-[#151b2a] hover:border-[#bd00ff]/50 text-[11.5px] sm:text-sm font-mono font-semibold text-slate-300 hover:text-white transition-all"
              >
                <span>Mediasoft</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#bd00ff] shrink-0" />
              </a>
            </div>

            {/* Quick Recruiter Contact Bar */}
            <div className="pt-4 sm:pt-5 border-t border-[#151b2a] flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-[11px] sm:text-xs font-mono text-slate-400">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#00f0ff] transition-colors max-w-full min-w-0"
              >
                <Mail className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                <span className="truncate">{PROFILE_DATA.email}</span>
              </a>
              <a
                href={`tel:${PROFILE_DATA.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-[#00ff66] transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
                <span>{PROFILE_DATA.phone}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#bd00ff] shrink-0" />
                <span>{PROFILE_DATA.location}</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dark Recruiter Cockpit */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto">
              {/* Outer Gradient Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00f0ff]/20 via-[#bd00ff]/15 to-[#00ff66]/20 blur-2xl pointer-events-none" />

              <div className="relative rounded-2xl bg-[#080a0f] border border-[#151b2a] overflow-hidden shadow-[0_24px_70px_-15px_rgba(0,0,0,0.9)]">
                {/* Tabbed Control Header */}
                <div className="bg-[#0d111a] border-b border-[#151b2a] px-2.5 sm:px-3.5 py-2.5 flex items-center justify-between gap-2">
                  <div className="grid grid-cols-3 sm:flex items-center gap-1 sm:gap-1.5 font-mono text-[10px] w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setActiveTab('profile')}
                      className={`px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === 'profile'
                          ? 'bg-[#00f0ff]/12 border border-[#00f0ff]/40 text-white font-semibold'
                          : 'text-slate-400 hover:text-white border border-transparent'
                      }`}
                    >
                      <User className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                      <span>PROFILE</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('stack')}
                      className={`px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === 'stack'
                          ? 'bg-[#00ff66]/12 border border-[#00ff66]/40 text-white font-semibold'
                          : 'text-slate-400 hover:text-white border border-transparent'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
                      <span>STACK</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('connect')}
                      className={`px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === 'connect'
                          ? 'bg-[#bd00ff]/12 border border-[#bd00ff]/40 text-white font-semibold'
                          : 'text-slate-400 hover:text-white border border-transparent'
                      }`}
                    >
                      <Share2 className="w-3.5 h-3.5 text-[#bd00ff] shrink-0" />
                      <span>CONNECT</span>
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        activeTab === 'profile'
                          ? 'bg-[#00f0ff]'
                          : activeTab === 'stack'
                            ? 'bg-[#00ff66]'
                            : 'bg-[#bd00ff]'
                      }`}
                    />
                    <span className="font-mono text-[9px] font-bold tracking-wider text-slate-300 uppercase">
                      {activeTab === 'profile'
                        ? 'READY_TO_HIRE'
                        : activeTab === 'stack'
                          ? 'FULL_STACK'
                          : 'DIRECT_LINKS'}
                    </span>
                  </div>
                </div>

                {/* Cockpit Body */}
                <div className="p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    {activeTab === 'profile' && (
                      <motion.div
                        key="profile-view"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-4"
                      >
                        {/* Dark Illuminated Studio Portrait */}
                        <div className="relative aspect-[4/4.3] w-full rounded-xl border border-[#202b40] bg-[#05070a] overflow-hidden">
                          {/* Gradient spotlight behind cutout */}
                          <div className="absolute inset-0 bg-grid-pattern opacity-45 pointer-events-none" />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#00f0ff]/18 blur-3xl pointer-events-none" />
                          <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#bd00ff]/20 blur-3xl pointer-events-none" />

                          {/* Corner HUD brackets */}
                          <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff]/60 z-10 pointer-events-none" />
                          <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#00ff66]/60 z-10 pointer-events-none" />
                          <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#bd00ff]/60 z-10 pointer-events-none" />
                          <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff]/60 z-10 pointer-events-none" />

                          <img
                            src="/images/formal-dark.png"
                            alt="Kawser Ahmed Roni — Senior Full-Stack Web Developer"
                            className="relative z-[1] w-full h-full object-cover object-top"
                          />
                        </div>

                        {/* Current Employer Dark Footer */}
                        <div className="rounded-xl bg-[#0d111a] border border-[#151b2a] p-3 sm:p-3.5 flex items-center justify-between gap-2.5 sm:gap-3">
                          <div className="min-w-0">
                            <p className="text-[10px] font-mono uppercase tracking-wider text-[#00ff66]">
                              Current Role · 2022–Present
                            </p>
                            <p className="text-xs font-bold text-white truncate mt-0.5">
                              {PROFILE_DATA.companyName}
                            </p>
                          </div>
                          <a
                            href={PROFILE_DATA.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 px-2.5 py-1.5 sm:px-3 rounded-lg bg-[#05070a] border border-[#202b40] hover:border-[#00f0ff]/50 transition-colors"
                            title="Visit Mediasoft Data Systems Limited"
                          >
                            <img
                              src={PROFILE_DATA.companyLogoWhite}
                              alt="Mediasoft Data Systems Limited"
                              className="h-4 sm:h-5 w-auto object-contain"
                            />
                          </a>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'stack' && (
                      <motion.div
                        key="stack-view"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-3.5 font-mono"
                      >
                        <div className="rounded-xl bg-[#0d111a] border border-[#151b2a] p-3 sm:p-4 space-y-2.5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#00f0ff]">
                            01 // Multi-Platform Core
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                            {[
                              { k: 'Web SSR/SPA', v: 'Next.js · React' },
                              { k: 'Backends', v: 'Laravel · Node.js' },
                              { k: 'Mobile App', v: 'Capacitor Android' },
                              { k: 'Desktop App', v: 'Electron Suite' },
                            ].map((row) => (
                              <div
                                key={row.k}
                                className="p-2 sm:p-2.5 rounded-lg bg-[#05070a] border border-[#151b2a] min-w-0"
                              >
                                <span className="block text-[9.5px] sm:text-[10px] text-slate-500 truncate">
                                  {row.k}
                                </span>
                                <span className="font-semibold text-white block truncate">
                                  {row.v}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl bg-[#0d111a] border border-[#151b2a] p-4 space-y-2">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#00ff66]">
                            02 // Databases &amp; Infra
                          </p>
                          <div className="flex flex-wrap gap-1.5 text-[11px]">
                            {['MySQL', 'PostgreSQL', 'MongoDB', 'Linux', 'NGINX', 'CI/CD'].map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 rounded-md bg-[#05070a] border border-[#202b40] text-slate-200"
                                >
                                  {tag}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        <div className="rounded-xl bg-[#00ff66]/8 border border-[#00ff66]/25 p-3.5 space-y-1.5">
                          <div className="flex items-center gap-2 text-[11px] font-bold text-[#00ff66]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>AVAILABILITY VERIFIED</span>
                          </div>
                          {PROFILE_DATA.availability.map((line) => (
                            <div
                              key={line}
                              className="flex items-center gap-2 text-xs text-slate-200 font-sans"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
                              <span>{line}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'connect' && (
                      <motion.div
                        key="connect-view"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-4 font-mono"
                      >
                        <div className="rounded-xl bg-[#0d111a] border border-[#bd00ff]/30 p-3.5 text-center space-y-1">
                          <p className="text-[10px] uppercase tracking-widest text-[#bd00ff]">
                            Direct Developer Channels
                          </p>
                          <p className="text-xs font-sans text-slate-300">
                            Reach out for remote roles, architecture, or project collaborations.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href={PROFILE_DATA.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group p-4 rounded-xl bg-[#0d111a] border border-[#151b2a] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 flex flex-col items-center text-center gap-2 transition-all"
                          >
                            <Github className="w-5 h-5 text-slate-300 group-hover:text-[#00f0ff]" />
                            <div>
                              <p className="text-[9px] text-slate-500 uppercase">Code Repo</p>
                              <p className="text-xs font-semibold text-white group-hover:text-[#00f0ff]">
                                GitHub
                              </p>
                            </div>
                          </a>

                          <a
                            href={PROFILE_DATA.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group p-4 rounded-xl bg-[#0d111a] border border-[#151b2a] hover:border-[#bd00ff]/50 hover:bg-[#bd00ff]/5 flex flex-col items-center text-center gap-2 transition-all"
                          >
                            <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-[#bd00ff]" />
                            <div>
                              <p className="text-[9px] text-slate-500 uppercase">Network</p>
                              <p className="text-xs font-semibold text-white group-hover:text-[#bd00ff]">
                                LinkedIn
                              </p>
                            </div>
                          </a>

                          <a
                            href={PROFILE_DATA.facebookUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group p-4 rounded-xl bg-[#0d111a] border border-[#151b2a] hover:border-[#00ff66]/50 hover:bg-[#00ff66]/5 flex flex-col items-center text-center gap-2 transition-all"
                          >
                            <Facebook className="w-5 h-5 text-slate-300 group-hover:text-[#00ff66]" />
                            <div>
                              <p className="text-[9px] text-slate-500 uppercase">Social</p>
                              <p className="text-xs font-semibold text-white group-hover:text-[#00ff66]">
                                Facebook
                              </p>
                            </div>
                          </a>

                          <a
                            href={`mailto:${PROFILE_DATA.email}`}
                            className="group p-4 rounded-xl bg-[#0d111a] border border-[#151b2a] hover:border-[#ff007a]/50 hover:bg-[#ff007a]/5 flex flex-col items-center text-center gap-2 transition-all"
                          >
                            <Mail className="w-5 h-5 text-slate-300 group-hover:text-[#ff007a]" />
                            <div>
                              <p className="text-[9px] text-slate-500 uppercase">Direct Mail</p>
                              <p className="text-xs font-semibold text-white group-hover:text-[#ff007a]">
                                Email
                              </p>
                            </div>
                          </a>
                        </div>

                        <a
                          href={`tel:${PROFILE_DATA.phone}`}
                          className="w-full py-2.5 rounded-lg bg-[#0d111a] border border-[#202b40] hover:border-[#00ff66]/50 text-xs text-center text-slate-200 hover:text-[#00ff66] flex items-center justify-center gap-2 transition-all"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#00ff66]" />
                          <span>Call / WhatsApp: {PROFILE_DATA.phone}</span>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4 Key Metrics Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {KEY_HIGHLIGHTS.map((item) => {
            const style = HIGHLIGHT_STYLES[item.accent];
            return (
              <div
                key={item.label}
                className={`relative rounded-xl bg-[#080a0f]/95 border border-[#151b2a] ${style.borderHover} p-3.5 sm:p-5 overflow-hidden transition-all`}
              >
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${style.bar}`} />
                <span className={`text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest ${style.label}`}>
                  {item.label}
                </span>
                <p className="mt-1 sm:mt-1.5 text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
