import { PERSONAL_DATA } from "@/lib/data";
import { Reveal } from "./Reveal";

export function WhatIDoSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-display text-3xl font-bold sm:text-4xl text-ink">
          What I do
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {PERSONAL_DATA.whatIDo.map((item, idx) => (
          <Reveal key={idx} delay={idx * 80}>
            <div
              className={`clay-brutal h-full rounded-clay ${item.bgColor} p-6 flex flex-col justify-between`}
            >
              <div>
                <span className="text-3xl select-none" role="img" aria-label={item.title}>
                  {item.emoji}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
