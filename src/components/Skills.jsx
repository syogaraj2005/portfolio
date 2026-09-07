import React, { useState } from "react";
import { motion } from "framer-motion";

// =========================================================================
// 1. CATEGORY LEGEND
// =========================================================================
const categories = [
  { name: "Programming Languages", color: "#f59e0b" },
  { name: "Frontend", color: "#38bdf8" },
  { name: "Backend", color: "#22c55e" },
  { name: "Database", color: "#ec4899" },
  { name: "Cloud & Deployment", color: "#06b6d4" },
  { name: "Tools & Technologies", color: "#a855f7" },
  { name: "AI / Computer Vision", color: "#818cf8" },
];

// =========================================================================
// 2. CONCENTRIC PLANETARY ORBIT DATA (Dynamic Scaled Dimensions)
// =========================================================================
const orbitRings = [
  {
    id: "inner",
    rx: 240, // Horizontal radius
    ry: 95,  // Vertical depth radius
    duration: 32,
    direction: 1, // Clockwise
    items: [
      { name: "Java", icon: "☕", color: "#f97316", cat: "Programming Languages" },
      { name: "Spring Boot", icon: "🍃", color: "#22c55e", cat: "Backend" },
      { name: "React", icon: "⚛", color: "#06b6d4", cat: "Frontend" },
      { name: "MySQL", icon: "🐬", color: "#0284c7", cat: "Database" },
      { name: "REST API", icon: "⚡", color: "#38bdf8", cat: "Backend" },
      { name: "Python", icon: "🐍", color: "#38bdf8", cat: "Programming Languages" },
    ],
  },
  {
    id: "middle",
    rx: 380,
    ry: 150,
    duration: 48,
    direction: -1, // Counter-Clockwise
    items: [
      { name: "JavaScript", icon: "JS", color: "#facc15", cat: "Frontend" },
      { name: "HTML5", icon: "5", color: "#f97316", cat: "Frontend" },
      { name: "CSS3", icon: "3", color: "#38bdf8", cat: "Frontend" },
      { name: "Tailwind CSS", icon: "≈", color: "#38bdf8", cat: "Frontend" },
      { name: "MongoDB", icon: "🍃", color: "#10b981", cat: "Database" },
      { name: "Redis", icon: "🟥", color: "#ef4444", cat: "Database" },
      { name: "Docker", icon: "🐳", color: "#38bdf8", cat: "Tools & Technologies" },
      { name: "Postman", icon: "🚀", color: "#f97316", cat: "Tools & Technologies" },
    ],
  },
  {
    id: "outer",
    rx: 520,
    ry: 205,
    duration: 65,
    direction: 1, // Clockwise
    items: [
      { name: "Git", icon: "⌥", color: "#f97316", cat: "Tools & Technologies" },
      { name: "GitHub", icon: "🐙", color: "#ffffff", cat: "Tools & Technologies" },
      { name: "VS Code", icon: "❖", color: "#0284c7", cat: "Tools & Technologies" },
      { name: "Google Cloud", icon: "☁", color: "#f59e0b", cat: "Cloud & Deployment" },
      { name: "Firebase", icon: "🔥", color: "#f59e0b", cat: "Cloud & Deployment" },
      { name: "Vercel", icon: "▲", color: "#ffffff", cat: "Cloud & Deployment" },
      { name: "Cohere AI", icon: "◈", color: "#ec4899", cat: "AI / Computer Vision" },
      { name: "Streamlit", icon: "👑", color: "#ef4444", cat: "AI / Computer Vision" },
      { name: "OpenCV", icon: "👁", color: "#22c55e", cat: "AI / Computer Vision" },
    ],
  },
];

