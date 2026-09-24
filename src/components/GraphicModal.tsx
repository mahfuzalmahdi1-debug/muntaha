import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Copy, Check, Palette, ExternalLink } from 'lucide-react';
import { Project, Language } from '../types/portfolio';

interface GraphicModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const GraphicModal: React.FC<GraphicModalProps> = ({
  project,
  language,
  onClose,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    setZoomLevel(1);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const displayTitle = language === 'bn' && project.bnTitle ? project.bnTitle : project.title;
  const displayDesc = language === 'bn' && project.bnDescription ? project.bnDescription : project.description;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0C0E14] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Artwork Inspector &middot; {project.subcategory}
            </span>
          </div>

          {/* Zoom controls & close */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
              <button
                onClick={() => setZoomLevel((prev) => Math.max(0.75, prev - 0.25))}
                type="button"
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-2 text-zinc-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                type="button"
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                type="button"
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-2.5 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600/40 transition-colors text-xs flex items-center gap-1.5 cursor-pointer font-medium"
                title="View original project on Behance"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Behance</span>
              </a>
            )}

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

        {/* Artwork Display Area with Smooth Zoom */}
        <div className="relative w-full max-h-[60vh] min-h-[340px] flex items-center justify-center p-4 bg-zinc-950 overflow-hidden select-none">
          <div
            className="transition-transform duration-200 ease-out max-w-full max-h-[55vh] flex items-center justify-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={project.thumbnailUrl}
              alt={displayTitle}
              className="max-h-[55vh] max-w-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Project Details Panel */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[35vh] overflow-y-auto border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <span>{project.subcategory}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{project.year}</span>
                {project.client && (
                  <>
                    <span aria-hidden="true">&middot;</span>
                    <span className="text-zinc-400">{project.client}</span>
                  </>
                )}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {displayTitle}
              </h2>
            </div>

            {/* Software list */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-300">
              {project.software.map((sw, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  {sw}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {displayDesc}
          </p>

          {/* Color Palette Inspection with Copy-to-Clipboard */}
          {project.colorPalette && project.colorPalette.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                {language === 'bn' ? 'কালার প্যালেট (ক্লিক করে কপি করুন):' : 'Color Palette (Click to copy hex):'}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.colorPalette.map((hex, i) => (
                  <button
                    key={i}
                    onClick={() => handleCopyHex(hex)}
                    type="button"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-amber-400 transition-colors cursor-pointer group"
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="font-mono text-xs text-zinc-300 group-hover:text-white">
                      {hex}
                    </span>
                    {copiedHex === hex ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
