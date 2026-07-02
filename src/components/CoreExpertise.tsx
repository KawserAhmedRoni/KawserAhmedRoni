import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import { 
  Cpu, Terminal, Sparkles, Code2, ShieldAlert,
  Braces, Layers, LayoutGrid, Paintbrush, Workflow,
  Database, Zap, Table, Server, Globe,
  Smartphone, Laptop, HardDrive, GitBranch, Box, Network
} from 'lucide-react';

const SKILL_ICONS: Record<string, React.ComponentType<any>> = {
  'JavaScript / TypeScript': Braces,
  'React / Next.js': Layers,
  'Ant Design (Antd)': LayoutGrid,
  'Tailwind CSS': Paintbrush,
  'Vue / Nuxt': Workflow,
  'Angular': Cpu,
  'Node.js / Express': Server,
  'PostgreSQL / SQL': Database,
  'Redis Caching': Zap,
  'Knex.js / Drizzle ORM': Table,
  'MongoDB': HardDrive,
  'REST / GraphQL': Globe,
  'React Native': Smartphone,
  'Electron': Laptop,
  'SQLite (Local-first)': HardDrive,
  'Microservices Architectures': GitBranch,
  'Docker Containers': Box,
  'WebSockets (Socket.io)': Network,
};

// Live production context dictionary for Kawser's interactive skills grid
const SKILL_USAGE_CONTEXTS: Record<string, { project: string; role: string; details: string; metrics: string }> = {
  'JavaScript / TypeScript': {
    project: 'Core Platform Refactoring',
    role: 'Principal Engineer',
    details: 'Drafted complete type-safety policies and monorepo structural designs for large POS updates, avoiding common runtime null-pointer references.',
    metrics: '0 critical runtime exceptions since adoption'
  },
  'React / Next.js': {
    project: 'ApexScale E-commerce',
    role: 'Tech Lead',
    details: 'Configured Next.js Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) to handle heavy product catalog updates without DB overloading.',
    metrics: 'Page load latency reduced to 400ms'
  },
  'Ant Design (Antd)': {
    project: 'MediaSoft ERP / WMS Admin',
    role: 'Lead UI Architect',
    details: 'Leveraged Ant Design components to generate highly interactive data spreadsheets, invoice calculators, and multi-tenant warehouse control displays.',
    metrics: '40% acceleration in feature delivery schedules'
  },
  'Tailwind CSS': {
    project: 'OmniPOS Shell',
    role: 'Lead UI/UX Engineer',
    details: 'Integrated Tailwind utility architecture within a containerized electron shell to support variable resolutions and tactile, responsive touch gestures.',
    metrics: 'Responsive consistency on 500+ POS screens'
  },
  'Vue / Nuxt': {
    project: 'B2B Client Dashboard',
    role: 'SaaS Architect',
    details: 'Built reactive logistics control panels with custom state modules to display delivery routing telemetry cleanly.',
    metrics: 'Real-time sync on client portals'
  },
  'Angular': {
    project: 'Legacy POS Migration',
    role: 'Senior Developer',
    details: 'Maintained and migrated client business billing systems, ensuring secure backwards-compatibility with physical ledger print logs.',
    metrics: 'Secure migration of 10k+ dynamic invoices'
  },
  'Node.js / Express': {
    project: 'MediaSoft Enterprise Core API',
    role: 'Backend Architect',
    details: 'Engineered an Express core pipeline operating with multi-threaded workers to stream massive PDF reports and manage offline terminal checkout sync buckets.',
    metrics: '100,000+ daily POS invoices processed'
  },
  'PostgreSQL / SQL': {
    project: 'LogiSync WMS Database',
    role: 'Database Specialist',
    details: 'Structured normalized relational schemas, created stored procedures for automated shelf slot allocation, and optimized dense transaction indices.',
    metrics: 'Query responses kept under 12ms under peak load'
  },
  'Redis Caching': {
    project: 'E-commerce API Gateway',
    role: 'Architect',
    details: 'Deployed Redis as a cluster-wide cache to handle session tokens, dynamic item locks, and product stock levels during high-traffic campaign drops.',
    metrics: '90% reduction in direct DB load counts'
  },
  'Knex.js / Drizzle ORM': {
    project: 'Microservices Framework',
    role: 'Lead Developer',
    details: 'Managed migration strategies across diverse client database profiles using Knex.js, delivering high type-safety and seamless schema updates.',
    metrics: 'zero-downtime database upgrades'
  },
  'MongoDB': {
    project: 'POS Cloud Mirroring',
    role: 'Full-Stack Developer',
    details: 'Implemented flexible document store mirroring patterns to back up dynamic receipt parameters and customized hardware profile states.',
    metrics: 'Reliable storage for non-structured device data'
  },
  'REST / GraphQL': {
    project: 'SaaS Gateway Integration',
    role: 'Core Architect',
    details: 'Maintained fully cataloged GraphQL gateways and REST API pipelines with automatic OpenAPI swagger generation to facilitate partner checkouts.',
    metrics: '99.9% success on developer integrations'
  },
  'React Native': {
    project: 'Wireless Handheld Scanner App',
    role: 'Mobile Developer',
    details: 'Pioneered custom serial port listener hooks in React Native to pull hardware scanner lasers and stream counts to LogiSync WMS.',
    metrics: 'picking speed increased by 35%'
  },
  'Electron': {
    project: 'OmniPOS Desktop Shell',
    role: 'Desktop Developer',
    details: 'Created cross-platform node integrations inside Electron wrappers to bind native scale weight readings and physical register drawers.',
    metrics: '100% offline checkout hardware compliance'
  },
  'SQLite (Local-first)': {
    project: 'Local-first Billing Engine',
    role: 'Lead Architect',
    details: 'Configured local SQLite instances inside Electron containers to serve instant product catalogs during internet dropouts.',
    metrics: 'continuous sub-80ms billing runtime'
  },
  'Microservices Architectures': {
    project: 'MediaSoft Product Suite',
    role: 'Tech Lead',
    details: 'Decoupled monolithic e-commerce cores into isolated authentication, transactional, inventory, and ledger sync services.',
    metrics: 'system failures isolated with zero cascading'
  },
  'Docker Containers': {
    project: 'Production Deployment Systems',
    role: 'DevOps Lead',
    details: 'Packaged Node services and web instances into optimized multi-stage Docker profiles, minimizing cold start container spinup durations.',
    metrics: '3x faster cluster deployment speed'
  },
  'WebSockets (Socket.io)': {
    project: 'Real-time Inventory Monitor',
    role: 'Backend Architect',
    details: 'Broadcasted live inventory pick states from scanners directly onto WMS floor tracking visual dashboards, eliminating duplication.',
    metrics: 'under 10ms network telemetry propagation'
  }
};

