import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import { MetricsSection } from "@/components/MetricsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ClientShell } from "@/components/ClientShell";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-ink relative">
      {/* Client Shell for Toasts and Floating Dock */}
      <ClientShell />

      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="overflow-x-hidden">
        {/* Hero Section with Interactive 3D Phone & Tabs */}
        <HeroSection />

        {/* Continuous Tech Stack Marquee */}
        <TechMarquee />

        {/* Stats & Key Metrics */}
        <MetricsSection />

        {/* Work Experience & Timeline */}
        <ExperienceSection />

        {/* Featured Projects & NPM Packages */}
        <ProjectsSection />

        {/* Skills & Technical Stack Grid */}
        <SkillsSection />

        {/* What I Do Services */}
        <WhatIDoSection />

        {/* Contact Banner & Social Links */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
