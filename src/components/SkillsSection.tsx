import { PERSONAL_DATA } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Smartphone, Wrench, Cloud, CreditCard } from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "smartphone":
        return <Smartphone className="h-5 w-5 text-ink" />;
      case "wrench":
        return <Wrench className="h-5 w-5 text-ink" />;
      case "cloud":
        return <Cloud className="h-5 w-5 text-ink" />;
      case "credit-card":
        return <CreditCard className="h-5 w-5 text-ink" />;
      default:
        return <Smartphone className="h-5 w-5 text-ink" />;
    }
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="rounded-full border-2 border-ink bg-clay-sky px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm text-ink">
              Technical Stack
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-ink">
              What I work with
            </h2>
          </div>
          <p className="font-mono text-xs text-ink/60">// battle-tested in production</p>
        </div>
      </Reveal>

      {/* 4 Clay-Brutal Category Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PERSONAL_DATA.skillCategories.map((cat, idx) => (
          <Reveal key={idx} delay={idx * 70}>
            <div className={`clay-brutal h-full rounded-clay ${cat.bgColor} p-6`}>
              {/* Category Title */}
              <div className="flex items-center gap-2.5 border-b-2 border-ink/20 pb-3">
                {getCategoryIcon(cat.icon)}
                <h3 className="font-display text-lg font-bold text-ink">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`rounded-full border-2 border-ink px-3 py-1 font-mono text-xs font-semibold shadow-brutal-sm transition-transform hover:-translate-y-0.5 cursor-default ${
                      skill.highlight
                        ? "bg-ink text-paper"
                        : "bg-white/80 text-ink"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
