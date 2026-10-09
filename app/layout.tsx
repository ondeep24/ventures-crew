import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ventures Crew — Culture, Music & Experiences",
  description:
    "An independent South African culture platform built around music, people, experiences and the stories that happen between them.",
  openGraph: {
    title: "Ventures Crew — Culture, Music & Experiences",
    description:
      "An independent South African culture platform built around music, people, experiences and the stories that happen between them.",
    siteName: "Ventures Crew",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventures Crew — Culture, Music & Experiences",
    description:
      "An independent South African culture platform built around music, people, experiences and the stories that happen between them.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
