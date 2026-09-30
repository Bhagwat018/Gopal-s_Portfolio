import { PERSONAL_DATA } from "@/lib/data";
import { Reveal } from "./Reveal";
import {
  Smartphone,
  Zap,
  ShieldCheck,
  Award,
  CircleCheck,
  GraduationCap,
  Trophy,
} from "lucide-react";

export function ExperienceSection() {
  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case "smartphone":
        return <Smartphone className="h-5 w-5 text-ink" />;
      case "zap":
        return <Zap className="h-5 w-5 text-ink" />;
      case "shield-check":
        return <ShieldCheck className="h-5 w-5 text-ink" />;
      case "award":
        return <Award className="h-5 w-5 text-ink" />;
      default:
        return <CircleCheck className="h-5 w-5 text-ink" />;
    }
  };

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="rounded-full border-2 border-ink bg-clay-mint px-3 py-1 font-mono text-xs font-bold shadow-brutal-sm text-ink">
              Career Journey
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-ink">
              Experience &amp; Milestones
            </h2>
          </div>
          <p className="font-mono text-xs text-ink/60">// 3+ years shipping code</p>
        </div>
      </Reveal>

      {/* 4-Card Milestones Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PERSONAL_DATA.milestoneHighlights.map((item, idx) => (
          <Reveal key={idx} delay={idx * 60}>
            <div
              className={`clay-brutal h-full rounded-clay-sm ${item.bgColor} p-4 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2">
                  {getMilestoneIcon(item.icon)}
                  <h4 className="font-display text-sm font-bold text-ink">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2 font-mono text-[11px] leading-tight text-ink/80">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Detailed Roles Experience Cards */}
      <div className="mt-8 space-y-6">
        {PERSONAL_DATA.experiences.map((exp, idx) => (
          <Reveal key={idx} delay={120 + idx * 80}>
            <div className="clay-brutal rounded-clay bg-white p-6 sm:p-8">
              {/* Role Header */}
              <div className="flex flex-col justify-between gap-2 border-b-2 border-dashed border-ink/20 pb-5 sm:flex-row sm:items-end">
                <div>
                  <span
                    className={`inline-block rounded-md px-2.5 py-0.5 font-mono text-xs font-bold ${
                      exp.current ? "bg-ink text-paper" : "border-2 border-ink bg-clay-mint text-ink"
                    }`}
                  >
                    {exp.current ? "Current Role" : "Previous Role"}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-sm font-semibold text-indigo">
                    {exp.company}
                  </p>
                </div>
                <span
                  className={`inline-block self-start sm:self-auto sm:whitespace-nowrap rounded-full border-2 border-ink px-3 sm:px-4 py-1.5 font-mono text-xs font-bold shadow-brutal-sm ${
                    exp.current ? "bg-accent text-ink" : "bg-white text-ink"
                  }`}
                >
                  {exp.period} ({exp.location})
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-ink/80 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Responsibilities Grid */}
              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink/60 mb-4">
                  Core Engineering Responsibilities
                </h4>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2.5 text-sm text-ink/85"
                    >
                      <CircleCheck className="h-4 w-4 flex-shrink-0 text-indigo mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Education & Awards Highlight Bento */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Education Card */}
        <Reveal delay={200}>
          <div className="clay-brutal h-full rounded-clay bg-clay-sky p-6">
            <div className="flex items-center justify-between border-b-2 border-ink/20 pb-4">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="h-6 w-6 text-ink" />
                <h3 className="font-display text-xl font-bold text-ink">
                  Education &amp; Academics
                </h3>
              </div>
              <span className="rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-bold text-ink">
                {PERSONAL_DATA.education.grade}
              </span>
            </div>
            <div className="mt-4">
              <p className="font-display text-lg font-bold text-ink">
                {PERSONAL_DATA.education.degree}
              </p>
              <p className="font-mono text-xs font-semibold text-indigo mt-1">
                {PERSONAL_DATA.education.institution}
              </p>
              <p className="font-mono text-xs text-ink/70 mt-2">
                Graduation Year: {PERSONAL_DATA.education.period}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Award Card */}
        <Reveal delay={250}>
          <div className="clay-brutal h-full rounded-clay bg-clay-pink p-6">
            <div className="flex items-center justify-between border-b-2 border-ink/20 pb-4">
              <div className="flex items-center gap-2.5">
                <Trophy className="h-6 w-6 text-ink" />
                <h3 className="font-display text-xl font-bold text-ink">
                  Honors &amp; Recognition
                </h3>
              </div>
              <span className="rounded-full border-2 border-ink bg-accent px-3 py-1 font-mono text-xs font-bold text-ink">
                {PERSONAL_DATA.award.year}
              </span>
            </div>
            <div className="mt-4">
              <p className="font-display text-lg font-bold text-ink">
                {PERSONAL_DATA.award.title}
              </p>
              <p className="font-mono text-xs font-semibold text-indigo mt-1">
                Issued by {PERSONAL_DATA.award.issuer}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                {PERSONAL_DATA.award.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
