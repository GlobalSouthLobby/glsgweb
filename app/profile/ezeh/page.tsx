import type { Metadata } from "next";
import EzehProfile from "@/components/EzehProfile";

export const metadata: Metadata = {
  title:
    "Emmanuel Ezeh – Inter-Governmental Relations Director | Global South Lobby Group USA",

  description:
    "Meet Emmanuel Ezeh, Inter-Governmental Relations Director at Global South Lobby Group USA. Experienced public administrator, policy advocate and lobbyist representing Global South interests in Washington D.C.",

  keywords: [
    "Emmanuel Ezeh",
    "Global South Lobby Group USA",
    "Inter-Governmental Relations Director",
    "Lobbying USA",
    "Washington DC Lobbyist",
    "Public Administration",
    "International Relations",
    "Policy Advocacy",
    "Government Relations",
  ],

  alternates: {
    canonical: "https://gslgusa.org/profile/ezeh",
  },

  openGraph: {
    title: "Emmanuel Ezeh – Global South Lobby Group USA",
    description:
      "Learn more about Emmanuel Ezeh, Inter-Governmental Relations Director at Global South Lobby Group USA.",
    url: "https://gslgusa.org/profile/ezeh",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Ezeh – Global South Lobby Group USA",
    description:
      "Inter-Governmental Relations Director of Global South Lobby Group USA.",
  },
};

export default function Page() {
  return <EzehProfile />;
}