"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { Cpu, Check, Layers, Terminal, Database, Wrench } from "lucide-react";
import RevealAnimation from "@/components/RevealAnimation";
import TiltCard from "@/components/TiltCard";

export default function Skills() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 1:
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Database className="w-5 h-5 text-purple-400" />;
      default:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealAnimation direction="up">
          <div className="flex flex-col items-start mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
              Specialized Skills &amp; Stack
            </h2>
            <p className="mt-3 text-body text-base max-w-2xl">
              A focused toolchain centered around Python backend development, relational database engineering, and modern React full stack interfaces.
            </p>
          </div>
        </RevealAnimation>

        {/* Skills Grid with 3D Tilt and Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <RevealAnimation key={category.title} delay={idx * 0.1} direction="up">
              <TiltCard depth={12} glowColor="rgba(99, 102, 241, 0.2)">
                <div className="h-full flex flex-col justify-between p-6 rounded-2xl surface-card border border-adaptive hover:border-indigo-500/40 transition-all duration-300 group shadow-lg">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="p-2.5 rounded-xl bg-white/5 border border-adaptive"
                      >
                        {getIcon(idx)}
                      </motion.div>
                      <div>
                        <h3 className="text-base font-bold text-heading group-hover:text-indigo-400 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-body leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Items */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.02, x: 3 }}
                          className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                            skill.highlight
                              ? "bg-indigo-500/10 border border-indigo-500/20 text-heading"
                              : "bg-white/[0.03] border border-adaptive text-body"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            <span className="text-xs font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider text-body font-mono">
                            {skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 mt-6 border-t border-adaptive flex items-center justify-between text-[11px] text-body">
                    <span>Verified in production</span>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              </TiltCard>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
