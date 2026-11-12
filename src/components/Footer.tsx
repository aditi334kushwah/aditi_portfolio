"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="surface-card py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-adaptive">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 text-heading no-underline mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-heading tracking-tight">Aditi Kushwah</span>
            </Link>
            <p className="text-xs text-body max-w-sm leading-relaxed mb-4">
              Python Full Stack Developer building robust web systems with Django, Next.js, and PostgreSQL. Focused on clean architecture and high availability.
            </p>
            <div className="text-[11px] font-mono text-indigo-500 dark:text-indigo-400 font-medium">
              MCA Final Year • 6 Months Internship Experience
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-body">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-indigo-500 dark:hover:text-white transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl surface-card border border-adaptive text-body hover:text-heading shadow-sm transition-all flex items-center gap-2 text-xs group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-indigo-500 dark:text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-body">
          <div>
            &copy; 2026 Aditi Kushwah. Engineered with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-4 text-body">
            <a
              href="https://github.com/aditi334kushwah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-heading transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href="https://leetcode.com/u/aditi_123sd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              LeetCode
            </a>
            <span>•</span>
            <Link href="/contact" className="hover:text-indigo-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
