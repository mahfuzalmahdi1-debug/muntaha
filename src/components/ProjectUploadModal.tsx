import React, { useState, useRef } from 'react';
import { X, Upload, Video, Palette, Sparkles, Check, Link as LinkIcon, Film, AlertCircle } from 'lucide-react';
import { Project, Language, CategoryType } from '../types/portfolio';

interface ProjectUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
  language: Language;
  defaultCategory?: CategoryType;
}

export const ProjectUploadModal: React.FC<ProjectUploadModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
  language,
  defaultCategory = 'video',
}) => {
  const [category, setCategory] = useState<CategoryType>(defaultCategory);
  
  // Video fields
  const [videoSourceType, setVideoSourceType] = useState<'url' | 'file'>('url');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string>('');
  
  // Thumbnail
  const [thumbnailType, setThumbnailType] = useState<'url' | 'file'>('url');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState<string>('');

  // Graphic specific
  const [graphicType, setGraphicType] = useState<'url' | 'file'>('file');
  const [graphicUrl, setGraphicUrl] = useState('');
  const [graphicPreviewUrl, setGraphicPreviewUrl] = useState<string>('');
  const [colorPaletteInput, setColorPaletteInput] = useState<string>('#0A0A0C, #F59E0B, #FFFFFF');

  // Common Fields
  const [title, setTitle] = useState('');
  const [bnTitle, setBnTitle] = useState('');
  const [subcategory, setSubcategory] = useState<string>('Commercial & Ads');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [duration, setDuration] = useState('01:30');
  const [highlightText, setHighlightText] = useState('');
  const [selectedSoftware, setSelectedSoftware] = useState<string[]>(['Adobe Premiere Pro']);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const videoFileInputRef = useRef<HTMLInputElement>(null);
  const thumbFileInputRef = useRef<HTMLInputElement>(null);
  const graphicFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const t = {
    bn: {
      modalTitle: 'নতুন প্রজেক্ট যোগ বা আপলোড করুন',
      modalSubtitle: 'এখানে আপনার ভিডিও বা গ্রাফিক্স আর্টওয়ার্ক আপলোড করুন। ওয়েবসাইটটিতে সাথে সাথে শো করবে।',
      tabVideo: 'ভিডিও এডিটিং প্রজেক্ট',
      tabGraphic: 'গ্রাফিক্স ডিজাইন প্রজেক্ট',
      titleLabel: 'প্রজেক্টের নাম (Title)',
      titlePlaceholder: 'যেমন: Cinematic Travel Reel অথবা Nike Commercial',
      bnTitleLabel: 'বাংলা নাম (ঐচ্ছিক)',
      bnTitlePlaceholder: 'যেমন: ট্রাভেল সিনেমাটিক ভিডিও',
      subcatLabel: 'ক্যাটাগরি বা জনরা',
      descLabel: 'প্রজেক্টের বিবরণ (Description)',
      descPlaceholder: 'এই প্রজেক্টে আপনি কি ধরণের কাজ করেছেন তা সংক্ষেপে লিখুন...',
      clientLabel: 'ক্লায়েন্টের নাম (ঐচ্ছিক)',
      yearLabel: 'সাল (Year)',
      durationLabel: 'ভিডিওর সময়সীমা (Duration)',
      highlightLabel: 'স্পেশাল হাইলাইট (যেমন: 4K 60fps, 1M+ Views)',
      videoSourceLabel: 'ভিডিও সোর্স',
      sourceUrl: 'YouTube / Vimeo / অনলাইন লিংক',
      sourceFile: 'কম্পিউটার বা মোবাইল থেকে আপলোড',
      uploadVideoFileBtn: 'ভিডিও ফাইল নির্বাচন করুন (MP4/WebM)',
      videoUrlPlaceholder: 'https://www.youtube.com/watch?v=... অথবা https://vimeo.com/...',
      thumbLabel: 'থাম্বনেইল ইমেজ (কভার ফটো)',
      uploadThumbFileBtn: 'থাম্বনেইল ফাইল আপলোড (JPG/PNG)',
      thumbUrlPlaceholder: 'https://images.unsplash.com/... অথবা ডিরেক্ট ইমেজ লিংক',
      graphicSourceLabel: 'গ্রাফিক্স আর্টওয়ার্ক ইমেজ',
      uploadGraphicFileBtn: 'ডিজাইন ফাইল সিলেক্ট করুন (JPG/PNG)',
      graphicUrlPlaceholder: 'ইমেজ লিংক পেস্ট করুন...',
      paletteLabel: 'কালার প্যালেট হেক্স কোড (কমা দিয়ে লিখুন)',
      softwareLabel: 'যে সফটওয়্যার ব্যবহার করেছেন',
      submitBtn: 'পোর্টফোলিওতে সংরক্ষণ করুন',
      cancelBtn: 'বাতিল',
    },
    en: {
      modalTitle: 'Add or Upload Project',
      modalSubtitle: 'Add your video editing or graphic design work. It will instantly appear on your portfolio carousel.',
      tabVideo: 'Video Editing Project',
      tabGraphic: 'Graphic Design Project',
      titleLabel: 'Project Title',
      titlePlaceholder: 'e.g. Cinematic Commercial or Tech Review',
      bnTitleLabel: 'Bengali Title (Optional)',
      bnTitlePlaceholder: 'e.g. সিনেমাটিক ভিডিও',
      subcatLabel: 'Subcategory / Genre',
      descLabel: 'Project Description',
      descPlaceholder: 'Explain your role, pacing, grading, or design concept...',
      clientLabel: 'Client Name (Optional)',
      yearLabel: 'Year',
      durationLabel: 'Video Duration',
      highlightLabel: 'Key Highlight (e.g. 1.2M Views, Hollywood Grade)',
      videoSourceLabel: 'Video Source',
      sourceUrl: 'YouTube / Vimeo / Direct URL',
      sourceFile: 'Upload Local File from Device',
      uploadVideoFileBtn: 'Select Video File (MP4/WebM)',
      videoUrlPlaceholder: 'https://www.youtube.com/watch?v=... or direct MP4 link',
      thumbLabel: 'Thumbnail Cover Image',
      uploadThumbFileBtn: 'Upload Thumbnail (JPG/PNG)',
      thumbUrlPlaceholder: 'Paste image link or upload below',
      graphicSourceLabel: 'Graphic Artwork Image',
      uploadGraphicFileBtn: 'Select Artwork Image (JPG/PNG)',
      graphicUrlPlaceholder: 'Paste image URL...',
      paletteLabel: 'Color Palette Hex Codes (comma separated)',
      softwareLabel: 'Software & Tools Used',
      submitBtn: 'Save to Portfolio',
      cancelBtn: 'Cancel',
    },
  }[language];

  const videoSubcategories = [
    'Commercial & Ads',
    'YouTube & Talking Head',
    'Cinematic & Documentary',
    'Reels & Shorts',
    'Motion Graphics',
  ];

  const graphicSubcategories = [
    'Brand Identity & Logo',
    'Social Media & Poster',
    'YouTube Thumbnail',
    'Packaging & Print',
    'Vector Illustration',
  ];

  const allSoftwareOptions = [
    'Adobe Premiere Pro',
    'DaVinci Resolve Studio',
    'Adobe After Effects',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'CapCut Pro',
    'Adobe Audition',
    'Cinema 4D',
    'Figma',
    'Blender',
  ];

  const toggleSoftware = (sw: string) => {
    if (selectedSoftware.includes(sw)) {
      setSelectedSoftware(selectedSoftware.filter((s) => s !== sw));
    } else {
      setSelectedSoftware([...selectedSoftware, sw]);
    }
  };

  // Video File Upload handler
  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        setErrorMessage(language === 'bn' ? 'ফাইল সাইজ খুব বেশি (১০০MB এর বেশি)। অপেক্ষাকৃত ছোট ভিডিও বা ইউটিউব লিংক ব্যবহার করুন।' : 'File is too large (>100MB). Consider using YouTube link or compressed MP4.');
        return;
      }
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreviewUrl(url);
      setErrorMessage(null);
    }
  };

  // Thumbnail File Upload handler
  const handleThumbFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setThumbnailPreviewUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Graphic File Upload handler
  const handleGraphicFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setGraphicPreviewUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!title.trim()) {
      setErrorMessage(language === 'bn' ? 'দয়া করে প্রজেক্টের নাম (Title) লিখুন।' : 'Please enter a project title.');
      return;
    }

    let finalThumb = '';
    let finalVideoUrl = '';

    if (category === 'video') {
      finalVideoUrl = videoSourceType === 'file' ? videoPreviewUrl : videoUrl.trim();
      finalThumb = thumbnailType === 'file' ? thumbnailPreviewUrl : thumbnailUrl.trim();

      // If YouTube link, extract thumbnail if user did not provide one
      if (!finalThumb && finalVideoUrl.includes('youtube.com')) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = finalVideoUrl.match(regExp);
        if (match && match[2].length === 11) {
          finalThumb = `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
        }
      }

      if (!finalThumb) {
        // Fallback default image
        finalThumb = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80';
      }
    } else {
      finalThumb = graphicType === 'file' ? graphicPreviewUrl : graphicUrl.trim();
      if (!finalThumb) {
        setErrorMessage(language === 'bn' ? 'দয়া করে গ্রাফিক্স ডিজাইনের ইমেজ ফাইল বা লিংক দিন।' : 'Please upload or provide an image URL for the graphic design.');
        return;
      }
    }

    const colorPalette = colorPaletteInput
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c.startsWith('#'));

    const newProject: Project = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      bnTitle: bnTitle.trim() || undefined,
      category,
      subcategory,
      description: description.trim() || (category === 'video' ? 'High quality video edit and visual narrative.' : 'Creative visual branding and graphic design.'),
      client: client.trim() || undefined,
      year: year.trim() || new Date().getFullYear().toString(),
      duration: category === 'video' ? duration.trim() : undefined,
      videoType: videoSourceType === 'file' ? 'uploaded' : 'direct',
      videoUrl: category === 'video' ? finalVideoUrl : undefined,
      thumbnailUrl: finalThumb,
      software: selectedSoftware.length > 0 ? selectedSoftware : [category === 'video' ? 'Adobe Premiere Pro' : 'Adobe Photoshop'],
      featured: true,
      aspectRatio: category === 'video' ? (subcategory === 'Reels & Shorts' ? '9:16' : '16:9') : '4:3',
      views: category === 'video' ? 'New' : undefined,
      colorPalette: category === 'graphic' && colorPalette.length > 0 ? colorPalette : undefined,
      tags: [subcategory, category === 'video' ? 'Video Edit' : 'Graphic Art'],
      createdAt: Date.now(),
      highlightText: highlightText.trim() || undefined,
    };

    onAddProject(newProject);
    setSuccessMessage(language === 'bn' ? 'প্রজেক্টটি সফলভাবে যুক্ত হয়েছে!' : 'Project added successfully!');
    
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0E1017] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base">
                {t.modalTitle}
              </h3>
              <p className="text-xs text-zinc-400">
                {t.modalSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs: Video vs Graphic */}
        <div className="grid grid-cols-2 p-3 bg-zinc-950/40 border-b border-white/10 gap-2">
          <button
            type="button"
            onClick={() => {
              setCategory('video');
              setSubcategory('Commercial & Ads');
            }}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              category === 'video'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>{t.tabVideo}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setCategory('graphic');
              setSubcategory('Brand Identity & Logo');
            }}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              category === 'graphic'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>{t.tabGraphic}</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
              <Check className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Title and Subcategory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300">
                {t.titleLabel} <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t.titlePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300">
                {t.subcatLabel}
              </label>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
              >
                {(category === 'video' ? videoSubcategories : graphicSubcategories).map((sub) => (
                  <option key={sub} value={sub} className="bg-zinc-900 text-white">
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bengali Title (Optional) */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-300">
              {t.bnTitleLabel}
            </label>
            <input
              type="text"
              value={bnTitle}
              onChange={(e) => setBnTitle(e.target.value)}
              placeholder={t.bnTitlePlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* VIDEO SPECIFIC INPUTS */}
          {category === 'video' && (
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                  {t.videoSourceLabel}
                </span>

                <div className="flex items-center gap-1 p-0.5 bg-black/40 rounded-lg border border-white/10">
                  <button
                    type="button"
                    onClick={() => setVideoSourceType('url')}
                    className={`px-2.5 py-1 text-[11px] rounded font-medium transition-colors ${
                      videoSourceType === 'url' ? 'bg-amber-400 text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {t.sourceUrl}
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoSourceType('file')}
                    className={`px-2.5 py-1 text-[11px] rounded font-medium transition-colors ${
                      videoSourceType === 'file' ? 'bg-amber-400 text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {t.sourceFile}
                  </button>
                </div>
              </div>

              {videoSourceType === 'url' ? (
                <div className="space-y-1.5">
                  <div className="relative">
                    <input
                      type="url"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder={t.videoUrlPlaceholder}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors font-mono"
                    />
                    <LinkIcon className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    YouTube URL, Vimeo URL, বা সরাসরি .mp4 ভিডিও লিংক দিতে পারেন।
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <input
                    type="file"
                    ref={videoFileInputRef}
                    accept="video/mp4,video/webm,video/quicktime"
                    onChange={handleVideoFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => videoFileInputRef.current?.click()}
                    className="w-full py-4 border-2 border-dashed border-zinc-700 hover:border-amber-400 rounded-xl flex flex-col items-center justify-center gap-1.5 text-zinc-400 hover:text-white bg-zinc-950/40 cursor-pointer transition-colors"
                  >
                    <Upload className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-medium">
                      {videoFile ? videoFile.name : t.uploadVideoFileBtn}
                    </span>
                  </button>
                  {videoPreviewUrl && (
                    <video src={videoPreviewUrl} controls className="w-full max-h-40 rounded-lg bg-black" />
                  )}
                </div>
              )}

              {/* Thumbnail selection */}
              <div className="pt-2 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-300">
                    {t.thumbLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setThumbnailType('file')}
                      className={`px-2 py-0.5 rounded ${thumbnailType === 'file' ? 'bg-zinc-700 text-white' : 'text-zinc-500'}`}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      onClick={() => setThumbnailType('url')}
                      className={`px-2 py-0.5 rounded ${thumbnailType === 'url' ? 'bg-zinc-700 text-white' : 'text-zinc-500'}`}
                    >
                      URL
                    </button>
                  </div>
                </div>

                {thumbnailType === 'file' ? (
                  <div>
                    <input
                      type="file"
                      ref={thumbFileInputRef}
                      accept="image/*"
                      onChange={handleThumbFileChange}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => thumbFileInputRef.current?.click()}
                      className="w-full py-2.5 border border-dashed border-zinc-700 hover:border-amber-400 rounded-xl text-xs text-zinc-400 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.uploadThumbFileBtn}</span>
                    </button>
                  </div>
                ) : (
                  <input
                    type="url"
                    value={thumbnailUrl}
                    onChange={(e) => setThumbnailUrl(e.target.value)}
                    placeholder={t.thumbUrlPlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500"
                  />
                )}

                {thumbnailPreviewUrl && (
                  <div className="relative aspect-video max-w-xs rounded-lg overflow-hidden border border-white/10">
                    <img src={thumbnailPreviewUrl} alt="Thumbnail preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* GRAPHIC DESIGN SPECIFIC INPUTS */}
          {category === 'graphic' && (
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/10 space-y-4">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                {t.graphicSourceLabel}
              </span>

              <div className="space-y-2">
                <input
                  type="file"
                  ref={graphicFileInputRef}
                  accept="image/*"
                  onChange={handleGraphicFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => graphicFileInputRef.current?.click()}
                  className="w-full py-4 border-2 border-dashed border-zinc-700 hover:border-amber-400 rounded-xl flex flex-col items-center justify-center gap-1.5 text-zinc-400 hover:text-white bg-zinc-950/40 cursor-pointer transition-colors"
                >
                  <Upload className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-medium">
                    {graphicPreviewUrl ? (language === 'bn' ? 'ছবি পরিবর্তন করুন' : 'Change Selected Image') : t.uploadGraphicFileBtn}
                  </span>
                </button>

                {graphicPreviewUrl && (
                  <div className="relative aspect-video max-w-sm rounded-lg overflow-hidden border border-white/10 mx-auto">
                    <img src={graphicPreviewUrl} alt="Artwork preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="pt-2">
                  <label className="text-[11px] text-zinc-400 block mb-1">
                    অথবা সরাসরি ইমেজ লিংক (URL):
                  </label>
                  <input
                    type="url"
                    value={graphicUrl}
                    onChange={(e) => {
                      setGraphicUrl(e.target.value);
                      if (e.target.value) setGraphicPreviewUrl(e.target.value);
                    }}
                    placeholder={t.graphicUrlPlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500"
                  />
                </div>

                <div className="pt-2">
                  <label className="text-xs font-medium text-zinc-300 block mb-1">
                    {t.paletteLabel}
                  </label>
                  <input
                    type="text"
                    value={colorPaletteInput}
                    onChange={(e) => setColorPaletteInput(e.target.value)}
                    placeholder="#0A0A0C, #F59E0B, #FFFFFF"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-mono placeholder:text-zinc-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-300">
              {t.descLabel}
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.descPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Client, Year, Duration, Highlight */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-zinc-400">
                {t.clientLabel}
              </label>
              <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="Apex Media"
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-zinc-400">
                {t.yearLabel}
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs font-mono"
              />
            </div>

            {category === 'video' && (
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-zinc-400">
                  {t.durationLabel}
                </label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="01:30"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs font-mono"
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-zinc-400">
                {t.highlightLabel}
              </label>
              <input
                type="text"
                value={highlightText}
                onChange={(e) => setHighlightText(e.target.value)}
                placeholder="4K 60fps"
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs"
              />
            </div>
          </div>

          {/* Software selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-300">
              {t.softwareLabel}
            </label>
            <div className="flex flex-wrap gap-2">
              {allSoftwareOptions.map((sw) => {
                const isSelected = selectedSoftware.includes(sw);
                return (
                  <button
                    key={sw}
                    type="button"
                    onClick={() => toggleSoftware(sw)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-black font-semibold'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {sw}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-white/10 text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              {t.cancelBtn}
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              {t.submitBtn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
