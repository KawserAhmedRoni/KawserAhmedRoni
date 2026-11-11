import { useState, useEffect } from 'react';
import { Download, Menu, X, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../data';

const NAV_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'brands', label: 'Brands' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 130;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05070a]/90 backdrop-blur-xl border-b border-[#151b2a] shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
            : 'bg-[#05070a]/65 backdrop-blur-md border-b border-[#151b2a]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Identity */}
          <button
            onClick={() => scrollTo('overview')}
            className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer group min-w-0"
          >
            <div className="p-[2px] rounded-lg bg-gradient-to-tr from-[#00f0ff] via-[#00ff66] to-[#bd00ff] shadow-[0_0_15px_rgba(0,240,255,0.28)] shrink-0">
              <img
                src="/images/rony.png"
                alt={PROFILE_DATA.name}
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-[6px] object-cover object-top bg-[#080a0f]"
              />
            </div>
            <div className="leading-tight min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[13px] sm:text-sm font-bold text-white tracking-tight group-hover:text-[#00f0ff] transition-colors truncate">
                  {PROFILE_DATA.name}
                </span>
                <span
                  className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66] shrink-0"
                  title="Open to Full-Time Remote Opportunities"
                />
              </div>
              <p className="text-[9.5px] sm:text-[11px] font-mono text-slate-400 truncate">
                SENIOR FULL-STACK WEB DEVELOPER
              </p>
            </div>
          </button>

          {/* Desktop Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-[#080a0f] border border-[#151b2a] p-1">
            {NAV_LINKS.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/35 shadow-[0_0_16px_-4px_rgba(0,240,255,0.45)]'
                      : 'text-slate-400 hover:text-white border border-transparent hover:bg-[#151b2a]/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href={PROFILE_DATA.cvUrl}
              download="Kawser_Ahmed_Roni_CV.pdf"
              aria-label="Download CV"
              className="inline-flex sm:hidden items-center gap-1 px-2.5 py-2 rounded-lg border border-[#202b40] bg-[#080a0f] text-[11px] font-mono font-semibold text-[#00f0ff]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <a
              href={PROFILE_DATA.cvUrl}
              download="Kawser_Ahmed_Roni_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#202b40] bg-[#080a0f] hover:border-[#00f0ff]/50 hover:text-[#00f0ff] text-xs font-mono font-semibold text-slate-200 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#00ff66] hover:brightness-110 text-xs font-mono font-bold text-[#05070a] shadow-[0_4px_20px_rgba(0,240,255,0.28)] transition-all cursor-pointer"
            >
              <span>Hire / Contact</span>
            </button>

            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg border border-[#202b40] bg-[#080a0f] text-slate-200 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 cursor-pointer"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-[#05070a]/80 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed top-16 inset-x-0 bottom-0 bg-[#05070a] border-t border-[#151b2a] p-4 sm:p-6 flex flex-col justify-between gap-6 overflow-y-auto">
            <nav className="space-y-2">
              {NAV_LINKS.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-mono font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-[#00f0ff]/12 border border-[#00f0ff]/40 text-[#00f0ff]'
                        : 'bg-[#080a0f] border border-[#151b2a] text-slate-300 hover:border-[#202b40]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="pt-5 border-t border-[#151b2a] space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PROFILE_DATA.cvUrl}
                  download="Kawser_Ahmed_Roni_CV.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00ff66] text-[#05070a] text-xs font-mono font-bold"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Download CV</span>
                </a>

                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl border border-[#00f0ff]/40 bg-[#00f0ff]/10 text-[#00f0ff] text-xs font-mono font-bold cursor-pointer"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Hire / Contact</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg border border-[#151b2a] bg-[#080a0f] text-slate-200 hover:border-[#00f0ff]/40 min-w-0"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                  <span className="truncate">Email</span>
                </a>
                <a
                  href={`tel:${PROFILE_DATA.phone}`}
                  className="flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg border border-[#151b2a] bg-[#080a0f] text-slate-200 hover:border-[#00ff66]/40 min-w-0"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
                  <span className="truncate">{PROFILE_DATA.phone}</span>
                </a>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg border border-[#151b2a] bg-[#080a0f] text-slate-200 hover:border-[#00f0ff]/40 min-w-0"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                  <span className="truncate">LinkedIn</span>
                </a>
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg border border-[#151b2a] bg-[#080a0f] text-slate-200 hover:border-[#bd00ff]/40 min-w-0"
                >
                  <Github className="w-3.5 h-3.5 text-[#bd00ff] shrink-0" />
                  <span className="truncate">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
