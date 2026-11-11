"use client";

import Image from "next/image";
import { createContext, useContext, useMemo, useState } from "react";

export type CrewRadioPlayback = {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  hearthisEmbedUrl?: string;
  hearthisEmbedHeight?: number;
  hearthisUrl: string;
  youtubeVideoId?: string;
  mode: "listen" | "watch";
};

type CrewRadioPlayerContextValue = {
  playback: CrewRadioPlayback | null;
  openPlayer: (playback: CrewRadioPlayback) => void;
  closePlayer: () => void;
};

const CrewRadioPlayerContext = createContext<CrewRadioPlayerContextValue | null>(null);

export function useCrewRadioPlayer() {
  const context = useContext(CrewRadioPlayerContext);
  if (!context) {
    throw new Error("useCrewRadioPlayer must be used within CrewRadioPlayerProvider");
  }
  return context;
}

function isApprovedHearthisEmbedUrl(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      ["hearthis.at", "www.hearthis.at", "app.hearthis.at"].includes(url.hostname) &&
      url.pathname.startsWith("/embed/")
    );
  } catch {
    return false;
  }
}

function isValidYoutubeVideoId(value?: string) {
  return Boolean(value && /^[A-Za-z0-9_-]{11}$/.test(value));
}

function PersistentPlayer({
  playback,
  closePlayer,
}: {
  playback: CrewRadioPlayback;
  closePlayer: () => void;
}) {
  const isWatch = playback.mode === "watch" && isValidYoutubeVideoId(playback.youtubeVideoId);
  const safeHearthisUrl = playback.hearthisEmbedUrl && isApprovedHearthisEmbedUrl(playback.hearthisEmbedUrl)
    ? playback.hearthisEmbedUrl
    : undefined;
  const embedHeight =
    Number.isInteger(playback.hearthisEmbedHeight) &&
    playback.hearthisEmbedHeight! >= 100 &&
    playback.hearthisEmbedHeight! <= 500
      ? playback.hearthisEmbedHeight!
      : 150;

  return (
    <aside
      aria-label="Crew Radio persistent player"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl border border-[var(--foreground)] bg-[var(--cream)] shadow-[0_16px_60px_rgba(0,0,0,0.22)] md:inset-x-auto md:right-6 md:bottom-6 md:w-[min(42rem,calc(100vw-3rem))]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-3 py-2.5 md:px-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden bg-[var(--line)]">
            <Image src={playback.artwork} alt="" fill sizes="40px" className="object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[var(--muted)]">
              Crew Radio · {playback.id} · {isWatch ? "Watch" : "Listen"}
            </p>
            <p className="truncate text-sm font-black uppercase tracking-[-0.03em]">
              {playback.artist} / {playback.title}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={closePlayer}
          aria-label="Close Crew Radio player and stop playback"
          className="shrink-0 px-2 py-2 text-[10px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--cream)]"
        >
          Close <span aria-hidden="true">×</span>
        </button>
      </div>

      {isWatch ? (
        <div className="aspect-video max-h-[min(56.25vw,24rem)] bg-[var(--dark)]">
          <iframe
            key={`youtube-${playback.youtubeVideoId}`}
            src={`https://www.youtube-nocookie.com/embed/${playback.youtubeVideoId}`}
            title={`${playback.title} video on YouTube`}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : safeHearthisUrl ? (
        <iframe
          key={`hearthis-${playback.id}`}
          src={safeHearthisUrl}
          title={`${playback.title} audio player on hearthis.at`}
          height={embedHeight}
          className="block w-full border-0"
          style={{ height: embedHeight }}
          allow="autoplay; web-share; clipboard-write"
        />
      ) : (
        <div className="px-4 py-4 text-sm text-[var(--muted)]">
          This mix has no embedded audio player yet. <a className="underline" href={playback.hearthisUrl} target="_blank" rel="noreferrer">Open on Hearthis ↗</a>
        </div>
      )}
    </aside>
  );
}

export function CrewRadioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [playback, setPlayback] = useState<CrewRadioPlayback | null>(null);
  const value = useMemo(
    () => ({
      playback,
      openPlayer: (nextPlayback: CrewRadioPlayback) => setPlayback(nextPlayback),
      closePlayer: () => setPlayback(null),
    }),
    [playback],
  );

  return (
    <CrewRadioPlayerContext.Provider value={value}>
      <div className={playback ? (playback.mode === "watch" ? "flex-1 pb-[30rem]" : "flex-1 pb-64") : "flex-1"}>
        {children}
      </div>
      {playback ? <PersistentPlayer playback={playback} closePlayer={() => setPlayback(null)} /> : null}
    </CrewRadioPlayerContext.Provider>
  );
}
