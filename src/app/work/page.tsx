import type { Metadata } from "next";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { CheckCircle2, ShieldCheck, Zap, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Projects | Aditi Kushwah – Python Full Stack Developer",
  description:
    "Explore production-grade full-stack web applications, REST APIs, and SaaS platforms built by Aditi Kushwah including Mailvora and Tripnova.",
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen flex flex-col pt-16">
      <PremiumNavbar />

      <main className="flex-1">
        {/* Recruiter-Focused Work Hero Banner */}
        <section className="relative pt-16 pb-8 overflow-hidden">
          {/* Subtle decorative grid and gradient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.07] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack Engineering Portfolio</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-adaptive/40">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-6xl font-black text-heading tracking-tight leading-[1.1]">
                  Engineered for <span className="gradient-text">Performance</span> &amp; Real-World Scale.
                </h1>
                <p className="mt-5 text-body text-base sm:text-xl leading-relaxed">
                  Real deployed projects featuring Python backends, Django REST Framework, PostgreSQL data modeling, and modern Next.js interfaces.
                </p>
              </div>

              {/* Recruiter Quick Verification Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 shrink-0">
                <div className="p-3.5 sm:p-4 rounded-2xl surface-card border border-adaptive text-center shadow-sm">
                  <div className="flex justify-center mb-1 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-heading font-mono">100%</div>
                  <div className="text-[11px] font-mono uppercase text-body mt-0.5">Live Deployed</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl surface-card border border-adaptive text-center shadow-sm">
                  <div className="flex justify-center mb-1 text-indigo-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-heading font-mono">Python</div>
                  <div className="text-[11px] font-mono uppercase text-body mt-0.5">Django &amp; DRF</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl surface-card border border-adaptive text-center shadow-sm">
                  <div className="flex justify-center mb-1 text-purple-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-heading font-mono">JWT</div>
                  <div className="text-[11px] font-mono uppercase text-body mt-0.5">Auth &amp; RBAC</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl surface-card border border-adaptive text-center shadow-sm">
                  <div className="flex justify-center mb-1 text-sky-400">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-heading font-mono">Open</div>
                  <div className="text-[11px] font-mono uppercase text-body mt-0.5">Source Repos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

