"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Briefcase, Award, Wrench, Mail, Copy, Check, Phone } from "lucide-react";
import { PERSONAL_DATA } from "@/lib/data";

interface FloatingDockProps {
  onCopyEmail?: () => void;
}

export function FloatingDock({ onCopyEmail }: FloatingDockProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.profile.email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 sm:gap-1.5 rounded-full border-2 sm:border-3 border-ink bg-white/95 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-brutal backdrop-blur-md max-w-[95vw]"
        >
          {/* Back to top */}
          <a
            href="#top"
            title="Back to Top"
            className="btn-press flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-ink/20 text-ink hover:bg-clay-sky transition"
          >
            <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>

          <div className="h-4 w-[1px] bg-ink/20 mx-0.5" />

          {/* Work */}
          <a
            href="#work"
            title="Work & Projects"
            className="btn-press flex items-center gap-1.5 rounded-full px-2 sm:px-2.5 py-1 font-mono text-xs font-bold text-ink hover:bg-accent transition"
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Work</span>
          </a>

          {/* Experience */}
          <a
            href="#experience"
            title="Experience & Milestones"
            className="btn-press flex items-center gap-1.5 rounded-full px-2 sm:px-2.5 py-1 font-mono text-xs font-bold text-ink hover:bg-clay-pink transition"
          >
            <Award className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Experience</span>
          </a>

          {/* Skills */}
          <a
            href="#skills"
            title="Technical Skills"
            className="btn-press flex items-center gap-1.5 rounded-full px-2 sm:px-2.5 py-1 font-mono text-xs font-bold text-ink hover:bg-clay-mint transition"
          >
            <Wrench className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Skills</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            title="Contact"
            className="btn-press flex items-center gap-1.5 rounded-full px-2 sm:px-2.5 py-1 font-mono text-xs font-bold text-ink hover:bg-clay-peach transition"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Contact</span>
          </a>

          {/* Direct Phone / Call on Mobile */}
          <a
            href={PERSONAL_DATA.profile.telUrl}
            title="Call Gopal"
            className="btn-press flex sm:hidden items-center justify-center h-7 w-7 rounded-full bg-clay-sky text-ink border border-ink/20"
          >
            <Phone className="h-3 w-3" />
          </a>

          <div className="h-4 w-[1px] bg-ink/20 mx-0.5" />

          {/* 1-Click Copy Email */}
          <button
            onClick={handleCopy}
            title="Copy Email to Clipboard"
            className="btn-press flex items-center gap-1 rounded-full border border-ink bg-ink px-2 sm:px-2.5 py-1 font-mono text-xs font-bold text-paper transition hover:bg-accent hover:text-ink"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 stroke-[3]" />
                <span className="hidden md:inline">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span className="hidden md:inline">Copy Email</span>
              </>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
