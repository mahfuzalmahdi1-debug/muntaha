import React from 'react';
import { User, Award, CheckCircle2, Monitor, Cpu, Sparkles, Download, Mail, ArrowUpRight, MessageSquare, ExternalLink } from 'lucide-react';
import { Language } from '../types/portfolio';

const PROFILE_AVATAR_URL = 'https://i.postimg.cc/fTCk5mTH/Chat-GPT-Image-Sep-22-2026-10-13-35-PM.png';

interface AboutSectionProps {
  language: Language;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language, onOpenContact }) => {
  const t = {
    bn: {
      kicker: 'আমার সম্পর্কে ও কাজের দর্শন',
      title: 'ভিডিও ও গ্রাফিক্সের মাধ্যমে ব্র্যান্ডের গল্প বলা',
      introBio: 'আমি মাহফুজ আল মাহদী — একজন উদ্যমী ভিডিও এডিটর এবং গ্রাফিক্স ডিজাইনার। ৪ মাসের নিবেদিত পেশাদার অভিজ্ঞতায় আমি বিভিন্ন কন্টেন্ট ক্রিয়েটর, সোশ্যাল মিডিয়া চ্যানেল ও ক্লায়েন্টদের জন্য আকর্ষণীয় ভিডিও এবং আধুনিক ভিজ্যুয়াল ডিজাইন তৈরি করে আসছি।',
      philosophyTitle: 'আমার কাজের মূল দর্শন:',
      philosophyVideo: 'ভিডিও এডিটিংয়ে আমার প্রধান লক্ষ্য থাকে অডিয়েন্স রিটেনশন (Audience Retention)। প্রথম ৩ সেকেন্ডের হুক, বিট-সিঙ্কড মিউজিক, সঠিক পেসিং এবং কালার গ্রেডিংয়ের মাধ্যমে দর্শকের চোখ স্ক্রিনে ধরে রাখা।',
      philosophyGraphic: 'গ্রাফিক্স ডিজাইনে আমি মিনিমালিজম ও পাওয়ারফুল টাইপোগ্রাফিতে বিশ্বাসী। একটি পরিষ্কার ও উদ্দেশ্যমূলক ডিজাইন ব্র্যান্ডকে অনন্য পরিচিতি এনে দেয়।',
      skillsTitle: 'সফটওয়্যার দক্ষতা',
      gearTitle: 'ওয়ার্কস্টেশন ও স্টুডিও গিয়ার',
      gearMonitors: 'কালার ক্যালিব্রেটেড ৪কে আইপিএস ডিসপ্লে (100% sRGB & DCI-P3)',
      gearCpu: 'হাই-পারফর্মেন্স রেন্ডার রিগ (RTX 4080 + 64GB DDR5 RAM)',
      gearAudio: 'স্টুডিও মনিটর স্পিকার ও বেয়ারডায়নামিক রেফারেন্স হেডফোন',
      gearStorage: 'NVMe Gen4 আল্ট্রাফাস্ট এসএসডি এডিটিং ড্রাইভ',
      downloadCv: 'পোর্টফোলিও সামারি ডাউনলোড',
      contactMe: 'কথা বলুন / কাজ দিন',
      experienceYears: '৪ মাস প্রফেশনাল অভিজ্ঞতা',
      satisfactionRate: '১০০% অন-টাইম ডেলিভারি',
    },
    en: {
      kicker: 'About Me & Creative Philosophy',
      title: 'Telling Brand Stories Through Motion & Design',
      introBio: 'I am Mahfuz Al Mahdi — a dedicated video editor and graphic designer with 4 months of intensive, hands-on professional experience creating high-impact videos for creators and clean, modern brand assets.',
      philosophyTitle: 'My Creative Core Philosophy:',
      philosophyVideo: 'In video editing, retention is king. From the opening 3-second hook to seamless pacing, sound markers, and crisp color grading, every cut is calculated to keep viewers hooked.',
      philosophyGraphic: 'In graphic design, clarity and bold typography win. A distinctive visual identity and high-contrast thumbnail gives brands an unmistakable edge.',
      skillsTitle: 'Software Proficiency',
      gearTitle: 'Editing Suite & Hardware Gear',
      gearMonitors: 'Color-calibrated 4K IPS display (100% sRGB & DCI-P3 coverage)',
      gearCpu: 'Dedicated high-speed rendering rig (RTX 4080, 64GB RAM)',
      gearAudio: 'Studio reference monitors & high-fidelity monitoring cans',
      gearStorage: 'Ultra-fast NVMe Gen4 dedicated video scratch drives',
      downloadCv: 'Download Portfolio Summary',
      contactMe: 'Get In Touch',
      experienceYears: '4 Months Hands-on Experience',
      satisfactionRate: '100% On-Time Project Delivery',
    },
  }[language];

  const softwareSkills = [
    { name: 'Adobe Premiere Pro', level: 96, category: 'Video Editing' },
    { name: 'DaVinci Resolve Studio', level: 92, category: 'Color Grading & Finishing' },
    { name: 'Adobe After Effects', level: 88, category: 'Motion Graphics & VFX' },
    { name: 'Adobe Photoshop', level: 95, category: 'Thumbnails & Manipulation' },
    { name: 'Adobe Illustrator', level: 90, category: 'Vector Branding & Identity' },
    { name: 'Adobe Audition / Sound FX', level: 84, category: 'Audio Mastering & SFX' },
  ];

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <section id="about-section" className="py-20 lg:py-24 border-b border-white/5 bg-[#090A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <User className="w-3.5 h-3.5" />
            <span>{t.kicker}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* 2-Column Split: Avatar & Bio Left, Technical Skills & Gear Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Creative Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Profile Avatar Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-zinc-900/60 border border-white/10">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl bg-zinc-950">
                <img
                  src={PROFILE_AVATAR_URL}
                  alt="Mahfuz Al Mahdi - Video Editor & Graphic Designer"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-zinc-950" title="Available for freelance" />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="font-display text-2xl font-bold text-white">
                  {language === 'bn' ? 'মাহফুজ আল মাহদী' : 'Mahfuz Al Mahdi'}
                </div>
                <div className="text-xs text-amber-400 font-mono tracking-wider uppercase">
                  Video Editor &middot; Motion &middot; Visual Designer
                </div>
                <div className="text-xs text-zinc-400 flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.experienceYears}</span>
                  </span>
                  <span>&middot;</span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    Available for Work
                  </span>
                </div>
              </div>
            </div>

            {/* Prose Bio */}
            <p className="text-base text-zinc-300 leading-relaxed">
              {t.introBio}
            </p>

            {/* Philosophy Box */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.philosophyTitle}</span>
              </h3>
              
              <div className="space-y-2 text-xs text-zinc-300 leading-relaxed">
                <p>
                  <strong className="text-white font-medium">1. {language === 'bn' ? 'ভিডিও এডিটিং' : 'Video Editing'}:</strong> {t.philosophyVideo}
                </p>
                <p>
                  <strong className="text-white font-medium">2. {language === 'bn' ? 'গ্রাফিক্স ডিজাইন' : 'Graphic Design'}:</strong> {t.philosophyGraphic}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact-section"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{t.contactMe}</span>
              </a>

              <a
                href="https://wa.me/8801790820497?text=Hello%20Mahfuz,%20I%20am%20interested%20in%20your%20Video%20Editing%20and%20Graphic%20Design%20services"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+8801790820497)</span>
              </a>

              <a
                href="https://www.behance.net/mahfuzalmahdi"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/40 text-blue-400 hover:text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Behance Profile</span>
              </a>

              <button
                onClick={handlePrintSummary}
                type="button"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>{t.downloadCv}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Software Skills & Hardware Rig */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Skills Radar / Bars */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">
                  {t.skillsTitle}
                </h3>
                <span className="text-xs font-mono text-zinc-500">Benchmark 2026</span>
              </div>

              <div className="space-y-4">
                {softwareSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-200 font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-zinc-500 font-mono">{skill.category}</span>
                        <span className="text-amber-400 font-mono tabular-nums font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    {/* Bar */}
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware & Studio Gear */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                <Cpu className="w-4 h-4" />
                <span>{t.gearTitle}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex items-start gap-2.5">
                  <Monitor className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{t.gearMonitors}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{t.gearCpu}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{t.gearAudio}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{t.gearStorage}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
