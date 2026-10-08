import Image from "next/image";

export function StoriesArchive() {
  return (
    <section
      id="stories"
      className="border-b border-[var(--line)] px-6 py-20 md:px-12 md:py-28"
    >
      {/* Header */}
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
            03 / Editorial
          </div>

          <h2 className="mt-3 text-[clamp(4rem,15vw,9rem)] font-black leading-[0.8] tracking-[-0.07em] md:text-[clamp(5rem,7.5vw,8.5rem)]">
            STORIES
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)] md:text-right">
          Before the lights, the crowds and the artists, there was a tent
          lying on the ground and a group of people trying to figure it out.
        </p>
      </div>

      {/* THE BEGINNING */}
      <div id="story-the-beginning" className="scroll-mt-24 border-t border-[var(--line)] pt-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
              2020 / Chapter 01
            </div>

            <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              THE BEGINNING.
            </h3>
          </div>

          <div className="hidden text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)] md:block">
            The first tent
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.4fr_.6fr]">
          <div className="overflow-hidden">
            <Image
              src="/images/stories/ventures-origin.jpg"
              alt="The first Ventures Crew tent lying at the venue"
              width={4608}
              height={2643}
              sizes="(min-width: 768px) 70vw, 100vw"
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div className="flex flex-col justify-end bg-[var(--acid)] p-6 md:p-8">
            <div className="text-[10px] font-black uppercase tracking-[0.16em]">
              It started here.
            </div>

            <p className="mt-6 text-lg font-black leading-tight tracking-[-0.03em] md:text-2xl">
              A tent on the ground. A venue waiting to become something.
            </p>

            <p className="mt-6 text-sm leading-relaxed">
              There was no polished production, no big stage and no established
              formula. Just the beginning of Ventures Crew.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Image
            src="/images/stories/ventures-start.jpg"
            alt="The Ventures Crew team figuring out how to install the first tent"
            width={4608}
            height={3075}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-[360px] w-full object-cover"
          />

          <div className="flex items-end border border-[var(--line)] p-6 md:p-8">
            <p className="max-w-lg text-2xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
              Before we knew what it would become, we were just trying to work
              out how to put the thing up.
            </p>
          </div>
        </div>
      </div>

      {/* THE FIRST LOOK */}
      <div className="scroll-mt-24 mt-24 border-t border-[var(--line)] pt-6">
        <div className="mb-8">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            December 2020 / Chapter 02
          </div>

          <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            THE FIRST LOOK.
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden">
            <Image
              src="/images/stories/first-look.jpg"
              alt="The first Ventures Crew tent standing"
              width={4032}
              height={3024}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/stories/first-setup.jpg"
              alt="The first Ventures Crew setup with two tents"
              width={3719}
              height={2212}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_2fr] md:items-end">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            Official look / 2020
          </div>

          <p className="max-w-3xl text-2xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
            It wasn't perfect. It didn't need to be. By December 2020,
            Ventures Crew had a look, a space and a reason to keep going.
          </p>
        </div>
      </div>

      {/* LATE NIGHTS */}
      <div className="scroll-mt-24 mt-24 border-t border-[var(--line)] pt-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
              2020 / Chapter 03
            </div>

            <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              LATE NIGHTS.
            </h3>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-right">
            The setups were simple. The nights were not.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/images/stories/late-nights.jpg"
            alt="People sitting inside the Ventures Crew stretch tents at night in 2020"
            width={4032}
            height={3024}
            sizes="100vw"
            className="h-[520px] w-full object-cover md:h-[680px]"
          />

          <div className="absolute bottom-0 left-0 max-w-xl bg-[var(--dark)]/90 p-6 text-white md:p-8">
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-white/70">
              The early days
            </div>

            <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
              Cute. A little sad. Completely ours.
            </p>
          </div>
        </div>
      </div>

      {/* THE CROWD */}
      <div id="story-the-crowd" className="scroll-mt-24 mt-24 border-t border-[var(--line)] pt-6">
        <div className="mb-8">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            2024 / Chapter 04
          </div>

          <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            THE CROWD.
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.6fr_.4fr]">
          <div className="overflow-hidden">
            <Image
              src="/images/stories/lion-park.jpg"
              alt="Crowd at the first Ventures Crew Lion Park event"
              width={960}
              height={1118}
              sizes="(min-width: 768px) 80vw, 100vw"
              className="h-[500px] w-full object-cover md:h-[620px]"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/stories/lion-park1.jpg"
              alt="DJ setup at the Ventures Crew Lion Park event"
              width={1600}
              height={1098}
              sizes="(min-width: 768px) 20vw, 100vw"
              className="h-[500px] w-full object-cover md:h-[620px]"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <p className="max-w-3xl text-2xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
            Then the room got bigger. The crowd got bigger. The idea started
            becoming real.
          </p>

          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            Lion Park / 2024
          </div>
        </div>
      </div>

      {/* STARTING AGAIN */}
      <div className="scroll-mt-24 mt-24 border-t border-[var(--line)] pt-6">
        <div className="mb-8">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            Mzobe&apos;s / Chapter 05
          </div>

          <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            STARTING AGAIN.
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-[.75fr_1.25fr] md:items-center">
          <div>
            <p className="text-2xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
              Sometimes you have to start with a table, a mixer and a pair of
              speakers.
            </p>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
              Mzobe&apos;s became another chapter. Less about what we had and
              more about what we could build with it.
            </p>
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/stories/mzobe-setup.jpg"
              alt="Early Ventures Crew setup at Mzobe's Lifestyle"
              width={6984}
              height={4660}
              sizes="(min-width: 768px) 63vw, 100vw"
              className="h-[480px] w-full object-cover md:h-[600px]"
            />
          </div>
        </div>
      </div>

      {/* THE CREW */}
      <div id="story-the-crew" className="scroll-mt-24 mt-24 border-t border-[var(--line)] pt-6">
        <div className="mb-8">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            The people / Chapter 06
          </div>

          <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            THE CREW.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr]">
          <div className="overflow-hidden">
            <Image
              src="/images/stories/thecrew.jpg"
              alt="Ventures Crew members at the Olefied Khetha and Navigator Gcwensa event"
              width={5481}
              height={4357}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="h-[520px] w-full object-cover md:h-[680px]"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-3xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl">
              The people behind the experience are the experience.
            </p>

            <div className="border-t border-[var(--line)] pt-5">
              <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                Olefied Khetha × Navigator Gcwensa
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                The night that showed us how far the crew could take the idea.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THE EVOLUTION */}
      <div id="story-the-evolution" className="scroll-mt-24 mt-24 border-t border-[var(--line)] pt-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
              2025–2026 / Chapter 07
            </div>

            <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              THE EVOLUTION.
            </h3>
          </div>

          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            Still building
          </div>
        </div>

        <div className="overflow-hidden">
          <Image
            src="/images/stories/crew-now.jpg"
            alt="Ventures Crew DJ booth at the 2025 Olefied Khetha and Navigator Gcwensa event"
            width={6960}
            height={4640}
            sizes="100vw"
            className="h-[480px] w-full object-cover md:h-[650px]"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="overflow-hidden">
            <Image
              src="/images/stories/crew-now1.jpg"
              alt="Navigator Gcwensa performing at Ventures Crew"
              width={1280}
              height={853}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-[360px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/stories/crew-now2.jpg"
              alt="Olefied Khetha performing at Ventures Crew"
              width={6960}
              height={4640}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-[360px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/stories/crew-now3.jpg"
              alt="Shenge performing at the 2026 Hey Crew event"
              width={6240}
              height={4160}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-[360px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 border-b border-[var(--line)] pb-8">
          <p className="max-w-5xl text-[clamp(3rem,9vw,7.5rem)] font-black leading-[0.8] tracking-[-0.07em] md:text-[clamp(4rem,6.5vw,7rem)]">
            STILL
            <br />
            BUILDING.
          </p>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
            From a tent on the ground in 2020 to artists on stage in 2026.
            The story isn't finished.
          </p>
        </div>
      </div>
    </section>
  );
}
