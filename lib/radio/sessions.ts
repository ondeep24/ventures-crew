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
  tracklist?: { time: string; title: string }[];
  status: "draft" | "published";
  rightsStatus: "pending" | "cleared";
};

export const radioSessions: RadioSession[] = [
  {
    id: "CR.004",
    slug: "wasembo-deeper-with-house",
    title: "Deeper with House",
    artist: "WASEMBO",
    genre: "Deep House",
    year: 2026,
    description:
      "A deeper house selection from WASEMBO, made for Crew Radio 004.",
    context: "Crew Radio · Independent mix series",
    artwork: "/images/radio/cr-004-cover.webp",
    youtubeVideoId: "y7cInW0ZF34",
    hearthisUrl: "https://hearthis.at/venturescrew/wasembo-crew-radio-004/",
    hearthisEmbedUrl:
      "https://app.hearthis.at/embed/14766127/transparent_black/?style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0",
    hearthisEmbedHeight: 150,
    tracklist: [
      { time: "00:00:23", title: "Solid (feat. NtoMusica) — pM.Mp, K Soul" },
      { time: "00:05:29", title: "De'Luks & Ricky R — Le Shandisi · Sound Category1" },
      { time: "00:11:12", title: "Late Groove — Newlexim, Tukz Ancestral" },
      { time: "00:16:08", title: "Non Stop — Louis Anima" },
      { time: "00:19:57", title: "Vibrations — MacRonik, Sanque, Pelow Deep" },
      { time: "00:25:42", title: "The Last Groove — Supreme H & Lakay0101" },
      { time: "00:29:42", title: "DeeNostalgic & Dawn Deep — Time Shall Come · Sound Category1" },
      { time: "00:35:01", title: "Friends Of House (feat. Deeptone & 8nine Muzique) — Laconic MP" },
      { time: "00:41:05", title: "Deep Essentials & Solo Thato — Cadence (HD mix) · Strictly Deep House Music [SDHM]" },
      { time: "00:45:47", title: "Insane (feat. Orgason & Kay 1) — V.Tone" },
      { time: "00:51:03", title: "Half Of The Story, Pt. 2 — Bhutlish" },
    ],
    status: "published",
    rightsStatus: "cleared",
  },
  {
    id: "CR.003",
    slug: "wasembo-deep-house-playlist",
    title: "Deep House Playlist",
    artist: "WASEMBO",
    genre: "Deep House",
    year: 2026,
    description:
      "A Sunday mix from WASEMBO, built around a deep house selection for Crew Radio 003.",
    context: "Sunday mix · Crew Radio",
    artwork: "/images/radio/cr-003-cover.webp",
    youtubeVideoId: "jwKDmkdCoPg",
    hearthisUrl: "https://hearthis.at/venturescrew/wasembo-crew-radio-003/",
    hearthisEmbedUrl:
      "https://app.hearthis.at/embed/14757059/transparent_black/?style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0",
    hearthisEmbedHeight: 150,
    status: "published",
    rightsStatus: "cleared",
  },
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