// Revolving Planet Track
function RevolvingRing({ ring, isPaused, setActiveSkill }) {
  const total = ring.items.length;

  return (
    <motion.div
      animate={{ rotate: isPaused ? undefined : ring.direction * 360 }}
      transition={{
        duration: ring.duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: ring.rx * 2,
        height: ring.ry * 2,
      }}
      className="absolute rounded-[100%] border border-cyan-400/15 pointer-events-none"
    >
      {ring.items.map((skill, index) => {
        const angle = (index / total) * 2 * Math.PI;
        const x = ring.rx + ring.rx * Math.cos(angle);
        const y = ring.ry + ring.ry * Math.sin(angle);

        return (
          <div
            key={skill.name}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
            }}
            className="pointer-events-auto"
          >
            {/* Counter-rotation to keep icons straight */}
            <motion.div
              animate={{ rotate: isPaused ? undefined : -ring.direction * 360 }}
              transition={{
                duration: ring.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
              className="group flex flex-col items-center justify-center cursor-pointer"
            >
              {/* Spherical Glowing Capsule */}
              <div className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-2xl border border-white/15 bg-[#050b1d]/90 backdrop-blur-md transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-300 group-hover:bg-[#0c1836] group-hover:shadow-[0_0_25px_#38bdf8]">
                <span className="text-sm sm:text-base font-bold select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                  {skill.icon}
                </span>
                <span
                  className="absolute -bottom-1 h-1 w-5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Title Tag */}
              <span className="mt-1 whitespace-nowrap font-mono text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_#38bdf8] transition-colors">
                {skill.name}
              </span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-[#020511] text-white flex flex-col justify-between selection:bg-cyan-500/30 select-none py-6 sm:py-8 px-4 sm:px-8"
    >
      {/* ================= BACKGROUND FULL-PAGE AMBIENCE ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Full-width Core Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90vh] w-[90vw] rounded-full bg-gradient-to-r from-blue-950/30 via-cyan-900/15 to-indigo-950/30 blur-[160px]" />
        {/* Full Page Space Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf814_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      {/* ================= 1. TOP HEADER & CATEGORY BAR ================= */}
      <header className="relative z-20 mx-auto w-full max-w-[1400px] flex flex-col justify-between gap-4 lg:flex-row lg:items-center flex-shrink-0">
        <div>
          <div className="mb-1 flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span>MY SKILLS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans">
            Technologies I <span className="text-cyan-400">Work With</span>
          </h2>

          <p className="mt-1 max-w-xl text-xs sm:text-sm text-slate-400 font-sans">
            A combination of logic, creativity and technology helps me build meaningful solutions.
          </p>
        </div>

        {/* Categories Legend Dock */}
        <div className="rounded-2xl border border-white/10 bg-[#060c20]/80 p-3 sm:p-4 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-x-5 gap-y-2 font-mono text-[10px] sm:text-[11px] text-slate-300">
            {categories.map((c) => (
              <div key={c.name} className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]"
                  style={{ backgroundColor: c.color, color: c.color }}
                />
                <span className="tracking-wide text-slate-300 truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ================= 2. FULL VIEWPORT REVOLVING ORBIT CORE ================= */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative z-10 mx-auto flex w-full flex-1 items-center justify-center overflow-hidden my-auto"
        style={{ minHeight: "560px" }}
      >
        {/* Responsive CSS Scale Wrapper: Screens-ku thagundhapadi auto-scale aagum */}
        <div className="relative flex items-center justify-center scale-[0.68] sm:scale-[0.82] md:scale-[0.92] lg:scale-100 xl:scale-[1.08] transition-transform duration-300">
          
          {/* Static Concentric Perspective Grid Shadows */}
          <div className="pointer-events-none absolute flex items-center justify-center">
            <div className="h-[210px] w-[540px] rounded-[100%] border border-cyan-400/10 shadow-[0_0_40px_rgba(56,189,248,0.1)]" />
            <div className="absolute h-[320px] w-[820px] rounded-[100%] border border-cyan-400/10 shadow-[0_0_50px_rgba(56,189,248,0.08)]" />
            <div className="absolute h-[430px] w-[1100px] rounded-[100%] border border-cyan-400/5" />
          </div>

          {/* Central Pulsating 3D Neural Brain Node */}
          <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-none">
            {/* Glowing Core Fog */}
            <div className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-blue-600/40 via-cyan-400/30 to-indigo-600/40 blur-3xl animate-pulse" />

            {/* Neural Brain Artwork */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                filter: [
                  "drop-shadow(0 0 25px rgba(56,189,248,0.75))",
                  "drop-shadow(0 0 45px rgba(56,189,248,0.95))",
                  "drop-shadow(0 0 25px rgba(56,189,248,0.75))",
                ],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-44 w-44 sm:h-52 sm:w-52"
            >
              <svg
                viewBox="0 0 200 200"
                className="h-full w-full text-cyan-300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.4" />
                <circle cx="100" cy="100" r="68" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                
                <path
                  d="M100 45C72 45 60 62 60 82C60 92 65 102 65 110C65 125 78 140 100 152C122 140 135 125 135 110C135 102 140 92 140 82C140 62 128 45 100 45Z"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  fill="url(#brainGlowFull)"
                />
                
                <path
                  d="M100 55V145M80 75C88 85 92 95 85 115M120 75C112 85 108 95 115 115"
                  stroke="#67e8f9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                
                <circle cx="100" cy="85" r="4" fill="#38bdf8" className="animate-ping" />
                <circle cx="82" cy="105" r="3" fill="#a5f3fc" className="animate-pulse" />
                <circle cx="118" cy="105" r="3" fill="#a5f3fc" className="animate-pulse" />

                <defs>
                  <linearGradient id="brainGlowFull" x1="100" y1="45" x2="100" y2="152" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0284c7" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#082f49" stopOpacity="0.45" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <div className="mt-2 rounded-full border border-cyan-500/30 bg-[#060c20]/90 px-3 py-1 font-mono text-[9px] font-bold tracking-widest text-cyan-300 backdrop-blur-md">
              NEURAL_CORE_ACTIVE
            </div>
          </div>

          {/* Planetary Revolving Rings (Continuous Orbit) */}
          {orbitRings.map((ring) => (
            <RevolvingRing
              key={ring.id}
              ring={ring}
              isPaused={isPaused}
              setActiveSkill={setActiveSkill}
            />
          ))}
        </div>

        {/* Active Hover Floating Inspector Pill */}
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 z-30 flex items-center gap-3 rounded-full border border-cyan-400/40 bg-[#07112c]/95 px-6 py-2.5 backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.45)]"
          >
            <span className="text-xl">{activeSkill.icon}</span>
            <span className="font-mono text-sm font-bold text-white tracking-wide">
              {activeSkill.name}
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-xs text-cyan-300">
              {activeSkill.cat}
            </span>
          </motion.div>
        )}
      </div>

      {/* ================= 3. BOTTOM VIEWPORT DOCK ================= */}
      <footer className="relative z-20 mx-auto w-full max-w-[1400px] flex flex-wrap items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-slate-500 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Code</span>
          <span>→</span>
          <span className="text-slate-400">Build</span>
          <span>→</span>
          <span className="text-cyan-400">Innovate</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-2.5 rounded-full border border-slate-600 p-0.5 flex justify-center">
            <span className="h-1 w-0.5 rounded-full bg-cyan-400 animate-bounce" />
          </span>
          <span className="text-[10px] tracking-widest text-slate-400 uppercase">
            Scroll to explore
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold">////</span>
          <span className="text-slate-400">Turning Ideas Into Reality</span>
        </div>
      </footer>
    </section>
  );
}