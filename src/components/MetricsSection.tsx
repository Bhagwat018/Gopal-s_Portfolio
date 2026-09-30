import { PERSONAL_DATA } from "@/lib/data";
import { Reveal } from "./Reveal";

export function MetricsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {PERSONAL_DATA.profile.stats.map((stat, idx) => (
          <Reveal key={idx} delay={idx * 80}>
            <div className={`clay-brutal h-full rounded-clay ${stat.bgColor} p-6 text-center`}>
              <p className="font-display text-4xl font-bold sm:text-5xl text-ink">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-sm text-ink/70 font-medium">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240} className="mt-5">
        <div className="clay-brutal rounded-clay bg-white p-4 sm:p-5 text-center">
          <p className="font-mono text-xs sm:text-sm tracking-wide text-ink/70 font-semibold leading-relaxed">
            Multiple cross-platform projects — Android • iOS • Amazon • Web • Native Turbo Bridges
          </p>
        </div>
      </Reveal>
    </section>
  );
}
