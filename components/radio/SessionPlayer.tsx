"use client";

import { useState } from "react";
import { useCrewRadioPlayer } from "@/components/radio/CrewRadioPlayerProvider";

type SessionPlayerProps = {
  title: string;
  id: string;
  artist: string;
  artwork: string;
  youtubeVideoId?: string;
  hearthisEmbedUrl?: string;
  hearthisEmbedHeight?: number;
  hearthisUrl: string;
};

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

export function SessionPlayer({
  title,
  id,
  artist,
  artwork,
  youtubeVideoId,
  hearthisEmbedUrl,
  hearthisEmbedHeight = 150,
  hearthisUrl,
}: SessionPlayerProps) {
  const { openPlayer } = useCrewRadioPlayer();
  const safeYoutubeVideoId =
    youtubeVideoId && /^[A-Za-z0-9_-]{11}$/.test(youtubeVideoId)
      ? youtubeVideoId
      : undefined;
  const audioEmbedUrl =
    hearthisEmbedUrl && isApprovedHearthisEmbedUrl(hearthisEmbedUrl)
      ? hearthisEmbedUrl
      : undefined;
  const audioEmbedHeight =
    Number.isInteger(hearthisEmbedHeight) &&
    hearthisEmbedHeight >= 100 &&
    hearthisEmbedHeight <= 500
      ? hearthisEmbedHeight
      : 150;
  const [mode, setMode] = useState<"listen" | "watch">(audioEmbedUrl ? "listen" : "watch");

  return (
    <div className="border border-[var(--line)] bg-[var(--cream)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] px-5 py-4">
        <div className="text-[10px] font-black uppercase tracking-[0.16em]">
          Session player
        </div>
        {audioEmbedUrl ? (
          safeYoutubeVideoId ? (
            <div
              role="group"
              aria-label="Choose how to play this session"
              className="flex gap-2"
            >
              <button
                type="button"
                aria-pressed={mode === "listen"}
                onClick={() => setMode("listen")}
                className={`rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] transition-colors ${mode === "listen" ? "border-[var(--foreground)] bg-[var(--foreground)] text-white" : "border-[var(--line)] hover:border-[var(--foreground)]"}`}
              >
                Listen
              </button>
              <button
                type="button"
                aria-pressed={mode === "watch"}
                onClick={() => setMode("watch")}
                className={`rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] transition-colors ${mode === "watch" ? "border-[var(--foreground)] bg-[var(--foreground)] text-white" : "border-[var(--line)] hover:border-[var(--foreground)]"}`}
              >
                Watch
              </button>
            </div>
          ) : (
            <a
              href={hearthisUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link text-[10px] font-black uppercase tracking-[0.12em]"
            >
              Open on Hearthis ↗
            </a>
          )
        ) : (
          <a
            href={hearthisUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-link text-[10px] font-black uppercase tracking-[0.12em]"
          >
            Listen on Hearthis ↗
          </a>
        )}
      </div>

      <div className="border-t border-[var(--line)] px-5 py-6 md:px-6">
        <p className="editorial-copy max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          Open the player and start the mix there. It stays with you as you browse the site.
        </p>
        <button
          type="button"
          onClick={() =>
            openPlayer({
              id,
              title,
              artist,
              artwork,
              hearthisEmbedUrl: audioEmbedUrl,
              hearthisEmbedHeight: audioEmbedHeight,
              hearthisUrl,
              youtubeVideoId: safeYoutubeVideoId,
              mode,
            })
          }
          className="mt-5 inline-flex min-h-11 items-center gap-3 border border-[var(--foreground)] bg-transparent px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--cream)]"
        >
          Open persistent player <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  );
}
