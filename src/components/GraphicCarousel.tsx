import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Palette, Maximize2, Plus, Sparkles, Layers, Trash2, ExternalLink } from 'lucide-react';
import { Project, Language } from '../types/portfolio';

interface GraphicCarouselProps {
  projects: Project[];
  language: Language;
  onSelectGraphic: (project: Project) => void;
  onOpenUpload: (category: 'graphic') => void;
  onDeleteProject?: (id: string) => void;
}

export const GraphicCarousel: React.FC<GraphicCarouselProps> = ({
  projects,
  language,
  onSelectGraphic,
  onOpenUpload,
  onDeleteProject,
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const t = {
    bn: {
      sectionKicker: 'গ্রাফিক্স ডিজাইন পোর্টফোলিও',
      title: 'ভিজ্যুয়াল আর্ট ও ব্র্যান্ডিং শোকেস',
      subtitle: 'লোগো ও ব্র্যান্ড আইডেন্টিটি, হাই-সিটিআর ইউটিউব থাম্বনেইল, সোশ্যাল মিডিয়া পোস্টার এবং ভেক্টর আর্টের সমাহার। প্রতিটি ডিজাইনে ক্লিক করে বড় করে দেখুন।',
      all: 'সকল ডিজাইন',
      branding: 'ব্র্যান্ড আইডেন্টিটি ও লোগো',
      social: 'সোশ্যাল মিডিয়া ও পোস্টার',
      thumbnails: 'ইউটিউব থাম্বনেইল',
      packaging: 'প্যাকেজিং ও প্রিন্ট',
      vector: 'ভেক্টর ইলাস্ট্রেশন',
      inspectBtn: 'বিস্তারিত ও বড় করে দেখুন',
      addDesignBtn: 'নতুন ডিজাইন যোগ করুন',
      behanceBtn: 'বিহ্যান্স প্রোফাইল',
      empty: 'এই ক্যাটাগরিতে এখনও কোনো ডিজাইন নেই। আপনি নিজে নতুন ডিজাইন আপলোড করতে পারেন!',
    },
    en: {
      sectionKicker: 'Graphic Design Portfolio',
      title: 'Visual Identity & Graphic Showcase',
      subtitle: 'Brand identity systems, high-CTR YouTube thumbnails, brutalist posters, and vector illustrations. Click any artwork to inspect in high resolution.',
      all: 'All Designs',
      branding: 'Brand Identity & Logo',
      social: 'Social Media & Poster',
      thumbnails: 'YouTube Thumbnail',
      packaging: 'Packaging & Print',
      vector: 'Vector Illustration',
      inspectBtn: 'Inspect Artwork',
      addDesignBtn: 'Add New Design',
      behanceBtn: 'Behance Portfolio',
      empty: 'No graphic projects in this category yet. You can upload a new artwork now!',
    },
  }[language];

  const subcategories = [
    { key: 'All', label: t.all },
    { key: 'Brand Identity & Logo', label: t.branding },
    { key: 'Social Media & Poster', label: t.social },
    { key: 'YouTube Thumbnail', label: t.thumbnails },
    { key: 'Packaging & Print', label: t.packaging },
    { key: 'Vector Illustration', label: t.vector },
  ];

  const filteredProjects = projects.filter((p) => {
    if (p.category !== 'graphic') return false;
    if (selectedSubcategory === 'All') return true;
    return p.subcategory === selectedSubcategory;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="graphic-showcase" className="py-20 lg:py-24 border-b border-white/5 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Palette className="w-3.5 h-3.5" />
              <span>{t.sectionKicker}</span>
              <span aria-hidden="true" className="text-zinc-600">&middot;</span>
              <span className="text-zinc-400 font-mono tabular-nums">{filteredProjects.length} Artworks</span>
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
            <a
              href="https://www.behance.net/mahfuzalmahdi"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              title="Mahfuz Al Mahdi Behance Profile"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t.behanceBtn}</span>
            </a>

            <button
              onClick={() => onOpenUpload('graphic')}
              type="button"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-medium transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addDesignBtn}</span>
            </button>

            <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-white/10 rounded-xl">
              <button
                onClick={() => scroll('left')}
                type="button"
                className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer disabled:opacity-40"
                aria-label="Previous Graphic"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                type="button"
                className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer disabled:opacity-40"
                aria-label="Next Graphic"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
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
            <Layers className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm max-w-md mx-auto">{t.empty}</p>
            <button
              onClick={() => onOpenUpload('graphic')}
              type="button"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-black text-xs font-semibold"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addDesignBtn}</span>
            </button>
          </div>
        ) : (
          /* Carousel Track */
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
                  className="w-[320px] sm:w-[360px] shrink-0 snap-start rounded-2xl overflow-hidden bg-zinc-900/80 border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col group shadow-lg"
                >
                  {/* Artwork Showcase Area */}
                  <div 
                    onClick={() => onSelectGraphic(project)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950 cursor-pointer"
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={displayTitle}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />

                    {/* Zoom Icon Button */}
                    <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/10 group-hover:bg-amber-400/90 text-white group-hover:text-black flex items-center justify-center backdrop-blur-md transition-all group-hover:scale-110 opacity-0 group-hover:opacity-100">
                      <Maximize2 className="w-5 h-5" />
                    </div>

                    {/* Top subcategory chip */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-200">
                      <div className="flex items-center gap-1.5">
                        <span className="bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                          {project.subcategory}
                        </span>
                        {project.externalUrl?.includes('behance.net') && (
                          <span className="bg-blue-600/80 backdrop-blur-md px-1.5 py-0.5 rounded border border-blue-400/40 text-[10px] text-white font-bold tracking-wider">
                            Behance
                          </span>
                        )}
                      </div>
                      <span className="bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-zinc-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom color palette preview inside image */}
                    {project.colorPalette && project.colorPalette.length > 0 && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                        <span className="text-[10px] text-zinc-400 font-mono mr-1">Palette:</span>
                        {project.colorPalette.map((hex, i) => (
                          <span
                            key={i}
                            className="w-3 h-3 rounded-full border border-white/20"
                            style={{ backgroundColor: hex }}
                            title={hex}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Artwork Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-[11px] text-amber-400 font-mono uppercase tracking-wider mb-1">
                        {project.highlightText || project.subcategory}
                      </div>

                      <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {displayTitle}
                      </h3>

                      <p className="text-xs text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
                        {displayDesc}
                      </p>
                    </div>

                    {/* Software & Inspect Action */}
                    <div className="pt-3 border-t border-white/5 space-y-3">
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400">
                        {project.software.map((sw, idx) => (
                          <span key={idx} className="bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            {sw}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectGraphic(project)}
                          type="button"
                          className="flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-amber-400 hover:text-black text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{t.inspectBtn}</span>
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

            {/* End Card: Upload Next Graphic Design */}
            <div 
              onClick={() => onOpenUpload('graphic')}
              className="w-[280px] shrink-0 snap-start rounded-2xl border-2 border-dashed border-zinc-800 hover:border-amber-400/60 bg-zinc-950/40 hover:bg-amber-500/5 transition-all p-6 flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-amber-400 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 transition-colors mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-base group-hover:text-amber-300">
                {t.addDesignBtn}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-[200px]">
                {language === 'bn' 
                  ? 'আপনার নতুন গ্রাফিক্স, থাম্বনেইল বা ব্র্যান্ড আর্ট আপলোড করুন' 
                  : 'Upload your own graphic artwork, thumbnail, or branding'}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
