import React from 'react';
import { Compass, Scissors, Sliders, Rocket, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { Language } from '../types/portfolio';

interface WorkflowSectionProps {
  language: Language;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ language }) => {
  const t = {
    bn: {
      kicker: 'কাজের পদ্ধতি ও পাইপলাইন',
      title: 'আইডিয়া থেকে মাস্টারপিস — আমার প্রফেশনাল ওয়ার্কফ্লো',
      subtitle: 'প্রতিটি ভিডিও এবং গ্রাফিক্স ডিজাইন সর্বোচ্চ মান ও সময়মতো ডেলিভারির জন্য আমি সুনির্দিষ্ট ৪-ধাপের পাইপলাইন অনুসরণ করি।',
      steps: [
        {
          num: '01',
          icon: Compass,
          phase: 'ব্রিফিং ও ক্রিয়েটিভ প্ল্যানিং',
          title: 'লক্ষ্য ও অডিয়েন্স রিসার্চ',
          desc: 'প্রজেক্টের টার্গেট অডিয়েন্স, প্ল্যাটফর্ম (YouTube, Reels, Facebook) এবং প্রত্যাশিত ভিজ্যুয়াল স্টাইল ঠিক করা। রেফারেন্স ভিডিও ও ব্র্যান্ড গাইডলাইন সমন্বয়।',
          deliverables: ['ক্রিয়েটিভ ডিরেকশন', 'হুক ও স্টোরিবোর্ড কনসেপ্ট', 'টাইমলাইন প্ল্যান'],
          tag: 'Day 1',
        },
        {
          num: '02',
          icon: Scissors,
          phase: 'ফুটেজ সিঙ্ক ও রাফ কাট',
          title: 'পেইসিং ও ন্যারেটিভ বিল্ডআপ',
          desc: 'ফুটেজের অপ্রয়োজনীয় অংশ ট্রিম করে প্রথম ৩ সেকেন্ডের আকর্ষণীয় হুক তৈরি, ডায়লগ কাট ও গল্পের প্রধান ছন্দ (Rhythm) দাঁড় করানো।',
          deliverables: ['অ্যাসেম্বলি কাট', 'অডিয়েন্স রিটেনশন হুক', 'বি-রোল সিলেকশন'],
          tag: 'Day 2-3',
        },
        {
          num: '03',
          icon: Sliders,
          phase: 'সাউন্ড ডিজাইন ও কালার গ্রেডিং',
          title: 'ভিজ্যুয়াল ও অডিও পলিশিং',
          desc: 'DaVinci Resolve-এ সিনেম্যাটিক কালার গ্রেডিং, অডিও নয়েজ রিমুভাল, সাউন্ড ইফেক্টস (SFX), ডায়নামিক ক্যাপশন ও মোশন গ্রাফিক্স সংযোজন।',
          deliverables: ['কালার গ্রেডিং (Rec.709)', 'লেয়ার্ড সাউন্ড মিক্সਿੰগ', 'মোশন গ্রাফিক্স'],
          tag: 'Day 4',
        },
        {
          num: '04',
          icon: Rocket,
          phase: 'ক্লায়েন্ট রিভিউ ও মাস্টার ডেলিভারি',
          title: 'রিভিশন ও ফাইনাল এক্সপোর্ট',
          desc: 'ক্লায়েন্টের ফিডব্যাক অনুযায়ী ফাইনাল টাচ এবং ৪কে / ফুল এইচডি প্ল্যাটফর্ম-অপ্টিমাইজড ফরম্যাটে সরাসরি ডেলিভারি।',
          deliverables: ['৪কে / ১০৮০পি মাস্টার ফাইল', 'সোশ্যাল ভার্টিক্যাল রিলস কাট', 'হাই-সিটিআর থাম্বনেইল'],
          tag: 'Day 5',
        },
      ],
      guaranteeTitle: 'আমার কাজের নিশ্চয়তা:',
      guarantee1: 'সময়মতো ১০০% অন-টাইম ডেলিভারি',
      guarantee2: 'সন্তুষ্টি না হওয়া পর্যন্ত দ্রুত রিভিশন',
      guarantee3: 'হাই-রিটেনশন এডিটিং ফরম্যাট',
    },
    en: {
      kicker: 'Production Pipeline & Workflow',
      title: 'From Concept to Masterpiece — My Creative Process',
      subtitle: 'A disciplined, 4-stage agency-grade production workflow ensuring high audience retention, pristine color grading, and on-time delivery.',
      steps: [
        {
          num: '01',
          icon: Compass,
          phase: 'Discovery & Brief',
          title: 'Creative Vision & Audience Strategy',
          desc: 'Analyzing your channel niche, viewer demographics, and video goals. Aligning reference cuts, pacing requirements, and brand visual language.',
          deliverables: ['Creative Blueprint', 'Hook Concept Formulation', 'Milestone Schedule'],
          tag: 'Day 1',
        },
        {
          num: '02',
          icon: Scissors,
          phase: 'Assembly & Rough Cut',
          title: 'Story Rhythm & Retention Editing',
          desc: 'Cutting out dead air, structuring the first 3-second hook, syncing multi-cam angles, and pacing dialogue to maximize watch time.',
          deliverables: ['Assembly Rough Cut', 'Retention Hooks', 'B-Roll & J-Cuts'],
          tag: 'Day 2-3',
        },
        {
          num: '03',
          icon: Sliders,
          phase: 'Grade & Audio Polish',
          title: 'Cinematic Color & Soundscape',
          desc: 'DaVinci Resolve color mastering, background music beat-matching, custom foley/SFX layering, kinetic typography, and motion graphic overlays.',
          deliverables: ['Rec.709 Cinematic Color', 'Immersive Sound Mix', 'Motion Typography'],
          tag: 'Day 4',
        },
        {
          num: '04',
          icon: Rocket,
          phase: 'Review & Final Master',
          title: 'Feedback Polish & 4K Export',
          desc: 'Iterative refinement based on your notes, followed by pristine 4K/60fps master encoding optimized for YouTube and social media algorithms.',
          deliverables: ['4K/FHD Master Files', 'Vertical Shorts/Reels Cuts', 'High-CTR Thumbnails'],
          tag: 'Day 5',
        },
      ],
      guaranteeTitle: 'Quality Commitments:',
      guarantee1: '100% On-Time Delivery Guarantee',
      guarantee2: 'Fast Iterative Revisions until Satisfied',
      guarantee3: 'Algorithm & Retention Optimized Formats',
    },
  }[language];

  return (
    <section id="workflow-section" className="py-24 bg-[#07080C] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.kicker}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pipeline Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-amber-400/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-amber-500/5"
              >
                {/* Top Row: Step Number & Time Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600/60 tabular-nums">
                    {step.num}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-400 group-hover:text-amber-300 transition-colors">
                    {step.tag}
                  </span>
                </div>

                {/* Icon & Phase */}
                <div className="space-y-3 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400/90 mb-1">
                      {step.phase}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[11px] text-zinc-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Step Connector Line (on desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-amber-400/40 to-transparent pointer-events-none z-20" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Agency Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900/80 to-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white">
                {t.guaranteeTitle}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                {language === 'bn' ? 'প্রতিটি ক্লায়েন্ট প্রজেক্টে সর্বোচ্চ পেশাদারিত্ব ও সিকিউরিটি রক্ষা করা হয়।' : 'Every project is handled with precision, confidentiality, and high artistic standard.'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-xs font-semibold text-zinc-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>{t.guarantee1}</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">&middot;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t.guarantee2}</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">&middot;</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>{t.guarantee3}</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
