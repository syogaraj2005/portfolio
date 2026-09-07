import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Context Provider
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Component Imports
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/TopTabs.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import GithubStats from "./components/GithubStats.jsx";
import Contact from "./components/Contact.jsx";
import PortfolioChatbot from "./components/PortfolioChatbot.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full bg-[#02050e] text-white selection:bg-cyan-500/30 selection:text-white">
        {/* ================= 1. CYBER SYSTEM PRELOADER (0 -> 100%) ================= */}
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {/* ================= 2. MAIN APPLICATION WORKSPACE ================= */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex min-h-screen flex-col"
          >
            {/* Top Navigation Bar */}
            <Navbar />

            {/* Main Portfolio Sections */}
            <main className="flex-1">
              <section id="hero">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="education">
              <Education />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="github">
                <GithubStats />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </main>

            {/* Floating AI Chatbot Assistant */}
            <PortfolioChatbot />
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
}