import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-8 relative bg-cyber-gray-950/20 border-t border-cyber-gray-900 overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-emerald/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-cyber-gray-900 pb-6" id="timeline-header">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyber-emerald text-xs font-mono">
              <Briefcase className="w-4 h-4 text-cyber-emerald animate-pulse" />
              <span>[05] CAREER PROGRESSION TIMELINE</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans sm:text-4xl">
              Professional Journey
            </h2>
          </div>
          <p className="text-sm font-sans text-gray-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            A track record of technological excellence and stable leadership, highlighted by a core <strong className="text-cyber-emerald font-semibold">5-year tenure</strong> scaling enterprise systems at MediaSoft.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative max-w-4xl mx-auto space-y-12 animate-fade-in" id="experience-vertical-timeline">
          {/* Vertical axis line */}
          <div className="absolute left-4 sm:left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-emerald to-cyber-violet" />

          {EXPERIENCE_DATA.map((exp, index) => {
            const isMediaSoft = exp.isMediaSoft;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-10 sm:pl-16"
                id={`timeline-node-${exp.id}`}
              >
                {/* Timeline Anchor Node Icon */}
                <div 
                  className={`absolute left-4 sm:left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-cyber-gray-950 border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                    isMediaSoft 
                      ? 'border-cyber-emerald shadow-[0_0_12px_rgba(0,255,102,0.4)]' 
                      : 'border-cyber-gray-700'
                  }`}
                >
                  {isMediaSoft ? (
                    <Award className="w-4.5 h-4.5 text-cyber-emerald animate-pulse" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-gray-500" />
                  )}
                </div>

                {/* Timeline Content Card */}
                <div 
                  className={`relative p-6 sm:p-8 rounded-lg bg-cyber-gray-950/80 border transition-all duration-300 ${
                    isMediaSoft 
                      ? 'border-cyber-emerald/40 hover:border-cyber-emerald shadow-[0_4px_30px_rgba(0,255,102,0.03)]' 
                      : 'border-cyber-gray-900 hover:border-cyber-gray-800'
                  }`}
                >
                  {/* MediaSoft Highlight Overlay Badge */}
                  {isMediaSoft && (
                    <span className="absolute -top-3 left-6 sm:left-8 bg-cyber-emerald text-cyber-dark font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_2px_10px_rgba(0,255,102,0.25)]">
                      CORE TENURE CONTRIBUTOR
                    </span>
                  )}

                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyber-gray-900 pb-4 mb-4">
                    <div className="space-y-1">
                      <h3 className={`text-lg sm:text-xl font-bold font-sans ${isMediaSoft ? 'text-cyber-emerald text-glow-emerald' : 'text-white'}`}>
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 font-mono">
                        <span className="font-semibold text-gray-200">{exp.company}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-500" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Timeline Date Label */}
                    <div className="flex items-center space-x-1.5 bg-cyber-gray-900 border border-cyber-gray-850 px-3 py-1.5 rounded text-xs font-mono text-gray-300 w-fit self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-cyber-blue" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-gray-300 font-light leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full ${isMediaSoft ? 'bg-cyber-emerald' : 'bg-cyber-blue'} mt-2 shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Core focus metadata */}
                  <div className="pt-4 border-t border-cyber-gray-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center space-x-1.5 font-mono">
                      <span className="text-gray-500 uppercase tracking-wider">CORE FOCUS:</span>
                      <span className="text-cyber-blue font-medium">{exp.coreFocus}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-600 hidden sm:inline">REF_ID: [0x{index * 42}C]</span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
