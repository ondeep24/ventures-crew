import Link from "next/link";

const lifestyleWorlds: Array<{ label: string; href?: string; status: string }> = [
  { label: "Ventures Crew Clothing", href: "/lifestyle/clothing", status: "First look" },
  { label: "Objects", status: "In development" },
  { label: "Spaces", status: "In development" },
];

export function Lifestyle() {
  return (
    <section
      id="lifestyle"
      className="scroll-mt-24 grid border-b border-[var(--line)] md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="px-6 py-16 md:px-12 md:py-24">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
          05 / Lifestyle
        </div>

        <h2 className="mt-10 text-[clamp(3.5rem,14vw,9rem)] font-black leading-[0.78] tracking-[-0.07em] md:text-[clamp(5rem,7.5vw,8.5rem)]">
          MORE<br />THAN<br />AN EVENT.
        </h2>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
          Ventures Lifestyle extends the world around the gatherings into
          clothing, objects and spaces. The idea is taking shape.
        </p>

        <div className="mt-12 border-t border-[var(--line)]">
          {lifestyleWorlds.map((world, index) =>
            world.href ? (
              <Link
                key={world.label}
                href={world.href}
                className="group flex items-center justify-between gap-3 border-b border-[var(--line)] py-4 transition-colors hover:bg-[var(--acid)]/30 sm:gap-5 sm:px-3"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                  0{index + 1}
                </span>
                <span className="flex-1 text-lg font-black tracking-[-0.05em] sm:text-2xl md:text-3xl">
                  {world.label}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.12em]">
                  {world.status}
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                >
                  ↗
                </span>
              </Link>
            ) : (
              <div
                key={world.label}
                className="flex items-center justify-between gap-3 border-b border-[var(--line)] py-4"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                  0{index + 1}
                </span>
                <span className="flex-1 text-2xl font-black tracking-[-0.05em] md:text-3xl">
                  {world.label}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {world.status}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      <article className="relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-[var(--dark)] px-6 py-10 text-white md:min-h-[680px] md:px-12 md:py-12">
        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.16em] text-white/70">
          <span>The next space</span>
          <span>Mkhambathini · KwaZulu-Natal</span>
        </div>

        <div className="relative z-10">
          <div className="mb-5 inline-block bg-[var(--acid)] px-3 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-[var(--foreground)]">
            A future chapter
          </div>
          <h3 className="text-[clamp(3rem,10.5vw,7rem)] font-black leading-[0.78] tracking-[-0.08em] md:text-[clamp(4rem,6.2vw,6.5rem)]">
            VENTURES<br />LIFESTYLE<br />LOUNGE.
          </h3>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            A home for music, food, art, community and experiences.
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between gap-4 border-t border-white/20 pt-4 text-[10px] font-black uppercase tracking-[0.14em] text-white/70">
          <span>Ventures Crew</span>
          <span>Coming soon</span>
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-36 -right-28 h-[26rem] w-[26rem] rounded-full border border-[var(--acid)]/30 md:-bottom-48 md:-right-40 md:h-[36rem] md:w-[36rem]"
        />
      </article>
    </section>
  );
}
