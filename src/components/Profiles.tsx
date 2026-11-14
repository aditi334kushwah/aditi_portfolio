import React from "react";
import { CODING_PROFILES } from "@/data/portfolio";
import { Code, ExternalLink, Activity } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Profiles() {
  return (
    <section id="profiles" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Continuous Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            Achievements &amp; Coding Profiles
          </h2>
          <p className="mt-3 text-body text-base max-w-2xl">
            Verified online engineering profiles demonstrating consistent commitment to open-source software building and algorithmic problem solving.
          </p>
        </div>

        {/* Profile Cards - Individualized Aesthetic Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CODING_PROFILES.map((profile) => {
            const isGitHub = profile.name === "GitHub";
            const accentColor = isGitHub ? "#6C63FF" : "#F59E0B";
            const glowColor = isGitHub
              ? "rgba(108, 99, 255, 0.35)"
              : "rgba(245, 158, 11, 0.35)";

            return (
              <div
                key={profile.name}
                className={`relative p-8 rounded-3xl bg-[#151D30] border border-white/10 ${
                  isGitHub
                    ? "hover:border-[#6C63FF]/50 hover:shadow-[#6C63FF]/20"
                    : "hover:border-amber-500/50 hover:shadow-amber-500/20"
                } transition-all duration-300 flex flex-col justify-between group shadow-xl overflow-hidden`}
              >
                {/* Dynamic Ambient Background Glow */}
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-500`}
                  style={{ backgroundColor: accentColor }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="p-3.5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-md"
                        style={{ backgroundColor: `${accentColor}18` }}
                      >
                        {isGitHub ? (
                          <GithubIcon className="w-6 h-6 text-[#F8FAFC]" />
                        ) : (
                          <Code className="w-6 h-6 text-amber-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#F8FAFC]">
                          {profile.name}
                        </h3>
                        <div
                          className="text-xs font-mono font-semibold"
                          style={{ color: accentColor }}
                        >
                          @{profile.handle}
                        </div>
                      </div>
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold border"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        color: accentColor,
                        borderColor: `${accentColor}30`,
                      }}
                    >
                      {profile.badge}
                    </span>
                  </div>

                  <p className="text-sm text-[#A1AAB9] leading-relaxed mb-6 font-medium">
                    {profile.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 flex items-center justify-between">
                    <span className="text-xs text-[#A1AAB9] font-mono">Focus Track:</span>
                    <span className="text-xs font-bold text-[#F8FAFC]">{profile.stats}</span>
                  </div>
                </div>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-10 w-full py-3.5 rounded-xl font-semibold text-xs border border-white/15 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    isGitHub
                      ? "bg-gradient-to-r from-[#6C63FF] to-[#35C8F4] text-white shadow-lg shadow-[#6C63FF]/25 hover:opacity-95"
                      : "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 hover:opacity-95"
                  }`}
                >
                  <span>Visit {profile.name} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
