"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Mail,
  FileText,
  Download,
  Terminal,
  Database,
  Layers,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  X,
  Maximize2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";

interface ProjectCardData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  liveUrl: string;
  tech: string[];
  rotation: number;
  offsetY: number;
}

const HERO_PROJECT_CARDS: ProjectCardData[] = [
  {
    id: "mailvora",
    title: "Mailvora",
    tagline: "Email SaaS & Async Queue Engine",
    category: "Full Stack SaaS",
    image: "/projects/mailvora.jpg",
    liveUrl: "https://mailvora-eight.vercel.app/",
    tech: ["Django DRF", "Next.js", "Celery", "Neon DB"],
    rotation: -9,
    offsetY: 18,
  },
  {
    id: "profile",
    title: "Aditi Kushwah",
    tagline: "Available for Opportunities",
    category: "Full Stack Engineer",
    image: "/aditi-portrait.png",
    liveUrl: "/resume",
    tech: ["Python", "Django", "React", "MCA (8.10)"],
    rotation: 0,
    offsetY: -10,
  },
  {
    id: "tripnova",
    title: "TripNova",
    tagline: "Travel Booking Platform",
    category: "Booking System",
    image: "/projects/tripnova.jpg",
    liveUrl: "https://travellingwebsite-ten.vercel.app/",
    tech: ["Next.js 16", "Django DRF", "Razorpay", "Neon DB"],
    rotation: 9,
    offsetY: 18,
  },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<ProjectCardData | null>(null);
  const emailAddress = "aaditikkushwah12530@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Word stagger animations for editorial headline
  const headlineWords = [
    { text: "Building", highlight: false },
    { text: "Digital", highlight: false },
    { text: "Experiences", highlight: false },
    { text: "&", highlight: false },
    { text: "Powerful", highlight: true },
    { text: "Backend", highlight: true },
    { text: "Systems.", highlight: true },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden radial-glow-hero"
    >
      {/* Dynamic Animated Atmospheric Glow Mesh */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-10, 15, -10],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/15 dark:bg-indigo-500/20 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [10, -15, 10],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Action Intent */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hero-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-wide mb-6 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>HELLO, I&apos;M ADITI KUSHWAH</span>
              <span className="opacity-30">•</span>
              <span>Open to Developer Roles</span>
            </motion.div>

            {/* Kinetic Word-by-Word Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight hero-text-primary leading-[1.14] mb-6 flex flex-wrap gap-x-3 gap-y-1">
              {headlineWords.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 35, rotateZ: 2 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={item.highlight ? "text-gradient-purple" : "hero-text-primary"}
                >
                  {item.text}
                </motion.span>
              ))}
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl hero-text-secondary leading-relaxed font-normal mb-8 max-w-2xl"
            >
              Python Full Stack Developer passionate about building scalable web applications,
              clean REST APIs, database architectures, and intuitive modern user interfaces with{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Django</span> and{" "}
              <span className="text-sky-600 dark:text-sky-400 font-semibold">Next.js</span>.
            </motion.p>

            {/* Micro-Interaction CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/work"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/Aditi_Kushwah_Resume.pdf"
                download="Aditi_Kushwah_Resume.pdf"
                className="hero-btn-secondary px-6 py-3.5 rounded-xl font-medium text-sm border shadow-sm transition-all flex items-center gap-2"
                title="Direct 1-Click Download Aditi's Resume PDF"
              >
                <Download className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>Download Resume</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyEmail}
                className="hero-btn-copy px-4 py-3.5 rounded-xl font-medium text-xs border shadow-sm transition-all flex items-center gap-2"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-70" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Social Badges Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 pt-6 border-t border-adaptive w-full"
            >
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.15, rotate: -4 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/aditi334kushwah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn p-2.5 rounded-lg border shadow-sm transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/aditi-kushwah-9989382b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn p-2.5 rounded-lg border shadow-sm text-indigo-500 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.15, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://leetcode.com/u/aditi_123sd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn p-2.5 rounded-lg border shadow-sm text-amber-500 dark:text-amber-400 font-bold text-xs transition-all"
                  aria-label="LeetCode Profile"
                >
                  LC
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="hero-social-btn p-2.5 rounded-lg border shadow-sm transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="h-4 w-px bg-slate-300 dark:bg-white/10" />

              <div className="text-xs hero-text-secondary">
                <span className="font-semibold hero-text-primary">MCA Final Year</span> • 6 Months Internship Experience
              </div>
            </motion.div>
          </div>

          {/* Right Column: Overlapping Fanned Cards (As seen in inspiration) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative py-8"
          >
            {/* Visual Header / Subtitle */}
            <div className="w-full text-center lg:text-right mb-3">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#35C8F4] bg-[#35C8F4]/10 border border-[#35C8F4]/20 px-3 py-1 rounded-full inline-block">
                ✦ Click any card to expand full view
              </span>
            </div>

            {/* Overlapping Fanned Photos Deck */}
            <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center">
              {HERO_PROJECT_CARDS.map((card, idx) => {
                const isCenter = card.id === "profile";
                return (
                  <motion.div
                    key={card.id}
                    onClick={() => setSelectedPhoto(card)}
                    style={{
                      zIndex: isCenter ? 30 : idx === 0 ? 10 : 20,
                    }}
                    initial={{
                      rotate: card.rotation,
                      y: card.offsetY,
                      scale: isCenter ? 1.05 : 0.95,
                    }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.12,
                      y: -15,
                      zIndex: 50,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`absolute w-[200px] sm:w-[230px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-shadow duration-300 border ${
                      isCenter
                        ? "border-[#6C63FF]/50 shadow-[#6C63FF]/30 -translate-x-0"
                        : idx === 0
                        ? "border-white/15 -translate-x-16 sm:-translate-x-24 shadow-black/60"
                        : "border-white/15 translate-x-16 sm:translate-x-24 shadow-black/60"
                    }`}
                  >
                    {/* Background Image */}
                    <div className="relative w-full h-full bg-[#151D30]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover select-none"
                      />
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-[#090D18]/30 to-transparent" />

                      {/* Top Floating Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#090D18]/85 text-[#F8FAFC] backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-sm">
                          {isCenter ? (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Live Status</span>
                            </>
                          ) : (
                            <span>{card.category}</span>
                          )}
                        </span>
                        <div className="p-1.5 rounded-full bg-[#090D18]/70 backdrop-blur-md text-white/80 border border-white/10 hover:text-white">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Bottom Details Card Footer */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090D18]/90 backdrop-blur-md border border-white/10 text-left">
                        <div className="text-xs font-bold text-[#F8FAFC] truncate">
                          {card.title}
                        </div>
                        <div className="text-[10px] text-[#35C8F4] font-medium truncate mt-0.5">
                          {card.tagline}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {card.tech.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#A1AAB9]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Caption Bar */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#A1AAB9] mt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#6C63FF]" />
                <span>Mailvora SaaS</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Aditi Kushwah</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#35C8F4]" />
                <span>TripNova Booking</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Screen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#151D30] rounded-3xl border border-white/15 overflow-hidden shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#090D18]">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-xs text-[#35C8F4] font-medium font-mono">
                      {selectedPhoto.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Image Container */}
              <div className="relative w-full max-h-[58vh] bg-[#090D18] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full max-h-[58vh] object-contain"
                />
              </div>

              {/* Bottom Details & Direct Link */}
              <div className="p-5 sm:p-6 bg-[#151D30] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    {selectedPhoto.tagline}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedPhoto.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#A1AAB9]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedPhoto.liveUrl && (
                  <a
                    href={selectedPhoto.liveUrl}
                    target={selectedPhoto.liveUrl.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35C8F4] hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#6C63FF]/20 shrink-0 transition-transform active:scale-95"
                  >
                    <span>{selectedPhoto.id === "profile" ? "View Full Resume" : "Open Live Project"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
