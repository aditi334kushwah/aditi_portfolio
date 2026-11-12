"use client";

import React from "react";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import { FileText, Download, Briefcase, GraduationCap, Code2, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TIMELINE_EXPERIENCE, TIMELINE_EDUCATION, SKILL_CATEGORIES } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen flex flex-col pt-24">
      <PremiumNavbar />
      <main className="flex-1 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 border-b border-adaptive mb-12">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 inline-block mb-3">
                Curriculum Vitae
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight">
                Aditi Kushwah
              </h1>
              <p className="text-sm sm:text-base text-body mt-2">
                Python Full Stack Developer &bull; MCA (Integrated) Final Year &bull; 6 Months Internship Experience
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print PDF</span>
              </button>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Hire / Contact Aditi</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Core Summary */}
          <section className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-3">
              Professional Summary
            </h2>
            <p className="text-base text-body leading-relaxed surface-card p-6 rounded-2xl border border-adaptive">
              I build modern web applications and reliable backend systems using <strong>Python, Django, React, and Next.js</strong>. Final year Integrated Master of Computer Applications (MCA) student with 6 months of professional software engineering internship experience. Actively seeking opportunities as a <strong>Python Backend Developer</strong> or <strong>Full Stack Developer</strong>.
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-6">
              {TIMELINE_EXPERIENCE.map((exp, idx) => (
                <div
                  key={idx}
                  className="surface-card p-8 rounded-2xl border border-adaptive space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-heading">{exp.role}</h3>
                      <div className="text-sm text-indigo-400 font-medium">{exp.company}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-body">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-sm text-body leading-relaxed">{exp.description}</p>

                  <div className="space-y-2 pt-2">
                    {exp.responsibilities.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-adaptive">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="space-y-6">
              {TIMELINE_EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="surface-card p-8 rounded-2xl border border-adaptive space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-heading">{edu.degree}</h3>
                      <div className="text-sm text-indigo-400 font-medium">{edu.focus}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400">
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-sm text-body leading-relaxed">{edu.description}</p>

                  <div className="space-y-1.5 pt-2">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Overview */}
          <section className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills Inventory</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="surface-card p-6 rounded-2xl border border-adaptive"
                >
                  <h3 className="text-sm font-bold text-heading mb-3">{cat.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-body"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

