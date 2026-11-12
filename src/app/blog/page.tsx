import type { Metadata } from "next";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, ArrowRight, Code, Server, Database } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Notes & Blog | Aditi Kushwah",
  description:
    "Technical articles, lessons learned from real projects like Mailvora and Tripnova, and Python/Django architecture notes by Aditi Kushwah.",
};

export default function BlogPage() {
  const articles = [
    {
      title: "Building an Asynchronous Email Dispatcher with Django, Celery & Redis",
      category: "Backend Architecture",
      date: "Practical Case Note",
      readTime: "6 min read",
      summary:
        "Why processing bulk email campaigns synchronously inside HTTP requests leads to worker starvation, and how chunking dispatches with Celery task queues solves scalability.",
      tags: ["Python", "Django", "Celery", "Redis"],
    },
    {
      title: "Optimizing PostgreSQL Relational Queries in Django ORM",
      category: "Database & Performance",
      date: "Engineering Note",
      readTime: "5 min read",
      summary:
        "Tackling N+1 query patterns using select_related and prefetch_related, strategic indexes on foreign keys, and minimizing database roundtrips in REST APIs.",
      tags: ["PostgreSQL", "Django ORM", "SQL"],
    },
    {
      title: "State Hydration & Token Refreshing in Next.js + Django REST Framework",
      category: "Full Stack Integration",
      date: "Architecture Pattern",
      readTime: "7 min read",
      summary:
        "Designing secure JWT authentication across decoupled Next.js client frontends and Django backends without exposing tokens or causing hydration mismatch.",
      tags: ["Next.js", "TypeScript", "JWT", "Security"],
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
              Practical Writing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-heading tracking-tight mb-4">
              Notes From the Work
            </h1>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Technical breakdowns, architecture decisions, and lessons learned while building production web systems and full-stack applications.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="space-y-6 max-w-4xl mb-20">
            {articles.map((post) => (
              <article
                key={post.title}
                className="surface-card p-8 rounded-3xl border border-adaptive hover:border-indigo-500/40 transition-all duration-200 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-body font-mono mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-heading group-hover:text-indigo-400 transition-colors mb-3">
                  {post.title}
                </h2>

                <p className="text-sm text-body leading-relaxed mb-6">
                  {post.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-adaptive">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Read Note</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

