import type { Metadata } from "next";
import KatherineProfile from "@/components/KatherineProfile";

export const metadata: Metadata = {
  title:
    "Katherine Marisol – Organizations Manager | Global South Lobby Group USA",

  description:
    "Meet Katherine Marisol, Organizations Manager at Global South Lobby Group USA. Experienced labor organizer, activist and administrator coordinating advocacy and lobbying efforts for institutions and civil rights organizations.",

  keywords: [
    "Katherine Marisol",
    "Organizations Manager",
    "Global South Lobby Group USA",
    "Labor Organizer",
    "Advocacy",
    "Lobbying",
    "Civil Rights",
    "International Relations",
    "Public Policy",
    "Government Relations",
  ],

  alternates: {
    canonical: "https://gslgusa.org/profile/katherine",
  },

  openGraph: {
    title:
      "Katherine Marisol – Global South Lobby Group USA",
    description:
      "Learn more about Katherine Marisol, Organizations Manager at Global South Lobby Group USA.",
    url: "https://gslgusa.org/profile/katherine",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Katherine Marisol – Global South Lobby Group USA",
    description:
      "Organizations Manager of Global South Lobby Group USA. Experienced labor organizer, activist and administrator.",
  },
};

export default function Page() {
  return <KatherineProfile />;
}