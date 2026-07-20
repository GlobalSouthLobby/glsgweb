import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormspreeProvider } from "@formspree/react";
import FormspreeClientProvider from "@/components/FormspreeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gslgusa.org"),

  title: {
    default: "Global South Lobby Group USA",
    template: "%s | GSLGUSA",
  },

  description:
    "Global South Lobby Group USA provides advocacy, lobbying, consultation, representation, and policy engagement services in Washington D.C. for governments, institutions, organizations, and communities.",

  keywords: [
    "Global South",
    "Lobbying",
    "Advocacy",
    "Washington DC",
    "Government Relations",
    "Policy Consulting",
    "International Relations",
    "Political Advocacy",
    "Global South Lobby Group USA",
    "GSLGUSA",
  ],

  authors: [
    {
      name: "Global South Lobby Group USA",
    },
  ],

  creator: "Global South Lobby Group USA",

  alternates: {
    canonical: "https://gslgusa.org",
  },

  openGraph: {
    title: "Global South Lobby Group USA",
    description:
      "Advocacy, lobbying, consultation, and representation for governments, institutions, and organizations.",
    url: "https://gslgusa.org",
    siteName: "Global South Lobby Group USA",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global South Lobby Group USA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Global South Lobby Group USA",
    description:
      "Advocacy, lobbying, consultation, and representation services.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Global South Lobby Group USA",
              alternateName: "GSLGUSA",
              url: "https://gslgusa.org",
              logo: "https://gslgusa.org/logo.png",

              email: "Results@Gslgusa.org",

              telephone: "+1-202-747-7727",

              address: {
                "@type": "PostalAddress",
                streetAddress: "20 F St. 7th floor",
                addressLocality: "Washington",
                addressRegion: "DC",
                postalCode: "20001",
                addressCountry: "US",
              },

              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-202-747-7727",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },

              sameAs: [
                "https://www.linkedin.com/company/gslg",
                "https://x.com/GslgUSA",
              ],
            }),
          }}
        />
         <FormspreeClientProvider>

        {children}
        </FormspreeClientProvider>
      </body>
    </html>
  );
}