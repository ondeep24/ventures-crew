import Image from "next/image";

export function HeyCrew() {
  return (
    <section
      id="hey-crew"
      className="scroll-mt-24 border-b border-[var(--line)] px-6 py-20 md:px-12 md:py-28"
    >
      {/* Section heading */}
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
            01 / The experience
          </div>

          <h2 className="mt-3 text-[clamp(3.5rem,15vw,9rem)] font-black leading-[0.8] tracking-[-0.07em] md:text-[clamp(5rem,7.5vw,8.5rem)]">
            HEY CREW
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#archive"
            className="border border-[var(--foreground)] px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--foreground)] hover:text-white"
          >
            View event archive ↗
          </a>
          <a
            href="https://www.facebook.com/ventureslifestyle/photos_albums"
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--foreground)] bg-transparent px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--foreground)] hover:text-white"
          >
            Explore Facebook albums ↗
          </a>
        </div>
      </div>

      {/* Event cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Latest confirmed experience */}
        <article className="overflow-hidden border border-[var(--line)] bg-[var(--cream)]">
          <div className="relative h-[220px] overflow-hidden">
            <a
              href="https://www.facebook.com/media/set/?set=a.1591153375927283&type=3"
              target="_blank"
              rel="noreferrer"
              aria-label="View the Hey Crew 2026 photo album on Facebook"
              className="block h-full w-full"
            >
              <Image
                src="/images/events/heycrew-2026.jpg"
                alt="Hey Crew 2026"
                width={6240}
                height={4160}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </a>
          </div>

          <div className="p-5">
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
              Latest experience
            </div>
            <h3 className="mt-2 text-xl font-black tracking-[-0.04em]">Hey Crew 2026</h3>

            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              08 August 2026 · Sbahle x Shenge
            </p>
          </div>
        </article>

         {/* Navigator */}
        <article className="overflow-hidden border border-[var(--line)] bg-[var(--cream)]">
          <div className="relative h-[220px] overflow-hidden">
            <a
              href="https://www.facebook.com/media/set/?set=a.1606063757769578&type=3"
              target="_blank"
              rel="noreferrer"
              aria-label="View the Olefied Khetha and Navigator Gcwensa photo album on Facebook"
              className="block h-full w-full"
            >
              <Image
                src="/images/events/navigator-gcwensa-2025.jpg"
                alt="Olefied Khetha × Navigator Gcwensa"
                width={6960}
                height={4640}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </a>
          </div>

          <div className="p-5">
            <h3 className="text-xl font-black tracking-[-0.04em]">
              Olefied Khetha × Navigator Gcwensa
            </h3>

            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              2025 · Event archive
            </p>
          </div>
        </article>

        {/* MusiholiQ */}
        <article className="overflow-hidden border border-[var(--line)] bg-[var(--cream)]">
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src="/images/events/musiholiq-2025.jpg"
              alt="Hey Crew × MusiholiQ"
              width={5469}
              height={3795}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <h3 className="text-xl font-black tracking-[-0.04em]">
              Hey Crew × MusiholiQ
            </h3>

            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              2025 · Event archive
            </p>
          </div>
        </article>

       
      </div>
    </section>
  );
}
