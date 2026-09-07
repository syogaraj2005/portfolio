import React from "react";
import myProfileImg from "../assets/my2.jpeg";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Download,
  ArrowRight,
  Code2,
  FolderGit2,
  Lightbulb,
  Users2,
} from "lucide-react";

const infoDetails = [
  { label: "Name", value: "Yogaraj S", icon: <User size={14} className="text-cyan-400" /> },
  { label: "Email", value: "syogaraj2005@gmail.com", icon: <Mail size={14} className="text-cyan-400" /> },
  { label: "Phone", value: "+91 9363145633", icon: <Phone size={14} className="text-cyan-400" /> },
  { label: "Location", value: "Tiruppur, Tamil Nadu, India", icon: <MapPin size={14} className="text-cyan-400" /> },
  { label: "Education", value: "B.E. (CSE) - In Progress", icon: <GraduationCap size={14} className="text-cyan-400" /> },
];

const floatingTech = [
  { name: "React", icon: "⚛", color: "#38bdf8", top: "12%", right: "26%" },
  { name: "JS", icon: "JS", color: "#facc15", top: "28%", right: "18%" },
  { name: "Java", icon: "☕", color: "#f97316", top: "40%", right: "32%" },
  { name: "Python", icon: "🐍", color: "#60a5fa", top: "44%", right: "10%" },
  { name: "Git", icon: "⌥", color: "#f43f5e", top: "60%", right: "14%" },
  { name: "C", icon: "C", color: "#93c5fd", top: "68%", right: "26%" },
];

const milestones = [
  {
    icon: <Code2 className="text-cyan-400" size={20} />,
    title: "10+",
    subtitle: "Technologies",
    desc: "From frontend to backend, I work with modern tech.",
  },
  {
    icon: <FolderGit2 className="text-cyan-400" size={20} />,
    title: "5+",
    subtitle: "Projects",
    desc: "Built real-world projects with clean and scalable code.",
  },
  {
    icon: <Lightbulb className="text-cyan-400" size={20} />,
    title: "Always",
    subtitle: "Learning",
    desc: "Exploring new technologies every day to stay ahead.",
  },
  {
    icon: <Users2 className="text-cyan-400" size={20} />,
    title: "Team Player",
    subtitle: "Collaborative",
    desc: "I believe in collaboration, open mind and positive energy.",
  },
];

export default function About() {
  const cvDownloadUrl = `${import.meta.env.BASE_URL}Yogaraj_S CV.pdf`;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full scroll-mt-16 overflow-hidden bg-[#020511] text-white flex flex-col justify-between py-16 px-5 sm:px-8 selection:bg-cyan-500/30 select-none"
    >
      {/* ================= BACKGROUND AURA ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-[550px] w-[550px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf810_1px,transparent_1px)] [background-size:26px_26px] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl my-auto">
        
        {/* ================= MAIN VIEWPORT ROW ================= */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT: INFO & TYPOGRAPHY (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Tag */}
            <div className="flex items-center gap-3 font-mono text-xs font-semibold tracking-widest text-cyan-400">
              <span>ABOUT ME</span>
              <span className="h-[1px] w-12 bg-cyan-400/40" />
            </div>

            {/* Title */}
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white font-sans leading-[1.08]">
              Turning Ideas Into <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              I'm Yogaraj S, a passionate Full Stack Developer who loves building scalable web applications and solving real-world problems with technology. I enjoy turning ideas into working solutions and continuously learning new tools and technologies to improve my skills and create better experiences.
            </p>

            {/* Personal Details Table */}
            <div className="mt-6 space-y-2.5 max-w-md font-sans text-xs">
              {infoDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] border border-white/5">
                    {item.icon}
                  </div>
                  <span className="w-20 text-slate-400 text-[11px] font-medium">{item.label}</span>
                  <span className="text-slate-200 font-semibold text-xs truncate">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={cvDownloadUrl}
                download="Yogaraj_S_CV.pdf"
                className="group flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/30 px-5 py-2.5 font-sans text-xs font-semibold text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
              >
                <Download size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-cyan-300"
              >
                <span>Let's Connect</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* CENTER & RIGHT: DEVELOPER WORKSPACE + FLOATING ORBIT HELIX (7 COLS) */}
          <div className="relative lg:col-span-7 flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* Ambient Workstation Desk Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[340px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
            </div>

            {/* Center Developer Avatar / Desk Setup */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative w-[340px] sm:w-[420px] aspect-[4/5] overflow-hidden rounded-3xl [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]">
                <img
                  src={myProfileImg}
                  alt="Yogaraj S"
                  className="w-full h-full object-cover object-top contrast-115 brightness-95 drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                />

                {/* Cyber Workstation Laptop Watermark Icon */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-xl border border-cyan-400/40 bg-[#050e26]/85 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                  <span className="font-mono text-cyan-300 font-bold text-xs tracking-wider">&lt;/&gt;</span>
                </div>
              </div>
            </div>

            {/* Floating Motivational Quote Card */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-0 sm:right-4 z-20 w-44 sm:w-48 rounded-2xl border border-cyan-400/30 bg-[#061028]/85 p-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] [transform:rotate(3deg)]"
            >
              <p className="font-sans text-xs italic text-slate-200 leading-relaxed">
                "Small steps every day lead to big results."
              </p>
              <p className="mt-2 text-right font-mono text-[10px] text-cyan-400 font-semibold">
                — Yogaraj S
              </p>
            </motion.div>

            {/* Floating Holographic Technology Badges */}
            {floatingTech.map((tech, idx) => (
              <motion.div
                key={tech.name}
                animate={{
                  y: [0, idx % 2 === 0 ? -8 : 8, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 3.5 + idx * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ top: tech.top, right: tech.right }}
                className="absolute z-20 hidden sm:flex flex-col items-center justify-center group cursor-pointer"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-[#07112c]/90 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_#38bdf8]"
                >
                  <span>{tech.icon}</span>
                  <span
                    className="absolute -bottom-1 h-1 w-4 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* ================= BOTTOM MILESTONES RIBBON ("-My Journey") ================= */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#060c20]/75 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-center">
            
            {/* Left Journey Script Tag */}
            <div className="lg:col-span-1 flex flex-col items-start justify-center">
              <span className="font-mono text-lg text-cyan-400 font-bold -rotate-6 select-none">
                -My <br />
                <span className="text-white text-xl">Journey</span> ➔
              </span>
            </div>

            {/* 4 Center Statistics Milestone Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {milestones.map((m) => (
                <div key={m.title} className="flex flex-col space-y-1">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-950/40 border border-cyan-400/20">
                    {m.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white font-sans">{m.title}</h4>
                  <p className="text-xs font-bold text-cyan-300">{m.subtitle}</p>
                  <p className="text-[10px] text-slate-400 leading-relaxed mt-1 line-clamp-2">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Tag */}
            <div className="lg:col-span-1 flex flex-col items-end justify-center text-right">
              <p className="font-mono text-xs font-bold text-cyan-300 -rotate-3 select-none">
                Let's <br />
                Build Something <br />
                <span className="text-white">Great ⤴</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}