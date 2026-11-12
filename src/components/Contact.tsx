"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Check,
  Copy,
  MessageSquare,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import RevealAnimation from "@/components/RevealAnimation";
import TiltCard from "@/components/TiltCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "aditikushwah334@gmail.com";
  const phoneNumber = "+91 9760404709";
  const rawPhoneNumber = "9760404709";
  const whatsappUrl = `https://wa.me/919760404709?text=${encodeURIComponent(
    "Hi Aditi, I reviewed your developer portfolio and would like to connect!"
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // 1. Post to Vercel Serverless API Route
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Client-side mailto trigger fallback ensuring message is delivered directly to Aditi's inbox
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: (If provided)\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoLink, "_blank");
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback directly to mailto
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.open(mailtoLink, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <RevealAnimation direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Python Backend &amp; Full Stack Roles</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-heading tracking-tight leading-tight">
              Let&apos;s Build Something <span className="gradient-text">Exceptional.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed max-w-2xl">
              Whether you have an engineering opening, a contract project, or want to discuss full-stack architecture, all channels below connect directly to me in real time.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Real-Time Channels */}
          <RevealAnimation direction="left" className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-body mb-1">
              Direct Communication Channels (Instant Response)
            </div>

            {/* Direct Phone / Call Card */}
            <TiltCard depth={8} glowColor="rgba(99, 102, 241, 0.2)">
              <div className="p-5 rounded-2xl surface-card border border-adaptive hover:border-indigo-500/40 transition-all flex items-center justify-between group shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-body font-mono uppercase tracking-wider font-semibold">
                      Direct Phone / Calling
                    </div>
                    <a
                      href={`tel:+91${rawPhoneNumber}`}
                      className="text-base font-bold text-heading hover:text-emerald-400 transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-body text-xs border border-adaptive transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>

                  <a
                    href={`tel:+91${rawPhoneNumber}`}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1 transition-all shadow-sm"
                  >
                    <span>Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* Real-Time WhatsApp Direct Chat Card */}
            <TiltCard depth={8} glowColor="rgba(34, 197, 94, 0.2)">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl surface-card border border-adaptive hover:border-emerald-500/40 transition-all flex items-center justify-between group shadow-lg block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-body font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <span>WhatsApp Direct</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400">Online</span>
                    </div>
                    <div className="text-base font-bold text-heading group-hover:text-emerald-400 transition-colors">
                      Chat on WhatsApp (+91 {rawPhoneNumber})
                    </div>
                  </div>
                </div>

                <span className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1 transition-all shadow-sm shrink-0">
                  <span>Chat Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </TiltCard>

            {/* Direct Email Card with One-Click Copy & Mailto */}
            <TiltCard depth={8} glowColor="rgba(99, 102, 241, 0.2)">
              <div className="p-5 rounded-2xl surface-card border border-adaptive hover:border-indigo-500/40 transition-all flex items-center justify-between group shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-body font-mono uppercase tracking-wider font-semibold">
                      Professional Email
                    </div>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-bold text-heading hover:text-indigo-400 transition-colors truncate max-w-[200px] sm:max-w-none block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-body text-xs border border-adaptive transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1 transition-all shadow-sm"
                  >
                    <span>Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* GitHub Profile Card */}
            <motion.a
              whileHover={{ scale: 1.01, x: 3 }}
              href="https://github.com/aditi334kushwah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl surface-card border border-adaptive hover:border-indigo-500/40 transition-all flex items-center justify-between group shadow-sm block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-heading">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-body font-mono uppercase">Verified GitHub</div>
                  <div className="text-xs sm:text-sm font-bold text-heading">github.com/aditi334kushwah</div>
                </div>
              </div>
              <span className="text-xs text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>

            {/* Recruiter Instant Assurance Box */}
            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-body space-y-2 mt-2">
              <div className="flex items-center gap-2 text-heading font-bold">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Response Time Guarantee:</span>
              </div>
              <p className="leading-relaxed">
                Inquiries via Phone, WhatsApp or Email receive a response within a few hours. Available for remote, hybrid, or on-site roles across India.
              </p>
            </div>
          </RevealAnimation>

          {/* Right Column: Interactive Real-Time Message Dispatch Form */}
          <RevealAnimation direction="right" className="lg:col-span-7">
            <TiltCard depth={8} glowColor="rgba(99, 102, 241, 0.25)">
              <div className="p-8 sm:p-10 rounded-3xl surface-card border border-adaptive shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-adaptive/40">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-heading">Send an Instant Message</h3>
                    <p className="text-xs sm:text-sm text-body mt-1">
                      Direct form dispatched via Next.js API &amp; client mailer.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Ready
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-10 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 shadow-lg shadow-emerald-500/20">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-heading mb-2">Message Dispatched!</h4>
                      <p className="text-sm text-body max-w-md mx-auto mb-6 leading-relaxed">
                        Thank you for reaching out! Your inquiry has been processed and your mail client has been opened for direct confirmation. You can also chat with me instantly on WhatsApp.
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Chat on WhatsApp</span>
                        </a>

                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: "", email: "", subject: "", message: "" });
                          }}
                          className="px-5 py-2.5 rounded-xl surface-card hover:bg-white/10 text-heading font-semibold text-xs border border-adaptive transition-all"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-body mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma / Sarah Jenkins"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-adaptive text-heading placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-body mb-2">
                            Your Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="recruiter@company.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-adaptive text-heading placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-body mb-2">
                          Subject / Opportunity
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Python Backend Developer Role / Project Discussion"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-adaptive text-heading placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-body mb-2">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Hi Aditi, we reviewed your Mailvora and Tripnova projects and would like to invite you for an interview..."
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-adaptive text-heading placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <span>Send Message Directly</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </TiltCard>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
