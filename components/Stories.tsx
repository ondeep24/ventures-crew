import Link from "next/link";
import Image from "next/image";

const selectedChapters = [
  { year: "2020", title: "The beginning", href: "/stories#story-the-beginning" },
  { year: "2024", title: "The crowd", href: "/stories#story-the-crowd" },
  { year: "2025–2026", title: "The evolution", href: "/stories#story-the-evolution" },
];

export function Stories() {
  return (
    <section
      id="stories"
      className="scroll-mt-24 border-b border-[var(--line)] px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mb-10 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
        03 / Editorial
      </div>

      <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-12">
        <div>
          <h2 className="text-[clamp(4rem,15vw,9rem)] font-black leading-[0.78] tracking-[-0.07em]">
            STORIES
          </h2>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
            From the first tent to the people behind the experience: the
            moments and chapters that shaped Ventures Crew.
          </p>
          <Link
            href="/stories"
            className="mt-7 inline-flex border border-[var(--foreground)] px-5 py-4 text-[10px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--foreground)] hover:text-white"
          >
            Explore all stories ↗
          </Link>
        </div>

        <figure className="relative overflow-hidden bg-[var(--dark)]">
          <Image
            src="/images/stories/thecrew.jpg"
            alt="Ventures Crew members at the Olefied Khetha and Navigator Gcwensa event"
            width={5481}
            height={4357}
            sizes="(min-width: 768px) 62vw, 100vw"
            className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px]"
          />
          <figcaption className="absolute bottom-0 left-0 max-w-full bg-[var(--acid)] px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] sm:px-5">
            The people behind the experience · 2025
          </figcaption>
        </figure>
      </div>

      <nav aria-label="Selected story chapters" className="mt-12 border-t border-[var(--line)]">
        {selectedChapters.map((chapter, index) => (
          <Link
            key={chapter.title}
            href={chapter.href}
            className="group grid gap-2 border-b border-[var(--line)] py-4 transition-colors hover:bg-[var(--acid)]/30 sm:grid-cols-[0.65fr_1.5fr_auto] sm:items-center sm:gap-5 sm:px-3"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
              {chapter.year} / 0{index + 1}
            </span>
            <span className="text-xl font-black tracking-[-0.04em] md:text-2xl">
              {chapter.title}
            </span>
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            >
              ↗
            </span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
