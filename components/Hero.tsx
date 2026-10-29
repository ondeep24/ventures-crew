import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="grid min-h-[78vh] scroll-mt-24 border-b border-[var(--line)] lg:grid-cols-[1.25fr_.75fr]">
      <div className="relative flex min-h-[65vh] flex-col justify-between overflow-hidden bg-[var(--dark)] px-6 py-16 text-white md:px-12 md:py-20 xl:py-28">
        <div className="relative z-10 flex items-center justify-between gap-5">
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">
            Culture · Music · Experiences
          </span>
          <Image
            src="/images/brand/vc-mark-outline.png"
            alt=""
            width={56}
            height={31}
            sizes="56px"
            className="brightness-0 invert"
          />
        </div>

        <h1 className="relative z-10 max-w-5xl text-[clamp(2.4rem,11.8vw,7.5rem)] font-black leading-[0.78] tracking-[-0.085em] lg:text-[clamp(4rem,7vw,7rem)]">
          THE IDEA
          <br />
          WAS NEVER
          <br />
          FOR THE CROWD.
        </h1>

        <p className="relative z-10 max-w-xl text-sm leading-relaxed md:text-base">
          Ventures Crew is an independent South African culture platform
          built around music, people, experiences and the stories that
          happen between them.
        </p>

        <div className="absolute -bottom-32 -right-32 h-[45vw] w-[45vw] rounded-full bg-[var(--acid)]" />
      </div>

      <div className="flex min-h-[420px] flex-col justify-between bg-[var(--acid)] px-6 py-12 md:px-12 md:py-16">
        <div className="border-b border-[var(--foreground)]/20 pb-5">
          <div className="text-[10px] font-black uppercase tracking-[0.16em]">
            New / Crew Radio
          </div>
          <Link
            href="/radio"
            className="group mt-4 flex items-center gap-4"
          >
            <Image
              src="/images/radio/cr-001-cover.webp"
              alt=""
              width={1254}
              height={1254}
              sizes="88px"
              className="h-[88px] w-[88px] shrink-0 object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <span className="min-w-0">
              <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                CR.001 / Amapiano
              </span>
              <span className="mt-2 block text-xl font-black leading-none tracking-[-0.05em]">
                NEHTION WYDE
              </span>
              <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.12em] underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current">
                Enter Crew Radio ↗
              </span>
            </span>
          </Link>
        </div>

        <div className="text-[11px] font-black uppercase tracking-[0.18em]">
          Latest experience · Hey Crew
        </div>

        <div>
          <div className="text-[clamp(5.5rem,24vw,13rem)] font-black leading-[0.75] tracking-[-0.08em] md:text-[clamp(6rem,9vw,9rem)]">
            08
            <br />
            08
          </div>

          <h2 className="mt-8 text-3xl font-black tracking-[-0.04em]">
            HEY CREW / 2026
          </h2>

          <p className="mt-2 text-xs leading-relaxed">
            Mzobe&apos;s Guesthouse · Mkhambathini
            <br />
            12:00 — 01:00 · South Africa
          </p>
        </div>

        <a
          href="#archive-latest"
          className="w-fit border border-[var(--foreground)] bg-transparent px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-white"
        >
          View latest experience →
        </a>
      </div>
    </section>
  );
}
