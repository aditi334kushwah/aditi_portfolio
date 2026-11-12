"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function PremiumNavbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      {/* Outer Centered Floating Capsule: Premium Dual-Mode Glassmorphism tailored to theme */}
      <div
        className={`pointer-events-auto flex items-center justify-between gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-[#0b0f19]/85 text-white border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(99,102,241,0.15)]"
            : "bg-white/90 text-slate-900 border border-slate-200/80 shadow-[0_12px_36px_rgba(15,23,42,0.12),0_0_20px_rgba(99,102,241,0.08)]"
        } ${scrolled ? "scale-[0.98] shadow-2xl" : "scale-100"}`}
      >
        {/* Brand glyph / Little Avatar */}
        <Link
          href="/"
          className={`flex items-center justify-center w-9 h-9 rounded-full font-extrabold text-xs ml-1 shrink-0 transition-all duration-200 shadow-sm ${
            theme === "dark"
              ? "bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-indigo-500/25 hover:brightness-110"
              : "bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-indigo-600/20 hover:brightness-110"
          }`}
          aria-label="Aditi Kushwah Home"
        >
          <span>AK</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? theme === "dark"
                      ? "text-white bg-white/10 shadow-inner"
                      : "text-indigo-600 bg-indigo-50/80 font-bold"
                    : theme === "dark"
                    ? "text-slate-400 hover:text-white hover:bg-white/5"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500" />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons: Dark/Light Toggle + Resume + Contact */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              theme === "dark"
                ? "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5"
                : "bg-slate-100 hover:bg-slate-200/70 text-slate-700 hover:text-indigo-600 border border-slate-200/60"
            }`}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Resume Button */}
          <Link
            href="/resume"
            className={`hidden sm:flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/resume"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : theme === "dark"
                ? "bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/5"
                : "bg-slate-100 hover:bg-slate-200/70 text-slate-800 hover:text-indigo-600 border border-slate-200/60"
            }`}
          >
            Resume
          </Link>

          {/* Contact Button: Electric Violet / Indigo Gradient matching site branding */}
          <Link
            href="/contact"
            className="flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-[13px] font-bold shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all duration-200 shrink-0"
          >
            Contact
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              theme === "dark"
                ? "bg-white/5 text-white"
                : "bg-slate-100 text-slate-900"
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Popover Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden pointer-events-auto fixed top-20 left-4 right-4 p-4 rounded-3xl backdrop-blur-2xl shadow-2xl transition-all duration-200 ${
            theme === "dark"
              ? "bg-[#0b0f19]/95 text-white border border-white/10"
              : "bg-white/95 text-slate-900 border border-slate-200"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                  theme === "dark"
                    ? "hover:bg-white/10 text-slate-200 hover:text-white"
                    : "hover:bg-slate-100 text-slate-700 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-2xl text-sm font-semibold text-center mt-1 transition-colors ${
                theme === "dark"
                  ? "bg-white/5 hover:bg-white/10 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-800"
              }`}
            >
              Resume
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center shadow-lg shadow-indigo-600/25"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

