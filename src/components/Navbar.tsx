import React, { useState } from 'react';
import { Video, Palette, Plus, Globe, Github } from 'lucide-react';
import { Language } from '../types/portfolio';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenUpload: (defaultCategory?: 'video' | 'graphic') => void;
  onOpenGitHubGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onOpenUpload,
  onOpenGitHubGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    bn: {
      brand: 'মাহফুজ আল মাহদী',
      brandSubtitle: 'ভিডিও ও গ্রাফিক্স',
      videoNav: 'ভিডিও এডিটিং',
      graphicNav: 'গ্রাফিক্স ডিজাইন',
      aboutNav: 'আমার সম্পর্কে',
      processNav: 'কাজের ধাপ',
      contactNav: 'যোগাযোগ',
      addWork: 'নতুন কাজ যোগ করুন',
      githubGuide: 'গিটহাব গাইড',
    },
    en: {
      brand: 'Mahfuz Al Mahdi',
      brandSubtitle: 'Video & Graphics',
      videoNav: 'Video Editing',
      graphicNav: 'Graphic Design',
      aboutNav: 'About Me',
      processNav: 'Workflow',
      contactNav: 'Contact',
      addWork: 'Add Project',
      githubGuide: 'GitHub Publish',
    },
  }[language];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#08090D]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element Brand Zone */}
        <a 
          href="#" 
          className="flex items-center gap-3 group text-left"
          title="Home"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-amber-400/40 bg-zinc-900 shrink-0 group-hover:border-amber-400 transition-colors shadow-sm">
            <img
              src="https://i.postimg.cc/fTCk5mTH/Chat-GPT-Image-Sep-22-2026-10-13-35-PM.png"
              alt="Mahfuz Al Mahdi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors block">
              {t.brand}
            </span>
            <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-mono block">
              Video &middot; Motion &middot; Graphics
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a href="#video-showcase" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-amber-400/80" />
            <span>{t.videoNav}</span>
          </a>
          <a href="#graphic-showcase" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-amber-400/80" />
            <span>{t.graphicNav}</span>
          </a>
          <a href="#workflow-section" className="hover:text-amber-400 transition-colors">
            {t.processNav}
          </a>
          <a href="#about-section" className="hover:text-amber-400 transition-colors">
            {t.aboutNav}
          </a>
          <a href="#contact-section" className="hover:text-amber-400 transition-colors">
            {t.contactNav}
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={onToggleLanguage}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer bg-white/[0.02]"
            title="Toggle Language (বাংলা / English)"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">{language === 'bn' ? 'EN' : 'বাং'}</span>
          </button>

          {/* GitHub Guide Button */}
          <button
            onClick={onOpenGitHubGuide}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700/80 hover:border-zinc-500 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer bg-zinc-900/60"
            title="How to publish to GitHub"
          >
            <Github className="w-3.5 h-3.5 text-zinc-400" />
            <span className="whitespace-nowrap">{t.githubGuide}</span>
          </button>

          {/* Add Project CTA Button */}
          <button
            onClick={() => onOpenUpload('video')}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>{t.addWork}</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0C0E14] px-4 py-4 space-y-3">
          <a
            href="#video-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-400 py-1"
          >
            <Video className="w-4 h-4 text-amber-400" />
            <span>{t.videoNav}</span>
          </a>
          <a
            href="#graphic-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-400 py-1"
          >
            <Palette className="w-4 h-4 text-amber-400" />
            <span>{t.graphicNav}</span>
          </a>
          <a
            href="#workflow-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-300 hover:text-amber-400 py-1"
          >
            {t.processNav}
          </a>
          <a
            href="#about-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-300 hover:text-amber-400 py-1"
          >
            {t.aboutNav}
          </a>
          <a
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-zinc-300 hover:text-amber-400 py-1"
          >
            {t.contactNav}
          </a>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubGuide();
              }}
              className="flex-1 py-2 text-xs text-center border border-zinc-700 rounded-lg text-zinc-300"
            >
              {t.githubGuide}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
