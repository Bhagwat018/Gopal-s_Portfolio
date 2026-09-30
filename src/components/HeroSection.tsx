"use client";

import { useState } from "react";
import { PERSONAL_DATA } from "@/lib/data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FileText, Download, Check, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

export function HeroSection() {
  const [buildCounter, setBuildCounter] = useState(0);
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "done">("idle");

  const buildQuotes = [
    "4 production apps shipped",
    "Hermes: 35% faster loads",
    "TurboModules compiled",
    "Zero native memory leaks",
  ];

  // 3D Tilt interaction for phone mockup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cycleBuild = () => {
    setBuildCounter((prev) => (prev + 1) % buildQuotes.length);
  };

  const handleDownload = () => {
    if (downloadState !== "idle") return;
    setDownloadState("downloading");

    setTimeout(() => {
      setDownloadState("done");
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#c6ff3d", "#5b4cff", "#8fd3ff", "#ff8fc7"],
      });

      const link = document.createElement("a");
      link.href = PERSONAL_DATA.profile.resumeUrl;
      link.download = `${PERSONAL_DATA.profile.name.replace(/\s+/g, "_")}_Resume.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setDownloadState("idle"), 2500);
    }, 800);
  };

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Column: Greeting, Headline, Summaries, CTAs */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-semibold text-ink shadow-brutal-sm"
          >
            import &#123; Dev &#125; from &apos;react-native&apos;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl text-ink"
          >
            Mobile Engineer &amp;
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">React Native Expert.</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-accent sm:h-5" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-md font-mono text-xs sm:text-sm text-ink/80 font-medium"
          >
            {PERSONAL_DATA.profile.shortSummary}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-md font-sans text-base sm:text-lg text-ink/85 leading-relaxed"
          >
            {PERSONAL_DATA.profile.longSummary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="btn-press rounded-full border-2 border-ink bg-ink px-6 py-3 font-mono text-xs sm:text-sm font-bold text-paper shadow-brutal hover:bg-ink/90 transition"
            >
              See the work ↓
            </a>
            <a
              href="#contact"
              className="btn-press rounded-full border-2 border-ink bg-white px-6 py-3 font-mono text-xs sm:text-sm font-bold text-ink shadow-brutal hover:bg-accent transition"
            >
              Hire me →
            </a>
            <button
              onClick={handleDownload}
              aria-live="polite"
              className="btn-press relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-ink bg-clay-peach font-mono font-medium shadow-brutal px-6 py-3 text-sm sm:hidden text-ink"
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 origin-left bg-accent transition-transform duration-[900ms] ease-out ${
                  downloadState === "downloading" || downloadState === "done"
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
              <span className="relative flex items-center gap-2">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  {downloadState === "idle" && <FileText className="h-4 w-4" />}
                  {downloadState === "downloading" && (
                    <Download className="h-4 w-4 animate-bounce" />
                  )}
                  {downloadState === "done" && <Check className="h-4 w-4" />}
                </span>
                <span>
                  {downloadState === "idle" && "Download Resume"}
                  {downloadState === "downloading" && "Preparing..."}
                  {downloadState === "done" && "Downloaded!"}
                </span>
              </span>
            </button>
          </motion.div>

          {/* Pill Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-2.5 font-mono text-xs font-semibold text-ink"
          >
            {PERSONAL_DATA.profile.pills.map((pill, idx) => (
              <span
                key={idx}
                className="rounded-full border-2 border-ink/40 bg-white/70 px-3.5 py-1.5 shadow-brutal-sm"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Phone Mockup */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto flex h-[420px] w-[280px] items-center justify-center [perspective:1200px] sm:h-[480px] sm:w-[320px]"
        >
          {/* Background Morphing Blobs */}
          <div
            className="absolute -left-10 top-6 h-28 w-28 animate-blob bg-clay-mint/70 blur-[2px]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-8 bottom-10 h-24 w-24 animate-blob bg-clay-pink/70 blur-[2px] [animation-delay:2s]"
            aria-hidden="true"
          />

          {/* Floating Container */}
          <div className="animate-float">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="transition-transform duration-150 ease-out"
            >
              {/* Phone Outer Shell */}
              <div className="relative h-[400px] w-[220px] rounded-clay-lg border-[3px] border-ink bg-ink p-2 shadow-brutal-lg sm:h-[460px] sm:w-[248px]">
                {/* Dynamic Island / Notch */}
                <div className="absolute left-1/2 top-2.5 z-20 h-2.5 w-16 -translate-x-1/2 rounded-full bg-paper/90 shadow-sm" />

                {/* Inner Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-panel p-3 flex flex-col justify-between">
                  {/* Status Bar */}
                  <div>
                    <div className="flex justify-between items-center font-mono text-[10px] text-ink/50 pt-1">
                      <span>{PERSONAL_DATA.profile.phoneStats.time}</span>
                      <span className="flex gap-1 text-[8px] font-bold text-ink/70">
                        {PERSONAL_DATA.profile.phoneStats.network}
                      </span>
                    </div>

                    {/* Today's Builds Interactive Card */}
                    <div
                      onClick={cycleBuild}
                      className="mt-3 cursor-pointer btn-press rounded-clay-sm border-2 border-ink bg-accent p-3 shadow-clay transition"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-display text-xs font-bold text-ink">Today&apos;s builds</p>
                        <span className="text-[9px] rounded-full bg-ink text-paper px-1.5 py-0.5 font-mono flex items-center gap-1">
                          <RefreshCw className="h-2.5 w-2.5" /> Tap ↺
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-ink/80 mt-1 font-medium">
                        {buildQuotes[buildCounter]}
                      </p>
                    </div>

                    {/* 2-Column Metrics */}
                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                      <div className="rounded-clay-sm border-2 border-ink bg-clay-sky p-2 shadow-clay">
                        <p className="font-mono text-[10px] text-ink/60">FPS Target</p>
                        <p className="font-display text-lg font-bold text-ink">
                          {PERSONAL_DATA.profile.phoneStats.fpsTarget}
                        </p>
                      </div>
                      <div className="rounded-clay-sm border-2 border-ink bg-clay-pink p-2 shadow-clay">
                        <p className="font-mono text-[10px] text-ink/60">Crash-free</p>
                        <p className="font-display text-lg font-bold text-ink">
                          {PERSONAL_DATA.profile.phoneStats.crashFree}
                        </p>
                      </div>
                    </div>

                    {/* Performance Chart Card */}
                    <div className="mt-2.5 rounded-clay-sm border-2 border-ink bg-white p-2 shadow-clay">
                      <p className="font-mono text-[9px] text-ink/50 mb-1">
                        Bundle render performance
                      </p>
                      <div className="flex items-end justify-between gap-1 h-11">
                        {[45, 70, 35, 90, 60, 100, 75].map((val, i) => (
                          <div
                            key={i}
                            className="w-2 rounded-full bg-indigo transition-all duration-300 hover:bg-accent cursor-pointer"
                            style={{ height: `${val}%` }}
                            title={`Metric ${i + 1}: ${val}%`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* App Version / Monogram Footer inside Phone */}
                  <div className="flex items-center justify-between border-t border-ink/10 pt-2 font-mono text-[9px] text-ink/60">
                    <span>RN 0.74 • TurboModules</span>
                    <span className="font-bold text-ink">GB-v2.6</span>
                  </div>

                  {/* Floating Pop-out Badge */}
                  <div
                    onClick={cycleBuild}
                    className="absolute -right-1 top-24 w-[160px] cursor-pointer animate-pop rounded-clay-sm border-2 border-ink bg-clay-mint p-2 shadow-clay transition hover:scale-105 [animation-delay:0.8s] [animation-fill-mode:backwards]"
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-mono text-[9px] leading-tight font-bold text-ink/90">
                        {PERSONAL_DATA.profile.phoneStats.buildStatus}
                      </p>
                      <span className="text-[8px] text-ink/50 ml-1">×</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
