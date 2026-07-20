"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";

import Header from "@/components/header";
import Footer from "@/components/footer";
import TeamSection from "@/components/team";
import TestimonialSection from "@/components/testimontial";
import GrowthComparisonSection from "@/components/challenges";

import {
  community,
  globemap,
  meeting,
  union,
  UN,
  lobbyman,
  lobbypeople,
} from "@/constants/images";

const bgImages = [
  globemap,
  community,
  meeting,
  union,
  UN,
];

export default function HomeContent() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
              streetAddress: "20 F St. 7th Floor",
              addressLocality: "Washington",
              addressRegion: "DC",
              postalCode: "20001",
              addressCountry: "US",
            },
          }),
        }}
      />

      <div className="relative">
        <Header />

        {/* HERO */}
        <section className="px-5 pt-5 text-center lg:px-10">
          <h1 className="mb-4 text-[40px] font-bold leading-tight">
            Global South Lobby Group USA (GSLGUSA)
            <br />

            <span className="text-[#13515E]">
              Advocacy and Lobbying
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg">
            Championing policies that impact the
            Global South from the heart of the USA.
          </p>
        </section>

        {/* SLIDER */}
        {/* SLIDER */}
<div
  className="relative mt-5 h-[400px] overflow-hidden bg-cover bg-center transition-all duration-1000"
  style={{
    backgroundImage: `url(${bgImages[currentBg].src})`,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Launch Announcement Card */}
  <div className="absolute bottom-6 left-1/2 z-10 w-[95%] max-w-3xl -translate-x-1/2">
    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-2xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#13515E] text-white text-xl">
          📢
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#FFD700]">
            Official Launch Announcement
          </p>

          <h3 className="text-lg font-bold text-white md:text-xl">
            Washington D.C, USA 🇺🇸
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">
            Official launching in Washington D.C, USA during the{" "}
            <span className="font-semibold text-[#FFD700]">
              4th Quarter of 2026
            </span>
            . Exact date and venue will be announced soon.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* CHALLENGES */}
        <GrowthComparisonSection />

        {/* TEAM */}
        <TeamSection />

        {/* PEOPLE & LEADERS */}
        <section className="px-6 py-16 text-black md:px-[50px]">
          <div className="grid gap-10 lg:mx-[100px] md:grid-cols-1">
            {/* People */}
            <div className="flex flex-col gap-6 md:flex-row">
              <Image
                src={lobbyman}
                alt="Global South Lobby Group USA working with communities"
                width={450}
                height={250}
                className="h-[250px] w-full rounded-xl object-cover md:max-w-[450px]"
              />

              <div>
                <h2 className="font-semibold">
                  For{" "}
                  <span className="font-bold">
                    People
                  </span>
                </h2>

                <p className="text-sm">
                  For too long, voices from the Global
                  South have been filtered,
                  misrepresented, or absent in policy
                  discussions. We work to ensure
                  communities are heard and represented.
                </p>
              </div>
            </div>

            {/* Leaders */}
            <div className="flex flex-col gap-4 md:flex-row-reverse">
              <Image
                src={lobbypeople}
                alt="Global South leaders collaborating"
                width={450}
                height={250}
                className="h-[250px] w-full rounded-xl object-cover md:max-w-[450px]"
              />

              <div>
                <h2 className="font-semibold">
                  For{" "}
                  <span className="font-bold">
                    the Leaders
                  </span>
                </h2>

                <p className="text-sm">
                  We bring together leaders,
                  grassroots organizers, institutions
                  and diaspora communities to drive
                  meaningful policy engagement and
                  representation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <div className="my-[50px] px-[40px]">
          <TestimonialSection />
        </div>

        <Footer />
      </div>
    </>
  );
}