import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import CoreExpertise from './components/CoreExpertise';
import ArchitectureSandbox from './components/ArchitectureSandbox';
import FeaturedProjects from './components/FeaturedProjects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 selection:bg-cyber-blue selection:text-cyber-dark font-sans relative">
      
      {/* Dynamic scanline overlay effect across the whole page to complete the cyber-minimalist vibe */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,24,36,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-50 opacity-45" />

      {/* Background glow highlights */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-cyber-blue/5 via-transparent to-transparent pointer-events-none" />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Content wrapper with modular layout sections */}
      <main className="relative z-10" id="main-content-flow">
        
        {/* 1. Hero banner with custom terminal console */}
        <Hero />

        {/* 2. Micro analytics / Stats stats panel */}
        <StatsCounter />

        {/* 3. Core expertise grouped skills explorer */}
        <CoreExpertise />

        {/* 4. Architectural Telemetry Flow Sandbox */}
        <ArchitectureSandbox />

        {/* 5. Production case studies / Featured Projects */}
        <FeaturedProjects />

        {/* 6. Career history vertical timeline */}
        <ExperienceTimeline />

        {/* 7. Endorsements carousel slider */}
        <Testimonials />

        {/* 8. Interactive Outbox Contact Form & footer */}
        <ContactForm />

      </main>

    </div>
  );
}
