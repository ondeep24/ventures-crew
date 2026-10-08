import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ventures Crew Clothing — Coming Soon",
  description:
    "A first look at the Ventures Crew clothing brand. Oversized T-shirt designs are coming soon.",
};

const designs = [
  {
    image: "/images/lifestyle/oversized-tshirt1.jpg",
    alt: "Front and back mockups of a black oversized Ventures Crew T-shirt",
    color: "Black",
    number: "01",
  },
  {
    image: "/images/lifestyle/oversized-tshirt2.jpg",
    alt: "Front and back mockups of a white oversized Ventures Crew T-shirt",
    color: "White",
    number: "02",
  },
];

export default function ClothingPage() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
      >
        <section className="px-6 py-12 md:px-12 md:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
            <span>05 / Lifestyle · Clothing</span>
            <Link
              href="/#lifestyle"
              className="nav-link text-[var(--foreground)]"
            >
              ← Back to Lifestyle
            </Link>
          </div>

          <div className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-20">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                Ventures Crew clothing
              </div>
              <h1 className="mt-6 text-[clamp(3.75rem,11vw,9rem)] font-black leading-[0.78] tracking-[-0.08em]">
                CREW<br />UNIFORM.
              </h1>
            </div>
            <div className="flex min-h-48 flex-col justify-between bg-[var(--acid)] p-6 md:min-h-56 md:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.16em]">
                First look / Oversized tees
              </div>
              <div className="mt-8">
                <div className="text-5xl font-black leading-[0.8] tracking-[-0.07em] md:text-7xl">
                  COMING<br />SOON.
                </div>
                <p className="mt-5 max-w-sm text-sm leading-relaxed">
                  The Ventures Crew clothing brand is in development. Here are
                  the first designs taking shape.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-4">
            <h2 className="text-2xl font-black tracking-[-0.05em] md:text-4xl">
              FIRST DESIGNS.
            </h2>
            <span className="text-right text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
              01 — 02 / In progress
            </span>
          </div>

          <div className="grid gap-5 pt-5 md:grid-cols-2">
            {designs.map((design) => (
              <figure
                key={design.number}
                className="overflow-hidden border border-[var(--line)] bg-[var(--cream)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#a9a9a9]">
                  <Image
                    src={design.image}
                    alt={design.alt}
                    width={4000}
                    height={3000}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 p-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                    {design.number} / Oversized tee
                  </span>
                  <span className="text-lg font-black tracking-[-0.04em]">
                    {design.color}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
