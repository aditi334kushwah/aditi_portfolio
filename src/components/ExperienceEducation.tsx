import React from "react";
import { TIMELINE_EXPERIENCE, TIMELINE_EDUCATION } from "@/data/portfolio";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Work History</span>
            </div>
            <h2 className="text-3xl font-extrabold text-heading tracking-tight mb-4">
              Professional Experience
            </h2>
            <p className="text-sm text-body mb-8">
              Practical software engineering experience developing REST APIs, handling data models, and collaborating across workflows.
            </p>

            <div className="space-y-6">
              {TIMELINE_EXPERIENCE.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl surface-card border border-adaptive hover:border-indigo-500/30 transition-all duration-200 relative overflow-hidden shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-500 dark:text-indigo-300 text-[11px] font-semibold">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-body flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-heading mb-1">{exp.role}</h3>
                  <div className="text-sm text-indigo-500 dark:text-indigo-400 font-semibold mb-4">{exp.company}</div>

                  <p className="text-xs sm:text-sm text-body leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] uppercase tracking-wider text-body font-mono font-semibold">
                      Key Contributions:
                    </div>
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-adaptive">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-adaptive text-[10px] font-mono text-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div id="education">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl font-extrabold text-heading tracking-tight mb-4">
              Education &amp; Background
            </h2>
            <p className="text-sm text-body mb-8">
              Rigorous integrated postgraduate degree concentrating on core computer science and web application architecture.
            </p>

            <div className="space-y-6">
              {TIMELINE_EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl surface-card border border-adaptive hover:border-purple-500/30 transition-all duration-200 shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-500 dark:text-purple-300 text-[11px] font-semibold">
                      {edu.status}
                    </span>
                    <span className="text-xs font-mono text-body">Integrated Degree</span>
                  </div>

                  <h3 className="text-lg font-bold text-heading mb-1">{edu.degree}</h3>
                  <div className="text-sm text-purple-500 dark:text-purple-400 font-semibold mb-4">{edu.focus}</div>

                  <p className="text-xs sm:text-sm text-body leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="text-[11px] uppercase tracking-wider text-body font-mono font-semibold">
                      Curriculum Highlights:
                    </div>
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/20 text-xs text-body font-medium">
                    Graduating in final year with strong focus on software engineering standards, backend performance, and cloud API integration.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

