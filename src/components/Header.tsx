"use client";

import { useState } from "react";
import { PERSONAL_DATA } from "@/lib/data";
import { FileText, Download, Check, Menu, X, Copy, Phone } from "lucide-react";
import confetti from "canvas-confetti";

interface HeaderProps {
  onCopyEmail?: () => void;
}

export function Header({ onCopyEmail }: HeaderProps) {
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "done">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    if (downloadState !== "idle") return;
    setDownloadState("downloading");

    setTimeout(() => {
      setDownloadState("done");
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.2 },
        colors: ["#c6ff3d", "#5b4cff", "#8fd3ff", "#ff8fc7"],
      });

      const link = document.createElement("a");
      link.href = PERSONAL_DATA.profile.resumeUrl;
      link.download = `${PERSONAL_DATA.profile.name.replace(/\s+/g, "_")}_Resume.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloadState("idle");
      }, 2500);
    }, 800);
  };

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-clay-sm border-3 border-ink bg-paper/90 px-4 py-3 shadow-brutal-sm backdrop-blur">
        {/* Logo / Monogram */}
        <a
          className="font-display text-lg font-bold tracking-tight flex items-center gap-2 group"
          href="#top"
        >
          <span className="rounded-md bg-ink px-2.5 py-1 text-paper shadow-brutal-sm font-bold transition group-hover:bg-accent group-hover:text-ink">
            {PERSONAL_DATA.profile.initials}
          </span>
          <span className="hidden sm:inline font-bold text-ink">
            {PERSONAL_DATA.profile.name}
          </span>
        </a>

        {/* Desktop Nav Pills */}
        <div className="hidden items-center gap-1 rounded-full border-2 border-ink bg-white/70 p-1 md:flex">
          <a
            href="#work"
            className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold text-ink/80 transition hover:bg-ink hover:text-paper"
          >
            Work
          </a>
          <a
            href="#experience"
            className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold text-ink/80 transition hover:bg-ink hover:text-paper"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold text-ink/80 transition hover:bg-ink hover:text-paper"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold text-ink/80 transition hover:bg-ink hover:text-paper"
          >
            Contact
          </a>
        </div>

        {/* Right CTA Area */}
        <div className="flex items-center gap-2">
          {/* Download Resume Button */}
          <button
            onClick={handleDownload}
            aria-live="polite"
            className="btn-press relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-ink bg-clay-peach font-mono font-medium shadow-brutal px-4 py-2 text-xs hidden sm:inline-flex"
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 origin-left bg-accent transition-transform duration-[900ms] ease-out ${
                downloadState === "downloading" || downloadState === "done"
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            />
            <span className="relative flex items-center gap-2 text-ink">
              <span className="relative flex h-4 w-4 items-center justify-center">
                {downloadState === "idle" && (
                  <FileText className="absolute h-4 w-4 transition-all duration-300 scale-100 opacity-100" />
                )}
                {downloadState === "downloading" && (
                  <Download className="absolute h-4 w-4 transition-all duration-300 scale-100 opacity-100 animate-bounce" />
                )}
                {downloadState === "done" && (
                  <Check className="absolute h-4 w-4 transition-all duration-300 scale-100 opacity-100 text-ink" />
                )}
              </span>
              <span>
                {downloadState === "idle" && "Download Resume"}
                {downloadState === "downloading" && "Preparing PDF..."}
                {downloadState === "done" && "Downloaded!"}
              </span>
            </span>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="btn-press rounded-full border-2 border-ink bg-accent px-4 py-2 font-mono text-xs font-bold text-ink shadow-brutal-sm sm:px-5 hover:bg-ink hover:text-paper transition"
          >
            Let&apos;s talk ↗
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="btn-press flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-white shadow-brutal-sm md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-ink" />
            ) : (
              <Menu className="h-5 w-5 text-ink" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-clay-sm border-3 border-ink bg-paper p-4 shadow-brutal md:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border-2 border-ink bg-white p-3 font-mono text-sm font-bold text-ink transition hover:bg-accent"
            >
              💼 Work &amp; Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border-2 border-ink bg-white p-3 font-mono text-sm font-bold text-ink transition hover:bg-accent"
            >
              🚀 Career Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border-2 border-ink bg-white p-3 font-mono text-sm font-bold text-ink transition hover:bg-accent"
            >
              🛠 Technical Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border-2 border-ink bg-accent p-3 font-mono text-sm font-bold text-ink transition hover:bg-ink hover:text-paper"
            >
              ✉️ Contact Me
            </a>
            <a
              href={PERSONAL_DATA.profile.telUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border-2 border-ink bg-clay-sky p-3 font-mono text-sm font-bold text-ink transition hover:bg-white flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" /> Call Directly
              </span>
              <span className="text-xs font-semibold">{PERSONAL_DATA.profile.phoneDisplay}</span>
            </a>
            <button
              onClick={(e) => {
                handleDownload(e);
                setMobileMenuOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border-2 border-ink bg-clay-peach p-3 font-mono text-sm font-bold text-ink"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
