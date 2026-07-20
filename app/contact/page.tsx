import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Global South Lobby Group USA in Washington D.C. for advocacy, lobbying, representation, consultations, and partnership opportunities.",

  keywords: [
    "Contact GSLGUSA",
    "Global South Lobby Group USA",
    "Lobbying Washington DC",
    "Government Relations",
    "Advocacy",
    "Policy Consulting",
    "International Relations",
  ],

  alternates: {
    canonical: "https://gslgusa.org/contact",
  },

  openGraph: {
    title: "Contact Global South Lobby Group USA",
    description:
      "Reach Global South Lobby Group USA for collaboration, advocacy, lobbying and representation.",
    url: "https://gslgusa.org/contact",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Global South Lobby Group USA",
    description:
      "Get in touch with Global South Lobby Group USA for lobbying, advocacy and international relations inquiries.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}