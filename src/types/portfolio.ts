export type CategoryType = 'video' | 'graphic';

export type VideoSubcategory = 
  | 'All'
  | 'Commercial & Ads'
  | 'YouTube & Talking Head'
  | 'Cinematic & Documentary'
  | 'Reels & Shorts'
  | 'Motion Graphics';

export type GraphicSubcategory = 
  | 'All'
  | 'Brand Identity & Logo'
  | 'Social Media & Poster'
  | 'YouTube Thumbnail'
  | 'Packaging & Print'
  | 'Vector Illustration';

export interface Project {
  id: string;
  title: string;
  bnTitle?: string;
  category: CategoryType;
  subcategory: string;
  description: string;
  bnDescription?: string;
  client?: string;
  year: string;
  duration?: string; // For videos e.g. "01:45"
  videoType?: 'youtube' | 'vimeo' | 'direct' | 'uploaded';
  videoUrl?: string; // YouTube URL / embed or MP4 video URL or DataURL/Blob
  thumbnailUrl: string;
  software: string[];
  featured?: boolean;
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:3' | '3:4';
  views?: string;
  colorPalette?: string[];
  tags: string[];
  createdAt: number;
  highlightText?: string;
  externalUrl?: string;
}

export type Language = 'bn' | 'en';
