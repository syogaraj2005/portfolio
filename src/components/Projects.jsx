import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons.jsx";

/* =========================================================
   PROJECTS WITH SUITABLE HIGH-QUALITY TECH IMAGERY
   ========================================================= */

const targetProjects = [
  {
    id: "bookshare",
    name: "AI Powered BookShare System",
    tag: "FULL STACK WEB APPLICATION",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    description:
      "A full-stack book sharing platform developed to help users add, search and share books. The application includes user registration and login, book management, book requests, book details, admin management and AI-based book recommendations.",
    featured: true,
    github: "https://github.com/syogaraj2005/BookShare",
    link: "https://bookshare-app.onrender.com/",
    stack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    id: "tn-ridex-pro",
    name: "TN RideX Pro",
    tag: "VEHICLE RENTAL & BOOKING SYSTEM",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    description:
      "A vehicle rental and booking application designed to manage vehicles, customer information and rental operations. The project focuses on simplifying vehicle availability, booking and rental management through a structured application workflow.",
    featured: false,
    github: "https://github.com/syogaraj2005/RideX-TN-Pro",
    link: "https://ridex-tn-pro.onrender.com/profile",
    stack: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
  },

  {
    id: "career-copilot",
    name: "Career Copilot",
    tag: "AI CAREER ASSISTANT",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    description:
      "An AI-powered career assistance application developed with Angular and Node.js. The system helps students and job seekers with career-related guidance, resume preparation and interview practice through an interactive web interface.",
    featured: false,
    github: "https://github.com/syogaraj2005/AI-Career-Copilot",
    link: "https://career-copilot-9ihc.onrender.com",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "Node.js",
      "Express.js"
    ],
  },

  {
    id: "interview-ai",
    name: "Interview AI Bot",
    tag: "AI INTERVIEW PRACTICE",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description:
      "An AI-powered interview practice application developed using Python and Streamlit. Users can practise interview questions and interact with AI-generated responses to improve their technical interview preparation.",
    featured: false,
    github: "https://github.com/syogaraj2005/Interview-AI-bot",
    link: "https://github.com/syogaraj2005/Interview-AI-bot/blob/main/project.py",
    stack: [
      "Python",
      "Cohere",
      "Streamlit",
      "AI",
    ],
  },

  {
    id: "online-voting",
    name: "Vehicle Rental Management System",
    tag: "SMART VEHICLE RENTAL & SAFE RIDE",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    description:
      "A database-driven vehicle rental application developed to manage vehicle details, customer information, rental bookings and return operations. The system helps track vehicle availability and organize rental activities through a simple and structured management workflow.",
    featured: false,
    github: "https://github.com/syogaraj2005/vehicle-rental-management",
    link: "https://github.com/syogaraj2005/vehicle-rental-management/blob/main/vehicle.java",
    stack: [
      "Java",
      "MySQL",
    ],
  },
];

/* =========================================================
   PROJECT CARD WITH IMAGE BANNER & GLOW HOVER
   ========================================================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-[#060b18]/90 backdrop-blur-xl transition-all duration-500 ${
        project.featured
          ? "border-cyan-500/30 sm:col-span-2 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.22)]"
          : "border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.14)]"
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf808_1px,transparent_1px),linear-gradient(to_bottom,#38bdf808_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Project Thumbnail Image Container */}
        {project.image && (
          <div className="relative w-full h-44 sm:h-52 overflow-hidden border-b border-white/10">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 contrast-110 brightness-90 group-hover:brightness-100"
              loading="lazy"
            />
            {/* Top-to-Bottom Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-[#060b18]/40 to-transparent" />
            
            {/* Corner Cyber Pill */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-[#060b18]/85 px-2.5 py-1 font-mono text-[9px] font-semibold text-cyan-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{project.tag}</span>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
              <div className="min-w-0">
                <h3 className="font-mono text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl lg:text-2xl">
                  {project.name}
                </h3>
              </div>

              {/* Project Links */}
              <div className="flex shrink-0 items-center gap-1.5">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                    aria-label={`${project.name} GitHub Repository`}
                  >
                    <Github size={15} />
                  </motion.a>
                )}

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                    aria-label={`${project.name} Project Link`}
                  >
                    <ArrowUpRight size={15} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-4xl text-xs leading-relaxed text-slate-300 sm:text-sm">
              {project.description}
            </p>
          </div>

          <div>
            {/* Technologies */}
            <div className="mt-5">
              <div className="mb-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">
                TECH STACK
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((technology, techIndex) => (
                  <motion.span
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + techIndex * 0.04,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-slate-300 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Bottom Project Indicator */}
            <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/5 pt-3">
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-wider text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.7)]" />
                COMPLETED
              </div>

              <span className="font-mono text-[9px] text-cyan-500/70">
                PROJECT_{String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Beam */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500"
      />
    </motion.article>
  );
}

/* =========================================================
   PROJECTS SECTION
   ========================================================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden border-b border-cyan-500/10 bg-[#02050e] py-14 text-white sm:py-16 lg:py-20"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            scale: [1, 1.12, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-indigo-600/15 blur-[130px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf808_1px,transparent_1px),linear-gradient(to_bottom,#38bdf808_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_55%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-widest text-cyan-400 sm:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          <span className="text-slate-600">//</span>
          <span className="font-bold">03. PROJECTS</span>
          <span className="text-slate-600">//</span>
          <span className="text-slate-500">selected-work/</span>
        </motion.div>

        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="font-mono text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
              What I've
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Built
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm">
              A selection of projects built while developing skills in
              backend development, full-stack applications, AI and modern
              web technologies.
            </p>
          </motion.div>

          {/* GitHub Action */}
          <motion.a
            href="https://github.com/syogaraj2005"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/5 px-4 py-2 font-mono text-[10px] tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] sm:text-xs"
          >
            <Github size={14} />
            <span>VIEW GITHUB</span>
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </div>

        {/* Project Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {targetProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Status */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-8 flex items-center justify-center gap-2 font-mono text-[9px] tracking-widest text-slate-500"
        >
          <span className="text-cyan-500">●</span>
          BUILT_WHILE_LEARNING
        </motion.div>
      </div>
    </section>
  );
}