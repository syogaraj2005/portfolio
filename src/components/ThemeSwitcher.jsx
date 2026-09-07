import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { useTheme, THEMES } from "../context/ThemeContext.jsx";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-mono z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 backdrop-blur-lg transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] active:scale-95"
        aria-label="Switch Theme"
      >
        <Palette size={16} />
      </button>

      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click closer */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 8 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 top-12 z-50 w-44 rounded-2xl border border-white/10 bg-[#060b18]/95 p-2 shadow-2xl backdrop-blur-2xl"
            >
              <div className="px-2 py-1.5 text-[10px] uppercase tracking-wider text-slate-500">
                Theme Presets
              </div>

              <div className="space-y-1">
                {THEMES.map((t) => {
                  const active = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setIsOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-xs transition-all ${
                        active
                          ? "border border-white/10 bg-white/[0.08] text-white font-bold"
                          : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: t.color }}
                        />
                        <span>{t.label}</span>
                      </div>
                      {active && <Check size={13} className="text-[var(--primary)]" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}