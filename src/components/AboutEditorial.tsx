"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Server,
  Database,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";
import RevealAnimation from "@/components/RevealAnimation";

export default function AboutEditorial() {
  const editorialValues = [
    {
      num: "01 / CLARITY",
      symbol: "◎",
      title: "Start with the domain & schema.",
      desc: "Before writing any code or UI layout, I map the core database relationships, API payload contracts, and state flow.",
    },
    {
      num: "02 / CRAFT",
      symbol: "✴",
      title: "Details are engineering decisions.",
      desc: "Fast hydration, strict JWT authentication, modular serializers, and graceful API fallbacks distinguish resilient software.",
    },
    {
      num: "03 / OWNERSHIP",
      symbol: "⌘",
      title: "Keep the whole product in view.",
      desc: "From designing the PostgreSQL schema and writing Django business logic to crafting responsive Next.js client experiences.",
    },
    {
      num: "04 / MOMENTUM",
      symbol: "↗",
      title: "Deliver working, verifiable increments.",
      desc: "Continuous integration, clean Git commits, Postman tested endpoints, and real-world deployment on edge clouds.",
    },
  ];

  const toolkit = [
    {
      category: "Backend & Systems",
      description: "Python • Django • Django REST Framework • REST APIs • Celery • Redis • JWT Auth",
    },
    {
      category: "Frontend & UI",
      description: "Next.js (App Router) • React.js • TypeScript • JavaScript • Tailwind CSS • HTML5 • CSS3",
    },
    {
      category: "Database & ORM",
      description: "PostgreSQL • SQL • Relational Schema Design • Django ORM • Index Optimization",
    },
    {
      category: "Tools & Delivery",
      description: "Git • GitHub • Postman • VS Code • Vercel Edge • Render Cloud • Linux / Bash",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Editorial Hero Banner */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Subtle decorative radial grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-adaptive/40 text-xs sm:text-sm font-mono text-body">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ABOUT / ADITI KUSHWAH</span>
            </span>
            <span className="uppercase tracking-widest text-indigo-400 font-semibold">
              PYTHON FULL STACK DEVELOPER
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Big Editorial Statement */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Engineering Narrative</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-heading tracking-tight leading-[1.08] mb-6">
                  Hi, I’m Aditi.<br />
                  I build with <span className="gradient-text">intent.</span>
                </h1>

                <p className="text-lg sm:text-xl text-body font-normal leading-relaxed mb-8 max-w-2xl">
                  I turn complex requirements into robust backend systems and intuitive web experiences. Final-year Integrated MCA student with 6 months of internship experience, building across Python, Django, React, and Next.js.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/work"
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
                  >
                    <span>Explore My Work</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/resume"
                    className="px-6 py-3 rounded-xl surface-card hover:bg-white/10 text-heading font-medium text-sm border border-adaptive flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <span>View Experience</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-xs sm:text-sm font-mono text-body pt-6 border-t border-adaptive/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-heading font-semibold">INDIA</span>
                  </div>
                  <span>•</span>
                  <span className="tracking-wider uppercase">BACKEND ARCHITECTURE × MODERN FRONTEND</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Professional Authentic Portrait Card with Tilt Elevation */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <TiltCard depth={12} glowColor="rgba(99, 102, 241, 0.25)">
                  <div className="relative rounded-3xl surface-card border border-adaptive p-2 sm:p-4 shadow-2xl overflow-hidden group">


                    {/* Developer Portrait Image with High-Definition Styling */}
                    <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-adaptive shadow-lg group/img">

                      <img
                        src="/aditi-portrait.png"
                        alt="Portrait of Aditi Kushwah"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Identity Chip on Portrait */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <div className="px-3.5 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="font-semibold">Aditi Kushwah</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-xl bg-indigo-600/90 backdrop-blur-md border border-indigo-400/40 text-white font-mono text-xs font-bold shadow-md">
                          Python Dev
                        </div>
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Mosaic Rail */}
      <section className="py-16 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealAnimation delay={0.1} direction="up">
              <div className="p-8 rounded-3xl surface-card border border-adaptive h-full flex flex-col justify-between shadow-lg hover:border-indigo-500/40 transition-colors">
                <small className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  01 / RIGHT NOW
                </small>
                <div className="my-6">
                  <h3 className="text-2xl font-black text-heading leading-snug">
                    Building dependable<br />Python backend systems.
                  </h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    Final year Integrated MCA student actively engineering scalable REST APIs with Django REST Framework and Next.js.
                  </p>
                </div>
                <div className="pt-4 border-t border-adaptive/40 text-xs font-mono text-slate-300">
                  APIs • PostgreSQL • JWT Authentication
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} direction="up">
              <div className="p-8 rounded-3xl surface-card border border-adaptive h-full flex flex-col justify-between shadow-lg hover:border-purple-500/40 transition-colors">
                <small className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                  02 / INTERNSHIP EXPERIENCE
                </small>
                <div className="my-6">
                  <h3 className="text-2xl font-black text-heading leading-snug">
                    6 Months Real-World<br />Software Engineering.
                  </h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    Collaborated on production-grade Python web stacks, handled database migrations, and engineered modular API endpoints.
                  </p>
                </div>
                <div className="pt-4 border-t border-adaptive/40 text-xs font-mono text-slate-300">
                  Postman • Git Workflows • DRF Endpoints
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="up">
              <div className="p-8 rounded-3xl surface-card border border-adaptive h-full flex flex-col justify-between shadow-lg hover:border-sky-500/40 transition-colors">
                <small className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  03 / THE MINDSET
                </small>
                <div className="my-6">
                  <div className="text-2xl text-sky-400 mb-2">✴</div>
                  <h3 className="text-2xl font-black text-heading leading-snug">
                    Stay curious.<br />Build defensibly.<br />Iterate with speed.
                  </h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    Clean database schemas, strict validations, and intuitive interfaces make real problems easy to solve.
                  </p>
                </div>
                <div className="pt-4 border-t border-adaptive/40 text-xs font-mono text-slate-300">
                  DSA Practice • 100+ Solved Challenges
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Story & Whole Product in View */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-3">
                A LITTLE MORE ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-heading tracking-tight leading-tight">
                One developer,<br />
                <span className="gradient-text">the whole product in view.</span>
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-body leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl font-semibold text-heading leading-snug">
                I am Aditi Kushwah, a Python Full Stack Developer specializing in reliable backend architectures, relational database systems, and modern responsive user interfaces.
              </p>

              <p>
                My technical approach centers on pragmatic engineering: I build clean REST APIs using <strong className="text-heading font-semibold">Python</strong> and <strong className="text-heading font-semibold">Django REST Framework</strong>, design structured relational databases in <strong className="text-heading font-semibold">PostgreSQL</strong>, and connect them with high-performance <strong className="text-heading font-semibold">React &amp; Next.js</strong> frontends in TypeScript.
              </p>

              <p>
                Recent flagship projects include <strong className="text-heading font-semibold">Mailvora</strong> (an asynchronous email marketing platform featuring Celery workers, Redis message brokers, and CSV parsing), <strong className="text-heading font-semibold">Tripnova</strong> (a full-stack travel destination and tour discovery platform hosted on Vercel and Render), and <strong className="text-heading font-semibold">Autrinn Solutions</strong> (an enterprise AI customer experience platform).
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3 text-sm font-mono text-body">
                <span>Explore flagship case studies:</span>
                <Link href="/work" className="text-indigo-400 font-bold hover:underline">
                  Mailvora ↗
                </Link>
                <span>•</span>
                <Link href="/work" className="text-indigo-400 font-bold hover:underline">
                  Tripnova ↗
                </Link>
                <span>•</span>
                <Link href="/work" className="text-indigo-400 font-bold hover:underline">
                  Autrinn Solutions ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Anchors Strip */}
      <section className="py-16 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-6 rounded-2xl surface-card border border-adaptive">
              <strong className="text-4xl sm:text-5xl font-black text-heading font-mono block mb-2">
                6+
              </strong>
              <p className="text-xs sm:text-sm font-mono uppercase text-body tracking-wider leading-relaxed">
                MONTHS PRACTICAL<br />INTERNSHIP EXPERIENCE
              </p>
            </div>

            <div className="p-6 rounded-2xl surface-card border border-adaptive">
              <strong className="text-4xl sm:text-5xl font-black text-heading font-mono block mb-2">
                100+
              </strong>
              <p className="text-xs sm:text-sm font-mono uppercase text-body tracking-wider leading-relaxed">
                DSA PROBLEMS SOLVED<br />ON LEETCODE &amp; GITHUB
              </p>
            </div>

            <div className="p-6 rounded-2xl surface-card border border-adaptive">
              <strong className="text-4xl sm:text-5xl font-black text-heading font-mono block mb-2">
                100%
              </strong>
              <p className="text-xs sm:text-sm font-mono uppercase text-body tracking-wider leading-relaxed">
                AUTHENTIC REAL PROJECTS<br />DEPLOYED ON EDGE CLOUDS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Engineering Beliefs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-3">
                WHAT GUIDES THE WORK
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-heading tracking-tight leading-tight">
                A point of view<br />
                <span className="gradient-text">you can feel in the code.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorialValues.map((v, i) => (
              <RevealAnimation key={i} delay={i * 0.1} direction="up">
                <div className="p-8 rounded-3xl surface-card border border-adaptive h-full flex flex-col justify-between hover:border-indigo-500/40 transition-colors shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-indigo-400 font-semibold">{v.num}</span>
                      <span className="text-lg text-slate-400">{v.symbol}</span>
                    </div>
                    <h3 className="text-lg font-bold text-heading mb-3">{v.title}</h3>
                    <p className="text-sm text-body leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Journey: Experience & Education Timeline */}
      <section className="py-24 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-3">
              JOURNEY &amp; BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-heading tracking-tight leading-tight">
              Learning deeply.<br />
              <span className="gradient-text">Building for real.</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl">
            {/* Timeline Item 01 */}
            <div className="p-6 sm:p-8 rounded-3xl surface-card border border-adaptive hover:border-indigo-500/40 transition-all shadow-md flex flex-col sm:flex-row sm:items-start gap-6">
              <span className="text-2xl font-mono font-bold text-indigo-400">01</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-heading">Python Full Stack Developer Intern</h3>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                    6 Months Internship
                  </span>
                </div>
                <p className="text-sm text-body leading-relaxed">
                  Contributed to full stack web development pipelines, engineered RESTful backend APIs using Python and Django REST Framework, implemented database schemas with PostgreSQL, and collaborated on dynamic React interfaces.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Python", "Django", "Django REST Framework", "React", "PostgreSQL", "Git", "Postman"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-adaptive text-slate-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Timeline Item 02 */}
            <div className="p-6 sm:p-8 rounded-3xl surface-card border border-adaptive hover:border-purple-500/40 transition-all shadow-md flex flex-col sm:flex-row sm:items-start gap-6">
              <span className="text-2xl font-mono font-bold text-purple-400">02</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-heading">Master of Computer Applications (Integrated MCA)</h3>
                  <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    Final Year • In Progress
                  </span>
                </div>
                <p className="text-sm text-body leading-relaxed">
                  Comprehensive multi-year integrated curriculum covering object-oriented programming, data structures & algorithms, web engineering, database management systems (DBMS), operating systems, and computer networks.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Data Structures", "Algorithms", "DBMS", "Software Engineering", "Computer Networks"].map(
                    (subject) => (
                      <span
                        key={subject}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-adaptive text-slate-300"
                      >
                        {subject}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/Aditi_Kushwah_Resume.pdf"
              download="Aditi_Kushwah_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <span>Download full resume PDF</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-slate-600">•</span>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 text-sm font-semibold text-body hover:text-heading"
            >
              <span>View live interactive resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="text-slate-600">•</span>
            <a
              href="https://github.com/aditi334kushwah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-body hover:text-heading"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repositories</span>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Toolkit Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-3">
              TECHNICAL TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-heading tracking-tight leading-tight">
              From interface<br />
              <span className="gradient-text">to backend infrastructure.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolkit.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl surface-card border border-adaptive hover:border-indigo-500/40 transition-colors shadow-lg"
              >
                <h3 className="text-lg font-bold text-heading mb-4 pb-2 border-b border-adaptive/40">
                  {item.category}
                </h3>
                <p className="text-sm font-mono text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl surface-card border border-adaptive flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm font-mono text-body">
            <span>Communication Languages: English — Professional Working • Hindi — Native</span>
            <span className="text-indigo-400 font-semibold">Available for Full Stack &amp; Python Backend Roles</span>
          </div>
        </div>
      </section>

      {/* Editorial Contact Invitation */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-950 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 text-xs sm:text-sm font-mono text-slate-300 gap-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>BASED IN INDIA • OPEN FOR REMOTE &amp; ON-SITE OPPORTUNITIES</span>
              </span>
              <span className="text-indigo-400">READY TO CONTRIBUTE FROM DAY ONE</span>
            </div>

            <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-8">
              Bring the<br />
              <em className="text-indigo-400 not-italic">hard problems.</em>
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <a
                href="mailto:aaditikkushwah12530@gmail.com"
                className="text-xl sm:text-2xl font-mono font-bold text-white hover:text-indigo-300 transition-colors inline-flex items-center gap-2"
              >
                <span>aaditikkushwah12530@gmail.com</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>Send a Message</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

