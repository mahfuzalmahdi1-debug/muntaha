import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Film, Clock, Eye, Plus, Sparkles, Trash2 } from 'lucide-react';
import { Project, Language } from '../types/portfolio';

interface VideoCarouselProps {
  projects: Project[];
  language: Language;
  onSelectVideo: (project: Project) => void;
  onOpenUpload: (category: 'video') => void;
  onDeleteProject?: (id: string) => void;
}

export const VideoCarousel: React.FC<VideoCarouselProps> = ({
  projects,
  language,
  onSelectVideo,
  onOpenUpload,
  onDeleteProject,
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const t = {
    bn: {
      sectionKicker: 'ভিডিও এডিটিং পোর্টফোলিও',
      title: 'ভিডিও এডিটিং ও মোশন শোকেস',
      subtitle: 'কমার্শিয়াল অ্যাড, ইউটিউব ভিডিও, সিনেমাটিক কালার গ্রেডিং এবং শর্টস/রিলসের নির্বাচিত কাজ। ক্যারোজেল স্ক্রল করে ভিডিওগুলো প্লে করুন।',
      all: 'সকল ভিডিও',
      commercial: 'কমার্শিয়াল ও অ্যাডস',
      youtube: 'ইউটিউব ও এক্সপ্লেইনার',
      cinematic: 'সিনেমেটিক ও ডকুমেন্টারি',
      reels: 'রিলস ও শর্টস',
      motion: 'মোশন গ্রাফিক্স',
      playBtn: 'ভিডিও দেখুন',
      addVideoBtn: 'নতুন ভিডিও যোগ করুন',
      duration: 'সময়সীমা',
      views: 'ভিউস',
      empty: 'এই ক্যাটাগরিতে এখনও কোনো ভিডিও নেই। আপনি নিজে নতুন ভিডিও আপলোড করতে পারেন!',
    },
    en: {
      sectionKicker: 'Video Editing Portfolio',
      title: 'Video Editing & Motion Showcase',
      subtitle: 'Curated commercial advertisements, YouTube retention cuts, cinematic color grades, and viral vertical reels. Browse carousel and click to watch.',
      all: 'All Videos',
      commercial: 'Commercial & Ads',
      youtube: 'YouTube & Talking Head',
      cinematic: 'Cinematic & Documentary',
      reels: 'Reels & Shorts',
      motion: 'Motion Graphics',
      playBtn: 'Play Video',
      addVideoBtn: 'Add New Video',
      duration: 'Duration',
      views: 'Views',
      empty: 'No video projects in this category yet. You can upload a new video now!',
    },
  }[language];

  const subcategories = [
    { key: 'All', label: t.all },
    { key: 'Commercial & Ads', label: t.commercial },
    { key: 'YouTube & Talking Head', label: t.youtube },
    { key: 'Cinematic & Documentary', label: t.cinematic },
    { key: 'Reels & Shorts', label: t.reels },
    { key: 'Motion Graphics', label: t.motion },
  ];

  const filteredProjects = projects.filter((p) => {
    if (p.category !== 'video') return false;
    if (selectedSubcategory === 'All') return true;
    return p.subcategory === selectedSubcategory;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="video-showcase" className="py-20 lg:py-24 border-b border-white/5 bg-[#090A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Film className="w-3.5 h-3.5" />
              <span>{t.sectionKicker}</span>
              <span aria-hidden="true" className="text-zinc-600">&middot;</span>
              <span className="text-zinc-400 font-mono tabular-nums">{filteredProjects.length} Projects</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Carousel Arrows & Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenUpload('video')}
              type="button"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-medium transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addVideoBtn}</span>
            </button>

            <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-white/10 rounded-xl">
              <button
                onClick={() => scroll('left')}
                type="button"
                className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer disabled:opacity-40"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                type="button"
                className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer disabled:opacity-40"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar (Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-6">
          {subcategories.map((sub) => {
            const isActive = selectedSubcategory === sub.key;
            return (
              <button
                key={sub.key}
                type="button"
                onClick={() => setSelectedSubcategory(sub.key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/40">
            <Film className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm max-w-md mx-auto">{t.empty}</p>
            <button
              onClick={() => onOpenUpload('video')}
              type="button"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-black text-xs font-semibold"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addVideoBtn}</span>
            </button>
          </div>
        ) : (
          /* Carousel Horizontal Scroll Track */
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {filteredProjects.map((project) => {
              const displayTitle = language === 'bn' && project.bnTitle ? project.bnTitle : project.title;
              const displayDesc = language === 'bn' && project.bnDescription ? project.bnDescription : project.description;

              return (
                <div
                  key={project.id}
                  className="w-[330px] sm:w-[380px] shrink-0 snap-start rounded-2xl overflow-hidden bg-zinc-900/80 border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col group shadow-lg"
                >
                  {/* Thumbnail / Video Preview Area */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                    <img
                      src={project.thumbnailUrl}
                      alt={displayTitle}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" />

                    {/* Play Button Trigger */}
                    <button
                      onClick={() => onSelectVideo(project)}
                      type="button"
                      className="absolute inset-0 m-auto w-13 h-13 rounded-full bg-amber-400/90 hover:bg-amber-300 text-black flex items-center justify-center shadow-lg shadow-amber-500/20 backdrop-blur-sm transition-all group-hover:scale-110 active:scale-95 cursor-pointer z-10"
                      aria-label={`Play ${displayTitle}`}
                    >
                      <Play className="w-5 h-5 fill-black text-black ml-0.5" />
                    </button>

                    {/* Top Chips inside image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-200">
                      <span className="bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                        {project.subcategory}
                      </span>
                      {project.duration && (
                        <span className="bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{project.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Metadata inside image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
                      {project.views && (
                        <div className="flex items-center gap-1 font-mono text-[11px] text-amber-300">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{project.views}</span>
                        </div>
                      )}
                      <span className="text-[11px] text-zinc-400 font-mono">
                        {project.year} {project.client ? `· ${project.client}` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Zero-Pill unboxed kicker */}
                      <div className="text-[11px] text-amber-400/90 font-mono uppercase tracking-wider mb-1">
                        {project.highlightText || project.subcategory}
                      </div>

                      <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {displayTitle}
                      </h3>

                      <p className="text-xs text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
                        {displayDesc}
                      </p>
                    </div>

                    {/* Software tags & Actions */}
                    <div className="pt-3 border-t border-white/5 space-y-3">
                      {/* Clean Software list */}
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400">
                        {project.software.slice(0, 3).map((sw, idx) => (
                          <span key={idx} className="bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            {sw}
                          </span>
                        ))}
                        {project.software.length > 3 && (
                          <span className="text-zinc-500 font-mono">+{project.software.length - 3}</span>
                        )}
                      </div>

                      {/* Bottom Button Row */}
                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectVideo(project)}
                          type="button"
                          className="flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-amber-400 hover:text-black text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{t.playBtn}</span>
                        </button>

                        {onDeleteProject && project.id.startsWith('custom-') && (
                          <button
                            onClick={() => onDeleteProject(project.id)}
                            type="button"
                            className="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                            title="Delete this project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* End Card: Upload Next Video */}
            <div 
              onClick={() => onOpenUpload('video')}
              className="w-[280px] shrink-0 snap-start rounded-2xl border-2 border-dashed border-zinc-800 hover:border-amber-400/60 bg-zinc-950/40 hover:bg-amber-500/5 transition-all p-6 flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-amber-400 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 transition-colors mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-base group-hover:text-amber-300">
                {t.addVideoBtn}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-[200px]">
                {language === 'bn' 
                  ? 'আপনার নতুন এডিটিং কাজ বা ইউটিউব লিংক আপলোড করুন' 
                  : 'Add your own video edit or paste YouTube URL to showcase'}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
