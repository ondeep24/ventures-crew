import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SessionArtwork } from "@/components/radio/SessionArtwork";
import { getPublicRadioSessions } from "@/lib/radio/sessions";

export const metadata: Metadata = {
  title: "Crew Radio — Ventures Crew",
  description:
    "A curated mix series from Ventures Crew. Selected sounds, distinctive artists, one collective frequency.",
  alternates: { canonical: "/radio" },
};

export default function RadioPage() {
  const sessions = getPublicRadioSessions();

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
      >
        <section className="px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            <span>02 / The sound · Ventures Crew</span>
            <Link href="/#music" className="nav-link text-[var(--foreground)]">
              ← Back to Music
            </Link>
          </div>

          <div className="grid gap-10 py-14 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-24">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
                An independent mix series
              </p>
              <h1 className="mt-7 text-[clamp(4rem,14vw,12rem)] font-black leading-[0.76] tracking-[-0.09em]">
                CREW<br />RADIO.
              </h1>
            </div>
            <div className="md:pb-2">
              <p className="max-w-xl text-lg font-bold leading-snug tracking-[-0.03em] md:text-2xl">
                Selected sounds. Distinctive artists. One collective frequency.
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--muted)] md:text-base">
                A growing archive of mixes from the DJs shaping the sounds around
                Ventures Crew. Each session is made to be returned to.
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-4">
            <h2 className="text-2xl font-black tracking-[-0.05em] md:text-4xl">
              THE FREQUENCY.
            </h2>
            <span className="text-right text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
              {sessions.length.toString().padStart(2, "0")} / Sessions
            </span>
          </div>

          {sessions.length > 0 ? (
            <div className="grid gap-5 pt-5 md:grid-cols-2">
              {sessions.map((session) => (
                <Link
                  key={session.id}
                  href={`/radio/${session.slug}`}
                  className="group overflow-hidden border border-[var(--line)] bg-[var(--cream)]"
                >
                  <div className="aspect-square overflow-hidden">
                    <SessionArtwork
                      src={session.artwork}
                      alt={`Crew Radio ${session.id} cover: ${session.genre} mix by ${session.artist}`}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="flex flex-wrap items-end justify-between gap-4 p-5 md:p-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                        {session.id} / {session.genre} · {session.year}
                      </p>
                      <h3 className="mt-3 text-2xl font-black tracking-[-0.05em] md:text-3xl">
                        {session.artist}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{session.title}</p>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] transition-transform group-hover:translate-x-1">
                      Enter session ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="py-10 text-sm text-[var(--muted)]">
              The first session is being prepared for release.
            </p>
          )}

          <section
            aria-labelledby="next-mix-heading"
            className="mt-16 grid gap-8 border-y border-[var(--line)] py-10 md:mt-24 md:grid-cols-[0.7fr_1.3fr] md:items-center md:py-14"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                Next frequency
              </p>
              <h2
                id="next-mix-heading"
                className="mt-4 text-4xl font-black leading-[0.85] tracking-[-0.07em] md:text-6xl"
              >
                NEXT MIX.<br />COMING SOON.
              </h2>
            </div>
            <div className="flex min-h-36 items-center border border-dashed border-[var(--line)] bg-[var(--cream)] px-6 py-8 md:px-10">
              <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                The next session is in the works. New mixes will appear here with
                their own artwork, story and listening links.
              </p>
            </div>
          </section>

          <section className="grid gap-5 pt-12 md:grid-cols-[0.4fr_1fr] md:pt-16">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
              About the series
            </p>
            <p className="max-w-3xl text-xl font-black leading-tight tracking-[-0.04em] md:text-3xl">
              Crew Radio is the sound of the people, places and nights that make
              Ventures Crew what it is.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
