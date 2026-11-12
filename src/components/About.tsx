"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Code, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import RevealAnimation from "@/components/RevealAnimation";
import TiltCard from "@/components/TiltCard";

export default function About() {
  const principles = [
    {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      title: "Backend-First Reliability",
      description:
        "Designing modular REST APIs with Django REST Framework, incorporating secure JWT tokens, strict serializer validations, and efficient queries.",
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: "Clean Relational Schemas",
      description:
        "Structuring PostgreSQL databases with normalized models, strategic foreign keys, and indexes to ensure integrity and fast data retrieval.",
    },
    {
      icon: <Code className="w-5 h-5 text-sky-400" />,
      title: "Modern Intuitive Frontend",
      description:
        "Connecting APIs to performant React & Next.js client dashboards with TypeScript, providing responsive layouts and seamless feedback.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealAnimation direction="up">
          <div className="flex flex-col items-start mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Narrative</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
              About Me &amp; Technical Mindset
            </h2>
            <p className="mt-3 text-body text-base max-w-2xl">
              A developer who bridges structured Python backends with polished user-centric web applications.
            </p>
          </div>
        </RevealAnimation>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Narrative */}
          <RevealAnimation direction="left" className="lg:col-span-7 space-y-6 text-body text-base leading-relaxed">
            <p className="text-lg text-heading font-normal">
              I am a <strong className="text-indigo-400 font-semibold">Python Full Stack Developer</strong> in my final year of an integrated Master of Computer Applications (MCA) program, equipped with <strong className="text-heading font-semibold">6 months of practical internship experience</strong>.
            </p>

            <p>
              My engineering journey began with exploring fundamental computer science algorithms and quickly evolved into building end-to-end web products. Rather than treating frontend and backend as isolated disciplines, I approach software engineering holistically: architecting clean relational models in <strong className="text-heading font-semibold">PostgreSQL</strong>, crafting well-documented RESTful endpoints in <strong className="text-heading font-semibold">Django REST Framework</strong>, and surfacing them through fast, accessible <strong className="text-heading font-semibold">Next.js &amp; React</strong> interfaces.
            </p>

            <p>
              During my 6-month internship, I contributed to active engineering pipelines—designing modular APIs, handling database migrations, validating payload integrity, and troubleshooting API contracts with Postman. This real-world exposure cemented my focus on writing maintainable code, defensive programming, and adhering to standard HTTP and database design patterns.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-body"
            >
              <div className="font-semibold text-heading text-sm mb-1 flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>Primary Career Goal</span>
              </div>
              <p className="text-sm text-body leading-normal">
                Actively seeking opportunities as a <span className="text-indigo-400 font-semibold">Python Backend Developer</span> or <span className="text-indigo-400 font-semibold">Full Stack Developer</span> where I can design high-availability backend services, optimize database operations, and deliver mission-critical software solutions.
              </p>
            </motion.div>
          </RevealAnimation>

          {/* Core Philosophy Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-body mb-1">
              How I Approach Software
            </div>

            {principles.map((p, idx) => (
              <RevealAnimation key={idx} delay={0.15 + idx * 0.1} direction="right">
                <TiltCard depth={10} glowColor="rgba(99, 102, 241, 0.15)">
                  <div className="p-5 rounded-2xl surface-card border border-adaptive hover:border-indigo-500/30 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-white/5 border border-adaptive">
                        {p.icon}
                      </div>
                      <h3 className="text-base font-semibold text-heading">{p.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-body leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </TiltCard>
              </RevealAnimation>
            ))}

            {/* Quick Stats Summary */}
            <RevealAnimation delay={0.5} direction="up">
              <div className="mt-2 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl surface-card border border-adaptive text-center">
                  <div className="text-xs text-body">Current Status</div>
                  <div className="text-sm font-semibold text-heading mt-1">MCA Final Year</div>
                </div>
                <div className="p-4 rounded-xl surface-card border border-adaptive text-center">
                  <div className="text-xs text-body">Work Exp</div>
                  <div className="text-sm font-semibold text-heading mt-1">6 Months Intern</div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
