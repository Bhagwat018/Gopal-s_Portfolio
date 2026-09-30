import { PERSONAL_DATA } from "@/lib/data";
import { Mail, MapPin, Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-3 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md border-2 border-paper bg-accent px-2 py-1 font-display text-sm font-bold text-ink">
                {PERSONAL_DATA.profile.initials}
              </span>
              <span className="font-display text-lg font-bold text-paper">
                {PERSONAL_DATA.profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-paper/70 font-sans leading-relaxed">
              Mobile Engineer specializing in React Native, native bridges (Kotlin/Swift), and
              high-performance cross-platform platforms.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-paper/50 font-bold">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 font-sans">
              <li>
                <a
                  href="#work"
                  className="text-sm text-paper/80 transition hover:text-accent hover:underline"
                >
                  Work &amp; Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-sm text-paper/80 transition hover:text-accent hover:underline"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-paper/80 transition hover:text-accent hover:underline"
                >
                  Skills &amp; Stack
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-paper/80 transition hover:text-accent hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-paper/50 font-bold">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 font-sans">
              <li>
                <a
                  href={`mailto:${PERSONAL_DATA.profile.email}`}
                  className="flex items-center gap-2 text-sm text-paper/80 transition hover:text-accent"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="truncate">{PERSONAL_DATA.profile.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-paper/80">
                <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>{PERSONAL_DATA.profile.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-paper/50 font-bold">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3 font-sans">
              <a
                href={PERSONAL_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 rounded-full border-2 border-paper/40 bg-white/5 px-4 py-2 text-sm text-paper transition hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 rounded-full border-2 border-paper/40 bg-white/5 px-4 py-2 text-sm text-paper transition hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t-2 border-dashed border-paper/20 pt-6 font-mono text-xs text-paper/50 sm:flex-row">
          <p>© 2026 {PERSONAL_DATA.profile.name}. All rights reserved.</p>
          <a
            href="#top"
            className="flex items-center gap-1 transition hover:text-accent font-semibold"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
