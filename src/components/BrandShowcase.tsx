import { ExternalLink, Building2, ArrowUpRight } from 'lucide-react';
import {
  PROFILE_DATA,
  MEDIASOFT_ECOM_PROJECTS,
  MEDIASOFT_ECOSYSTEM_BRANDS,
} from '../data';

export default function BrandShowcase() {
  const brandedEcom = MEDIASOFT_ECOM_PROJECTS.filter((p) => Boolean(p.logo));

  return (
    <section
      id="brands"
      className="relative scroll-mt-16 py-12 sm:py-22 bg-[#05070a] border-b border-[#151b2a] overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#00f0ff]/8 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#bd00ff]/8 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        {/* Featured Mediasoft Executive Card */}
        <div className="relative rounded-2xl bg-[#080a0f]/95 border border-[#151b2a] p-4 sm:p-8 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#00ff66] to-[#bd00ff]" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/25 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00f0ff]">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>Current Company &amp; Brand Footprint</span>
              </div>
              <h2 className="text-[1.4rem] sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Enterprise E-Commerce,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00ff66]">
                  CloudPOS &amp; Pharmacy
                </span>{' '}
                Systems
              </h2>
              <p className="text-[13.5px] sm:text-base text-slate-400 leading-relaxed">
                At <strong className="text-white">Mediasoft Data Systems Limited</strong>,
                architecting production storefronts, Capacitor Android apps, Electron desktop POS
                systems, and scalable Linux/NGINX deployments for Bangladesh&apos;s leading retail
                brands.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href={PROFILE_DATA.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-[#0d111a] border border-[#202b40] hover:border-[#00f0ff]/50 hover:shadow-[0_0_24px_-6px_rgba(0,240,255,0.3)] transition-all"
                title="Visit Mediasoft Data Systems Limited"
              >
                <img
                  src={PROFILE_DATA.companyLogoWhite}
                  alt="Mediasoft Data Systems Limited"
                  className="h-6 sm:h-8 w-auto object-contain"
                />
                <ExternalLink className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
              </a>

              <div className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-100/95 border border-white/15 shadow-sm flex items-center justify-center">
                <img
                  src={PROFILE_DATA.cloudPosLogo}
                  alt="CloudPOS by Mediasoft"
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live E-Commerce Client Logos */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00f0ff]">
                // SHIPPED LIVE STOREFRONTS
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                E-Commerce Brands Delivered at Mediasoft
              </h3>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00ff66] hover:text-[#00f0ff] transition-colors"
            >
              <span>Explore all {MEDIASOFT_ECOM_PROJECTS.length} live storefronts</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {brandedEcom.map((brand) => (
              <a
                key={brand.id}
                href={brand.url}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl bg-[#080a0f] border border-[#151b2a] hover:border-[#00f0ff]/45 p-3.5 sm:p-5 flex flex-col items-center justify-center gap-2.5 sm:gap-3 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(0,240,255,0.22)]"
              >
                {/* Top subtle gradient accent */}
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${brand.bannerGradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Contrast-safe Logo Badge inside Dark Card */}
                <div
                  className={`h-11 sm:h-12 w-full max-w-[175px] rounded-xl px-3 sm:px-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                    brand.darkLogoSurface
                      ? 'bg-[#0d111a] border border-[#202b40]'
                      : 'bg-slate-100/95 shadow-xs'
                  }`}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-7 sm:max-h-9 max-w-full sm:max-w-[130px] object-contain"
                  />
                </div>

                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-slate-400 group-hover:text-[#00f0ff] transition-colors truncate max-w-full">
                  <span className="truncate">{brand.domain}</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mediasoft Enterprise Retail & Pharmacy Ecosystem */}
        <div className="rounded-2xl bg-[#080a0f] border border-[#151b2a] p-4 sm:p-6 space-y-3.5 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Mediasoft Retail &amp; Pharmacy Ecosystem
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-[#bd00ff]">
              POS &amp; Pharmacy Software Solutions Domain
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {MEDIASOFT_ECOSYSTEM_BRANDS.map((eco) => (
              <div
                key={eco.name}
                className="rounded-xl bg-[#0d111a] border border-[#151b2a] hover:border-[#00f0ff]/40 p-1.5 sm:p-2 flex items-center justify-center h-13 sm:h-14 transition-all group"
                title={`${eco.name} — ${eco.sector}`}
              >
                <div className="w-full h-full rounded-lg bg-slate-100/95 px-2.5 flex items-center justify-center">
                  <img
                    src={eco.logo}
                    alt={eco.name}
                    className="max-h-6 sm:max-h-7 max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
