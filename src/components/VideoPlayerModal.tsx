import React, { useEffect, useState } from 'react';
import { X, Play, Clock, Eye, Film, Check, Share2, Layers, ExternalLink } from 'lucide-react';
import { Project, Language } from '../types/portfolio';

interface VideoPlayerModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  project,
  language,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const displayTitle = language === 'bn' && project.bnTitle ? project.bnTitle : project.title;
  const displayDesc = language === 'bn' && project.bnDescription ? project.bnDescription : project.description;

  // Extract YouTube ID if applicable (supports /shorts/, youtu.be, watch?v=)
  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = match && match[2].length === 11 ? match[2] : null;
      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      }
      return url;
    } catch {
      return url;
    }
  };

  const isYouTube = project.videoUrl?.includes('youtube.com') || project.videoUrl?.includes('youtu.be');
  const isVimeo = project.videoUrl?.includes('vimeo.com');
  const isVertical = project.aspectRatio === '9:16' || project.videoUrl?.includes('/shorts/');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.videoUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${isVertical ? 'max-w-2xl' : 'max-w-5xl'} bg-[#0C0E14] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-left transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Cinema Player &middot; {project.subcategory} {isVertical ? '(9:16 Reel)' : ''}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg text-amber-400 hover:text-white hover:bg-amber-500/10 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
                title="Watch on original platform"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isYouTube ? 'YouTube' : 'Source'}</span>
              </a>
            )}

            <button
              onClick={handleCopyLink}
              type="button"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
              title="Share project link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? (language === 'bn' ? 'কপি হয়েছে' : 'Copied') : (language === 'bn' ? 'শেয়ার' : 'Share')}</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className={`relative ${isVertical ? 'aspect-[9/16] max-h-[68vh] mx-auto' : 'aspect-video w-full'} bg-black flex items-center justify-center`}>
          {project.videoUrl ? (
            isYouTube ? (
              <iframe
                src={getYouTubeEmbedUrl(project.videoUrl)}
                title={displayTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : isVimeo ? (
              <iframe
                src={`https://player.vimeo.com/video/${project.videoUrl.split('/').pop()}?autoplay=1&color=f59e0b`}
                title={displayTitle}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* Direct HTML5 video player (for direct MP4 links or locally uploaded videos) */
              <video
                src={project.videoUrl}
                poster={project.thumbnailUrl}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-zinc-950">
              <Film className="w-12 h-12 text-zinc-600 mb-3" />
              <p className="text-zinc-300 font-medium">No video stream URL provided.</p>
              <p className="text-zinc-500 text-xs mt-1">Showing project details below.</p>
            </div>
          )}
        </div>

        {/* Video Metadata & Project Breakdown */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[40vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>{project.subcategory}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{project.year}</span>
                {project.client && (
                  <>
                    <span aria-hidden="true">&middot;</span>
                    <span className="text-zinc-400">Client: {project.client}</span>
                  </>
                )}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {displayTitle}
              </h2>
            </div>

            {/* Quick metrics */}
            <div className="flex items-center gap-3 shrink-0">
              {project.duration && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.views && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.views}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {displayDesc}
          </p>

          {/* Editorial Technical Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
              <div className="text-amber-400 font-mono font-medium uppercase tracking-wider">
                {language === 'bn' ? 'সফটওয়্যার ও টুলস' : 'Software & Pipeline'}
              </div>
              <div className="text-zinc-200">
                {project.software.join(', ')}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
              <div className="text-amber-400 font-mono font-medium uppercase tracking-wider">
                {language === 'bn' ? 'কালার সায়েন্স ও রেশিও' : 'Color Grade & Aspect'}
              </div>
              <div className="text-zinc-200">
                {project.aspectRatio || '16:9'} Anamorphic LUT &middot; 4K 60fps
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
              <div className="text-amber-400 font-mono font-medium uppercase tracking-wider">
                {language === 'bn' ? 'হাইলাইট ফিচার' : 'Key Feature'}
              </div>
              <div className="text-zinc-200">
                {project.highlightText || 'High Retention Audience Pacing'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
