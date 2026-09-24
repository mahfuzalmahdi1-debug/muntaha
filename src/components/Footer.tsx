import React from 'react';
import { ArrowUp, Heart, Github } from 'lucide-react';
import { Language } from '../types/portfolio';

interface FooterProps {
  language: Language;
  onOpenGitHubGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenGitHubGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#06070A] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-4">
          <div className="font-display font-bold text-white text-sm">
            {language === 'bn' ? 'মাহফুজ আল মাহদী' : 'Mahfuz Al Mahdi'}
          </div>
          <span className="text-zinc-600">&middot;</span>
          <div className="text-zinc-500 font-mono">
            &copy; {new Date().getFullYear()} Frame & Pixel. All rights reserved.
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
          <a 
            href="#video-showcase" 
            onClick={(e) => scrollTo(e, 'video-showcase')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {language === 'bn' ? 'ভিডিও এডিটিং' : 'Video Editing'}
          </a>
          <a 
            href="#graphic-showcase" 
            onClick={(e) => scrollTo(e, 'graphic-showcase')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {language === 'bn' ? 'গ্রাফিক্স ডিজাইন' : 'Graphic Design'}
          </a>
          <a 
            href="#workflow-section" 
            onClick={(e) => scrollTo(e, 'workflow-section')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {language === 'bn' ? 'কাজের ধাপ' : 'Workflow'}
          </a>
          <a 
            href="#about-section" 
            onClick={(e) => scrollTo(e, 'about-section')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {language === 'bn' ? 'আমার সম্পর্কে' : 'About Me'}
          </a>
          <a
            href="https://www.behance.net/mahfuzalmahdi"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <span className="font-bold text-blue-400">Bē</span>
            <span>Behance</span>
          </a>
          <button
            onClick={onOpenGitHubGuide}
            type="button"
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'গিটহাব পাবলিশ গাইড' : 'GitHub Guide'}</span>
          </button>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          type="button"
          className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
