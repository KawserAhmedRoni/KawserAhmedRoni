import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandShowcase from './components/BrandShowcase';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#05070a] text-slate-100 font-sans selection:bg-[#00f0ff] selection:text-[#05070a]">
      <Navbar />
      <main>
        <Hero />
        <BrandShowcase />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
