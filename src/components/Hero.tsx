"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";

export default function Hero() {
  const [copied, setCopied] = useState(false);
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

          {/* Right Column: 3D Interactive Floating Physics Terminal Artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <TiltCard depth={18} glowColor="rgba(99, 102, 241, 0.25)">
                {/* Developer Terminal Card (Clean high-contrast theme) */}
                <div className="rounded-2xl bg-[#0f172a] text-white border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
                  {/* Window Bar */}
                  <div className="px-4 py-3 bg-[#0a0f1d] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 text-xs font-mono text-slate-400">
                        aditi_kushwah.py
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Python 3.12</span>
                    </div>
                  </div>

                  {/* Terminal Code Body */}
                  <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                    <div className="text-slate-500 mb-2"># Senior-Ready Engineering Stack</div>
                    <div>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-emerald-400 font-bold">PythonFullStackEngineer</span>:
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">def</span>{" "}
                      <span className="text-sky-400">__init__</span>(self):
                    </div>
                    <div className="pl-8 text-slate-300">
                      self.name = &quot;Aditi Kushwah&quot;
                      <br />
                      self.role = &quot;Backend &amp; Full Stack&quot;
                      <br />
                      self.backend = [&quot;Django&quot;, &quot;DRF&quot;, &quot;PostgreSQL&quot;]
                      <br />
                      self.frontend = [&quot;Next.js&quot;, &quot;React&quot;, &quot;TypeScript&quot;]
                      <br />
                      self.education = &quot;Integrated MCA (Final Year)&quot;
                      <br />
                      self.experience = &quot;6 Months Internship&quot;
                    </div>
                    <div className="pl-4 mt-2">
                      <span className="text-purple-400">def</span>{" "}
                      <span className="text-sky-400">deliver_value</span>(self):
                    </div>
                    <div className="pl-8 text-indigo-400">
                      return &#123;&quot;scalable_apis&quot;: True, &quot;clean_architecture&quot;: True&#125;
                    </div>
                  </div>

                  {/* Micro Metric Badges */}
                  <div className="p-4 bg-white/[0.02] border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-indigo-400 font-bold">2+</div>
                      <div className="text-[10px] text-slate-400">Flagship Apps</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-purple-400 font-bold">6 Mo</div>
                      <div className="text-[10px] text-slate-400">Internship Exp</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-sky-400 font-bold">MCA</div>
                      <div className="text-[10px] text-slate-400">Final Year</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
