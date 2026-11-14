import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SessionArtwork } from "@/components/radio/SessionArtwork";
import { SessionPlayer } from "@/components/radio/SessionPlayer";
import { getRadioSession, radioSessions } from "@/lib/radio/sessions";

type RadioSessionPageProps = PageProps<"/radio/[slug]">;

export async function generateStaticParams() {
  return radioSessions
    .filter((session) => session.status === "published" && session.rightsStatus === "cleared")
    .map((session) => ({ slug: session.slug }));
}

export async function generateMetadata({ params }: RadioSessionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const session = getRadioSession(slug);

  if (!session || session.status !== "published" || session.rightsStatus !== "cleared") {
    return { title: "Session not found — Crew Radio" };
  }

  return {
    title: `${session.artist} — ${session.id} | Crew Radio`,
    description: session.description,
    alternates: { canonical: `/radio/${session.slug}` },
    openGraph: {
      title: `${session.artist} — ${session.id} | Crew Radio`,
      description: session.description,
      images: [session.artwork],
      type: "music.song",
    },
  };
}

export default async function RadioSessionPage({ params }: RadioSessionPageProps) {
  const { slug } = await params;
  const session = getRadioSession(slug);

  if (!session || session.status !== "published" || session.rightsStatus !== "cleared") {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
      >
        <article className="px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            <span>Crew Radio / {session.id}</span>
            <Link href="/radio" className="nav-link text-[var(--foreground)]">
              ← All sessions
            </Link>
          </div>

          <div className="grid gap-8 py-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:py-16">
            <div className="aspect-square overflow-hidden border border-[var(--line)] bg-[var(--cream)]">
              <SessionArtwork
                src={session.artwork}
                alt={`Crew Radio ${session.id} cover artwork by ${session.artist}: ${session.title}`}
                sizes="(min-width: 768px) 42vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                {session.id} / {session.genre} · {session.year}
              </p>
              {session.context && (
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                  {session.context}
                </p>
              )}
              <h1 className="mt-5 text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.8] tracking-[-0.08em]">
                {session.artist}.
              </h1>
              <p className="mt-6 text-xl font-bold tracking-[-0.04em] md:text-2xl">
                {session.title}
              </p>
              <p className="editorial-copy mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                {session.description}
              </p>
              <p className="mt-8 border-l-2 border-[var(--orange)] pl-4 text-xs leading-relaxed text-[var(--muted)]">
                Headphones on. Find your frequency.
              </p>
            </div>
          </div>

          <SessionPlayer
            id={session.id}
            title={`${session.artist} — ${session.title}`}
            artist={session.artist}
            artwork={session.artwork}
            youtubeVideoId={session.youtubeVideoId}
            hearthisEmbedUrl={session.hearthisEmbedUrl}
            hearthisEmbedHeight={session.hearthisEmbedHeight}
            hearthisUrl={session.hearthisUrl}
          />

          {session.tracklist && session.tracklist.length > 0 ? (
            <details className="group mt-10 border-y border-[var(--line)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                    Crew Radio · {session.id}
                  </span>
                  <span className="mt-2 block text-2xl font-black uppercase tracking-[-0.05em] md:text-3xl">
                    Tracklist · {session.tracklist.length} selections
                  </span>
                </span>
                <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <ol className="pb-5">
                {session.tracklist.map((track, index) => (
                  <li
                    key={`${track.time}-${track.title}`}
                    className="grid grid-cols-[2.5rem_4rem_1fr] items-baseline gap-2 border-t border-[var(--line)] py-3 md:grid-cols-[3rem_5rem_1fr] md:gap-4"
                  >
                    <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] tabular-nums text-[var(--muted)] md:text-xs">
                      {track.time}
                    </span>
                    <span className="editorial-copy text-base leading-snug md:text-lg">
                      {track.title}
                    </span>
                  </li>
                ))}
              </ol>
            </details>
          ) : null}

          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
            A Ventures Crew independent mix series · {session.year}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
