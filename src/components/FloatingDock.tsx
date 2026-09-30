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
  const [activeSection, setActiveSection] = useState<string>("top");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setVisible(scrollPos > 320);

      // Simple, reliable scrollspy
      const sections = ["contact", "skills", "experience", "work"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("top");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.profile.email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: "work", label: "Work", href: "#work", icon: Briefcase, color: "hover:bg-accent" },
    { id: "experience", label: "Experience", href: "#experience", icon: Award, color: "hover:bg-clay-pink" },
    { id: "skills", label: "Skills", href: "#skills", icon: Wrench, color: "hover:bg-clay-mint" },
    { id: "contact", label: "Contact", href: "#contact", icon: Mail, color: "hover:bg-clay-peach" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar gap-1 sm:gap-1.5 rounded-full border-2 sm:border-3 border-ink bg-white/95 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-brutal backdrop-blur-md max-w-[96vw]"
        >
          {/* Back to top */}
          <div className="relative">
            <a
              href="#top"
              onMouseEnter={() => setHoveredItem("top")}
              onMouseLeave={() => setHoveredItem(null)}
              className="btn-press flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-ink/20 text-ink hover:bg-clay-sky transition"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            {hoveredItem === "top" && (
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-ink bg-ink px-2 py-0.5 font-mono text-[9px] font-bold text-paper shadow-brutal-sm hidden sm:inline-block">
                Top
              </span>
            )}
          </div>

          <div className="h-4 w-[1px] bg-ink/20 mx-0.5" />

          {/* Nav Items */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} className="relative">
                <a
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`btn-press flex items-center gap-1.5 rounded-full px-2 sm:px-2.5 py-1 font-mono text-xs font-bold transition ${
                    isActive
                      ? "bg-ink text-paper shadow-brutal-sm"
                      : `text-ink ${item.color}`
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">{item.label}</span>
                </a>
                {hoveredItem === item.id && (
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-ink bg-ink px-2 py-0.5 font-mono text-[9px] font-bold text-paper shadow-brutal-sm hidden sm:inline-block">
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}

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
          <div className="relative">
            <button
              onClick={handleCopy}
              onMouseEnter={() => setHoveredItem("copy")}
              onMouseLeave={() => setHoveredItem(null)}
              className="btn-press flex items-center gap-1 rounded-full border border-ink bg-ink px-2 sm:px-2.5 py-1 font-mono text-xs font-bold text-paper transition hover:bg-accent hover:text-ink"
              aria-label="Copy Email"
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
            {hoveredItem === "copy" && (
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-ink bg-ink px-2 py-0.5 font-mono text-[9px] font-bold text-paper shadow-brutal-sm hidden sm:inline-block">
                {copied ? "Copied!" : "1-Click Copy"}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
