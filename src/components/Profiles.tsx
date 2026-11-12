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

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CODING_PROFILES.map((profile) => (
            <div
              key={profile.name}
              className="p-8 rounded-3xl surface-card border border-adaptive hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-adaptive group-hover:scale-105 transition-transform">
                      {profile.name === "GitHub" ? (
                        <GithubIcon className="w-6 h-6 text-heading" />
                      ) : (
                        <Code className="w-6 h-6 text-amber-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-heading">{profile.name}</h3>
                      <div className="text-xs font-mono text-indigo-500 dark:text-indigo-400 font-semibold">@{profile.handle}</div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 border border-adaptive text-body">
                    {profile.badge}
                  </span>
                </div>

                <p className="text-sm text-body leading-relaxed mb-6 font-medium">
                  {profile.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-adaptive mb-6 flex items-center justify-between">
                  <span className="text-xs text-body font-mono">Focus Track:</span>
                  <span className="text-xs font-bold text-heading">{profile.stats}</span>
                </div>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-heading font-semibold text-xs border border-adaptive flex items-center justify-center gap-2 group-hover:border-indigo-500/40 transition-all"
              >
                <span>Visit {profile.name} Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-body group-hover:text-heading" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
