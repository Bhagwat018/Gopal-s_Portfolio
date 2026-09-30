"use client";

import { useState } from "react";
import { PERSONAL_DATA } from "@/lib/data";
import { Reveal } from "./Reveal";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Copy,
  Check,
  Phone,
  MessageSquare,
} from "lucide-react";

interface ContactSectionProps {
  onCopyEmail?: () => void;
}

export function ContactSection({ onCopyEmail }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderTopic, setSenderTopic] = useState("Mobile App Project");
  const [senderMessage, setSenderMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.profile.email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Gopal! My name is ${senderName || "Visitor"}. I'm reaching out regarding: ${senderTopic}.\n\n${senderMessage || "I'd love to connect and discuss opportunities!"}`;
    const url = `https://wa.me/916267957589?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Portfolio Inquiry] ${senderTopic} - ${senderName || "Visitor"}`;
    const body = `Hi Gopal,\n\nName: ${senderName || "Not provided"}\nTopic: ${senderTopic}\n\nMessage:\n${senderMessage || "I'd like to get in touch regarding a mobile engineering project or role."}`;
    window.location.href = `mailto:${PERSONAL_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
            I&apos;m open to new mobile engineering roles, SDK bridges, and high-impact cross-platform
            projects. Feel free to call, message on WhatsApp, or email me directly.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-lg mx-auto">
            {/* Direct Email */}
            <a
              href={`mailto:${PERSONAL_DATA.profile.email}`}
              className="btn-press inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-accent px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-bold text-ink shadow-brutal hover:bg-white transition"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="truncate max-w-[240px] sm:max-w-none">{PERSONAL_DATA.profile.email}</span>
            </a>

            {/* Direct Call */}
            <a
              href={PERSONAL_DATA.profile.telUrl}
              className="btn-press inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-clay-sky px-5 sm:px-6 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-bold text-ink shadow-brutal hover:bg-white transition"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>Call: {PERSONAL_DATA.profile.phoneDisplay}</span>
            </a>

            {/* Copy Address */}
            <button
              onClick={handleCopyEmail}
              className="btn-press inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-5 sm:px-6 py-3.5 sm:py-4 font-mono text-xs sm:text-sm font-bold text-ink shadow-brutal hover:bg-clay-peach transition"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600 stroke-[3]" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-ink/70" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* 4 Interactive Contact & Social Cards */}
          <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-ink">
            {/* Direct Call Card */}
            <a
              href={PERSONAL_DATA.profile.telUrl}
              className="btn-press clay-brutal flex flex-col items-center gap-1.5 rounded-clay-sm bg-clay-sky px-4 py-4 transition hover:-translate-y-1"
            >
              <Phone className="h-5 w-5 text-ink" />
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                Call Direct <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="font-mono text-[11px] text-ink/75 font-semibold">
                {PERSONAL_DATA.profile.phoneDisplay}
              </span>
            </a>

            {/* WhatsApp Card */}
            <a
              href={PERSONAL_DATA.profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press clay-brutal flex flex-col items-center gap-1.5 rounded-clay-sm bg-clay-mint px-4 py-4 transition hover:-translate-y-1"
            >
              <MessageSquare className="h-5 w-5 text-ink" />
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                WhatsApp <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="font-mono text-[11px] text-ink/75 font-semibold">
                Chat Now
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press clay-brutal flex flex-col items-center gap-1.5 rounded-clay-sm bg-clay-pink px-4 py-4 transition hover:-translate-y-1"
            >
              <Linkedin className="h-5 w-5 text-ink" />
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="font-mono text-[11px] text-ink/75 font-semibold">
                gopal-bhagwat
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press clay-brutal flex flex-col items-center gap-1.5 rounded-clay-sm bg-clay-peach px-4 py-4 transition hover:-translate-y-1"
            >
              <Github className="h-5 w-5 text-ink" />
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-1">
                GitHub <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="font-mono text-[11px] text-ink/75 font-semibold">
                @Bhagwat018
              </span>
            </a>
          </div>

          {/* Instant Message Composer */}
          <div className="mt-10 rounded-clay border-3 border-ink bg-white p-6 sm:p-8 text-left shadow-clay text-ink max-w-2xl mx-auto">
            <div className="flex items-center justify-between border-b-2 border-dashed border-ink/15 pb-3">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                  ⚡ Send a Quick Note
                </h3>
                <p className="font-mono text-xs text-ink/60 mt-0.5">
                  Type your message and dispatch directly to WhatsApp or Email
                </p>
              </div>
              <span className="rounded-full border border-ink bg-clay-mint px-2.5 py-0.5 font-mono text-[10px] font-bold text-ink hidden sm:inline-block">
                Instant Dispatch
              </span>
            </div>

            <form className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-ink mb-1.5">
                    Your Name / Org
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex (Engineering Lead)"
                    className="w-full rounded-xl border-2 border-ink bg-paper px-3 py-2 font-mono text-xs text-ink placeholder:text-ink/40 focus:outline-none focus:border-indigo"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-bold text-ink mb-1.5">
                    Subject / Topic
                  </label>
                  <select
                    value={senderTopic}
                    onChange={(e) => setSenderTopic(e.target.value)}
                    className="w-full rounded-xl border-2 border-ink bg-paper px-3 py-2 font-mono text-xs text-ink focus:outline-none focus:border-indigo"
                  >
                    <option value="Mobile App Project">📱 New Mobile App Project</option>
                    <option value="Full-Time Engineering Role">💼 Full-Time Engineering Role</option>
                    <option value="SDK & Turbo Modules">⚡ SDK &amp; Native Bridges</option>
                    <option value="General Consultation">💬 General Tech Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-ink mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Hey Gopal, I came across your portfolio and would like to talk about..."
                  className="w-full rounded-xl border-2 border-ink bg-paper px-3 py-2 font-mono text-xs text-ink placeholder:text-ink/40 focus:outline-none focus:border-indigo resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="btn-press w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-clay-mint px-5 py-2.5 font-mono text-xs font-bold text-ink shadow-brutal-sm hover:bg-ink hover:text-paper transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send via WhatsApp ↗</span>
                </button>
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="btn-press w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-clay-sky px-5 py-2.5 font-mono text-xs font-bold text-ink shadow-brutal-sm hover:bg-ink hover:text-paper transition"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send via Email ↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