export default function CoreExpertise() {
  const [selectedSkill, setSelectedSkill] = useState<string>('React / Next.js');

  const selectedContext = SKILL_USAGE_CONTEXTS[selectedSkill] || {
    project: 'Enterprise Development',
    role: 'Senior Architect',
    details: 'Extensive application of JavaScript structures to secure scalable digital outcomes.',
    metrics: 'Proven high quality production standard'
  };

  const SelectedIcon = SKILL_ICONS[selectedSkill] || Code2;

  return (
    <section id="expertise" className="py-20 px-4 sm:px-8 relative bg-cyber-dark overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyber-emerald/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyber-gray-900 pb-6" id="expertise-header">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyber-emerald text-xs font-mono">
              <Cpu className="w-4 h-4 text-cyber-emerald animate-pulse" />
              <span>[02] TECHNICAL ARCHITECTURE MATRIX</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans sm:text-4xl">
              Core Expertise & Stack
            </h2>
          </div>
          <p className="text-sm font-sans text-gray-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            A comprehensive overview of Kawser's technical capabilities. <strong className="text-cyber-blue font-mono font-normal">Click any skill item</strong> to view its direct production deployment record and metrics.
          </p>
        </div>

        {/* Main Grid: Skills Selector + Interactive Monitor Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="skills-matrix">
          
          {/* Left Column: Logically Grouped Skills Grid */}
          <div className="lg:col-span-8 space-y-8" id="skills-categories-wrapper">
            {SKILL_CATEGORIES.map((cat, groupIdx) => (
              <div key={cat.category} className="space-y-3" id={`skill-group-${groupIdx}`}>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xs font-mono text-cyber-emerald">0{groupIdx + 1}.</span>
                  <h4 className="text-sm font-mono font-semibold text-white uppercase tracking-wider">
                    {cat.category}
                  </h4>
                  <span className="flex-1 border-b border-dashed border-cyber-gray-800 ml-2" />
                </div>
                <p className="text-xs font-sans text-gray-500 font-light mb-4">{cat.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill === skill.name;
                    // Emphasized items (Next.js, Node.js, Ant Design)
                    const isEmphasized = ['React / Next.js', 'Node.js / Express', 'Ant Design (Antd)'].includes(skill.name);
                    const IconComponent = SKILL_ICONS[skill.name] || Code2;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill.name)}
                        className={`group relative text-left p-3.5 rounded border transition-all duration-300 ${
                          isSelected
                            ? 'bg-cyber-blue/10 border-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.1)] text-white'
                            : isEmphasized
                            ? 'bg-cyber-gray-950/80 border-cyber-emerald/30 hover:border-cyber-emerald text-white'
                            : 'bg-cyber-gray-950/40 border-cyber-gray-850 hover:border-cyber-gray-700 text-gray-300'
                        }`}
                        id={`skill-card-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        {/* Emphasized accent badge */}
                        {isEmphasized && !isSelected && (
                          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
                          </span>
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2.5">
                            <div className={`p-1.5 rounded transition-all ${
                              isSelected 
                                ? 'bg-cyber-blue/15 text-cyber-blue' 
                                : isEmphasized 
                                ? 'bg-cyber-emerald/15 text-cyber-emerald' 
                                : 'bg-cyber-gray-900 text-gray-400 group-hover:bg-cyber-gray-850 group-hover:text-white'
                            }`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-mono font-semibold truncate block flex-1">{skill.name}</span>
                          </div>
                          
                          {/* Skill meter slider */}
                          <div className="w-full h-1.5 bg-cyber-gray-900 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                isSelected ? 'bg-cyber-blue' : isEmphasized ? 'bg-cyber-emerald' : 'bg-cyber-gray-700'
                              }`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                            <span>Level: {skill.level}%</span>
                            <span>{skill.years} Yrs Exp</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Live Production Monitor Console */}
          <div className="lg:col-span-4 sticky top-24" id="skill-monitor-console">
            <div className="bg-cyber-gray-950 border border-cyber-gray-800 rounded-lg overflow-hidden shadow-xl">
              
              {/* Header */}
              <div className="bg-cyber-gray-900 border-b border-cyber-gray-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyber-blue animate-pulse" />
                  <span className="text-[10px] font-mono text-white uppercase tracking-wider">TELEMETRY_MONITOR_v1.0</span>
                </div>
                <span className="text-[9px] font-mono bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 px-1.5 py-0.5 rounded uppercase">
                  ACTIVE
                </span>
              </div>

              {/* Console Body */}
              <div className="p-5 space-y-4" id="console-body">
                
                {/* Active Skill Indicator */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block">Selected Stack Layer:</span>
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                      <SelectedIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-mono font-bold text-white uppercase text-glow-blue">
                      {selectedSkill}
                    </span>
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-4 border-y border-cyber-gray-900 py-3.5 my-3.5">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Project Context:</span>
                    <span className="text-xs font-sans font-medium text-white block truncate">
                      {selectedContext.project}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Engineering Role:</span>
                    <span className="text-xs font-sans font-medium text-white block truncate">
                      {selectedContext.role}
                    </span>
                  </div>
                </div>

                {/* Detail text */}
                <div className="space-y-1 bg-cyber-gray-900/50 border border-cyber-gray-900 p-3 rounded">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block">Production Implementation:</span>
                  <p className="text-xs font-sans font-light text-gray-300 leading-relaxed">
                    {selectedContext.details}
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block">Performance Benchmark:</span>
                  <div className="flex items-center space-x-1.5 text-cyber-emerald">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono font-semibold uppercase">
                      {selectedContext.metrics}
                    </span>
                  </div>
                </div>

                {/* Aesthetic Coordinates */}
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-600 pt-2 border-t border-cyber-gray-900/60">
                  <span>SYS_LOC: STACK_ENV[0xEA]</span>
                  <span>STATUS: READY</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
