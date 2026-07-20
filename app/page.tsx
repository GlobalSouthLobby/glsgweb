import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Global South Lobby Group USA",
  description:
    "Global South Lobby Group USA advocates for governments, organizations, institutions and communities through lobbying, policy engagement and strategic representation in Washington D.C.",

  keywords: [
    "Global South",
    "Lobbying",
    "Advocacy",
    "Washington DC",
    "Government Relations",
    "Policy Consulting",
    "International Relations",
    "GSLGUSA",
  ],

  openGraph: {
    title: "Global South Lobby Group USA",
    description:
      "Advocacy and lobbying services for governments, institutions and communities.",
    url: "https://gslgusa.org",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Global South Lobby Group USA",
    description:
      "Advocacy and lobbying services for governments, institutions and communities.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}