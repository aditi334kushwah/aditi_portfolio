import type { Metadata } from "next";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import { Server, Database, Code, ShieldCheck, Cpu, Layers, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Services | Aditi Kushwah",
  description:
    "Full-stack development, Python backend REST API engineering, PostgreSQL database design, and Next.js frontend interfaces.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      title: "Backend & REST API Engineering",
      subtitle: "Django & Django REST Framework",
      description:
        "Architecting robust, modular RESTful APIs adhering to standard HTTP verbs, strict serializer validation, JWT token security, throttling, and automated documentation.",
      deliverables: [
        "Modular REST API endpoints with pagination & filtering",
        "JWT Authentication & Session Guards",
        "Asynchronous task queues using Celery & Redis",
        "Third-party webhook & service integrations",
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Relational Database Design & Modeling",
      subtitle: "PostgreSQL & Django ORM",
      description:
        "Structuring normalized relational schemas with strategic indexes, foreign key constraints, migration workflows, and query optimization to avoid N+1 bottlenecks.",
      deliverables: [
        "PostgreSQL schema architecture & normalization",
        "Query optimization with select_related & prefetch_related",
        "Data migrations and bulk transactional imports",
        "Integrity constraints and ACID-compliant workflows",
      ],
    },
    {
      icon: <Code className="w-6 h-6 text-sky-400" />,
      title: "Modern Client Interfaces & Dashboards",
      subtitle: "Next.js, React & TypeScript",
      description:
        "Building fast, accessible, and intuitive web interfaces, analytical dashboards, and administrative panels connected cleanly to backend JSON APIs.",
      deliverables: [
        "Server-rendered and hydrated Next.js App Router applications",
        "High-density data tables, filters, and analytics views",
        "Type-safe API contracts via TypeScript",
        "Fully responsive and mobile-friendly interfaces",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col pt-24">
      <PremiumNavbar />
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 inline-block mb-4">
              Core Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-heading tracking-tight mb-4">
              Full-Stack Engineering Services
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Bridging robust Python backends, scalable databases, and modern client experiences. Available for full-time engineering roles and contract briefs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="surface-card p-8 rounded-3xl border border-adaptive flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6">
                    {service.icon}
                  </div>
                  <small className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-1">
                    {service.subtitle}
                  </small>
                  <h2 className="text-xl font-bold text-heading mb-3">{service.title}</h2>
                  <p className="text-xs sm:text-sm text-body leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-adaptive">
                    <div className="text-[11px] font-mono uppercase text-body font-semibold mb-2">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-adaptive">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5"
                  >
                    <span>Request this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to discuss a project or role?</h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Open to full-time developer positions and technical engineering collaborations.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#ff4b23] hover:bg-[#e63c17] text-white text-xs font-semibold tracking-wider uppercase shadow-md transition-colors shrink-0"
            >
              Start Conversation &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

