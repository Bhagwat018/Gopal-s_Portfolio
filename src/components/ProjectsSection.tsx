"use client";

import { useState } from "react";
import { PERSONAL_DATA, ProjectLink, Project } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowUpRight,
  Package,
  ExternalLink,
  Terminal,
  Copy,
  Check,
  Cpu,
  Activity,
  Database,
  Receipt,
  Sparkles,
  BookOpen,
  Play,
  Layers,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

interface ProjectsSectionProps {
  onCopyText?: (text: string, label: string) => void;
}

export function ProjectsSection({ onCopyText }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "apps" | "sdk">("all");
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);

  const filteredProjects = PERSONAL_DATA.featuredProjects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.type === activeFilter;
  });

  const handleCopyCommand = (command: string, pkgId: string) => {
    navigator.clipboard.writeText(command);
    setCopiedPkg(pkgId);
    if (onCopyText) {
      onCopyText(command, "Command copied to clipboard!");
    }
    setTimeout(() => {
      setCopiedPkg(null);
    }, 2000);
  };

  const renderLinkIcon = (type: ProjectLink["type"]) => {
    switch (type) {
      case "play-store":
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="h-3.5 w-3.5"
          >
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
          </svg>
        );
      case "app-store":
        return (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 384 512"
            className="h-3.5 w-3.5"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
        );
      case "web":
        return <Globe className="h-3.5 w-3.5" />;
      case "npm":
        return <Package className="h-3.5 w-3.5" />;
      default:
        return <ExternalLink className="h-3.5 w-3.5" />;
    }
  };

  const renderProjectVisualMockup = (project: Project) => {
    if (project.id === "truvideo") {
      return (
        <div className="rounded-xl border-2 border-ink bg-clay-sky/40 p-3 shadow-clay font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-ink/15 pb-2">
            <span className="flex items-center gap-1.5 font-bold text-ink">
              <Cpu className="h-3.5 w-3.5 text-indigo" />
              TurboModule Bridge
            </span>
            <span className="flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 text-[9px] font-bold text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Connected
            </span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px]">
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">IPC Roundtrip</p>
              <p className="font-display text-sm font-bold text-ink">1.2 ms</p>
            </div>
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">Native Threads</p>
              <p className="font-display text-sm font-bold text-ink">Kotlin + Swift</p>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "kickscore") {
      return (
        <div className="rounded-xl border-2 border-ink bg-accent/30 p-3 shadow-clay font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-ink/15 pb-2">
            <span className="flex items-center gap-1.5 font-bold text-ink">
              <Activity className="h-3.5 w-3.5 text-indigo" />
              Live Sports Match
            </span>
            <span className="flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-bold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
              84&apos; LIVE
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-lg border border-ink/20 bg-white/90 p-2 font-display">
            <span className="text-xs font-bold text-ink">ARS</span>
            <span className="rounded bg-ink px-2 py-0.5 text-sm font-black text-paper">2 - 1</span>
            <span className="text-xs font-bold text-ink">CHE</span>
          </div>
        </div>
      );
    }

    if (project.id === "visualible") {
      return (
        <div className="rounded-xl border-2 border-ink bg-clay-sky/40 p-3 shadow-clay font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-ink/15 pb-2">
            <span className="flex items-center gap-1.5 font-bold text-ink">
              <BookOpen className="h-3.5 w-3.5 text-indigo" />
              AI Contextual eBook Reader
            </span>
            <span className="flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 text-[9px] font-bold text-accent">
              EPUB.js Engine
            </span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px]">
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">Page Flip Latency</p>
              <p className="font-display text-sm font-bold text-ink">60 FPS Smooth</p>
            </div>
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">Offline Storage</p>
              <p className="font-display text-sm font-bold text-ink">SQLite Encrypted</p>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "veels") {
      return (
        <div className="rounded-xl border-2 border-ink bg-clay-pink/40 p-3 shadow-clay font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-ink/15 pb-2">
            <span className="flex items-center gap-1.5 font-bold text-ink">
              <Play className="h-3.5 w-3.5 text-indigo" />
              Adaptive HLS Video Feed
            </span>
            <span className="rounded-full bg-ink px-2 py-0.5 text-[9px] font-bold text-paper">
              HLS Player
            </span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px]">
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">Buffer Preload</p>
              <p className="font-display text-sm font-bold text-ink">0.4s Instant</p>
            </div>
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">Feed Scrolling</p>
              <p className="font-display text-sm font-bold text-ink">Full Viewport</p>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "savekit") {
      return (
        <div className="rounded-xl border-2 border-ink bg-clay-mint/40 p-3 shadow-clay font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-ink/15 pb-2">
            <span className="flex items-center gap-1.5 font-bold text-ink">
              <Database className="h-3.5 w-3.5 text-indigo" />
              Offline SQLite Vault
            </span>
            <span className="rounded-full border border-ink/20 bg-white px-2 py-0.5 text-[9px] font-bold text-ink">
              AES-256
            </span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px]">
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">Local Query</p>
              <p className="font-display text-sm font-bold text-ink">&lt; 0.5 ms</p>
            </div>
            <div className="rounded-lg border border-ink/20 bg-white/90 p-2">
              <p className="text-ink/60">Offline Sync</p>
              <p className="font-display text-sm font-bold text-ink">100% Up</p>
            </div>
          </div>
        </div>
      );
    }

    // Invoicely
    return (
      <div className="rounded-xl border-2 border-ink bg-clay-peach/40 p-3 shadow-clay font-mono text-[11px]">
        <div className="flex items-center justify-between border-b border-ink/15 pb-2">
          <span className="flex items-center gap-1.5 font-bold text-ink">
            <Receipt className="h-3.5 w-3.5 text-indigo" />
            Tax Invoice Generator
          </span>
          <span className="rounded-full bg-ink px-2 py-0.5 text-[9px] font-bold text-paper">
            PDF Ready
          </span>
        </div>
        <div className="mt-2.5 flex items-center justify-between rounded-lg border border-ink/20 bg-white/90 p-2">
          <div>
            <p className="text-[9px] text-ink/60">INV-2026-042</p>
            <p className="font-display text-xs font-bold text-ink">Tax Summary: GST / VAT</p>
          </div>
          <span className="rounded border border-ink/20 bg-clay-mint px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">
            Verified
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* 1. Featured Production Apps Header */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="rounded-full border-2 border-ink bg-accent px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm text-ink inline-flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Featured Production Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-ink">
              Production Apps &amp; Modules
            </h2>
          </div>
          <p className="font-mono text-xs text-ink/60">// published &amp; live</p>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Production", count: PERSONAL_DATA.featuredProjects.length },
            {
              id: "apps",
              label: "Mobile & Web",
              count: PERSONAL_DATA.featuredProjects.filter((p) => p.type === "apps").length,
            },
            {
              id: "sdk",
              label: "SDK & Turbo Modules",
              count: PERSONAL_DATA.featuredProjects.filter((p) => p.type === "sdk").length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`btn-press rounded-full border-2 border-ink px-4 py-1.5 font-mono text-xs font-bold transition shadow-brutal-sm ${
                activeFilter === tab.id
                  ? "bg-ink text-paper"
                  : "bg-white text-ink hover:bg-clay-sky"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </Reveal>

      {/* Production Projects Grid */}
      <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <article className="clay-brutal group flex h-full flex-col justify-between rounded-clay bg-white p-6 transition-all hover:-translate-y-1">
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between gap-2 border-b-2 border-dashed border-ink/15 pb-3">
                    <span className="font-mono text-[11px] font-bold text-ink/60 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-ink bg-clay-sky px-2.5 py-0.5 font-mono text-[10px] font-bold text-ink">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink group-hover:text-indigo transition">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-indigo mt-0.5">
                    {project.subtitle}
                  </p>

                  {/* Interactive Visual Mockup */}
                  <div className="mt-4">
                    {renderProjectVisualMockup(project)}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-ink/10">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full border border-ink/20 bg-paper px-2.5 py-0.5 font-mono text-[10px] font-semibold text-ink/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t-2 border-dashed border-ink/15">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 font-mono text-[11px] font-bold text-ink shadow-brutal-sm transition hover:bg-ink hover:text-paper"
                      >
                        {renderLinkIcon(link.type)}
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 text-ink/50 group-hover:text-paper" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 2. Independent / Solo Developed Apps Subsection */}
      <div className="mt-16">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t-2 border-dashed border-ink/20 pt-12">
            <div>
              <span className="rounded-full border-2 border-ink bg-clay-mint px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm text-ink inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Independent &amp; Solo Built
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl text-ink">
                Independent Products &amp; Offline Utilities
              </h3>
              <p className="mt-1 font-mono text-xs text-ink/70">
                // built &amp; launched end-to-end as independent consumer products
              </p>
            </div>
            <p className="font-mono text-xs text-indigo font-bold">2 Apps Published</p>
          </div>
        </Reveal>

        {/* Independent Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PERSONAL_DATA.independentProjects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <article className="clay-brutal group flex h-full flex-col justify-between rounded-clay bg-white p-6 transition-all hover:-translate-y-1">
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between gap-2 border-b-2 border-dashed border-ink/15 pb-3">
                    <span className="font-mono text-[11px] font-bold text-ink/60 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-ink bg-clay-mint px-2.5 py-0.5 font-mono text-[10px] font-bold text-ink">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink group-hover:text-indigo transition">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-indigo mt-0.5">
                    {project.subtitle}
                  </p>

                  {/* Interactive Visual Mockup */}
                  <div className="mt-4">
                    {renderProjectVisualMockup(project)}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-ink/10">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full border border-ink/20 bg-paper px-2.5 py-0.5 font-mono text-[10px] font-semibold text-ink/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t-2 border-dashed border-ink/15">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 font-mono text-[11px] font-bold text-ink shadow-brutal-sm transition hover:bg-ink hover:text-paper"
                      >
                        {renderLinkIcon(link.type)}
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 text-ink/50 group-hover:text-paper" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 3. NPM Packages Section */}
      <div className="mt-16">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t-2 border-dashed border-ink/20 pt-12">
            <div>
              <span className="rounded-full border-2 border-ink bg-clay-peach px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm text-ink">
                Open Source &amp; Tooling
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl text-ink">
                NPM Packages
              </h3>
            </div>
            <p className="font-mono text-xs text-ink/60">// developer utilities</p>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PERSONAL_DATA.npmPackages.map((pkg, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="clay-brutal h-full rounded-clay bg-panel p-6 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between border-b-2 border-dashed border-ink/15 pb-3">
                    <span className="flex items-center gap-2 font-mono text-xs font-bold text-ink">
                      <Terminal className="h-4 w-4 text-indigo" />
                      NPM Package
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full border border-ink bg-clay-mint px-2 py-0.5 font-mono text-[9px] font-bold text-ink">
                        {pkg.version}
                      </span>
                      <span className="rounded-full border border-ink bg-accent px-2 py-0.5 font-mono text-[9px] font-bold text-ink">
                        TypeScript
                      </span>
                    </div>
                  </div>

                  <h4 className="mt-3 font-mono text-base font-bold text-ink break-all group-hover:text-indigo transition">
                    {pkg.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                    {pkg.description}
                  </p>
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ink/10">
                    {pkg.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full border border-ink/20 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-ink/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 1-Click Copy Install Command Box */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t-2 border-dashed border-ink/15">
                    <button
                      onClick={() => handleCopyCommand(pkg.installCommand, pkg.id)}
                      className="btn-press flex items-center justify-between gap-2 rounded-lg border-2 border-ink bg-white px-3 py-1.5 font-mono text-[11px] text-ink shadow-brutal-sm hover:bg-clay-sky transition group/btn max-w-full overflow-hidden"
                    >
                      <span className="truncate">{pkg.installCommand}</span>
                      {copiedPkg === pkg.id ? (
                        <Check className="h-3.5 w-3.5 flex-shrink-0 text-green-600 stroke-[3]" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 flex-shrink-0 text-ink/60 group-hover/btn:text-ink" />
                      )}
                    </button>

                    <a
                      href={pkg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press inline-flex items-center justify-center gap-1 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 font-mono text-[11px] font-bold text-ink shadow-brutal-sm hover:bg-ink hover:text-paper transition flex-shrink-0"
                    >
                      <Package className="h-3 w-3" />
                      <span>View NPM</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
