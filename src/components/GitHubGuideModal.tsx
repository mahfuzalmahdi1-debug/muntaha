import React, { useState } from 'react';
import { X, Github, Download, Check, Copy, ExternalLink, Terminal, Globe, Rocket } from 'lucide-react';
import { Language, Project } from '../types/portfolio';
import { exportProjectsToJson } from '../services/storage';

interface GitHubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  language: Language;
}

export const GitHubGuideModal: React.FC<GitHubGuideModalProps> = ({
  isOpen,
  onClose,
  projects,
  language,
}) => {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const t = {
    bn: {
      title: 'গিটহাব থেকে পোর্টফোলিও পাবলিশ করার পূর্ণাঙ্গ গাইডলাইন',
      subtitle: 'আপনি পরবর্তীতে যেভাবে এই প্রজেক্টটি গিটহাবে আপলোড করবেন এবং সম্পূর্ণ ফ্রিতে অনলাইনে লাইভ করবেন:',
      exportDataTitle: 'আপনার কাজের ডেটা ব্যাকআপ ও এক্সপোর্ট',
      exportDataDesc: 'আপনি যদি এই ওয়েবসাইটে নতুন ভিডিও বা গ্রাফিক্স যুক্ত করে থাকেন, তা একটি ক্লিকেই JSON ফাইল হিসেবে নামিয়ে রাখতে পারেন।',
      exportBtn: 'সকল প্রজেক্টের JSON ডেটা ডাউনলোড করুন',
      step1Title: 'ধাপ ১: গিটহাবে নতুন রিপোজিটরি তৈরি করুন',
      step1Desc: 'GitHub.com এ লগইন করে একটি নতুন রিপোজিটরি তৈরি করুন (যেমন: "my-portfolio")।',
      step2Title: 'ধাপ ২: টার্মিনালে কোড পুশ করুন',
      step3Title: 'ধাপ ৩: সম্পূর্ণ ফ্রিতে লাইভ ওয়েবসাইট পাবলিশ করুন (Vercel বা Netlify)',
      step3Desc: 'Vercel.com বা Netlify.com এ গিয়ে ফ্রিতে সাইনআপ করে আপনার GitHub রিপোজিটরি সিলেক্ট করুন। ১ মিনিটেই আপনার নিজস্ব লাইভ ডোমেইন (যেমন: yourname.vercel.app) তৈরি হয়ে যাবে!',
      step4Title: 'ধাপ ৪: ভবিষ্যতে নতুন কাজ আপডেট করার নিয়ম',
      step4Desc: 'ভবিষ্যতে src/data/initialProjects.ts ফাইলে নতুন ভিডিও বা ডিজাইন যুক্ত করে "git push" করলেই স্বয়ংক্রিয়ভাবে লাইভ সাইট আপডেট হয়ে যাবে।',
      closeBtn: 'বুঝেছি / বন্ধ করুন',
    },
    en: {
      title: 'Guide: How to Publish This Portfolio to GitHub',
      subtitle: 'Complete step-by-step instructions to push this codebase to GitHub and host it online for free:',
      exportDataTitle: 'Backup & Export Your Project Data',
      exportDataDesc: 'If you added custom videos or graphics in this app, you can export them as a JSON file.',
      exportBtn: 'Export Projects JSON',
      step1Title: 'Step 1: Create a GitHub Repository',
      step1Desc: 'Log in to GitHub.com and create a new repository named "video-graphic-portfolio".',
      step2Title: 'Step 2: Push your code via Terminal / Git',
      step3Title: 'Step 3: Deploy Free to Vercel or Netlify',
      step3Desc: 'Go to Vercel.com or Netlify.com, connect your GitHub account, and select this repository. It builds and gives you a free live URL (e.g. yourname.vercel.app) within 60 seconds!',
      step4Title: 'Step 4: Updating with New Works in Future',
      step4Desc: 'Add your new video URLs or graphics directly in src/data/initialProjects.ts, run git push, and Vercel will automatically redeploy.',
      closeBtn: 'Got it / Close',
    },
  }[language];

  const codeSnippets = [
    `# 1. Initialize and add files
git init
git add .
git commit -m "Initial portfolio release with video & graphic carousels"

# 2. Link your GitHub repository and push
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main`,
  ];

  const handleCopyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0C0E14] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-white">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base">
                {t.title}
              </h3>
              <p className="text-xs text-zinc-400">
                {t.subtitle}
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

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[72vh] overflow-y-auto">
          
          {/* Export Box */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                <Download className="w-4 h-4" />
                <span>{t.exportDataTitle}</span>
              </div>
              <p className="text-xs text-zinc-300">
                {t.exportDataDesc}
              </p>
            </div>

            <button
              onClick={() => exportProjectsToJson(projects)}
              type="button"
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-sm"
            >
              {t.exportBtn}
            </button>
          </div>

          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{t.step1Title}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-6">
              {t.step1Desc}
            </p>
          </div>

          {/* Step 2: Terminal commands */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>{t.step2Title}</span>
            </div>
            
            <div className="relative pl-6">
              <div className="p-4 rounded-xl bg-black border border-white/10 font-mono text-xs text-zinc-200 overflow-x-auto">
                <pre>{codeSnippets[0]}</pre>
                <button
                  onClick={() => handleCopyCode(codeSnippets[0], 0)}
                  type="button"
                  className="absolute top-2 right-2 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer text-[11px] flex items-center gap-1"
                >
                  {copiedCodeIndex === 0 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCodeIndex === 0 ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Vercel Free Hosting */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Rocket className="w-4 h-4 text-amber-400" />
              <span>{t.step3Title}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-6">
              {t.step3Desc}
            </p>
          </div>

          {/* Step 4: Future Updates */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <ExternalLink className="w-4 h-4 text-amber-400" />
              <span>{t.step4Title}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-6">
              {t.step4Desc}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-zinc-950/60 flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-colors cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
};
