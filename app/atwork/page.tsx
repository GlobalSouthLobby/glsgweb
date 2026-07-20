import type { Metadata } from "next";
import AtWorkContent from "@/components/AtWorkContent";

export const metadata: Metadata = {
  title: "At Work",

  description:
    "Meet the people driving Global South Lobby Group USA's advocacy efforts. Our lobbyists, analysts and specialists work across regions and sectors to influence policy and build global partnerships.",

  keywords: [
    "Global South",
    "Lobbying",
    "Advocacy",
    "Policy",
    "Washington DC",
    "International Relations",
    "Government Relations",
    "Diaspora",
    "Global South Lobby Group USA",
    "GSLGUSA",
  ],

  alternates: {
    canonical: "https://gslgusa.org/atwork",
  },

  openGraph: {
    title: "At Work — Global South Lobby Group USA",
    description:
      "Discover our people — lobbyists, analysts and advocates representing the Global South in U.S. policy.",
    url: "https://gslgusa.org/atwork",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "At Work — Global South Lobby Group USA",
    description:
      "Meet the lobbyists, policy experts and advocates working with Global South Lobby Group USA.",
  },
};

export default function AtWorkPage() {
  return <AtWorkContent />;
}