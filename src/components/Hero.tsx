import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowRight, Download, FileText, CheckCircle2, User, Cpu, ShieldCheck, RefreshCw, Share2, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { HERO_DATA } from '../data';

export default function Hero() {
  const [activeRightTab, setActiveRightTab] = useState<'scan' | 'terminal' | 'social'>('scan');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Initializing secure connection to kawser_roni_core...',
    'System status: 100% operational.',
    'Type "help" or click the quick commands below to explore.'
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const quickCommands = ['help', 'about', 'skills', 'metrics', 'clear'];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: string[] = [];

    switch (trimmed) {
      case 'help':
        response = [
          `> ${cmd}`,
          'Available commands:',
          '  about    - Developer professional overview',
          '  skills   - Main technologies and framework stack',
          '  metrics  - Real metrics from 90+ approved projects',
          '  clear    - Clear terminal stream'
        ];
        break;
      case 'about':
        response = [
          `> ${cmd}`,
          'Name: Kawser Ahmed Roni',
          'Experience: 8+ Years in Enterprise Web/Mobile architectures',
          'Specialty: High-scale E-commerce, POS, & WMS development',
          'Tenure: 5 Years Core Engineer at MediaSoft, Dhaka'
        ];
        break;
      case 'skills':
        response = [
          `> ${cmd}`,
          'JavaScript Expertise:',
          '  - Frontend: React, Next.js, Vue, Angular, Ant Design',
          '  - Backend: Node.js, Express, PostgreSQL, Redis, MongoDB',
          '  - Hybrid: React Native, Electron, SQLite'
        ];
        break;
      case 'metrics':
        response = [
          `> ${cmd}`,
          'Production Benchmarks:',
          '  - 90+ Successful custom projects delivered',
          '  - 100,000+ daily POS sales synced offline-to-cloud',
          '  - 12 Enterprise Warehouses active with picking apps'
        ];
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        response = [
          `> ${cmd}`,
          `Command not recognized: "${trimmed}". Type "help" for a list of valid options.`
        ];
    }

    setTerminalHistory(prev => [...prev, ...response]);
    setTerminalInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput);
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/cv/cv.pdf';
    link.download = 'Kawser_Ahmed_Roni_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTerminalHistory(prev => [
      ...prev,
      ' ',
      '>> [SYSTEM INFO]: Requesting local target node download at "/cv/cv.pdf"...'
    ]);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center px-4 sm:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyber-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10" id="hero-intro">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full px-4.5 py-1 w-fit"
            id="hero-badge"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-cyber-blue uppercase">
              Available for Elite Engineering Projects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Engineering Resilient <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-emerald to-cyber-violet text-glow-blue">
                Enterprise Architectures
              </span>
            </h2>
            <p className="text-base sm:text-lg font-sans text-gray-300 max-w-xl font-light leading-relaxed">
              Hi, I'm <strong className="font-semibold text-white">{HERO_DATA.name}</strong>. {HERO_DATA.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-2"
            id="hero-ctas"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="group flex items-center space-x-2 bg-gradient-to-r from-cyber-blue to-cyber-emerald hover:brightness-110 text-cyber-dark font-mono font-semibold text-xs sm:text-sm px-6 py-3.5 rounded shadow-[0_4px_20px_rgba(0,240,255,0.25)] transition-all duration-300"
              id="hero-btn-contact"
            >
              <span>Initiate Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-cyber-gray-950 hover:bg-cyber-gray-900 border border-cyber-gray-800 hover:border-cyber-blue/40 text-white hover:text-cyber-blue font-mono text-xs sm:text-sm px-6 py-3.5 rounded transition-all duration-300"
              id="hero-btn-resume"
            >
              <Download className="w-4 h-4 text-cyber-blue" />
              <span>Get Resume (PDF)</span>
            </button>
          </motion.div>

          {/* Quick Stats Summary Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-cyber-gray-900"
            id="hero-quick-specs"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-cyber-emerald" />
              <span className="text-xs font-mono text-gray-400">8+ Years Core Dev</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-cyber-emerald" />
              <span className="text-xs font-mono text-gray-400">90+ Approved Deployments</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-cyber-emerald" />
              <span className="text-xs font-mono text-gray-400">MediaSoft Core Team Lead</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Interactive Cyber Cockpit / Biometric Scan & Developer Terminal */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-center z-10"
          id="hero-interactive-cockpit"
        >
          <div className="w-full bg-cyber-gray-950 border border-cyber-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Interactive Tabbed Header Bar */}
            <div className="bg-cyber-gray-900 border-b border-cyber-gray-800 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-1 sm:space-x-2 font-mono text-[10px]">
                <button 
                  onClick={() => setActiveRightTab('scan')}
                  className={`px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 ${
                    activeRightTab === 'scan' 
                      ? 'bg-cyber-blue/10 border border-cyber-blue/35 text-white font-semibold' 
                      : 'text-gray-500 hover:text-gray-350 hover:bg-cyber-gray-950/40 border border-transparent'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-cyber-blue" />
                  <span className="hidden xs:inline">BIOMETRIC_SCAN</span>
                </button>
                <button 
                  onClick={() => setActiveRightTab('social')}
                  className={`px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 ${
                    activeRightTab === 'social' 
                      ? 'bg-cyber-violet/10 border border-cyber-violet/35 text-white font-semibold' 
                      : 'text-gray-500 hover:text-gray-350 hover:bg-cyber-gray-950/40 border border-transparent'
                  }`}
                >
                  <Share2 className="w-3.5 h-3.5 text-cyber-violet" />
                  <span className="hidden xs:inline">SOCIAL_NET</span>
                </button>
                <button 
                  onClick={() => setActiveRightTab('terminal')}
                  className={`px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 ${
                    activeRightTab === 'terminal' 
                      ? 'bg-cyber-emerald/10 border border-cyber-emerald/35 text-white font-semibold' 
                      : 'text-gray-500 hover:text-gray-350 hover:bg-cyber-gray-950/40 border border-transparent'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span className="hidden xs:inline">RONI_SHELL</span>
                </button>
              </div>

              {/* Status Indicator Pill */}
              <div className="flex items-center space-x-1.5">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  activeRightTab === 'scan' ? 'bg-cyber-blue' : 
                  activeRightTab === 'terminal' ? 'bg-cyber-emerald' : 'bg-cyber-violet'
                }`} />
                <span className={`font-mono text-[9px] uppercase font-bold tracking-wider ${
                  activeRightTab === 'scan' ? 'text-cyber-blue' : 
                  activeRightTab === 'terminal' ? 'text-cyber-emerald' : 'text-cyber-violet'
                }`}>
                  {activeRightTab === 'scan' ? 'LIVE_PORTRAIT' : 
                   activeRightTab === 'terminal' ? 'CLI_ONLINE' : 'NET_LINKS'}
                </span>
              </div>
            </div>

            {/* Main Interactive Stage */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {activeRightTab === 'scan' ? (
                  <motion.div
                    key="biometric-scan-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 flex flex-col space-y-4"
                  >
                    {/* Portrait Scan Canvas */}
                    <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-lg border border-cyber-blue/40 bg-cyber-dark/60 overflow-hidden group shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" id="hologram-portrait-canvas">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-80 pointer-events-none" />
                      
                      {/* Dynamic laser scanner line */}
                      <motion.div 
                        initial={{ top: "0%" }}
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                        className="absolute left-0 w-full h-[2px] bg-cyber-blue/70 shadow-[0_0_12px_#00f0ff] z-10 pointer-events-none"
                      />

                      {/* Diagnostic HUD indicators */}
                      <div className="absolute top-3 left-3 flex flex-col space-y-1 z-15 font-mono text-[8px] text-cyber-blue/80 bg-cyber-dark/45 border border-cyber-blue/15 p-1.5 rounded backdrop-blur-sm">
                        <span>SYS_RECON: ENABLED</span>
                        <span>TARGET_NAME: KAWSER Ahmed RONI</span>
                        <span>LATENCY_STABILITY: STABLE</span>
                      </div>

                      <div className="absolute bottom-3 right-3 flex flex-col space-y-0.5 z-15 font-mono text-[8px] text-cyber-emerald bg-cyber-dark/45 border border-cyber-emerald/15 p-1.5 rounded backdrop-blur-sm text-right">
                        <span>SYS_LOC: 23.8103° N, 90.4125° E</span>
                        <span>DHAKA_NODE_STABLE</span>
                      </div>

                      {/* Actual developer portrait */}
                      <img 
                        src="/images/rony.png" 
                        alt="Kawser Ahmed Roni - Senior Systems Engineer"
                        className="w-full h-full object-cover object-top filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 transition-all duration-700 scale-102 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400";
                        }}
                      />

                      {/* Custom aesthetic viewport crosshairs */}
                      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-cyber-blue" />
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-cyber-blue" />
                      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-cyber-blue" />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-cyber-blue" />
                    </div>

                    {/* HUD Scan Data Deck */}
                    <div className="grid grid-cols-2 gap-3.5 font-mono text-[10px] text-gray-400 bg-cyber-gray-900/40 border border-cyber-gray-850 p-3 rounded">
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-1 text-cyber-blue font-semibold">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>SPECS_CORE</span>
                        </div>
                        <div className="text-[9px] text-gray-500 leading-normal">
                          Role: Senior Developer<br />
                          Tenure: 8+ Yrs Exp<br />
                          Expertise: Full-Stack
                        </div>
                      </div>
                      <div className="space-y-1.5 border-l border-cyber-gray-850 pl-3.5">
                        <div className="flex items-center space-x-1 text-cyber-emerald font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>PROJECTS_DECK</span>
                        </div>
                        <div className="text-[9px] text-gray-500 leading-normal">
                          Total Approved: 90+<br />
                          Core Focus: Enterprise ERP<br />
                          Status: Active Deploy
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : activeRightTab === 'terminal' ? (
                  <motion.div
                    key="terminal-shell-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    {/* Console Output Screen */}
                    <div className="p-4 h-[220px] overflow-y-auto font-mono text-xs text-gray-300 space-y-1.5 flex flex-col" id="console-screen">
                      {terminalHistory.map((line, i) => (
                        <div 
                          key={i} 
                          className={`leading-relaxed whitespace-pre-wrap ${
                            line.startsWith('>') ? 'text-cyber-blue font-semibold' : 
                            line.startsWith('>>') ? 'text-cyber-emerald font-semibold' : 'text-gray-400'
                          }`}
                        >
                          {line}
                        </div>
                      ))}
                      <div ref={terminalEndRef} />
                    </div>

                    {/* Quick hotkey buttons for terminal */}
                    <div className="px-4 py-2 bg-cyber-gray-900/60 border-t border-cyber-gray-900 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[9px] font-mono text-gray-500 uppercase mr-1">Hotkeys:</span>
                      {quickCommands.map((cmd) => (
                        <button
                          key={cmd}
                          onClick={() => executeCommand(cmd)}
                          className="bg-cyber-gray-800 hover:bg-cyber-blue/20 border border-cyber-gray-700 hover:border-cyber-blue/50 text-[9px] text-gray-300 hover:text-cyber-blue font-mono px-2 py-0.5 rounded transition-all"
                        >
                          {cmd}()
                        </button>
                      ))}
                    </div>

                    {/* Console Input */}
                    <div className="border-t border-cyber-gray-850 px-4 py-2.5 flex items-center bg-cyber-gray-950">
                      <span className="text-cyber-emerald font-bold font-mono mr-2">&gt;</span>
                      <input
                        type="text"
                        placeholder="Type 'help' and hit enter..."
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-cyber-emerald placeholder-gray-650"
                        id="terminal-input"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="social-links-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 flex flex-col space-y-4"
                  >
                    {/* Social Hub Header HUD */}
                    <div className="relative w-full h-[100px] rounded border border-cyber-violet/30 bg-cyber-dark/40 overflow-hidden group flex flex-col justify-center items-center">
                      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
                      <Share2 className="w-8 h-8 text-cyber-violet animate-pulse mb-1.5 z-10" />
                      <span className="font-mono text-[10px] text-cyber-violet tracking-widest uppercase z-10">COMMUNICATION_CHANNELS</span>
                      <span className="font-mono text-[8px] text-gray-500 z-10">SECURE TARGET NODE CONNECTIVITY</span>
                      
                      {/* Crosshairs */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-violet" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-violet" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-violet" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-violet" />
                    </div>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 gap-3.5">
                      <a
                        href="https://github.com/KawserAhmedRoni"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-center text-center bg-cyber-gray-900/60 border border-cyber-gray-850 hover:border-cyber-blue/50 hover:bg-cyber-blue/5 p-4 rounded transition-all group/link"
                      >
                        <Github className="w-5.5 h-5.5 text-gray-400 group-hover/link:text-cyber-blue transition-colors mb-2" />
                        <div className="font-mono">
                          <p className="text-[8px] text-gray-500 uppercase leading-none">Code Repository</p>
                          <p className="text-[11px] text-white font-semibold group-hover/link:text-cyber-blue transition-colors mt-1">GitHub</p>
                        </div>
                      </a>

                      <a
                        href="https://linkedin.com/in/kawser-ahmed-roni-91252b316"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-center text-center bg-cyber-gray-900/60 border border-cyber-gray-850 hover:border-cyber-violet/50 hover:bg-cyber-violet/5 p-4 rounded transition-all group/link"
                      >
                        <Linkedin className="w-5.5 h-5.5 text-gray-400 group-hover/link:text-cyber-violet transition-colors mb-2" />
                        <div className="font-mono">
                          <p className="text-[8px] text-gray-500 uppercase leading-none">Professional Net</p>
                          <p className="text-[11px] text-white font-semibold group-hover/link:text-cyber-violet transition-colors mt-1">LinkedIn</p>
                        </div>
                      </a>

                      <a
                        href="https://www.facebook.com/kawserahmedroni.dev"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-center text-center bg-cyber-gray-900/60 border border-cyber-gray-850 hover:border-cyber-emerald/50 hover:bg-cyber-emerald/5 p-4 rounded transition-all group/link"
                      >
                        <Facebook className="w-5.5 h-5.5 text-gray-400 group-hover/link:text-cyber-emerald transition-colors mb-2" />
                        <div className="font-mono">
                          <p className="text-[8px] text-gray-500 uppercase leading-none">Connect Direct</p>
                          <p className="text-[11px] text-white font-semibold group-hover/link:text-cyber-emerald transition-colors mt-1">Facebook</p>
                        </div>
                      </a>

                      <a
                        href="mailto:kawserahmedroni51@gmail.com"
                        className="flex flex-col items-center justify-center text-center bg-cyber-gray-900/60 border border-cyber-gray-850 hover:border-cyber-pink/50 hover:bg-cyber-pink/5 p-4 rounded transition-all group/link"
                      >
                        <Mail className="w-5.5 h-5.5 text-gray-400 group-hover/link:text-cyber-pink transition-colors mb-2" />
                        <div className="font-mono">
                          <p className="text-[8px] text-gray-500 uppercase leading-none">Secure Mail</p>
                          <p className="text-[11px] text-white font-semibold group-hover/link:text-cyber-pink transition-colors mt-1">Email</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
