"use client";

import { useState } from "react";

type SessionPlayerProps = {
  title: string;
  youtubeVideoId: string;
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
  youtubeVideoId,
  hearthisEmbedUrl,
  hearthisEmbedHeight = 150,
  hearthisUrl,
}: SessionPlayerProps) {
  const safeYoutubeVideoId = /^[A-Za-z0-9_-]{11}$/.test(youtubeVideoId)
    ? youtubeVideoId
    : undefined;
  const audioEmbedUrl = hearthisEmbedUrl && isApprovedHearthisEmbedUrl(hearthisEmbedUrl)
    ? hearthisEmbedUrl
    : undefined;
  const audioEmbedHeight = Number.isInteger(hearthisEmbedHeight) && hearthisEmbedHeight >= 100 && hearthisEmbedHeight <= 500
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
            Listen on Hearthis ↗
          </a>
        )}
      </div>

      {mode === "listen" && audioEmbedUrl ? (
        <iframe
          key="hearthis-audio"
          src={audioEmbedUrl}
          title={`${title} audio player on hearthis.at`}
          loading="lazy"
          height={audioEmbedHeight}
          className="w-full rounded-[10px] border-0"
          style={{ height: audioEmbedHeight }}
        />
      ) : (
        safeYoutubeVideoId ? (
          <div className="aspect-video bg-[var(--dark)]">
            <iframe
              key="youtube-video"
              src={`https://www.youtube-nocookie.com/embed/${safeYoutubeVideoId}`}
              title={`${title} video on YouTube`}
              loading="lazy"
              className="h-full w-full border-0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="px-5 py-8 text-sm text-[var(--muted)]">
            This video player is unavailable. Try the Hearthis link instead.
          </p>
        )
      )}
    </div>
  );
}
