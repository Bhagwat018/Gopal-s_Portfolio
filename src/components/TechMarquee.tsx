import { PERSONAL_DATA } from "@/lib/data";

export function TechMarquee() {
  // Duplicate array to ensure seamless infinite looping marquee
  const skillsList = [
    ...PERSONAL_DATA.marqueeSkills,
    ...PERSONAL_DATA.marqueeSkills,
    ...PERSONAL_DATA.marqueeSkills,
  ];

  return (
    <div className="border-y-3 border-ink bg-ink py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-8">
        {skillsList.map((skill, index) => (
          <span
            key={index}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-paper/90 select-none"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
