export function Join() {
  return (
    <section
      id="join"
      className="grid border-b border-[var(--line)] bg-[var(--orange)] md:grid-cols-2"
    >
      <div className="px-6 py-20 md:px-12 md:py-24">
        <div className="text-[10px] font-black uppercase tracking-[0.18em]">
          06 / The community
        </div>

        <h2 className="mt-10 text-[clamp(4rem,17vw,10rem)] font-black leading-[0.78] tracking-[-0.07em] md:text-[clamp(5rem,8.5vw,9rem)]">
          JOIN
          <br />
          THE
          <br />
          CREW.
        </h2>
      </div>

      <div className="flex flex-col justify-end px-6 py-20 md:px-12 md:py-24">
        <p className="max-w-xl text-base leading-relaxed md:text-lg">
          First access to Hey Crew. New music. Limited drops. Private
          experiences. What&apos;s next.
        </p>

        <div
          role="group"
          aria-label="Newsletter sign-up coming soon"
          className="mt-12 flex border-b-2 border-[var(--foreground)]"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            disabled
            aria-describedby="newsletter-status"
            className="min-w-0 flex-1 cursor-not-allowed bg-transparent py-4 text-base placeholder:text-[var(--foreground)]/60 disabled:opacity-100"
          />

          <button
            type="button"
            disabled
            className="cursor-not-allowed px-2 py-4 text-[11px] font-black uppercase tracking-[0.12em] opacity-60"
          >
            Soon
          </button>
        </div>

        <p id="newsletter-status" className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em]">
          Newsletter sign-up coming soon. No noise, just the good stuff.
        </p>
      </div>
    </section>
  );
}
