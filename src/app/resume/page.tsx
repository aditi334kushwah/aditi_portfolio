"use client";

import React from "react";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import {
  Download,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Link from "next/link";
import {
  PROJECTS,
  TIMELINE_EXPERIENCE,
  TIMELINE_EDUCATION,
} from "@/data/portfolio";

export default function ResumePage() {
  const mailvoraProject = PROJECTS.find((p) => p.id === "mailvora");
  const tripnovaProject = PROJECTS.find((p) => p.id === "tripnova");

  return (
    <div className="relative min-h-screen flex flex-col pt-24 bg-theme-base">
      <PremiumNavbar />

      <main className="flex-1 py-10 sm:py-14 print:py-0 print:pt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 print:px-0 print:max-w-none">
          {/* Action Toolbar (Hidden in Print) */}
          <div className="print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl surface-card border border-adaptive shadow-lg mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified ATS-Friendly Format</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-heading">
                Aditi Kushwah &bull; Professional Resume
              </h1>
              <p className="text-xs sm:text-sm text-body mt-0.5">
                Synced with authentic credentials: MCA (RBSMTC Agra) &bull; Vedmata Internship &bull; Neon &bull; Celery/Redis &bull; Razorpay
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="/Aditi_Kushwah_Resume.pdf"
                download="Aditi_Kushwah_Resume.pdf"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl border border-adaptive bg-white/5 hover:bg-white/10 text-heading text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                title="Print or Save to PDF via browser dialog"
              >
                <span>Print</span>
              </button>
              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-xl border border-adaptive bg-white/5 hover:bg-white/10 text-heading text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
              >
                <span>Contact Me</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ATS Resume Sheet (Pixel-matched with Resume PDF) */}
          <article className="resume-sheet bg-white text-neutral-900 shadow-2xl rounded-2xl sm:p-10 p-6 border border-neutral-200 print:shadow-none print:border-none print:p-0 print:rounded-none">
            {/* Header: Name & Contact Details */}
            <header className="border-b-2 border-indigo-700 pb-5 mb-5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 uppercase">
                    Aditi Kushwah
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-indigo-700 tracking-wide mt-0.5">
                    Full Stack Developer &bull; Python &bull; Django &bull; React &bull; Next.js
                  </p>
                </div>
              </div>

              {/* Contact / Links Row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-neutral-600 font-medium mt-3 pt-3 border-t border-neutral-200">
                <a
                  href="mailto:aaditikkushwah12530@gmail.com"
                  className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  <span>aaditikkushwah12530@gmail.com</span>
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="tel:+919760404709"
                  className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-indigo-600" />
                  <span>+91-9760404709</span>
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="https://www.linkedin.com/in/aditi-kushwah-9989382b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>linkedin.com/in/aditi-kushwah-9989382b3</span>
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="https://github.com/aditi334kushwah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>github.com/aditi334kushwah</span>
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="https://leetcode.com/u/aditi_123sd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>leetcode.com/u/aditi_123sd</span>
                </a>
              </div>
            </header>

            {/* Education Section */}
            <section className="mb-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-indigo-800 border-b border-neutral-300 pb-1 mb-2.5 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                <div>
                  <span className="font-bold text-neutral-900 text-sm">
                    Integrated Master of Computer Applications (MCA)
                  </span>
                  <div className="text-neutral-700 font-medium">
                    Raja Balwant Singh Management Technical Campus (RBSMTC), Agra
                  </div>
                </div>
                <div className="text-left sm:text-right text-neutral-600 font-semibold shrink-0">
                  <div>July 2022 – Present</div>
                  <div className="text-indigo-700 font-bold">CGPA: 8.10 / 10.0</div>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-indigo-800 border-b border-neutral-300 pb-1 mb-2.5 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Technical Skills</span>
              </h2>

              <div className="text-xs space-y-1.5 leading-relaxed">
                <div>
                  <strong className="text-neutral-900 font-bold">Languages:</strong>{" "}
                  <span className="text-neutral-700">Python, JavaScript, TypeScript, SQL, Java, HTML5, CSS3</span>
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Frontend:</strong>{" "}
                  <span className="text-neutral-700">Next.js, React.js, Tailwind CSS, Server-Side Rendering (SSR), Responsive Design</span>
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Backend &amp; APIs:</strong>{" "}
                  <span className="text-neutral-700">Django, Django REST Framework, REST API Design, JWT / SimpleJWT, Role-Based Access Control, Celery, Redis, Server-Sent Events (SSE), OOP</span>
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Databases:</strong>{" "}
                  <span className="text-neutral-700">PostgreSQL, Neon, MySQL, MongoDB, Django ORM, Database Transactions</span>
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Integrations:</strong>{" "}
                  <span className="text-neutral-700">Razorpay (Test Mode), Resend API, Google Gemini API, SMTP / Django Email, Cloudinary, jsPDF</span>
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Tools &amp; Deployment:</strong>{" "}
                  <span className="text-neutral-700">Git, GitHub, Postman, VS Code, Render, Vercel</span>
                </div>
              </div>
            </section>

            {/* Professional Experience Section */}
            <section className="mb-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-indigo-800 border-b border-neutral-300 pb-1 mb-2.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Professional Experience</span>
              </h2>

              {TIMELINE_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                    <div>
                      <span className="font-bold text-neutral-900 text-sm">{exp.role}</span>
                      <span className="text-neutral-600"> &bull; </span>
                      <span className="font-bold text-indigo-700">{exp.company}</span>
                    </div>
                    <span className="text-neutral-600 font-semibold">{exp.duration}</span>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className="mb-3">
              <h2 className="text-xs font-black uppercase tracking-wider text-indigo-800 border-b border-neutral-300 pb-1 mb-2.5 flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Key Projects</span>
              </h2>

              <div className="space-y-4">
                {/* Project 1: Mailvora */}
                {mailvoraProject && (
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                      <div className="flex flex-wrap items-baseline gap-1.5">
                        <span className="font-bold text-neutral-900 text-sm">
                          {mailvoraProject.title}
                        </span>
                        <span className="text-neutral-500">|</span>
                        <span className="font-medium text-neutral-700">
                          Email Campaign &amp; Delivery Platform
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-700 font-semibold">
                        <a
                          href={mailvoraProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-0.5"
                        >
                          <Globe className="w-3 h-3" />
                          <span>mailvora-eight.vercel.app</span>
                        </a>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-neutral-600 pb-0.5">
                      <strong>Tech Stack:</strong> Django, DRF, Next.js, TypeScript, PostgreSQL (Neon), Celery, Redis, Resend API, Gemini API, Render, Vercel
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                      <li>Secured REST APIs with JWT (SimpleJWT), role-based access control, and DRF permissions.</li>
                      <li>Implemented asynchronous campaign dispatching with Celery and Redis to handle bulk sends without blocking API threads.</li>
                      <li>Integrated Resend API for reliable inbox delivery; built subscriber management with CSV import and unsubscribe portal.</li>
                      <li>Developed a drag-and-drop template studio with 10+ pre-built templates and dynamic personalization tags (e.g., {"{{first_name}}"}).</li>
                      <li>Built an AI content assistant using Google Gemini API with prompt engineering and Server-Sent Events (SSE) streaming for real-time subject line and email copy generation.</li>
                      <li>Ensured campaign data integrity using database transactions.</li>
                    </ul>
                  </div>
                )}

                {/* Project 2: TripNova */}
                {tripnovaProject && (
                  <div className="space-y-1 pt-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                      <div className="flex flex-wrap items-baseline gap-1.5">
                        <span className="font-bold text-neutral-900 text-sm">
                          {tripnovaProject.title}
                        </span>
                        <span className="text-neutral-500">|</span>
                        <span className="font-medium text-neutral-700">
                          Full Stack Travel &amp; Tour Booking Platform
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-700 font-semibold">
                        <a
                          href={tripnovaProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-0.5"
                        >
                          <Globe className="w-3 h-3" />
                          <span>travellingwebsite-ten.vercel.app</span>
                        </a>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-neutral-600 pb-0.5">
                      <strong>Tech Stack:</strong> Django, DRF, Next.js 16, React.js, Tailwind CSS, PostgreSQL (Neon), Razorpay, Cloudinary, Render, Vercel
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                      <li>Built dynamic package listings with search and filter capabilities by trip type and travel month.</li>
                      <li>Implemented a booking workflow with date selection, traveler counts, and a guest dashboard for tracking booking status.</li>
                      <li>Engineered backend REST APIs using DRF with JWT authentication and CORS configurations, paired with Next.js 16 SSR for fast load times.</li>
                      <li>Integrated Razorpay payment gateway (test mode) with server-side order creation and HMAC-SHA256 signature verification.</li>
                      <li>Built automated HTML booking confirmation notifications via SMTP, downloadable PDF booking vouchers using jsPDF, and database transactions.</li>
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          nav,
          header,
          footer,
          .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
          .resume-sheet {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
