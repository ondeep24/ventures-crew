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
                alt={`Crew Radio ${session.id} cover: ${session.genre} mix by ${session.artist}`}
                sizes="(min-width: 768px) 42vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                {session.id} / {session.genre} · {session.year}
              </p>
              <h1 className="mt-5 text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.8] tracking-[-0.08em]">
                {session.artist}.
              </h1>
              <p className="mt-6 text-xl font-bold tracking-[-0.04em] md:text-2xl">
                {session.title}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                {session.description}
              </p>
              <p className="mt-8 border-l-2 border-[var(--orange)] pl-4 text-xs leading-relaxed text-[var(--muted)]">
                Headphones on. Find your frequency.
              </p>
            </div>
          </div>

          <SessionPlayer
            title={`${session.artist} — ${session.title}`}
            youtubeVideoId={session.youtubeVideoId}
            hearthisEmbedUrl={session.hearthisEmbedUrl}
            hearthisEmbedHeight={session.hearthisEmbedHeight}
            hearthisUrl={session.hearthisUrl}
          />

          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
            A Ventures Crew independent mix series · {session.year}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
