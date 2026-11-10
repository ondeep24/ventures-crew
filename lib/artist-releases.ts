export type ArtistRelease = {
  artist: string;
  title: string;
  format: string;
  story: string;
  href: string;
  linkLabel: string;
};

export const artistReleases: ArtistRelease[] = [
  {
    artist: "WASEMBO",
    title: "The Midnight Groove",
    format: "Album · Out now",
    story:
      "Some titles set a scene before the first note. The Midnight Groove is WASEMBO’s new album—a project to explore one track at a time, then carry into the rest of the night.",
    href: "https://share.amuse.io/album/wasembo-the-midnight-groove",
    linkLabel: "Listen to the album",
  },
];
