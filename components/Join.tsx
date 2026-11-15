import { KitSignupEmbed } from "@/components/KitSignupEmbed";

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
        <p className="editorial-copy max-w-xl text-xl leading-relaxed md:text-2xl">
          First access to Hey Crew. New music. Limited drops. Private
          experiences. What&apos;s next.
        </p>

        <div className="mt-12 border-y-2 border-[var(--foreground)] py-4">
          <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.14em]">
            <span>Ventures Crew Updates</span>
            <span>Occasional dispatches</span>
          </div>

          <div className="mt-6">
            <KitSignupEmbed />
          </div>

          <p className="editorial-copy mt-4 max-w-lg text-sm leading-relaxed md:text-base">
            Notes on new releases, events and what&apos;s happening across the
            crew. Join voluntarily; confirm your email to subscribe. Unsubscribe
            whenever you like.
          </p>
        </div>
      </div>
    </section>
  );
}
