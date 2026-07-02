import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Clock, Wifi, Menu, X, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTime, setCurrentTime] = useState('');
  const [ping, setPing] = useState(14);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Sync current time with the machine time or provided format
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Dynamic ping simulator to add to the technical, cyber-minimalist atmosphere safely
    const pingTimer = setInterval(() => {
      setPing(prev => {
        const diff = Math.floor(Math.random() * 5) - 2;
        const next = prev + diff;
        return next < 5 ? 5 : next > 30 ? 30 : next;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(pingTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'stats', 'expertise', 'sandbox', 'projects', 'experience', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'sandbox', label: 'System Flow' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Timeline' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 border-b border-cyber-gray-800 bg-cyber-dark/85 backdrop-blur-md px-4 sm:px-8 py-3.5"
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand / Logo */}
          <div className="group flex items-center space-x-3 cursor-pointer" onClick={() => handleScrollTo('hero')} id="brand-logo">
            <div className="relative flex items-center justify-center w-9 h-9 border border-cyber-blue bg-cyber-gray-900 rounded overflow-hidden">
              <img 
                src="/images/rony.png" 
                alt="Roni Avatar" 
                className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100";
                }}
              />
              {/* Dynamic laser scanner line on hover of logo */}
              <motion.div 
                initial={{ top: "0%" }}
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-cyber-blue/70 shadow-[0_0_6px_#00f0ff] z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-cyber-blue/10 pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h1 className="text-sm font-semibold tracking-wide text-white uppercase">K. A. Roni</h1>
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse" />
              </div>
              <p className="text-[10px] font-mono text-gray-400">SENIOR SOFTWARE ENGINEER</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-cyber-gray-950 border border-cyber-gray-800 rounded-full px-2 py-1" id="nav-links">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono transition-colors duration-300 ${
                    isActive ? 'text-cyber-blue font-medium' : 'text-gray-400 hover:text-white'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-cyber-blue/5 border border-cyber-blue/25 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Technical Health Indicators & Hamburg Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-xs font-mono text-gray-400" id="tech-telemetry">
            {/* Clock */}
            <div className="hidden sm:flex items-center space-x-1.5 border-r border-cyber-gray-800 pr-4">
              <Clock className="w-3.5 h-3.5 text-cyber-blue" />
              <span className="text-white font-medium min-w-[65px]">{currentTime || '00:00:00'}</span>
            </div>

            {/* Simulated System Metrics */}
            <div className="hidden md:flex items-center space-x-3 bg-cyber-gray-950/60 border border-cyber-gray-800/40 px-2.5 py-1 rounded">
              <div className="flex items-center space-x-1.5">
                <Wifi className="w-3.5 h-3.5 text-cyber-emerald" />
                <span className="text-[10px] uppercase tracking-wider text-gray-500">RTT:</span>
                <span className="text-cyber-emerald font-semibold">{ping}ms</span>
              </div>
              <div className="hidden lg:flex items-center space-x-1 border-l border-cyber-gray-800 pl-3">
                <Cpu className="w-3.5 h-3.5 text-cyber-violet animate-spin" style={{ animationDuration: '4s' }} />
                <span className="text-[10px] uppercase tracking-wider text-gray-500">SYS:</span>
                <span className="text-cyber-violet font-semibold">STABLE</span>
              </div>
            </div>

            {/* Mobile Menu Trigger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded border border-cyber-gray-850 hover:border-cyber-blue/50 bg-cyber-gray-950/80 text-gray-300 hover:text-cyber-blue transition-colors relative"
              aria-label="Toggle Menu"
              id="mobile-menu-trigger"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-cyber-pink" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Off-canvas Sliding Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-cyber-dark/80 backdrop-blur-md z-45 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              id="mobile-menu-backdrop"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[350px] bg-cyber-gray-950 border-l border-cyber-gray-850 z-50 md:hidden flex flex-col justify-between shadow-2xl bg-grid-pattern-dense"
              id="mobile-menu-drawer"
            >
              {/* Drawer Top Header */}
              <div className="p-5 border-b border-cyber-gray-900 flex items-center justify-between bg-cyber-gray-900/40">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                  <span className="font-mono text-xs text-gray-300 font-semibold uppercase tracking-wider">RONI_CORE_SYSTEM</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded bg-cyber-gray-900 border border-cyber-gray-800 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items list (Staggered Animations) */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">NAV_LINKS_RECON</span>
                  
                  <nav className="space-y-3">
                    {menuItems.map((item, index) => {
                      const isActive = activeSection === item.id;
                      return (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleScrollTo(item.id)}
                          className={`w-full flex items-center justify-between p-3.5 rounded-lg border transition-all ${
                            isActive 
                              ? 'bg-cyber-blue/10 border-cyber-blue text-white shadow-[0_0_12px_rgba(0,240,255,0.1)]' 
                              : 'bg-cyber-gray-900/40 border-cyber-gray-850 text-gray-400 hover:text-white'
                          }`}
                          id={`mobile-nav-item-${item.id}`}
                        >
                          <span className="font-mono text-xs font-semibold uppercase tracking-wide">{item.label}</span>
                          <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyber-blue translate-x-0' : 'text-gray-600 group-hover:translate-x-1'}`} />
                        </motion.button>
                      );
                    })}
                  </nav>
                </div>

                {/* Micro Telemetry section inside Drawer */}
                <div className="pt-6 border-t border-cyber-gray-900 space-y-4">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">TELEMETRY_STATUS</span>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-cyber-gray-900/60 border border-cyber-gray-900 rounded">
                      <span className="text-[9px] font-mono text-gray-500 block">TIME_UTC</span>
                      <span className="text-xs font-mono text-white font-medium">{currentTime || '00:00'}</span>
                    </div>
                    <div className="p-3 bg-cyber-gray-900/60 border border-cyber-gray-900 rounded">
                      <span className="text-[9px] font-mono text-gray-500 block">LATENCY_RTT</span>
                      <span className="text-xs font-mono text-cyber-emerald font-semibold">{ping}ms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Footer with Social Hub access keys */}
              <div className="p-5 border-t border-cyber-gray-900 bg-cyber-gray-900/20 space-y-4">
                <div className="flex justify-center space-x-3">
                  <a 
                    href="mailto:kawserahmedroni.dev@gmail.com" 
                    className="p-2.5 rounded bg-cyber-gray-900 border border-cyber-gray-800 hover:border-cyber-blue/40 text-gray-400 hover:text-cyber-blue transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2.5 rounded bg-cyber-gray-900 border border-cyber-gray-800 hover:border-cyber-blue/40 text-gray-400 hover:text-cyber-blue transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2.5 rounded bg-cyber-gray-900 border border-cyber-gray-800 hover:border-cyber-blue/40 text-gray-400 hover:text-cyber-blue transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <div className="text-center font-mono text-[9px] text-gray-600">
                  REF_VERSION: v2.4 // OFF_CANVAS
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
