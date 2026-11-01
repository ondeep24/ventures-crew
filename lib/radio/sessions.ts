export type RadioSession = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  genre: string;
  year: number;
  description: string;
  context?: string;
  artwork: string;
  youtubeVideoId?: string;
  hearthisUrl: string;
  hearthisEmbedUrl?: string;
  hearthisEmbedHeight?: number;
  status: "draft" | "published";
  rightsStatus: "pending" | "cleared";
};

export const radioSessions: RadioSession[] = [
  {
    id: "CR.002",
    slug: "wasembo-hey-crew-2026-mix",
    title: "Hey Crew 2026 Mix",
    artist: "WASEMBO",
    genre: "Live event mix",
    year: 2026,
    description:
      "A live set by WASEMBO, performed at Hey Crew 2026 on 8 August. Crew Radio 002 brings the sound of that day back to the people who were there, and everyone tuning in now.",
    context: "Recorded live at Hey Crew 2026 · 08 August 2026",
    artwork: "/images/radio/cr-002-cover.webp",
    hearthisUrl: "https://hearthis.at/venturescrew/wasembo-crew-radio-002/",
    hearthisEmbedUrl:
      "https://app.hearthis.at/embed/14748206/transparent_black/?style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0",
    hearthisEmbedHeight: 150,
    status: "published",
    rightsStatus: "cleared",
  },
  {
    id: "CR.001",
    slug: "nehtion-wyde-amapiano-mix",
    title: "Amapiano Mix",
    artist: "Nehtion Wyde",
    genre: "Amapiano",
    year: 2026,
    description:
      "The first Crew Radio session: an Amapiano mix from Nehtion Wyde, selected for the Ventures Crew frequency.",
    artwork: "/images/radio/cr-001-cover.webp",
    youtubeVideoId: "eO3jIiCjkdw",
    hearthisUrl:
      "https://hearthis.at/venturescrew/nehtion-wyde-amapiano-mix-2026-ventures-crew-mix/",
    hearthisEmbedUrl:
      "https://app.hearthis.at/embed/14743977/transparent_black/?style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0",
    hearthisEmbedHeight: 150,
    status: "published",
    rightsStatus: "cleared",
  },
];

export function getRadioSession(slug: string) {
  return radioSessions.find((session) => session.slug === slug);
}

export function getPublicRadioSessions() {
  return radioSessions.filter(
    (session) => session.status === "published" && session.rightsStatus === "cleared",
  );
}
