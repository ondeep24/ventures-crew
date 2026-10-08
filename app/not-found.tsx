import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex min-h-[70vh] flex-col justify-center bg-[var(--background)] px-6 py-20 text-[var(--foreground)] md:px-12"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--muted)]">
          Ventures Crew · 404
        </p>
        <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.07em] md:text-8xl">
          This page missed the gathering.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)] md:text-lg">
          The link may have moved. Head back to the archive and find your way in.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex w-fit rounded-full border border-[var(--foreground)] px-6 py-3 text-[10px] font-black uppercase tracking-[0.14em] transition-colors hover:bg-[var(--foreground)] hover:text-white"
        >
          Back to Ventures Crew ↗
        </Link>
      </main>
      <Footer />
    </>
  );
}
