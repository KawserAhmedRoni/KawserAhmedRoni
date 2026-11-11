import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  Download,
  Send,
  Github,
  Linkedin,
  Facebook,
} from 'lucide-react';
import { PROFILE_DATA } from '../data';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [launchedMail, setLaunchedMail] = useState(false);

  const handleCopy = (type: 'email' | 'phone', value: string) => {
    navigator.clipboard?.writeText(value);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject.trim() || `Opportunity Inquiry from ${name.trim()}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${mailSubject}&body=${mailBody}`;
    setLaunchedMail(true);
    setTimeout(() => setLaunchedMail(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-16 py-12 sm:py-22 bg-[#05070a] bg-grid-pattern overflow-hidden"
    >
      {/* Signature Gradient Orbs */}
      <div className="absolute -top-24 left-[15%] w-96 h-96 rounded-full bg-[#00f0ff]/9 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full bg-[#bd00ff]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-[#151b2a] space-y-2 sm:space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/25 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00ff66]">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>Availability &amp; Direct Contact</span>
          </div>
          <h2 className="text-[1.65rem] sm:text-4xl font-bold text-white tracking-tight leading-snug">
            Ready to Discuss a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#bd00ff]">
              Role or Project
            </span>
          </h2>
          <p className="text-[13.5px] sm:text-base text-slate-400 max-w-2xl">
            Available immediately for full-time remote engineering positions, night-shift
            international collaboration, or senior full-stack development.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-7 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#080a0f]/95 border border-[#151b2a] p-4.5 sm:p-6 space-y-5 sm:space-y-6 overflow-hidden shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#bd00ff]" />

              {/* Identity */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#00f0ff] via-[#00ff66] to-[#bd00ff] shrink-0">
                  <img
                    src="/images/rony.png"
                    alt={PROFILE_DATA.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] object-cover object-top bg-[#05070a]"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white truncate">
                    {PROFILE_DATA.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono font-semibold text-[#00f0ff] truncate">
                    {PROFILE_DATA.role}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#bd00ff] shrink-0" />
                    <span>{PROFILE_DATA.location}</span>
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-xl bg-[#00ff66]/8 border border-[#00ff66]/25 p-3.5 sm:p-4 space-y-2 sm:space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-[#00ff66] uppercase tracking-wider">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Work Availability</span>
                </div>
                {PROFILE_DATA.availability.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Copyable Email & Phone */}
              <div className="space-y-2.5 sm:space-y-3 font-mono">
                <div className="flex items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-[#0d111a] border border-[#151b2a] hover:border-[#00f0ff]/40 transition-colors">
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="flex items-center gap-2 sm:gap-2.5 min-w-0 text-[11.5px] sm:text-sm text-slate-200 hover:text-[#00f0ff] truncate"
                  >
                    <Mail className="w-4 h-4 text-[#00f0ff] shrink-0" />
                    <span className="truncate">{PROFILE_DATA.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('email', PROFILE_DATA.email)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:py-1 rounded-lg bg-[#05070a] hover:border-[#00f0ff]/50 border border-[#202b40] text-[11px] font-semibold text-white shrink-0 cursor-pointer transition-colors"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                        <span className="text-[#00ff66]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-[#0d111a] border border-[#151b2a] hover:border-[#00ff66]/40 transition-colors">
                  <a
                    href={`tel:${PROFILE_DATA.phone}`}
                    className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-200 hover:text-[#00ff66]"
                  >
                    <Phone className="w-4 h-4 text-[#00ff66] shrink-0" />
                    <span>{PROFILE_DATA.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('phone', PROFILE_DATA.phone)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:py-1 rounded-lg bg-[#05070a] hover:border-[#00ff66]/50 border border-[#202b40] text-[11px] font-semibold text-white shrink-0 cursor-pointer transition-colors"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                        <span className="text-[#00ff66]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Badges (2x2 clean grid on mobile, inline on desktop) */}
              <div className="pt-1 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 font-mono">
                <a
                  href={PROFILE_DATA.cvUrl}
                  download="Kawser_Ahmed_Roni_CV.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-3.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#00ff66] hover:brightness-110 text-[#05070a] text-xs font-bold transition-all"
                >
                  <Download className="w-3.5 h-3.5 shrink-0" />
                  <span>Resume PDF</span>
                </a>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-2 rounded-lg border border-[#202b40] bg-[#0d111a] hover:border-[#00f0ff]/50 text-xs font-semibold text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-2 rounded-lg border border-[#202b40] bg-[#0d111a] hover:border-[#bd00ff]/50 text-xs font-semibold text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#bd00ff] shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE_DATA.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-2 rounded-lg border border-[#202b40] bg-[#0d111a] hover:border-[#ff007a]/50 text-xs font-semibold text-white transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#ff007a] shrink-0" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 relative rounded-2xl bg-[#080a0f]/95 border border-[#151b2a] p-4.5 sm:p-8 overflow-hidden shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#bd00ff] via-[#00f0ff] to-[#00ff66]" />

            <h3 className="text-lg sm:text-xl font-bold text-white">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 break-words">
              Opens a pre-filled email draft directly to{' '}
              <span className="font-mono text-[#00f0ff] break-all sm:break-normal">
                {PROFILE_DATA.email}
              </span>
              .
            </p>

            {launchedMail && (
              <div className="mt-4 p-3.5 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/30 text-xs sm:text-sm text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0" />
                <span>
                  Email draft opened. If your browser didn&apos;t launch a mail app, copy{' '}
                  <strong className="text-[#00f0ff]">{PROFILE_DATA.email}</strong> on the left.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono font-semibold text-slate-300 block"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Recruiter / Hiring Manager"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-[#202b40] bg-[#0d111a] focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff]/20 outline-none px-4 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono font-semibold text-slate-300 block"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="hiring@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#202b40] bg-[#0d111a] focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff]/20 outline-none px-4 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-mono font-semibold text-slate-300 block"
                >
                  Subject / Role
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Senior Full-Stack Developer — Remote Opportunity"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-[#202b40] bg-[#0d111a] focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff]/20 outline-none px-4 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono font-semibold text-slate-300 block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Share role details, tech stack, or interview schedule..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-[#202b40] bg-[#0d111a] focus:border-[#00f0ff] focus:ring-2 focus:ring-[#00f0ff]/20 outline-none px-4 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00ff66] hover:brightness-110 text-[#05070a] text-sm font-mono font-bold shadow-[0_6px_26px_rgba(0,240,255,0.28)] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email to Kawser</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#151b2a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="font-semibold text-white">
              © {new Date().getFullYear()} {PROFILE_DATA.name}
            </p>
            <p className="text-[11px] sm:text-xs">
              Senior Full-Stack Web Developer · {PROFILE_DATA.companyName} · {PROFILE_DATA.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 sm:gap-5">
            <a href="#overview" className="hover:text-[#00f0ff] transition-colors">
              Overview
            </a>
            <a href="#brands" className="hover:text-[#00f0ff] transition-colors">
              Brands
            </a>
            <a href="#skills" className="hover:text-[#00f0ff] transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#00f0ff] transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#00f0ff] transition-colors">
              Projects
            </a>
            <a
              href={PROFILE_DATA.cvUrl}
              download="Kawser_Ahmed_Roni_CV.pdf"
              className="text-[#00ff66] hover:text-[#00f0ff] font-semibold transition-colors"
            >
              Download CV
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
