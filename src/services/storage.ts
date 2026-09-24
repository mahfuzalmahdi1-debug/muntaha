import { Project } from '../types/portfolio';
import { INITIAL_PROJECTS } from '../data/initialProjects';

const STORAGE_KEY = 'portfolio_projects_data_v4';
const PROFILE_KEY = 'portfolio_profile_settings_v4';

export interface ProfileInfo {
  name: string;
  role: string;
  bnRole: string;
  bio: string;
  bnBio: string;
  email: string;
  whatsapp: string;
  location: string;
  socials: {
    youtube?: string;
    behance?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

export const DEFAULT_PROFILE: ProfileInfo = {
  name: 'মাহফুজ আল মাহদী / Mahfuz Al Mahdi',
  role: 'Video Editor & Graphic Designer',
  bnRole: 'ভিডিও এডিটর ও গ্রাফিক্স ডিজাইনার',
  bio: 'Passionate visual storyteller with 4 months of dedicated professional experience transforming raw footage into high-retention content and crafting distinctive visual brand systems.',
  bnBio: 'নিবেদিত ৪ মাসের পেশাদার অভিজ্ঞতায় গল্পকে দৃশ্যে রূপান্তর করছি। প্রিমিয়ার প্রো ও ডাভিঞ্চি দিয়ে সিনেম্যাটিক ভিডিও এডিটিং এবং ফটোশপ ও ইলাস্ট্রেটর দিয়ে আধুনিক গ্রাফিক্স ডিজাইন করাই আমার স্পেশালিটি।',
  email: 'mahfuzalmahdi.1@gmail.com',
  whatsapp: '+8801790820497',
  location: 'Rajshahi, Bangladesh',
  socials: {
    youtube: 'https://www.youtube.com/@Mahfuzalmahdi.1',
    behance: 'https://www.behance.net/mahfuzalmahdi',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    github: 'https://github.com',
  }
};

export const getStoredProjects = (): Project[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
      return INITIAL_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Ensure real YouTube videos and Behance artworks exist in stored list
      const hasRealArtworks = parsed.some((p: Project) => p.id === 'behance-mocup');
      if (!hasRealArtworks) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
        return INITIAL_PROJECTS;
      }
      return parsed;
    }
    return INITIAL_PROJECTS;
  } catch (err) {
    console.error('Failed to load projects from storage:', err);
    return INITIAL_PROJECTS;
  }
};

export const saveProjectsToStorage = (projects: Project[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error('Failed to save projects to storage:', err);
  }
};

export const getStoredProfile = (): ProfileInfo => {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROFILE;
  }
};

export const saveProfileToStorage = (profile: ProfileInfo): void => {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save profile to storage:', err);
  }
};

export const exportProjectsToJson = (projects: Project[]): void => {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(projects, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `portfolio_projects_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};
