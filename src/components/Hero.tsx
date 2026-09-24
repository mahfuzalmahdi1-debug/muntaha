import React from 'react';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { Language, Project } from '../types/portfolio';

const MAHFUZ_PROFILE_IMAGE = 'https://i.postimg.cc/fTCk5mTH/Chat-GPT-Image-Sep-22-2026-10-13-35-PM.png';

interface HeroProps {
  language: Language;
  onOpenFeaturedVideo: (project?: Project) => void;
  onOpenUpload: () => void;
  featuredProject?: Project;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenFeaturedVideo,
  onOpenUpload,
  featuredProject,
}) => {
  const t = {
    bn: {
      kicker: 'ভিডিও এডিটর ও গ্রাফিক্স ডিজাইনার',
      titlePrimary: 'ভিজ্যুয়াল রিদম ও ব্র্যান্ডের',
      titleAccent: 'সিনেমেটিক গল্প',
      description: 'কাঁচা ফুটেজকে আকর্ষণীয় ভিডিওতে রূপান্তর এবং আধুনিক মিনিমালিস্ট গ্রাফিক্স ডিজাইনে ব্র্যান্ডকে নতুন উচ্চতায় নিয়ে যাওয়াই আমার স্পেশালিটি। প্রিমিয়ার প্রো, ডাভিঞ্চি রিজলভ, আফটার ইফেক্টস এবং ফটোশপ-ইলাস্ট্রেটরের নিখুঁত মেলবন্ধন।',
      watchReel: 'শোরিল প্লে করুন',
      exploreWork: 'কাজের নমুনা দেখুন',
      addWork: 'নতুন কাজ আপলোড',
      metric1Val: '৬৫+',
      metric1Lbl: 'সফল প্রজেক্ট ডেলিভারি',
      metric2Val: '১৫০K+',
      metric2Lbl: 'সোশ্যাল মিডিয়া অডিয়েন্স রিচ',
      metric3Val: '৪ মাস',
      metric3Lbl: 'কাজের অভিজ্ঞতা',
      badgeVideo: '4K কালার গ্রেডিং ও হাই-রিটেনশন এডিট',
      badgeDesign: 'মডার্ন ব্র্যান্ডিং ও গ্রাফিক্স আইডেন্টিটি',
      liveReelText: 'ফিচার্ড শোরিল দেখুন (০১:২৪)',
    },
    en: {
      kicker: 'Video Editor & Graphic Designer',
      titlePrimary: 'Crafting Visual Rhythm &',
      titleAccent: 'Cinematic Stories',
      description: 'Transforming raw footage into high-retention cinematic narratives, and engineering distinctive graphic brand identities. Fluent in DaVinci Resolve, Premiere Pro, After Effects, Photoshop, and Illustrator.',
      watchReel: 'Play Showreel',
      exploreWork: 'Explore Projects',
      addWork: 'Upload Project',
      metric1Val: '65+',
      metric1Lbl: 'Projects Delivered',
      metric2Val: '150K+',
      metric2Lbl: 'Audience Reach',
      metric3Val: '4 Months',
      metric3Lbl: 'Hands-on Experience',
      badgeVideo: '4K Color Grading & High-Retention Edits',
      badgeDesign: 'Modern Branding & Visual Systems',
      liveReelText: 'Watch Featured Reel (01:24)',
    },
  }[language];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{t.kicker}</span>
              <span aria-hidden="true" className="text-zinc-600">&middot;</span>
              <span className="text-zinc-400">Portfolio 2025–2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
              {t.titlePrimary}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                {t.titleAccent}
              </span>
            </h1>

            {/* Description Prose */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              {t.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenFeaturedVideo(featuredProject)}
                type="button"
                className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-black text-black ml-0.5" />
                </div>
                <span>{t.watchReel}</span>
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('video-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 text-white font-medium text-sm transition-all cursor-pointer"
              >
                <span>{t.exploreWork}</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </button>

              <button
                onClick={onOpenUpload}
                type="button"
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white text-xs font-medium transition-colors cursor-pointer bg-amber-500/5 hover:bg-amber-500/10"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.addWork}</span>
              </button>
            </div>

            {/* Claim-to-Proof Adjacency: Clean Quantitative Rigor (Tabular figures) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {t.metric1Val}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 leading-snug">
                  {t.metric1Lbl}
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">
                  {t.metric2Val}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 leading-snug">
                  {t.metric2Lbl}
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {t.metric3Val}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 leading-snug">
                  {t.metric3Lbl}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Clean Portrait with Name & Tagline */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/90 shadow-2xl">
              
              {/* Mahfuz Al Mahdi Photo */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-zinc-950">
                <img
                  src={MAHFUZ_PROFILE_IMAGE}
                  alt="Mahfuz Al Mahdi - Video Editor & Graphic Designer"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  width={600}
                  height={800}
                />
              </div>

              {/* Name & Tagline directly below the photo */}
              <div className="p-5 text-center bg-zinc-900/95 border-t border-white/10 space-y-1">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {language === 'bn' ? 'মাহফুজ আল মাহদী' : 'Mahfuz Al Mahdi'}
                </h2>
                <p className="text-sm font-medium text-amber-400">
                  {language === 'bn' ? 'ভিডিও এডিটর অ্যান্ড গ্রাফিক ডিজাইনার' : 'Video Editor & Graphic Designer'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
