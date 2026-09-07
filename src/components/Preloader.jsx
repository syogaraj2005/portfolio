import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState("INITIALIZING CORE...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 4) + 1;
        const capped = next > 100 ? 100 : next;

        if (capped > 20 && capped < 50) {
          setBootText("FETCHING REPOSITORIES & NEURAL ASSETS...");
        } else if (capped >= 50 && capped < 80) {
          setBootText("COMPILING ARCHITECTURAL MODULES...");
        } else if (capped >= 80) {
          setBootText("SYSTEM OPERATIONAL. WELCOME.");
        }

        return capped;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#02050e] px-6 py-12 text-white select-none overflow-hidden"
    >
      {/* Background Ambient Glow & Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between font-mono text-[11px] text-slate-500">
        <div className="flex items-center gap-2 text-cyan-400">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <span>SYS.LOADER // V2.6</span>
        </div>
        <span>LOCATION: TIRUPPUR // TN</span>
      </div>

      {/* Center Name & Massive Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cyan-400 mb-2"
        >
          // PORTFOLIO INITIALIZATION
        </motion.p>

        {/* User Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-sans"
        >
          YOGARAJ{" "}
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px #38bdf8",
              textShadow: "0 0 35px rgba(56,189,248,0.5)",
            }}
          >
            S
          </span>
        </motion.h1>

        {/* 0 to 100 Counter */}
        <div className="mt-5 font-mono text-6xl sm:text-8xl md:text-9xl font-black text-cyan-300 tracking-tighter">
          {progress}
          <span className="text-3xl sm:text-5xl text-slate-600 font-normal">%</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-1.5 w-64 sm:w-80 md:w-96 overflow-hidden rounded-full bg-white/10 p-0.5 border border-cyan-500/30">
          <motion.div
            style={{ width: `${progress}%` }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 shadow-[0_0_15px_#38bdf8]"
          />
        </div>

        {/* Dynamic Boot Message */}
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-slate-400">
          &gt; {bootText}
        </p>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between font-mono text-[10px] text-slate-600">
        <span>MEM: OK // NET: STABLE</span>
        <span className="text-cyan-400">READY</span>
      </div>
    </motion.div>
  );
}