import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HeyCrew } from "@/components/HeyCrew";
import { Music } from "@/components/Music";
import { Stories } from "@/components/Stories";
import { Archive } from "@/components/Archive";
import { Lifestyle } from "@/components/Lifestyle";
import { Join } from "@/components/Join";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
      >
        <Hero />

        <HeyCrew />

        <Music />

        <Stories />

        <Archive />

        <Lifestyle />

        <Join />
      </main>

      <Footer />
    </>
  );
}
