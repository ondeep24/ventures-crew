import Image from "next/image";

export function Music() {
  return (
    <section
      id="music"
      className="grid min-h-[540px] border-b border-[var(--line)] md:grid-cols-2"
    >
      {/* Left Side - Ventures Music */}
      <div className="relative overflow-hidden px-6 py-20 text-white md:px-12 md:py-24">
        {/* Background image */}
        <Image
          src="/images/music/ventures-music.jpg"
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content over image */}
        <div className="relative z-10">
          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">
            02 / The sound
          </div>

          <h2 className="mt-12 text-[clamp(3.25rem,13vw,8rem)] font-black leading-[0.82] tracking-[-0.07em] md:text-[clamp(4.5rem,6.5vw,7.5rem)]">
            THE SOUND
            <br />
            OF THE CREW.
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            From Amapiano to Afro Tech to Gqom, Ventures Crew&apos;s music
            connects the DJs, producers and sounds shaping the culture around us.
          </p>

          <a
            href="https://youtube.com/playlist?list=PLVRc0GPu5oKy3UCPxYuv0b5TBHtJQ7oGG&si=U19o1B7wjYcKi7Bw"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex border border-white px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[var(--foreground)]"
          >
            See the selected mix ↗
          </a>
        </div>
      </div>

      {/* Right — WASEMBO */}
      <div className="px-6 py-20 md:px-12 md:py-24">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
          WASEMBO / SELECTED
        </div>

        <h3 className="mt-6 text-[clamp(3rem,12vw,7rem)] font-black leading-[0.8] tracking-[-0.07em] md:text-[clamp(4rem,5.5vw,6.5rem)]">
          DJ MIXES.
          <br />
          ORIGINALS.
          <br />
          SESSIONS.
        </h3>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
          WASEMBO becomes the artist and DJ layer of the wider Ventures
          ecosystem, while Ventures Sessions can eventually host guest mixes
          and collaborations.
        </p>

        {/* Featured mix */}
        <a
          href="https://youtube.com/playlist?list=PLFPTrHtVY1W4&si=qcrpHUmKEbpTapnN"
          target="_blank"
          rel="noreferrer"
          className="group mt-10 block overflow-hidden border border-[var(--line)] bg-[var(--cream)] transition-colors hover:border-[var(--foreground)]"
        >
          <div className="relative h-[220px]">
            <Image
              src="/images/music/wasembo-selected-001.jpg"
              alt="WASEMBO — Selected 001"
              width={1126}
              height={766}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>

          <div className="p-5">
            <h4 className="text-xl font-black tracking-[-0.04em] transition-colors group-hover:text-[var(--muted)]">
              WASEMBO — SELECTED SERIES <span aria-hidden="true">↗</span>
            </h4>

            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              Afro House / Afro Tech · 60–75 min DJ mix
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
