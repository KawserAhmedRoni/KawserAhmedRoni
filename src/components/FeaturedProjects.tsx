import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { Layout, Check, ExternalLink, RefreshCw, BarChart2, ShieldCheck } from 'lucide-react';

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'E-commerce' | 'WMS' | 'POS'>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative bg-cyber-dark overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyber-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyber-gray-900 pb-6" id="projects-header">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyber-blue text-xs font-mono">
              <Layout className="w-4 h-4 text-cyber-blue animate-pulse" />
              <span>[04] PRODUCTION CASE STUDIES & HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans sm:text-4xl">
              Enterprise Software Core
            </h2>
          </div>
          
          {/* Quick filter tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-cyber-gray-950 border border-cyber-gray-900 p-1.5 rounded-lg" id="projects-filter-bar">
            {(['All', 'E-commerce', 'WMS', 'POS'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-md text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-cyber-blue text-cyber-dark font-semibold shadow-[0_0_8px_rgba(0,240,255,0.2)]'
                    : 'text-gray-400 hover:text-white'
                }`}
                id={`filter-tab-${cat}`}
              >
                {cat === 'All' ? 'View All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="projects-card-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Accent color mapping depending on type
              const accentColor = 
                project.category === 'E-commerce' ? 'text-cyber-blue hover:border-cyber-blue/60' :
                project.category === 'WMS' ? 'text-cyber-emerald hover:border-cyber-emerald/60' : 'text-cyber-violet hover:border-cyber-violet/60';

              const indicatorDot = 
                project.category === 'E-commerce' ? 'bg-cyber-blue' :
                project.category === 'WMS' ? 'bg-cyber-emerald' : 'bg-cyber-violet';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={project.id}
                  className={`bg-cyber-gray-950 border border-cyber-gray-900 rounded-lg p-6 flex flex-col justify-between group hover:border-cyber-gray-700 hover:glow-border-blue transition-all duration-300`}
                  id={`project-card-${project.id}`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">[REF: {project.id.toUpperCase()}]</span>
                      <div className="flex items-center space-x-1.5 bg-cyber-gray-900 border border-cyber-gray-800 px-2.5 py-1 rounded-full">
                        <span className={`w-1.5 h-1.5 rounded-full ${indicatorDot} animate-pulse`} />
                        <span className="text-[9px] font-mono text-gray-300 uppercase tracking-wide">{project.category}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyber-blue transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs font-sans text-gray-400 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metrics Display */}
                    <div className="grid grid-cols-3 gap-2 bg-cyber-gray-900/60 border border-cyber-gray-900/80 p-3 rounded-lg my-3">
                      {project.metrics.map((metric, mi) => (
                        <div key={mi} className="text-center space-y-0.5 border-r border-cyber-gray-900 last:border-none">
                          <span className="text-[10px] font-mono text-gray-500 uppercase block truncate">{metric.label}</span>
                          <span className="text-sm font-bold text-white font-mono block">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono bg-cyber-gray-900 text-gray-400 px-2 py-0.5 border border-cyber-gray-850 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-6 border-t border-cyber-gray-900 mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="text-xs font-mono text-cyber-blue hover:text-white flex items-center space-x-1.5 transition-colors group/btn"
                      id={`view-metrics-${project.id}`}
                    >
                      <span>Review Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyber-blue transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                    <span className="text-[9px] font-mono text-gray-600">v1.2 // STABLE</span>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Case Study Full Expansion Modal Overlay */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-dark/85 backdrop-blur-md"
              id="case-study-modal-overlay"
              onClick={() => setSelectedCaseStudy(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-cyber-gray-950 border border-cyber-gray-800 rounded-lg p-5 sm:p-8 shadow-2xl relative scrollbar-thin"
                onClick={(e) => e.stopPropagation()}
                id="case-study-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white font-mono text-xs border border-cyber-gray-800 bg-cyber-gray-900/80 hover:bg-cyber-gray-800 px-2.5 py-1 rounded cursor-pointer"
                  id="close-case-study"
                >
                  ESC [x]
                </button>

                <div className="space-y-6">
                  {/* Category & Title */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-cyber-blue uppercase tracking-widest">
                      CASE STUDY // {selectedCaseStudy.category} PLATFORM
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white font-sans sm:text-3xl">
                      {selectedCaseStudy.title}
                    </h3>
                  </div>

                  {/* Core Metrics Highlight */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-cyber-gray-900 py-4">
                    {selectedCaseStudy.metrics.map((m, i) => (
                      <div key={i} className="space-y-1 bg-cyber-gray-900/40 p-3.5 border border-cyber-gray-900 rounded-md">
                        <span className="text-[10px] font-mono text-gray-500 uppercase block">{m.label}</span>
                        <span className="text-lg font-bold text-cyber-emerald font-mono block">{m.value}</span>
                        <p className="text-[10px] font-sans text-gray-400 font-light leading-snug">{m.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technical Highlights Checklist */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
                      <span>Production Implementation Highlights</span>
                    </h4>
                    
                    <ul className="space-y-2">
                      {selectedCaseStudy.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs font-sans text-gray-300 font-light">
                          <Check className="w-4 h-4 text-cyber-emerald mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack used tags */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Configured Stack Trace:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCaseStudy.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono bg-cyber-gray-900 border border-cyber-gray-800 text-cyber-blue px-2.5 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Close trigger action */}
                  <div className="pt-4 border-t border-cyber-gray-900 flex justify-end">
                    <button
                      onClick={() => setSelectedCaseStudy(null)}
                      className="bg-cyber-blue hover:brightness-110 text-cyber-dark font-mono font-semibold text-xs px-5 py-2.5 rounded shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all"
                    >
                      Acknowledge & Close
                    </button>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
