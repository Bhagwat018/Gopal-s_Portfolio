import { PERSONAL_DATA } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <div className="clay-brutal relative overflow-hidden rounded-clay-lg bg-indigo px-6 py-16 text-center sm:px-16">
          {/* Ambient Morphing Blobs */}
          <div
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 animate-blob bg-clay-mint/40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-14 -right-10 h-48 w-48 animate-blob bg-accent/40 [animation-delay:3s]"
            aria-hidden="true"
          />

          <p className="font-mono text-sm text-paper/70 font-medium">
            // let&apos;s build something
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold text-paper sm:text-5xl tracking-tight">
            Got an app idea?
            <br />
            Let&apos;s make it feel native.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-paper/80 leading-relaxed font-sans text-sm sm:text-base">
            I&apos;m open to new mobile engineering roles, SDK bridges, and freelance projects. If
            you have an application or native module that needs to be built with precision, let&apos;s
            talk.
          </p>

          {/* Primary Mailto Button */}
          <a
            href={`mailto:${PERSONAL_DATA.profile.email}`}
            className="btn-press mt-8 inline-block rounded-full border-2 border-ink bg-accent px-8 py-4 font-mono text-sm font-bold text-ink shadow-brutal hover:bg-white transition"
          >
            {PERSONAL_DATA.profile.email}
          </a>

          {/* 3 Interactive Contact Cards */}
          <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-ink">
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_DATA.profile.email}`}
              className="btn-press clay-brutal flex flex-col items-center gap-1.5 rounded-clay-sm bg-clay-sky px-5 py-4 transition"
            >
              <Mail className="h-5 w-5 text-ink" />
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                Direct Email <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="font-mono text-[11px] text-ink/75 truncate max-w-full">
                {PERSONAL_DATA.profile.email}
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press clay-brutal flex flex-col items-center gap-1.5 rounded-clay-sm bg-clay-mint px-5 py-4 transition"
            >
              <Github className="h-5 w-5 text-ink" />
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                GitHub Profile <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="font-mono text-[11px] text-ink/75">
                @Bhagwat018
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press clay-brutal flex flex-col items-center gap-1.5 rounded-clay-sm bg-clay-pink px-5 py-4 transition"
            >
              <Linkedin className="h-5 w-5 text-ink" />
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="font-mono text-[11px] text-ink/75">
                gopal-bhagwat
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
