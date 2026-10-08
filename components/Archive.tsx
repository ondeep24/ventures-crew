import Link from "next/link";
import Image from "next/image";

const archiveYears = ["2026", "2025", "2024", "2022", "2021", "2020"];
const archiveYearTargets: Record<string, string> = {
  "2026": "archive-latest",
  "2025": "archive-2025-navigator",
  "2024": "archive-2024",
  "2020": "archive-2020",
};

const archiveEntries = [
  {
    id: "archive-2025-navigator",
    year: "2025",
    title: "Olefied Khetha × Navigator Gcwensa",
    image: "/images/events/navigator-gcwensa-2025.jpg",
    width: 6960,
    height: 4640,
    alt: "Olefied Khetha and Navigator Gcwensa at a Ventures Crew event",
    detail: "Hey Crew · Event archive",
  },
  {
    id: "archive-2025-musiholiq",
    year: "2025",
    title: "Hey Crew × MusiholiQ",
    image: "/images/events/musiholiq-2025.jpg",
    width: 5469,
    height: 3795,
    alt: "Hey Crew × MusiholiQ event",
    detail: "Hey Crew · Event archive",
  },
  {
    id: "archive-2024",
    year: "2024",
    title: "The crowd.",
    image: "/images/stories/lion-park.jpg",
    width: 960,
    height: 1118,
    alt: "Crowd at the Ventures Crew Lion Park event",
    detail: "Lion Park · Story",
  },
  {
    id: "archive-2020",
    year: "2020",
    title: "The first tent.",
    image: "/images/stories/ventures-origin.jpg",
    width: 4608,
    height: 2643,
    alt: "The first Ventures Crew tent at the venue",
    detail: "The beginning · Story",
  },
];

export function Archive() {
  return (
    <section id="archive" className="scroll-mt-24 border-b border-[var(--line)]">
      <div className="grid md:grid-cols-[0.7fr_1.3fr]">
        <aside className="border-b border-[var(--line)] px-6 py-16 md:border-b-0 md:border-r md:px-12 md:py-24">
          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
            04 / The archive
          </div>

          <h2 className="mt-8 text-5xl font-black leading-[0.85] tracking-[-0.07em] md:text-6xl">
            A LIVING<br />RECORD.
          </h2>

          <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            Events, people and moments that have shaped Ventures Crew, kept in
            view as the story continues.
          </p>

          <nav aria-label="Archive years" className="mt-12 border-t border-[var(--line)]">
            {archiveYears.map((year, index) => {
              const target = archiveYearTargets[year];
              const className = `font-black tracking-[-0.05em] transition-colors hover:text-[var(--muted)] ${index === 0 ? "text-4xl" : "text-2xl"}`;

              return (
                <div
                  key={year}
                  className="flex items-center justify-between border-b border-[var(--line)] py-3"
                >
                  {target ? (
                    <a className={className} href={`#${target}`}>
                      {year}
                    </a>
                  ) : (
                    <span className={`${className} cursor-default`}>
                      {year}
                    </span>
                  )}
                  {index === 0 && (
                    <span className="bg-[var(--acid)] px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em]">
                      Latest chapter
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
            Confirmed years · South Africa
          </div>
        </aside>

        <div className="px-6 py-16 md:px-12 md:py-24">
          <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            <span>A living record of the journey</span>
            <span>01 — 04</span>
          </div>

          <h3 className="mt-8 text-[clamp(3.5rem,12vw,8rem)] font-black leading-[0.76] tracking-[-0.08em] md:text-[clamp(5rem,6.5vw,7.5rem)]">
            MADE<br />BY THE<br />MOMENT.
          </h3>

          <p className="mt-7 max-w-lg text-sm leading-relaxed text-[var(--muted)] md:text-base">
            From a tent on the ground to a room full of people. These are
            selected moments from the Ventures Crew archive.
          </p>

          <article
            id="archive-latest"
            className="scroll-mt-24 mt-10 overflow-hidden border border-[var(--line)] bg-[var(--cream)]"
          >
            <div className="relative">
              <Image
                src="/images/events/heycrew-2026.jpg"
                alt="Hey Crew 2026 at Mzobe's Guesthouse"
                width={6240}
                height={4160}
                sizes="(min-width: 768px) 62vw, 100vw"
                className="h-[300px] w-full object-cover md:h-[440px]"
              />
              <div className="absolute left-4 top-4 bg-[var(--acid)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em]">
                Latest experience · 2026
              </div>
            </div>
            <div className="grid gap-6 p-5 md:grid-cols-[1fr_auto] md:items-end md:p-7">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                  Hey Crew / Mzobe&apos;s Guesthouse
                </div>
                <h4 className="mt-3 text-3xl font-black tracking-[-0.05em] md:text-5xl">
                  08 August 2026
                </h4>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                  Mkhambathini · 12:00 — 01:00 · Sbahle × Shenge
                </p>
              </div>
              <Link
                href="/stories#story-the-evolution"
                className="w-fit border border-[var(--line)] px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--acid)]"
              >
                Explore the story ↗
              </Link>
            </div>
          </article>

          <div className="mt-12 flex items-end justify-between border-b border-[var(--line)] pb-4">
            <h3 className="text-3xl font-black tracking-[-0.05em] md:text-5xl">
              FROM THE ARCHIVE.
            </h3>
            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
              2025 — 2020
            </span>
          </div>

          <div className="grid gap-x-4 gap-y-8 pt-6 sm:grid-cols-2">
            {archiveEntries.map((entry) => (
              <article
                key={entry.id}
                id={entry.id}
                className="scroll-mt-24 group"
              >
                <div className="overflow-hidden bg-[var(--acid)]">
                  <Image
                    src={entry.image}
                    alt={entry.alt}
                    width={entry.width}
                    height={entry.height}
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 md:h-[260px]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                  <span>{entry.year} / {entry.detail}</span>
                </div>
                <h4 className="mt-2 text-2xl font-black tracking-[-0.05em] md:text-3xl">
                  {entry.title}
                </h4>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
            Selected years · More chapters as the record grows.
          </div>
        </div>
      </div>
    </section>
  );
}
