"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import {
  Cpu,
  Check,
  Layers,
  Terminal,
  Database,
  Wrench,
  Code2,
  Share2,
  Sparkles,
} from "lucide-react";
import RevealAnimation from "@/components/RevealAnimation";
import TiltCard from "@/components/TiltCard";

// Distinct professional color profiles & gradients for each card category
const CATEGORY_THEMES = [
  {
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    accent: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.35)",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    gradientBorder: "group-hover:border-amber-500/50",
    pillHighlight: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    cornerGlow: "from-amber-500/15 via-transparent to-transparent",
    tagline: "Core Languages & Logic",
  },
  {
    icon: <Layers className="w-5 h-5 text-[#35C8F4]" />,
    accent: "#35C8F4",
    glow: "rgba(53, 200, 244, 0.35)",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    gradientBorder: "group-hover:border-cyan-400/50",
    pillHighlight: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    cornerGlow: "from-cyan-500/15 via-transparent to-transparent",
    tagline: "Fluid UX & App Router",
  },
  {
    icon: <Terminal className="w-5 h-5 text-[#6C63FF]" />,
    accent: "#6C63FF",
    glow: "rgba(108, 99, 255, 0.35)",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    gradientBorder: "group-hover:border-[#6C63FF]/50",
    pillHighlight: "bg-[#6C63FF]/15 border-[#6C63FF]/30 text-indigo-200",
    cornerGlow: "from-[#6C63FF]/15 via-transparent to-transparent",
    tagline: "DRF & Async Queues",
  },
  {
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    accent: "#10B981",
    glow: "rgba(16, 185, 129, 0.35)",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gradientBorder: "group-hover:border-emerald-500/50",
    pillHighlight: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    cornerGlow: "from-emerald-500/15 via-transparent to-transparent",
    tagline: "Neon & ACID Transactions",
  },
  {
    icon: <Share2 className="w-5 h-5 text-rose-400" />,
    accent: "#F43F5E",
    glow: "rgba(244, 63, 94, 0.35)",
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    gradientBorder: "group-hover:border-rose-500/50",
    pillHighlight: "bg-rose-500/15 border-rose-500/30 text-rose-300",
    cornerGlow: "from-rose-500/15 via-transparent to-transparent",
    tagline: "Payments, Resend & Gemini",
  },
  {
    icon: <Wrench className="w-5 h-5 text-violet-400" />,
    accent: "#8B5CF6",
    glow: "rgba(139, 92, 246, 0.35)",
    badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    gradientBorder: "group-hover:border-violet-500/50",
    pillHighlight: "bg-violet-500/15 border-violet-500/30 text-violet-300",
    cornerGlow: "from-violet-500/15 via-transparent to-transparent",
    tagline: "Git, Vercel & Render",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealAnimation direction="up">
          <div className="flex flex-col items-start mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C63FF]/15 border border-[#6C63FF]/30 text-[#35C8F4] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Stack Toolchain</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight">
              Technical Capabilities Matrix
            </h2>
            <p className="mt-3 text-[#A1AAB9] text-base max-w-2xl leading-relaxed">
              Every category is architected with a distinct specialized identity, color harmony, and micro-interactions.
            </p>
          </div>
        </RevealAnimation>

        {/* 6 Specialized Skill Cards with Distinct Colors & Dynamic Hover Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const theme = CATEGORY_THEMES[idx % CATEGORY_THEMES.length];
            return (
              <RevealAnimation key={category.title} delay={idx * 0.08} direction="up">
                <TiltCard depth={14} glowColor={theme.glow}>
                  <div
                    className={`relative h-full flex flex-col justify-between p-6 rounded-2xl bg-[#151D30] border border-white/10 ${theme.gradientBorder} transition-all duration-300 group shadow-xl overflow-hidden hover:shadow-2xl`}
                  >
                    {/* Top Corner Ambient Glow */}
                    <div
                      className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${theme.cornerGlow} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 6 }}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner"
                          >
                            {theme.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-white transition-colors">
                              {category.title}
                            </h3>
                            <div className="text-[11px] font-mono text-[#A1AAB9]">
                              {theme.tagline}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${theme.badgeBg}`}
                        >
                          0{idx + 1}
                        </span>
                      </div>

                      <p className="text-xs text-[#A1AAB9] leading-relaxed mb-5">
                        {category.description}
                      </p>

                      {/* Skills Badges */}
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className={`flex items-center justify-between p-2 rounded-xl transition-all ${
                              skill.highlight
                                ? `${theme.pillHighlight} shadow-sm font-semibold`
                                : "bg-white/[0.03] border border-white/5 text-[#A1AAB9] hover:bg-white/[0.06] hover:text-[#F8FAFC]"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: theme.accent }}
                              />
                              <span className="text-xs">{skill.name}</span>
                            </div>
                            <span className="text-[10px] uppercase tracking-wider font-mono opacity-80">
                              {skill.level}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A1AAB9] font-mono">
                      <span>Production Ready</span>
                      <Check
                        className="w-3.5 h-3.5"
                        style={{ color: theme.accent }}
                      />
                    </div>
                  </div>
                </TiltCard>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
