import Image from "next/image";
import Link from "next/link";
import { ArtistReleases } from "@/components/ArtistReleases";

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

          <Link
            href="/radio"
            className="mt-6 inline-flex border border-white px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[var(--foreground)]"
          >
            Explore Crew Radio ↗
          </Link>
        </div>
      </div>

      <ArtistReleases />
    </section>
  );
}
