import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { StoriesArchive } from "@/components/StoriesArchive";

export const metadata: Metadata = {
  title: "Stories — Ventures Crew",
  description:
    "The people, places and chapters behind Ventures Crew, from the first tent to the present day.",
};

export default function StoriesPage() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
      >
        <StoriesArchive />
      </main>
      <Footer />
    </>
  );
}
