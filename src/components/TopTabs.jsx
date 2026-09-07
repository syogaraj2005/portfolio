import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  ChevronRight,
  Download,
  X,
  Menu,
} from "lucide-react";
import Logo from "./logo.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

// ==========================================
// NAVIGATION ITEMS CONFIGURATION
// ==========================================
const navItems = [
  { id: "hero", label: "Home", devLabel: "hero.jsx", icon: <Home size={19} /> },
  { id: "about", label: "About", devLabel: "about.jsx", icon: <User size={19} /> },
  { id: "skills", label: "Skills", devLabel: "skills.json", icon: <Code2 size={19} /> },
  { id: "projects", label: "Projects", devLabel: "projects/", icon: <Briefcase size={19} /> },
  { id: "education", label: "Education", devLabel: "education.sys", icon: <GraduationCap size={19} /> },
  { id: "contact", label: "Contact", devLabel: "contact.sh", icon: <Mail size={19} /> },
];

export default function Navbar({ activeId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeId || "hero");

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Auto-highlight active tab on user scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setCurrentSection(id);
    setIsOpen(false);

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      {/* =========================================================
          DESKTOP & MOBILE TOP HEADER BAR
          ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-cyan-500/15 bg-[#02050e]/95 backdrop-blur-2xl transition-all select-none">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "hero")}
            className="flex items-center gap-3 group"
          >
            {/* Cyan Cyber Glow Geometric Logo */}
            <div className="text-cyan-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-transform duration-300 group-hover:scale-105">
              <Logo className="h-9 w-9" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-sm font-extrabold tracking-wider text-white">
                YOGARAJ S
              </span>
              <span className="text-[10px] text-cyan-400 font-medium tracking-wide">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* ================= DESKTOP VIEW: TABS & CONTROLS ================= */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center gap-1.5 font-mono text-xs">
              {/* macOS Style Console Indicator */}
              <div className="flex items-center gap-1.5 pr-3 mr-1 border-r border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
              </div>

              {navItems.map((tab) => {
                const active = currentSection === tab.id;
                return (
                  <a
                    key={tab.label}
                    href={`#${tab.id}`}
                    onClick={(e) => handleScrollTo(e, tab.id)}
                    className={`group relative flex items-center gap-2 rounded-lg px-3 py-1.5 transition-all duration-200 ${
                      active
                        ? "border border-cyan-400/40 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                        : "border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="text-cyan-400">{tab.icon}</span>
                    <span className="tracking-wide">{tab.devLabel}</span>
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Theme Switcher */}
            <div className="border-l border-white/10 pl-3">
              <ThemeSwitcher />
            </div>
          </div>

          {/* ================= MOBILE CONTROLS ================= */}
          <div className="flex items-center gap-2.5 md:hidden">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
              aria-label="Open Mobile Menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================
          FULL-SCREEN MOBILE NAVIGATION DRAWER
          ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#040817] px-6 pt-6 pb-10 text-white md:hidden"
          >
            {/* Top Bar with Brand & Close Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                  <Logo className="h-10 w-10" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-base font-black tracking-wide text-white">
                    YOGARAJ S
                  </span>
                  <span className="text-[11px] text-cyan-400 font-medium">
                    Full Stack Developer
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-white"
                aria-label="Close Mobile Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Nav Links */}
            <div className="my-auto flex flex-col space-y-3 py-6 font-sans">
              {navItems.map((item) => {
                const active = currentSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className={`flex items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold transition-all duration-200 ${
                      active
                        ? "border border-cyan-400/40 bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-transparent text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                        : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={active ? "text-cyan-400" : "text-slate-400"}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {active && (
                      <ChevronRight size={19} className="text-cyan-400" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Bottom: Download CV Button */}
            <div className="pt-2">
              <a
                href="/Yogaraj_S CV.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent py-4 text-sm font-bold text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all active:scale-95"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}