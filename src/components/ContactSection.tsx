import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Clock, MapPin, Youtube, Linkedin, Instagram, Github, ExternalLink, Edit2, Check, Copy } from 'lucide-react';
import { Language } from '../types/portfolio';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('both');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // WhatsApp number state with persistent local storage
  const DEFAULT_PHONE = '+880 1790-820497';
  const [whatsappNumber, setWhatsappNumber] = useState(DEFAULT_PHONE);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [tempPhone, setTempPhone] = useState(DEFAULT_PHONE);

  useEffect(() => {
    const savedPhone = localStorage.getItem('portfolio_whatsapp_number');
    if (savedPhone) {
      setWhatsappNumber(savedPhone);
      setTempPhone(savedPhone);
    } else {
      localStorage.setItem('portfolio_whatsapp_number', DEFAULT_PHONE);
    }
  }, []);

  const handleSavePhone = () => {
    const cleaned = tempPhone.trim();
    if (cleaned) {
      setWhatsappNumber(cleaned);
      localStorage.setItem('portfolio_whatsapp_number', cleaned);
    }
    setIsEditingPhone(false);
  };

  const t = {
    bn: {
      kicker: 'যোগাযোগ ও কাজ শুরু করুন',
      title: 'পরবর্তী প্রজেক্ট নিয়ে আলোচনা করা যাক',
      subtitle: 'ইউটিউব ভিডিও এডিটিং, কমার্শিয়াল কালার গ্রেডিং, রিলস বা ব্র্যান্ডিং ডিজাইনের জন্য সরাসরি মেসেজ দিন। আপনার মেসেজটি সরাসরি আমার জিমেইলে চলে যাবে।',
      nameLabel: 'আপনার নাম',
      namePlaceholder: 'যেমন: সাদমান সাকিব',
      emailLabel: 'ইমেইল অ্যাড্রেস',
      emailPlaceholder: 'you@example.com',
      serviceLabel: 'সার্ভিস ক্যাটাগরি',
      serviceVideo: 'ভিডিও এডিটিং ও মোশন',
      serviceGraphic: 'গ্রাফিক্স ডিজাইন ও থাম্বনেইল',
      serviceBoth: 'উভয় সার্ভিস (ভিডিও + গ্রাফিক্স)',
      messageLabel: 'প্রজেক্টের বিবরণ ও টাইমলাইন',
      messagePlaceholder: 'ভিডিওর ধরণ, ফুটেজের দৈর্ঘ্য, প্রত্যাশিত ডেলিভারি ডেট...',
      submitBtn: 'স্বয়ংক্রিয়ভাবে ইমেইল পাঠান',
      submittedMsg: 'ধন্যবাদ! আপনার ইনকোয়ারি তৈরি করা হয়েছে। আপনার ইমেইল ক্লায়েন্টে এটি স্বয়ংক্রিয়ভাবে ওপেন করা হয়েছে mahfuzalmahdi.1@gmail.com এ পাঠানোর জন্য।',
      directChat: 'সরাসরি হোয়াটসঅ্যাপে চ্যাট করুন',
      whatsappBtn: 'WhatsApp এ মেসেজ দিন',
      changePhone: 'নাম্বার পরিবর্তন',
      savePhone: 'সেভ করুন',
      emailDirect: 'সরাসরি ইমেইল ঠিকানা',
      responseTime: 'সাধারণত দ্রুততম সময়ে রিপ্লাই দেওয়া হয়',
      location: 'ঢাকা, বাংলাদেশ (রিমোট ওয়ার্ক ওয়ার্ল্ডওয়াইড)',
      openGmailBtn: 'ওয়েব Gmail এ ওপেন করুন',
      copyDetails: 'মেসেজ টেক্সট কপি করুন',
      sendAnother: 'আরেকটি মেসেজ পাঠান',
    },
    en: {
      kicker: 'Contact & Hire',
      title: 'Let’s Discuss Your Next Project',
      subtitle: 'Available for high-retention video editing, color grading, social reels, and graphic design. Inquiries are routed directly to my personal inbox.',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Alex Morgan',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      serviceLabel: 'Service Needed',
      serviceVideo: 'Video Editing & Motion',
      serviceGraphic: 'Graphic Design & Branding',
      serviceBoth: 'Both (Video + Graphic Design)',
      messageLabel: 'Project Brief & Timeline',
      messagePlaceholder: 'Tell me about your footage, goals, timeline, and references...',
      submitBtn: 'Send Automated Email',
      submittedMsg: 'Thank you! Your project inquiry has been prepared and opened in your email client addressed to mahfuzalmahdi.1@gmail.com.',
      directChat: 'Instant WhatsApp Chat',
      whatsappBtn: 'Message on WhatsApp',
      changePhone: 'Edit Phone',
      savePhone: 'Save',
      emailDirect: 'Direct Email Address',
      responseTime: 'Prompt response time guaranteed',
      location: 'Dhaka, Bangladesh (Available Worldwide)',
      openGmailBtn: 'Open in Web Gmail',
      copyDetails: 'Copy Inquiry Details',
      sendAnother: 'Send Another Message',
    },
  }[language];

  // Clean WhatsApp digits for URL
  const numericPhone = whatsappNumber.replace(/[^0-9]/g, '') || '8801700000000';
  const whatsappUrl = `https://wa.me/${numericPhone}?text=${encodeURIComponent(
    `Hello Mahfuz, I saw your portfolio and would like to discuss a Video Editing / Graphic Design project.`
  )}`;

  const serviceLabelMap: Record<string, string> = {
    video: language === 'bn' ? 'ভিডিও এডিটিং' : 'Video Editing',
    graphic: language === 'bn' ? 'গ্রাফিক্স ডিজাইন' : 'Graphic Design',
    both: language === 'bn' ? 'ভিডিও + গ্রাফিক্স' : 'Video + Graphic Design',
  };

  const activeServiceText = serviceLabelMap[service] || 'Creative Services';

  const generateMailUrls = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${name} (${activeServiceText})`);
    const body = encodeURIComponent(
      `Hello Mahfuz,\n\nI am contacting you through your portfolio website.\n\nProject Details:\n- Name: ${name}\n- Client Email: ${email}\n- Service Needed: ${activeServiceText}\n\nProject Description & Goals:\n${message}\n\nLooking forward to hearing from you!`
    );
    const mailtoUrl = `mailto:mahfuzalmahdi.1@gmail.com?subject=${subject}&body=${body}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mahfuzalmahdi.1@gmail.com&su=${subject}&body=${body}`;
    return { mailtoUrl, gmailUrl, subject, body };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const { mailtoUrl } = generateMailUrls();
    // Automated client-side email trigger
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn('Mailto triggered', err);
    }

    setSubmitted(true);
  };

  const handleCopyInquiry = () => {
    const text = `To: mahfuzalmahdi.1@gmail.com\nFrom: ${name} (${email})\nService: ${activeServiceText}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-24 border-b border-white/5 bg-[#090A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.kicker}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp & Email Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp direct card with editable phone number */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">
                      {t.directChat}
                    </div>
                    {isEditingPhone ? (
                      <div className="flex items-center gap-1.5 mt-1">
                        <input
                          type="text"
                          value={tempPhone}
                          onChange={(e) => setTempPhone(e.target.value)}
                          placeholder="+880 17XXXXXXXX"
                          className="px-2 py-1 text-xs rounded bg-zinc-800 border border-white/20 text-white font-mono focus:outline-none focus:border-amber-400 w-36"
                        />
                        <button
                          type="button"
                          onClick={handleSavePhone}
                          className="px-2 py-1 bg-amber-400 text-black text-[11px] font-semibold rounded hover:bg-amber-300"
                        >
                          {t.savePhone}
                        </button>
                      </div>
                    ) : (
                      <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
                        <span>{whatsappNumber}</span>
                        <button
                          type="button"
                          onClick={() => setIsEditingPhone(true)}
                          className="text-[11px] text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                          title="Change WhatsApp Number"
                        >
                          <Edit2 className="w-2.5 h-2.5" />
                          <span>{t.changePhone}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
              >
                <span>{t.whatsappBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-base">
                    {t.emailDirect}
                  </div>
                  <a
                    href="mailto:mahfuzalmahdi.1@gmail.com"
                    className="text-xs text-amber-300 hover:underline font-mono font-medium"
                  >
                    mahfuzalmahdi.1@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2 text-xs text-zinc-400 space-y-1.5 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.responseTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Social Profiles & Portfolios
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/@Mahfuzalmahdi.1"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500 flex items-center justify-center text-zinc-400 hover:text-red-400 transition-colors"
                  title="Mahfuz Al Mahdi YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.behance.net/mahfuzalmahdi"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 px-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-blue-500 flex items-center gap-1.5 justify-center text-zinc-400 hover:text-blue-400 transition-colors font-bold text-xs"
                  title="Mahfuz Al Mahdi Behance Portfolio"
                >
                  <span className="font-sans font-black text-sm tracking-tight text-blue-400">Bē</span>
                  <span className="text-[11px] font-medium hidden sm:inline">Behance</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 hover:border-blue-500 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 hover:border-pink-500 flex items-center justify-center text-zinc-400 hover:text-pink-400 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 hover:border-amber-400 flex items-center justify-center text-zinc-400 hover:text-amber-400 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Automated Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 shadow-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-white">
                      {language === 'bn' ? 'ইমেইল প্রস্তুত হয়েছে!' : 'Inquiry Ready & Opening!'}
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      {t.submittedMsg}
                    </p>
                  </div>

                  {/* Actions for Web Gmail and fallback */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={generateMailUrls().gmailUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.openGmailBtn}</span>
                    </a>

                    <button
                      onClick={handleCopyInquiry}
                      type="button"
                      className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer border border-white/10"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied!' : t.copyDetails}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      type="button"
                      className="text-xs text-zinc-400 hover:text-white transition-colors underline cursor-pointer"
                    >
                      {t.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">
                        {t.nameLabel} <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.namePlaceholder}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">
                        {t.emailLabel} <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      {t.serviceLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setService('video')}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-colors cursor-pointer ${
                          service === 'video'
                            ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {t.serviceVideo}
                      </button>

                      <button
                        type="button"
                        onClick={() => setService('graphic')}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-colors cursor-pointer ${
                          service === 'graphic'
                            ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {t.serviceGraphic}
                      </button>

                      <button
                        type="button"
                        onClick={() => setService('both')}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-colors cursor-pointer ${
                          service === 'both'
                            ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {t.serviceBoth}
                      </button>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      {t.messageLabel} <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.messagePlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.submitBtn} &rarr; mahfuzalmahdi.1@gmail.com</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
