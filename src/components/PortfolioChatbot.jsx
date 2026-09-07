import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

const INITIAL_MESSAGES = [
  {
    sender: "bot",
    text: "Vanakkam! I'm Yogaraj's AI assistant. Ask me about his projects, tech stack, or experience!",
  },
];

// Quick knowledge-base for automated responses
const KNOWLEDGE_BASE = [
  // 1. Core Tech Stack & Skills
  {
    keywords: ["skills", "stack", "tech", "technologies", "know", "tools", "languages"],
    reply: "Yogaraj specializes in Java, Spring Boot, MySQL, REST APIs, and React. He also works with Python, Streamlit, Angular, and Node.js for modern full-stack and AI applications.",
  },

  // 2. All Projects Overview
  {
    keywords: ["projects", "work", "built", "portfolio", "creations", "apps"],
    reply: "His notable projects include: 1. AI-Powered BookShare System (Spring Boot & AI), 2. TN RideX Pro (Vehicle Rental System), 3. Career Copilot (Angular & Node), and 4. Interview AI Bot (Python & Streamlit). Check the Projects section for GitHub & live links!",
  },

  // 3. TN RideX Pro Specifics
  {
    keywords: ["ridex", "car", "vehicle", "rental", "booking"],
    reply: "TN RideX Pro is a vehicle rental and booking platform built with Java, MySQL, and modern web tech to streamline vehicle cataloging, booking flows, and customer rental operations.",
  },

  // 4. BookShare Platform Specifics
  {
    keywords: ["book", "bookshare", "library", "recommendation"],
    reply: "AI-Powered BookShare is an end-to-end full-stack web application featuring user auth, book exchange requests, admin controls, and AI-driven personalized reading recommendations.",
  },

  // 5. AI & Machine Learning Work
  {
    keywords: ["ai", "machine learning", "ml", "bot", "cohere", "streamlit", "copilot"],
    reply: "He has built AI solutions including 'Interview AI Bot' using Python and Cohere API for mock interviews, as well as 'Career Copilot' for resume prep and career guidance.",
  },

  // 6. Experience & Domain Expertise
  {
    keywords: ["experience", "background", "internship", "work history", "years"],
    reply: "He brings 6+ months of focused development experience designing robust RESTful APIs, optimized database schemas, and responsive full-stack architectures.",
  },

  // 7. Resume & CV Download
  {
    keywords: ["resume", "cv", "pdf", "profile doc", "biodata"],
    reply: "You can download his official resume directly using the 'Download Resume' button in the Hero section or view it at /resume/Yogaraj-S-Resume.pdf.",
  },

  // 8. Contact & Social Profiles
  {
    keywords: ["contact", "email", "linkedin", "github", "connect", "reach", "message", "social"],
    reply: "You can connect with Yogaraj on LinkedIn (linkedin.com/in/yogaraj-s2005/), check his repositories on GitHub (github.com/syogaraj2005), or leave a message through the Contact section!",
  },

  // 9. LeetCode & Problem Solving
  {
    keywords: ["leetcode", "dsa", "coding", "problem solving", "algorithms", "data structures"],
    reply: "He actively practices Data Structures and Algorithms on LeetCode (leetcode.com/u/Yogaraj_S/) with a strong command over Java collections and algorithmic problem solving.",
  },

  // 10. Database & Backend Architecture
  {
    keywords: ["database", "mysql", "sql", "backend", "api", "rest", "architecture"],
    reply: "For backend architecture, he relies on Spring Boot, clean MVC patterns, relational modeling with MySQL, secure JWT/session authentication, and high-performance REST APIs.",
  },

  // 11. Hiring & Availability
  {
    keywords: ["hire", "job", "opportunity", "available", "joining", "full-time", "role"],
    reply: "Yes! Yogaraj is actively available for software engineer, backend developer, and full-stack developer opportunities. Feel free to reach out via LinkedIn or email.",
  },

  // 12. Friendly Greetings
  {
    keywords: ["hi","hai", "hello", "hey", "vanakkam", "who are you", "what can you do"],
    reply: "Vanakkam! I'm Yogaraj's digital portfolio assistant. Ask me anything about his technical stack, live projects, coding profiles, or resume!",
  },
];

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setIsTyping(true);

    // Dynamic response lookup
    setTimeout(() => {
      const lower = userText.toLowerCase();
      const matched = KNOWLEDGE_BASE.find((item) =>
        item.keywords.some((kw) => lower.includes(kw))
      );

      const botReply = matched
        ? matched.reply
        : "Thanks for asking! Yogaraj is actively exploring backend & full-stack roles. Feel free to check his GitHub or drop a message via LinkedIn!";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Trigger Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-lg transition-all"
        aria-label="Toggle Chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse beacon */}
        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[#050816]" />
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.9 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-3 flex h-[480px] w-[90vw] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#060b18]/95 shadow-2xl backdrop-blur-2xl sm:w-[360px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-400">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                    DevBot <Sparkles className="h-3 w-3 text-cyan-400" />
                  </h4>
                  <p className="font-mono text-[10px] text-emerald-400">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Feed */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "border border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>
                  <div
                    className={`max-w-[78%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : "border border-white/10 bg-white/[0.04] text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="flex gap-1.5 overflow-x-auto border-t border-white/5 bg-white/[0.01] px-3 py-2 no-scrollbar">
              {["Skills?", "Projects?", "Resume?"].map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setInput(chip);
                  }}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="border-t border-white/10 bg-white/[0.02] p-2.5">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 focus-within:border-cyan-400/50">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="rounded-lg bg-cyan-500/20 p-1.5 text-cyan-300 transition-colors hover:bg-cyan-500 hover:text-black disabled:opacity-30"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}