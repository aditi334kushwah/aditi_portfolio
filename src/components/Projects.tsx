"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolio";
import {
  ExternalLink,
  BookOpen,
  X,
  Layers,
  Sparkles,
  Server,
  Database,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";
import RevealAnimation from "@/components/RevealAnimation";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealAnimation direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Flagship Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight leading-tight">
                Featured Full Stack Projects
              </h2>
              <p className="mt-4 text-body text-base sm:text-lg max-w-3xl leading-relaxed">
                Production-ready web applications architected with Python backend services, relational persistence, and interactive user interfaces.
              </p>
            </div>

            <div className="text-sm text-body">
              Click <strong className="text-heading font-semibold">“Read Full Case Study”</strong> for architectural deep-dives
            </div>
          </div>
        </RevealAnimation>

        {/* Projects Cards List */}
        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="relative">
              <TiltCard depth={8} glowColor={project.accentColor + "33"}>
                <div className="rounded-3xl surface-card border border-adaptive hover:border-indigo-500/40 transition-all duration-300 overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10">
                    {/* Visual / Architecture Mock Preview - Smooth Slide in from LEFT */}
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="lg:col-span-6 flex flex-col justify-center"
                    >
                      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-[#0a0f1d] border border-white/10 p-5 sm:p-6 overflow-hidden shadow-2xl">
                        {/* Atmospheric glow behind preview */}
                        <div
                          className="absolute -top-10 -right-10 w-60 h-60 rounded-full blur-3xl opacity-30 pointer-events-none"
                          style={{ backgroundColor: project.accentColor }}
                        />

                        {/* App Window bar */}
                        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
                            <span className="ml-2 text-sm font-mono text-slate-300 font-medium">
                              {project.title.toLowerCase().replace(/\s+/g, "")}.production
                            </span>
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/10 border border-white/15 text-slate-200 font-medium">
                            {project.category.split("/")[0]}
                          </span>
                        </div>

                        {/* Architecture / Engineering Layer Breakdown */}
                        <div className="space-y-3.5 py-1.5">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 sm:p-4.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:border-indigo-500/40 transition-colors"
                          >
                            <div className="flex items-center gap-3.5">
                              <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                                <Server className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white tracking-wide">Backend Layer</div>
                                <div className="text-xs sm:text-[13px] text-slate-300 font-medium">
                                  {project.tags.find(t => t.includes("Django")) ? "Django REST Framework & Scalable APIs" : "Python Backend Service"}
                                </div>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                              Active
                            </span>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 sm:p-4.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:border-purple-500/40 transition-colors"
                          >
                            <div className="flex items-center gap-3.5">
                              <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                                <Database className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white tracking-wide">Database Cluster</div>
                                <div className="text-xs sm:text-[13px] text-slate-300 font-medium">
                                  {project.tags.find(t => t.includes("Postgre")) ? "PostgreSQL Relational Storage" : "Optimized Relational Database"}
                                </div>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                              Indexed
                            </span>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 sm:p-4.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:border-sky-500/40 transition-colors"
                          >
                            <div className="flex items-center gap-3.5">
                              <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-400">
                                <Layers className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white tracking-wide">Client Interface</div>
                                <div className="text-xs sm:text-[13px] text-slate-300 font-medium">
                                  {project.tags.find(t => t.includes("Next")) ? "Next.js App Router (TypeScript)" : "React Dynamic Interface"}
                                </div>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                              Hydrated
                            </span>
                          </motion.div>
                        </div>

                        {/* Stats strip */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10 mt-2">
                          {project.stats.map((s) => (
                            <div key={s.label} className="p-2.5 rounded-xl bg-white/[0.03] text-center">
                              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-medium">
                                {s.label}
                              </div>
                              <div className="text-sm sm:text-base font-bold text-white truncate mt-0.5">
                                {s.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Project Details - Smooth Slide in from RIGHT */}
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="lg:col-span-6 flex flex-col items-start"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="text-sm font-mono font-bold tracking-widest text-indigo-400">
                          PROJECT 0{index + 1}
                        </span>
                        <span className="text-slate-600 font-bold">•</span>
                        <span className="text-sm font-semibold text-body">{project.category}</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight mb-2.5">
                        {project.title}
                      </h3>

                      <p className="text-base sm:text-lg font-semibold text-indigo-400 mb-4">{project.tagline}</p>

                      <p className="text-base sm:text-[17px] text-body leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Highlights Bullet List */}
                      <div className="w-full mb-6 space-y-2.5">
                        <div className="text-xs uppercase font-mono tracking-wider text-body font-semibold mb-1.5">
                          Key Architecture Highlights:
                        </div>
                        {project.features.slice(0, 4).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-body">
                            <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2.5 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white/5 border border-adaptive text-body"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links with Hover Micro-Interactions */}
                      <div className="flex flex-wrap items-center gap-3.5 w-full">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
                        >
                          <span>Live Website</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>

                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-heading font-medium text-sm border border-adaptive flex items-center gap-2 transition-all"
                        >
                          <GithubIcon className="w-4 h-4 text-body" />
                          <span>GitHub Repo</span>
                        </motion.a>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedProject(project)}
                          className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-indigo-300 hover:text-white font-medium text-sm border border-indigo-500/30 flex items-center gap-2 transition-all"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>Read Case Study</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Real Project Interface Preview Section - Studio Showcase with Perspective Tilt & Telemetry */}
                  {project.screenshot && (
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-10 pt-8 border-t border-adaptive/50"
                    >
                      {/* Section Sub-header with live deployment badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 px-1">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                          </div>
                          <div>
                            <div className="text-base sm:text-lg font-bold text-heading tracking-tight flex items-center gap-2">
                              <span>Production Interface Showcase</span>
                              <span className="text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                                Verified Live
                              </span>
                            </div>
                            <p className="text-xs text-body font-mono">
                              Pixel-accurate viewport capture • Integrated real-world full-stack deployment
                            </p>
                          </div>
                        </div>

                        {/* View Switch / Quick Action */}
                        <div className="flex items-center gap-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
                          >
                            <span>Open Live Site</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Studio Glass Showcase Container with Perspective Glow */}
                      <div className="relative group/showcase rounded-3xl p-2 sm:p-3.5 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent border border-white/15 shadow-2xl backdrop-blur-xl">
                        {/* Ambient Colorful Radial Aura behind image */}
                        <div
                          className="absolute -inset-1 rounded-3xl opacity-30 group-hover/showcase:opacity-60 blur-2xl transition-opacity duration-700 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 50% 30%, ${project.accentColor}, transparent 70%)`,
                          }}
                        />

                        {/* Browser Shell Frame */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090d16] shadow-2xl">
                          {/* Safari / Chrome Minimal Dark Bar */}
                          <div className="px-4 py-3 bg-[#0d1322] border-b border-white/10 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm shadow-red-500/50" />
                              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm shadow-amber-500/50" />
                              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm shadow-emerald-500/50" />
                            </div>

                            {/* Centered Realistic Omnibar */}
                            <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-4 py-1 rounded-lg bg-black/40 border border-white/10 text-slate-300 text-xs font-mono">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="truncate">{project.liveUrl}</span>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                                1440 x 900
                              </span>
                            </div>
                          </div>

                          {/* Screenshot Viewport with Smooth Zoom & Recruiter Overlay Banner */}
                          <div className="relative aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-slate-950 group/img">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={project.screenshot}
                              alt={`${project.title} live interface preview`}
                              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                            />

                            {/* Vignette Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover/img:opacity-50 transition-opacity pointer-events-none" />

                            {/* Bottom Floating Telemetry Strip */}
                            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-black/75 backdrop-blur-xl border border-white/15 shadow-2xl">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                  <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                                    {project.title} • Live Production Environment
                                  </div>
                                  <div className="text-[11px] font-mono text-slate-300">
                                    Verified full-stack deployment • Next.js + Python/Django Architecture
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
                                >
                                  <span>Launch Project</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/15 flex items-center gap-1.5 transition-all"
                                >
                                  <GithubIcon className="w-3.5 h-3.5 text-slate-200" />
                                  <span className="hidden sm:inline">Codebase</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal with Smooth Spring Motion */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1222] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto flex flex-col text-white"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-20 px-6 py-4 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">
                    Engineering Case Study
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-8 text-slate-300 text-sm">
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Project Overview</h4>
                  <p className="leading-relaxed text-slate-300">{selectedProject.fullOverview}</p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4 text-indigo-400" />
                    <span>System Architecture &amp; Data Flow</span>
                  </h4>

                  {/* Recruiter-Level Visual Architecture Flow Diagram */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#080d1a] border border-indigo-500/30 mb-4 overflow-hidden">
                    <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-4 border-b border-white/10 pb-2">
                      <span>DATA ORCHESTRATION PIPELINE</span>
                      <span className="text-emerald-400 font-semibold">● Verified Flow</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-sky-400 mb-1.5" />
                        <span className="font-bold text-white">Next.js Client</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">App Router / UI</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mb-1.5" />
                        <span className="font-bold text-white">Django REST API</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">JWT Auth &amp; Throttling</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mb-1.5" />
                        <span className="font-bold text-white">Celery &amp; Redis</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">Async Job Queue</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mb-1.5" />
                        <span className="font-bold text-white">PostgreSQL</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">Relational DB</span>
                      </div>
                    </div>

                    {/* Verified Endpoints Preview */}
                    <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="text-slate-400 font-semibold mb-1">Production REST Endpoints Sample:</div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">POST</span>
                        <span className="text-white">/api/v1/auth/jwt/create/</span>
                        <span className="text-slate-500">• 200 OK Token Pair</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold">GET</span>
                        <span className="text-white">/api/v1/campaigns/analytics/</span>
                        <span className="text-slate-500">• Telemetry &amp; Delivery</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.architecture.map((arch, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 leading-relaxed"
                      >
                        {arch}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    <span>Technical Challenges &amp; Solutions</span>
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.challenges.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2"
                      >
                        <div className="text-xs font-semibold text-rose-300">
                          Problem: <span className="text-slate-300 font-normal">{item.problem}</span>
                        </div>
                        <div className="text-xs font-semibold text-emerald-300">
                          Solution: <span className="text-slate-300 font-normal">{item.solution}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-3">Implemented Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-md"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs flex items-center gap-2 border border-white/10"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
