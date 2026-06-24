import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Cpu, Share2, Briefcase, Film, GraduationCap, Phone, Sparkles, Menu, X, ArrowUp } from 'lucide-react';
import ResumeHero from './components/ResumeHero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: '首屏', icon: Sparkles },
    { id: 'about', label: '自我评价', icon: Compass },
    { id: 'skills', label: '个人技能', icon: Cpu },
    { id: 'experience', label: '工作经历', icon: Briefcase },
    { id: 'projects', label: '项目经历', icon: Film },
    { id: 'portfolio', label: '作品集', icon: Share2 },
    { id: 'contact', label: '教育经历', icon: GraduationCap },
  ];

  // Scroll spy & scrolled header background
  useEffect(() => {
    const handleScroll = () => {
      // Header background blur state
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/20 selection:text-orange-300">
      {/* Ambient background grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-40" />

      {/* Modern sticky glassmorphic navigation header */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-slate-900/80 shadow-lg py-3'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-5xl flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 font-display text-lg font-bold text-white group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-mono text-xs font-black">XY</span>
            </div>
            <div className="text-left">
              <span className="group-hover:text-orange-400 transition">肖宇轩</span>
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider leading-none">AI OP PORTFOLIO</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition relative ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-slate-800/80 rounded-full border border-slate-700/50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Contact / Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs tracking-wide transition shadow-lg hover:shadow-orange-500/10 flex items-center gap-1.5"
            >
              联系我
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-slate-950 border-b border-slate-900/80 backdrop-blur-lg px-4 py-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition ${
                      isActive
                        ? 'bg-orange-500/10 border-orange-500/30 text-orange-400'
                        : 'bg-slate-900/40 border-slate-850 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs text-center shadow-lg transition"
            >
              立刻联系我
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side dot navigation indicator (Desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-3.5 bg-slate-900/50 p-2.5 rounded-full border border-slate-850/80 backdrop-blur-sm shadow-xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex items-center justify-center"
            >
              {/* Tooltip */}
              <span className="absolute right-8 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
              {/* Dot */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-500 scale-125 shadow-glow ring-4 ring-orange-500/10'
                    : 'bg-slate-700 hover:bg-slate-500 scale-100'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Main Resume Sections Stack */}
      <main className="relative z-10">
        <ResumeHero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <PortfolioSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
