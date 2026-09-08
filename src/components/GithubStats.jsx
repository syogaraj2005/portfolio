import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Star,
  Users,
  BookOpen,
  ArrowUpRight,
  Code2,
  Calendar,
} from "lucide-react";

const GITHUB_USERNAME = "syogaraj2005";

export default function GithubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoading(true);
        // 1. Fetch User Profile
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const userData = await userRes.json();
        setProfile(userData);

        // 2. Fetch Latest Repositories (Sorted by recently updated)
        const repoRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        const repoData = await repoRes.json();
        if (Array.isArray(repoData)) {
          setRepos(repoData);
        }
      } catch (err) {
        console.error("Error loading GitHub metrics:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section
      id="github"
      className="relative w-full overflow-hidden border-b border-cyan-500/10 bg-[#02050e] py-16 text-white sm:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-10">
          <div className="mb-2 flex items-center gap-2 font-mono text-xs tracking-widest text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#39d353]" />
            <span>// REALTIME OPEN-SOURCE METRICS</span>
          </div>
          <h2 className="font-mono text-3xl font-black uppercase text-white sm:text-4xl">
            GitHub <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Activity</span>
          </h2>
        </div>

        {/* ================= 1. METRICS CARDS ================= */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-[#060b18]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-cyan-400">
              <BookOpen size={16} />
              <span className="font-mono text-xs text-slate-400">Repositories</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-bold">
              {loading ? "--" : profile?.public_repos || 0}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#060b18]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-indigo-400">
              <Users size={16} />
              <span className="font-mono text-xs text-slate-400">Followers</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-bold">
              {loading ? "--" : profile?.followers || 0}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#060b18]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-amber-400">
              <Star size={16} />
              <span className="font-mono text-xs text-slate-400">Total Stars</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-bold">
              {loading
                ? "--"
                : repos.reduce((acc, curr) => acc + curr.stargazers_count, 0)}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#060b18]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-emerald-400">
              <GitBranch size={16} />
              <span className="font-mono text-xs text-slate-400">Following</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-bold">
              {loading ? "--" : profile?.following || 0}
            </p>
          </div>
        </div>

        {/* ================= 2. PURE BLACK GITHUB CONTRIBUTION GRAPH ================= */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black p-5 shadow-[0_0_35px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <Calendar size={15} className="text-emerald-400" />
              <span className="font-semibold text-white">Contribution Heatmap</span>
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-emerald-400 transition-colors hover:text-emerald-300 hover:underline"
            >
              <span>@{GITHUB_USERNAME}</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* SVG Heatmap Image with Pure Black Background Container */}
          <div className="w-full overflow-x-auto rounded-xl border border-white/10 bg-black p-4 scrollbar-thin scrollbar-thumb-white/10">
            <img
              src={`https://ghchart.rshah.org/39d353/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub Contribution Heatmap`}
              className="min-w-[680px] w-full filter contrast-125"
              loading="lazy"
            />
          </div>

          {/* Real GitHub Activity Legend (Less -> More) */}
          <div className="mt-4 flex items-center justify-end gap-2 font-mono text-[11px] text-slate-400">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#161b22] border border-white/10" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#0e4429]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#006d32]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#26a641]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#39d353]" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* ================= 3. LATEST REPOSITORIES ================= */}
        <div className="mt-8">
          <h3 className="mb-4 font-mono text-sm tracking-wider uppercase text-slate-400">
            Recently Updated Repositories
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#060b18]/70 p-4 transition-all duration-300 hover:border-emerald-500/50 hover:bg-[#081326]"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <h4 className="font-mono text-sm font-bold text-white group-hover:text-emerald-300">
                      {repo.name}
                    </h4>
                    <ArrowUpRight
                      size={14}
                      className="text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400"
                    />
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs text-slate-400">
                    {repo.description || "No description provided for this repository."}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Code2 size={12} />
                    {repo.language || "Java / Code"}
                  </span>
                  <span className="flex items-center gap-1 text-amber-300">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}