import { PERSONAL_DATA, ProjectLink } from "@/lib/data";
import { Reveal } from "./Reveal";
import {
  Globe,
  ArrowUpRight,
  Package,
  ExternalLink,
  Smartphone,
  Layers,
  Terminal,
} from "lucide-react";

export function ProjectsSection() {
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

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="rounded-full border-2 border-ink bg-accent px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm text-ink">
              Featured Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-ink">
              Production Apps &amp; Modules
            </h2>
          </div>
          <p className="font-mono text-xs text-ink/60">// published &amp; live</p>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {PERSONAL_DATA.featuredProjects.map((project, idx) => (
          <Reveal key={idx} delay={idx * 70}>
            <article className="clay-brutal group flex h-full flex-col justify-between rounded-clay bg-white p-6">
              <div>
                {/* Meta Header */}
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

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
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

      {/* NPM Packages Section */}
      <div className="mt-14">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
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
              <div className="clay-brutal h-full rounded-clay bg-panel p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b-2 border-dashed border-ink/15 pb-3">
                    <span className="flex items-center gap-2 font-mono text-xs font-bold text-ink">
                      <Terminal className="h-4 w-4 text-indigo" />
                      NPM Package
                    </span>
                    <span className="rounded-full border border-ink bg-accent px-2.5 py-0.5 font-mono text-[10px] font-bold text-ink">
                      TypeScript
                    </span>
                  </div>

                  <h4 className="mt-3 font-mono text-base font-bold text-ink break-all">
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

                  <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t-2 border-dashed border-ink/15">
                    <code className="rounded-md border border-ink/20 bg-white px-2.5 py-1 font-mono text-[11px] text-ink select-all">
                      npm i {pkg.name}
                    </code>
                    <a
                      href={pkg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press inline-flex items-center gap-1 rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-[11px] font-bold text-ink shadow-brutal-sm hover:bg-ink hover:text-paper transition"
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
