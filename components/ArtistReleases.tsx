import { artistReleases } from "@/lib/artist-releases";

export function ArtistReleases() {
  return (
    <div className="px-6 py-20 md:px-12 md:py-24">
      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
        03 / Artist releases
      </div>

      <h3 className="mt-6 text-[clamp(3.25rem,11vw,6.5rem)] font-black leading-[0.8] tracking-[-0.07em]">
        NEW MUSIC.<br />NEW STORIES.
      </h3>

      <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
        Releases from the artists around Ventures Crew, with a little more about
        the music and a direct path to listen.
      </p>

      <div className="mt-10 space-y-5">
        {artistReleases.map((release, index) => (
          <article
            key={`${release.artist}-${release.title}`}
            className="overflow-hidden border border-[var(--line)] bg-[var(--cream)]"
          >
            <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-[var(--acid)] p-5 sm:min-h-[280px] sm:p-7">
              <div className="relative z-10 flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.14em]">
                <span>{release.artist} / {release.format}</span>
                <span>0{index + 1}</span>
              </div>
              <h4 className="relative z-10 mt-12 max-w-lg text-[clamp(3.5rem,11vw,6.75rem)] font-black leading-[0.78] tracking-[-0.08em]">
                {release.title.toUpperCase()}.
              </h4>
              <div
                aria-hidden="true"
                className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full border border-[var(--foreground)]/25 sm:-bottom-40 sm:-right-16 sm:h-96 sm:w-96"
              />
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                The release story
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                {release.story}
              </p>
              <a
                href={release.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-4 border border-[var(--foreground)] px-5 py-4 text-[10px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--foreground)] hover:text-white"
              >
                {release.linkLabel}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
