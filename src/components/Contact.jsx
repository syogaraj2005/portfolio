import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, User, MessageSquare } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons.jsx";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const directEmail = "syogaraj2005@gmail.com";
  const directPhone = "+91 9363145633";
  const locationText = "Tiruppur, Tamil Nadu, India";
  const linkedinUrl = "https://www.linkedin.com/in/yogaraj-s2005/";
  const githubUrl = "https://github.com/syogaraj2005";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full scroll-mt-16 overflow-hidden bg-[#020714] text-white flex flex-col justify-between pt-16 pb-8"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-600/15 blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf80e_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 my-auto">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* ================= LEFT COLUMN: INFOS + 3D FLOATING ENVELOPE ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                GET IN TOUCH
              </p>

              <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans">
                Let’s Work <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>

              <p className="mt-4 max-w-md text-xs sm:text-sm text-slate-400 leading-relaxed">
                Have a project in mind, a question, or just want to say hi? Feel free to reach out. I'm always open to new opportunities, collaborations and great conversations.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              
              {/* Contact Information List */}
              <div className="space-y-5 font-sans">
                {/* Email Item */}
                <a
                  href={`mailto:${directEmail}`}
                  className="group flex items-center gap-3.5 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {directEmail}
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={`tel:${directPhone.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-3.5 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Phone</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {directPhone}
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200">
                      {locationText}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3.5 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-950/40 text-blue-300 shadow-[0_0_15px_rgba(96,165,250,0.25)] group-hover:scale-105 transition-transform">
                    <LinkedinIcon />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">LinkedIn</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      linkedin.com/in/yogaraj-s
                    </p>
                  </div>
                </a>
              </div>

              {/* 3D Glowing Isometric Envelope Art (Matching Image Model) */}
              <div className="relative flex items-center justify-center -my-4 sm:my-0">
                <div className="absolute h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
                
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 1.5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-52 w-52 items-center justify-center"
                >
                  {/* Isometric Pedestal */}
                  <div className="absolute bottom-4 h-24 w-40 rounded-[100%] border border-cyan-400/30 bg-gradient-to-t from-cyan-500/20 to-transparent [transform:rotateX(65deg)] shadow-[0_0_30px_rgba(56,189,248,0.35)]" />
                  
                  {/* Floating Main Isometric Envelope */}
                  <div className="relative z-10 flex h-28 w-36 items-center justify-center rounded-2xl border-2 border-cyan-400 bg-gradient-to-tr from-[#051438] via-[#091b48] to-[#040f28] shadow-[0_0_35px_rgba(56,189,248,0.5)] [transform:rotate(-10deg)_skew(-6deg)]">
                    <Mail size={46} className="text-cyan-300 drop-shadow-[0_0_10px_#38bdf8]" />

                    {/* Orbiting App Chat Bubbles */}
                    <motion.div
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400 bg-[#081b45] text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    >
                      <Phone size={16} />
                    </motion.div>

                    <motion.div
                      animate={{ y: [4, -4, 4] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-3 -left-3 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400 bg-[#081b45] text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                    >
                      <MessageSquare size={16} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: SEND A MESSAGE FORM ================= */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/10 bg-[#050b1e]/85 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-cyan-950/30">
              
              {/* Form Top Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  <Send size={18} className="rotate-45" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              {/* Input Form */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4 font-sans text-xs"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Name & Email Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-[11px] text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <User size={12} className="text-slate-400" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#081028]/80 px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#0a163a] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[11px] text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <Mail size={12} className="text-slate-400" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#081028]/80 px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#0a163a] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="text-[11px] text-slate-300 flex items-center gap-1.5 mb-1.5">
                    <MessageSquare size={12} className="text-slate-400" />
                    <span>Subject *</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#081028]/80 px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#0a163a] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="text-[11px] text-slate-300 flex items-center gap-1.5 mb-1.5">
                    <MessageSquare size={12} className="text-slate-400" />
                    <span>Message *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#081028]/80 px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-[#0a163a] focus:shadow-[0_0_15px_rgba(56,189,248,0.2)] resize-none"
                  />
                </div>

                {/* Send Message Button (Reference Image Gradient) */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(56,189,248,0.65)] hover:scale-[1.01] disabled:opacity-50"
                >
                  <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                </button>

                {/* Status Alerts */}
                <AnimatePresence>
                  {status === "sent" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-300"
                    >
                      <CheckCircle2 size={16} className="shrink-0" />
                      <span>Thanks! Message sent successfully. I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-red-300"
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      <span>Something went wrong. Please reach out via email directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER DOCK (Reference Image Model) ================= */}
      <footer className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 border-t border-white/10 pt-6 mt-12 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-sans">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-black text-cyan-400">YS</span>
          <div>
            <p className="font-bold text-white text-sm">Yogaraj S</p>
            <p className="text-[11px] text-slate-500">Developer | Problem Solver | Lifelong Learner</p>
          </div>
        </div>

        {/* Center Quote */}
        <p className="text-slate-400 text-xs hidden md:block">
          Let’s build something amazing together 🚀
        </p>

        {/* Right Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            title="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={`mailto:${directEmail}`}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            title="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </footer>
    </section>
  );
}