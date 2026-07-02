import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { MessageSquare, Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Auto slide over long intervals
  useEffect(() => {
    const slideInterval = setInterval(handleNext, 9000);
    return () => clearInterval(slideInterval);
  }, []);

  const activeRec = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-8 relative bg-cyber-dark overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-cyber-violet/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-cyber-gray-900 pb-6" id="testimonials-header">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyber-blue text-xs font-mono">
              <MessageSquare className="w-4 h-4 text-cyber-blue animate-pulse" />
              <span>[06] ENDORSEMENTS & CODE REVIEWS</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans sm:text-4xl">
              Recommendations
            </h2>
          </div>
          <p className="text-sm font-sans text-gray-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Verified company endorsements validating Kawser's architecture competence, team collaboration ethics, and elite execution.
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="max-w-4xl mx-auto" id="testimonials-slider-box">
          <div className="relative bg-cyber-gray-950 border border-cyber-gray-900 rounded-lg p-6 sm:p-10 shadow-xl overflow-hidden min-h-[280px] flex flex-col justify-between">
            {/* Top-right quotes icon decoration */}
            <Quote className="absolute right-6 top-6 w-24 h-24 text-cyber-gray-900/40 pointer-events-none" />

            {/* Testimonial Active Slide with Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRec.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
                id={`testimonial-slide-${activeRec.id}`}
              >
                {/* Score badge / visual stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-cyber-emerald fill-cyber-emerald" />
                  ))}
                  <span className="text-[10px] font-mono text-cyber-emerald uppercase tracking-widest ml-2 bg-cyber-emerald/10 border border-cyber-emerald/20 px-2 py-0.5 rounded">
                    VERIFIED ENTR_SPEC
                  </span>
                </div>

                {/* Main feedback text */}
                <p className="text-sm sm:text-base font-sans text-gray-200 font-light italic leading-relaxed">
                  "{activeRec.text}"
                </p>

                {/* Author Block */}
                <div className="flex items-center space-x-3.5 pt-4">
                  {/* Custom initials avatar */}
                  <div className="w-12 h-12 rounded-full border border-cyber-blue/30 bg-cyber-gray-900 flex items-center justify-center font-mono font-bold text-cyber-blue text-sm">
                    {activeRec.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-sans">{activeRec.name}</h4>
                    <p className="text-xs text-gray-400 font-mono">
                      {activeRec.role}, <strong className="font-normal text-cyber-blue">{activeRec.company}</strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Control Panel */}
            <div className="mt-8 pt-6 border-t border-cyber-gray-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Slide Counter index indicator */}
              <div className="flex items-center space-x-1.5 font-mono text-[10px] text-gray-500 order-3 sm:order-1">
                <span>INDEX_LOC:</span>
                <span className="text-white font-semibold">{activeIndex + 1}</span>
                <span>/</span>
                <span>{TESTIMONIALS_DATA.length}</span>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center space-x-2 order-1 sm:order-2">
                {TESTIMONIALS_DATA.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === dotIdx 
                        ? 'bg-cyber-blue w-6' 
                        : 'bg-cyber-gray-800 hover:bg-cyber-gray-700'
                    }`}
                    id={`testimonial-dot-${dotIdx}`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center space-x-2 order-2 sm:order-3">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-cyber-gray-900 hover:bg-cyber-blue/15 border border-cyber-gray-850 hover:border-cyber-blue/40 text-gray-400 hover:text-cyber-blue rounded-full transition-colors cursor-pointer"
                  id="testimonial-prev-btn"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-cyber-gray-900 hover:bg-cyber-blue/15 border border-cyber-gray-850 hover:border-cyber-blue/40 text-gray-400 hover:text-cyber-blue rounded-full transition-colors cursor-pointer"
                  id="testimonial-next-btn"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
