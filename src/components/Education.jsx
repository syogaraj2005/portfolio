import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Trophy,
  CheckCircle2,
  Building2,
} from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Object Oriented Programming (Java)",
  "Database Management Systems (DBMS)",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
];

const certifications = [
  {
    title: "Java Full Stack Development",
    issuer: "Certification Authority",
    year: "2024",
  },
  {
    title: "Spring Boot & Microservices",
    issuer: "Online Academy",
    year: "2024",
  },
  {
    title: "SQL & Relational Databases",
    issuer: "Technical Platform",
    year: "2023",
  },
];

const achievements = [
  "Active Problem Solver on LeetCode with consistent DSA practice.",
  "Developed enterprise-grade web applications like AI BookShare & TN RideX Pro.",
  "Participated in technical symposiums and university-level project presentations.",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden border-b border-cyan-500/10 bg-[#02050e] py-16 text-white sm:py-20"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-2 flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
            <span>// ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="font-mono text-3xl font-black uppercase text-white sm:text-4xl">
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
        </div>

        {/* Timeline & Credentials Container */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Main Academic Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#060b18]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300">
                  <Calendar size={14} />
                  <span>2023 ➔ 2027</span>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Pursuing Degree</span>
                </div>
              </div>

              {/* Degree & College Info */}
              <div className="mt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h3 className="font-mono text-xl font-bold text-white sm:text-2xl">
                      B.E in Computer Science &amp; Engineering
                    </h3>
                    <p className="mt-1 flex items-center gap-2 font-sans text-sm text-slate-400">
                      <Building2 size={15} className="text-cyan-400" />
                      <span>Shree Venkateshwara Hi-Tech Engineering College</span>
                    </p>
                  </div>
                </div>

                {/* Performance Metric / CGPA Pill */}
                <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono">
                  <span className="text-xs text-slate-400">Academic Score:</span>
                  <span className="text-sm font-bold text-cyan-300">
                    7.2+ CGPA <span className="text-[10px] text-slate-500">(Current)</span>
                  </span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-8 border-t border-white/5 pt-6">
                <div className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-slate-300 uppercase">
                  <BookOpen size={15} className="text-cyan-400" />
                  <span>Key Coursework &amp; Foundations</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {coursework.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-cyan-400/40 hover:text-cyan-200"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Certifications & Highlights */}
          <div className="space-y-6 lg:col-span-5">
            
            {/* Certifications Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-white/10 bg-[#060b18]/80 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
                <Award size={16} className="text-cyan-400" />
                <span>Certifications</span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-cyan-500/30"
                  >
                    <div>
                      <p className="font-mono text-xs font-semibold text-slate-200">
                        {cert.title}
                      </p>
                      <p className="font-sans text-[11px] text-slate-500">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Academic Highlights / Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-2xl border border-white/10 bg-[#060b18]/80 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
                <Trophy size={16} className="text-amber-400" />
                <span>Key Milestones</span>
              </div>

              <ul className="space-y-3 font-sans text-xs text-slate-300">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}