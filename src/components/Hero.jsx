import React, { useEffect, useState, useRef } from "react";
import heroProfileImg from "../assets/my4.jpeg";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// ==========================================
// SOCIAL LINKS WITH VECTOR ICONS & STYLING
// ==========================================
const socialLinks = [
  {
    name: "GitHub",
    label: "GH // REPO",
    href: "https://github.com/syogaraj2005",
    color: "#38bdf8",
    hoverBorder: "hover:border-cyan-400/60",
    hoverBg: "hover:bg-cyan-500/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "IN // NET",
    href: "https://www.linkedin.com/in/yogaraj-s2005/",
    color: "#60a5fa",
    hoverBorder: "hover:border-blue-400/60",
    hoverBg: "hover:bg-blue-500/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    label: "IG // MEDIA",
    href: "https://instagram.com/",
    color: "#e879f9",
    hoverBorder: "hover:border-pink-400/60",
    hoverBg: "hover:bg-pink-500/10",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(232,121,249,0.4)]",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

const telemetryStats = [
  { label: "REST APIS BENCHMARK", value: "99.98%", status: "OPTIMAL" },
  { label: "LATENCY TARGET", value: "<16ms", status: "STABLE" },
  { label: "ARCHITECTURE", value: "MICROSERVICES", status: "DEPLOYED" },
  { label: "DATA CONSISTENCY", value: "ACID STRICT", status: "SYNCED" },
];

const interactiveTags = [
  "Spring Boot 3",
  "Java 21",
  "MySQL Enterprise",
  "Redis Cache",
  "Docker Engine",
  "Reactive Streams",
];

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [activeStackIdx, setActiveStackIdx] = useState(0);
  const [audioFreq, setAudioFreq] = useState([40, 65, 85, 30, 95, 55, 75, 45]);
  const [systemUptime] = useState("99.995");
  const [currentPing, setCurrentPing] = useState(12);
  const [ripples, setRipples] = useState([]);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  // ==========================================
  // MOUSE PHYSICS & 3D PARALLAX SPRINGS
  // ==========================================
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const fastSpring = { damping: 22, stiffness: 450, mass: 0.2 };
  const slowSpring = { damping: 30, stiffness: 180, mass: 0.6 };

  const cursorX = useSpring(mouseX, fastSpring);
  const cursorY = useSpring(mouseY, fastSpring);
  const followerX = useSpring(mouseX, slowSpring);
  const followerY = useSpring(mouseY, slowSpring);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [12, -12]), fastSpring);
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-12, 12]), fastSpring);

  // ==========================================
  // EVENT LISTENERS & BACKGROUND INTERVALS
  // ==========================================
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const { innerWidth, innerHeight } = window;
      tiltX.set(e.clientX / innerWidth - 0.5);
      tiltY.set(e.clientY / innerHeight - 0.5);
    };

    const handleMouseDown = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [mouseX, mouseY, tiltX, tiltY]);

  // Audio frequency & tag rotation ticker
  useEffect(() => {
    const audioInterval = setInterval(() => {
      setAudioFreq((prev) =>
        prev.map(() => Math.floor(Math.random() * 75) + 20)
      );
      setCurrentPing((prev) => {
        const jitter = Math.floor(Math.random() * 5) - 2;
        return Math.max(8, Math.min(22, prev + jitter));
      });
    }, 450);

    const stackInterval = setInterval(() => {
      setActiveStackIdx((prev) => (prev + 1) % interactiveTags.length);
    }, 2400);

    return () => {
      clearInterval(audioInterval);
      clearInterval(stackInterval);
    };
  }, []);

  // ==========================================
  // CANVAS PARTICLES CONSTELLATION
  // ==========================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const nodeCount = 52;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 1,
      alpha: Math.random() * 0.5 + 0.25,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodeCount; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${nodeA.alpha})`;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.fill();

        for (let j = i + 1; j < nodeCount; j++) {
          const nodeB = nodes[j];
          const dist = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);

          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            const strandAlpha = (1 - dist / 135) * 0.18;
            ctx.strokeStyle = `rgba(96, 165, 250, ${strandAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleElementEnter = (customText = "") => {
    setIsHovered(true);
    setCursorText(customText);
  };

  const handleElementLeave = () => {
    setIsHovered(false);
    setCursorText("");
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#02050e] text-white flex flex-col justify-between selection:bg-cyan-400 selection:text-black cursor-none"
    >
      {/* ==========================================
          LAYER 1: CUSTOM KINEMATIC GLOW CURSOR
          ========================================== */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          borderColor: isHovered ? "#38bdf8" : "rgba(147, 197, 253, 0.35)",
          backgroundColor: isHovered
            ? "rgba(56, 189, 248, 0.12)"
            : "transparent",
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full border border-cyan-400/50 backdrop-blur-[2px] hidden lg:flex h-11 w-11"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-mono font-bold tracking-widest text-cyan-300 uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] hidden lg:block"
      />

      <AnimatePresence>
        {ripples.map((rip) => (
          <motion.span
            key={rip.id}
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 6.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{
              top: rip.y,
              left: rip.x,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="pointer-events-none fixed z-40 h-16 w-16 rounded-full border border-cyan-400/80 shadow-[0_0_20px_#06b6d4]"
          />
        ))}
      </AnimatePresence>

      {/* ==========================================
          LAYER 2: AMBIENT NEBULAS & CANVAS
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full pointer-events-none opacity-85"
        />

        <motion.div
          animate={{
            scale: [1, 1.25, 1.05, 1],
            x: [-30, 40, -20, -30],
            y: [-20, 30, -10, -20],
            rotate: [0, 90, 180, 360],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-36 -left-32 h-[680px] w-[680px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent blur-[150px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 0.9, 1],
            x: [20, -30, 15, 20],
            y: [30, -20, 25, 30],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-28 h-[650px] w-[650px] rounded-full bg-gradient-to-tl from-purple-700/25 via-indigo-600/15 to-transparent blur-[160px]"
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [0.95, 1.12, 0.95],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-cyan-600/10 blur-[130px]"
        />

        <motion.div
          animate={{ y: ["-100%", "1200%"] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_18px_#38bdf8]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80b_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80b_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_65%,transparent_100%)]" />
      </div>

      {/* ==========================================
          LAYER 3: TOP SYSTEM TELEMETRY DOCK
          ========================================== */}
      <div className="relative z-30 mx-auto w-full max-w-7xl px-6 pt-7">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-slate-300">
              <span className="text-cyan-400 font-bold">NODE // YOGARAJ.DEV:</span>
              <span className="text-emerald-400 font-semibold">ACTIVE</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">LATENCY: {currentPing}ms</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">
                AVAILABILITY: {systemUptime}%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 sm:flex">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 mr-2">
                SYS.FREQ
              </span>
              {audioFreq.map((height, idx) => (
                <motion.div
                  key={idx}
                  animate={{ height: `${height * 0.22}px` }}
                  transition={{ duration: 0.35 }}
                  className="w-1 rounded-full bg-gradient-to-t from-cyan-500 to-indigo-400 shadow-[0_0_6px_rgba(56,189,248,0.4)]"
                />
              ))}
            </div>

            <div
              onMouseEnter={() => handleElementEnter("TECH")}
              onMouseLeave={handleElementLeave}
              className="flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3.5 py-1 text-[11px] font-mono text-cyan-300 backdrop-blur-md"
            >
              <span className="text-slate-400 font-normal">CORE:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeStackIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="font-bold text-white tracking-wider"
                >
                  {interactiveTags[activeStackIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          LAYER 4: MAIN VIEWPORT (WITH NAME & LAYOUT)
          ========================================== */}
      <div className="relative z-20 mx-auto grid w-full max-w-7xl flex-1 items-center px-6 lg:grid-cols-12 gap-8 my-auto py-8">
        
        {/* LEFT COLUMN: Name Accent & Headline */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 z-20 flex flex-col justify-center"
        >
          {/* Prominent Name Identifier Badge */}
          <div className="mb-4 inline-flex items-center gap-2.5 font-mono text-xs tracking-widest text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span className="font-bold text-white">YOGARAJ S</span>
            <span className="text-slate-500">//</span>
            <span className="text-slate-400">LEAD ENGINEER</span>
          </div>

          {/* Reference Massive Headline with Neon Stroke Effect */}
          <h1 className="text-6xl font-black uppercase tracking-tight sm:text-7xl xl:text-8xl leading-[0.92]">
            BUILD <br />
            <span
              className="text-transparent transition-all duration-300"
              style={{
                WebkitTextStroke: "2px #38bdf8",
                textShadow:
                  "0 0 45px rgba(56,189,248,0.45), 0 0 10px rgba(56,189,248,0.2)",
              }}
            >
              YRS
            </span> <br />
            FUTURES
          </h1>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs tracking-wider text-slate-400 uppercase">
              HIGH-CONCURRENCY ARCHITECTURE // PRODUCTION READY
            </span>
          </div>
        </motion.div>

        {/* CENTER COLUMN: 3D Cinematic Portrait With Interactive Hover Magic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative lg:col-span-4 flex flex-col items-center justify-center -my-6 lg:my-0 select-none"
        >
          {/* Outer Dynamic Spinning Orbit Ring */}
          <motion.div
            animate={{
              rotate: 360,
              scale: isPhotoHovered ? 1.08 : 1,
              borderColor: isPhotoHovered
                ? "rgba(56, 189, 248, 0.6)"
                : "rgba(56, 189, 248, 0.2)",
            }}
            transition={{
              rotate: {
                duration: isPhotoHovered ? 14 : 32,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 0.4 },
              borderColor: { duration: 0.4 },
            }}
            className="absolute top-1/6 h-[390px] w-[390px] rounded-full border border-dashed pointer-events-none shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          />

          {/* Inner Counter-Rotating Dotted Ring */}
          <motion.div
            animate={{
              rotate: -360,
              scale: isPhotoHovered ? 1.12 : 1,
              borderColor: isPhotoHovered
                ? "rgba(168, 85, 247, 0.6)"
                : "rgba(139, 92, 246, 0.2)",
            }}
            transition={{
              rotate: {
                duration: isPhotoHovered ? 18 : 42,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 0.4 },
              borderColor: { duration: 0.4 },
            }}
            className="absolute top-1/6 h-[450px] w-[450px] rounded-full border border-dotted pointer-events-none"
          />

          {/* Interactive Photo Frame Container */}
          <div
            onMouseEnter={() => {
              handleElementEnter("YOGARAJ");
              setIsPhotoHovered(true);
            }}
            onMouseLeave={() => {
              handleElementLeave();
              setIsPhotoHovered(false);
            }}
            className="group relative w-full max-w-[400px] aspect-[4/5] mx-auto flex items-end cursor-pointer overflow-hidden rounded-3xl transition-all duration-500"
          >
            {/* Ambient Background Aura behind photo on hover */}
            <div
              className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/35 via-indigo-600/30 to-purple-600/25 blur-3xl transition-opacity duration-500 ${
                isPhotoHovered ? "opacity-100 scale-110" : "opacity-30 scale-95"
              }`}
            />

            {/* Main Profile Image with Grayscale-to-Color + Zoom Dynamics */}
            <motion.img
              src={heroProfileImg}
              alt="Yogaraj S"
              animate={{
                scale: isPhotoHovered ? 1.08 : 1,
                filter: isPhotoHovered
                  ? "grayscale(0%) contrast(110%) brightness(105%) drop-shadow(0 25px 45px rgba(56,189,248,0.45))"
                  : "grayscale(100%) contrast(125%) brightness(100%) drop-shadow(0 15px 35px rgba(0,0,0,0.8))",
              }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)] transition-all"
            />

            {/* Cyber Holographic HUD Scan Beam Effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                animate={isPhotoHovered ? { y: ["-10%", "110%"] } : { y: "-10%" }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-24 w-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent border-b border-cyan-300/60 shadow-[0_0_20px_#38bdf8]"
              />
            </div>

            {/* Corner Cyber HUD Accents */}
            <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute bottom-8 left-4 h-4 w-4 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute bottom-8 right-4 h-4 w-4 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
          </div>

          {/* Integrated Author & Title Badge with Glow on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              borderColor: isPhotoHovered
                ? "rgba(56, 189, 248, 0.6)"
                : "rgba(6, 182, 212, 0.2)",
              boxShadow: isPhotoHovered
                ? "0 0 25px rgba(56, 189, 248, 0.35)"
                : "0 8px 30px rgba(0,0,0,0.6)",
            }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-3 flex items-center gap-3 rounded-full border bg-[#060b18]/90 px-4 py-2 backdrop-blur-xl transition-all"
          >
            <span
              className={`h-2 w-2 rounded-full shadow-[0_0_10px_#38bdf8] ${
                isPhotoHovered ? "bg-emerald-400 shadow-[0_0_12px_#34d399] scale-125" : "bg-cyan-400 animate-pulse"
              } transition-all`}
            />
            <span className="text-xs font-mono tracking-wider text-slate-200">
              Yogaraj S — {isPhotoHovered ? "SYSTEM READY // ONLINE" : "Backend Architect & Lead"}
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Value Proposition & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 lg:pl-6 z-20 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl leading-snug">
            Innovate. Develop. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Succeed. Fast.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-400 font-normal">
            Transforming system concepts into scalable, fault-tolerant backend
            infrastructures. Delivering resilient Spring Boot microservices, high-throughput
            REST APIs, and production-tested database workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onMouseEnter={() => handleElementEnter("CONTACT")}
              onMouseLeave={handleElementLeave}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.75)] hover:scale-105"
            >
              <span className="relative z-10 font-black">Get a Free Quote</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="#projects"
              onMouseEnter={() => handleElementEnter("EXPLORE")}
              onMouseLeave={handleElementLeave}
              className="rounded-full border border-white/20 bg-white/[0.04] px-7 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_22px_rgba(56,189,248,0.3)] hover:scale-105"
            >
              Our Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
            {telemetryStats.slice(0, 2).map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>
                <span className="font-mono text-sm font-bold text-cyan-300">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-5 font-mono text-xs">
        <div className="flex items-center gap-3 text-slate-400">
          <div className="flex h-5 w-1 rounded bg-gradient-to-b from-cyan-400 to-indigo-600 shadow-[0_0_8px_#38bdf8]" />
          <p className="tracking-wider uppercase text-[11px]">
            ENGINEERED BY YOGARAJ S — RELIABLE ENTERPRISE BACKEND ECOSYSTEMS
          </p>
        </div>

        {/* Social Links with Individual Brand Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleElementEnter(item.name.toUpperCase())}
              onMouseLeave={handleElementLeave}
              className={`group relative flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-slate-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:text-white ${item.hoverBorder} ${item.hoverBg} ${item.hoverShadow}`}
              title={item.name}
            >
              <span
                style={{ color: item.color }}
                className="transition-transform duration-300 group-hover:scale-110"
              >
                {item.icon}
              </span>

              <span className="font-mono text-xs tracking-wider">
                {item.name}
              </span>

              <span className="text-[10px] text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ==========================================
          LAYER 5: INTERACTIVE SCROLL-DOWN INDICATOR
          ========================================== */}
      <div className="relative z-30 mx-auto -mt-6 mb-3 flex flex-col items-center justify-center">
        <button
          onClick={scrollToNextSection}
          onMouseEnter={() => handleElementEnter("SCROLL")}
          onMouseLeave={handleElementLeave}
          className="group flex flex-col items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-cyan-300"
        >
          <div className="relative flex h-9 w-5 items-start justify-center rounded-full border-2 border-slate-500/60 p-1 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all">
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]"
            />
          </div>

          <div className="flex flex-col items-center">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-slate-500 group-hover:text-cyan-300 transition-colors">
              SCROLL DOWN
            </span>
            <motion.span
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xs text-cyan-400"
            >
              ▼
            </motion.span>
          </div>
        </button>
      </div>
    </section>
  );
}