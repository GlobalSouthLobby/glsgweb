import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import Header from "@/components/header";
import Footer from "@/components/footer";

import {
  arrow,
  lobbyfirm,
  lobbyist,
} from "@/constants/images";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Global South Lobby Group USA, our mission, vision, values, and advocacy work.",
};



export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Global South Lobby Group USA",
            url: "https://gslgusa.org/about",
          }),
        }}
      />

      <div className="relative">
        <div className="relative bg-cover bg-center bg-no-repeat py-[5px] text-black transition-all duration-1000 ease-in-out">
          <div className="relative z-10">
            <Header />

            <section className="bg-white px-6 py-12 md:px-[40px]">
              {/* Hero */}
              <div className="mb-10">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  About Global South Lobby Group USA
                </h1>

                <div className="flex flex-col justify-between lg:flex-row">
                  <div>
                    <div className="mt-4 mb-[20px] flex flex-wrap gap-2 lg:mb-0">
                      {[
                        "Consultation",
                        "Collaboration",
                        "Representation",
                        "No one size fits all approach",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="flex h-[50px] items-center rounded-full bg-[#296E8A] px-4 py-1 text-sm font-bold text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="w-full text-gray-600 lg:max-w-2xl">
                    We ambitiously advocate and protect the
                    rights and interests of our clients,
                    including pro-active and defensive
                    lobbying.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="mb-12">
                <div className="relative flex flex-col sm:flex-row">
                  <Image
                    src={lobbyist}
                    alt="Global South lobbyist presenting advocacy strategies"
                    width={500}
                    height={500}
                    className="w-full rounded-lg sm:max-w-[300px] md:max-w-[400px] lg:max-w-full"
                  />

                  <div className="absolute left-[30%] hidden sm:block md:left-[40%] lg:top-[10%] lg:left-[50%]">
                    <Image
                      src={arrow}
                      alt="Arrow"
                      width={200}
                      height={200}
                    />
                  </div>

                  <div className="mt-[40px] sm:mt-[120px]">
                    <h2 className="text-center text-[24px] font-thin">
                      Our Core Values
                    </h2>

                    <section className="relative mx-auto max-w-5xl px-6 py-8 text-center text-[14px] font-bold italic lg:py-16 lg:text-[20px]">
                      We represent the interest of our
                      global south client countries with
                      passion and indept understanding of
                      what the issues and their
                      ramifications are.
                    </section>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="grid gap-10 md:grid-cols-2">
                <div className="rounded-xl bg-gray-100 p-6">
                  <h3 className="mb-4 text-2xl font-semibold">
                    100%
                  </h3>

                  <div className="mb-4 inline-block rounded-full bg-black px-3 py-1 text-xs text-white">
                    Excellence Commitment
                  </div>

                  <p className="text-[16px] text-gray-600">
                    Additionally, most of our staff are
                    Americans of Global South origin.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-xl text-gray-500">
                    Our Vision
                  </h2>

                  <h3 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
                    Our vision is representing States of
                    Foreign Governments and Institutions
                    in influencing and shaping policies.
                  </h3>

                  <p className="text-sm text-gray-600">
                    We work with assigned committees in
                    the U.S. House of Representatives,
                    Senate and other institutions.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="mt-[50px] grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="mb-2 text-xl text-gray-500">
                    Our Mission
                  </h2>

                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    To build a powerful, informed and
                    connected presence of the Global South
                    in U.S. political corridors.
                  </h3>

                  <div className="mx-auto grid max-w-5xl gap-10 text-left md:grid-cols-2">
                    {[
                      {
                        title:
                          "Advance Equitable Policies",
                        desc:
                          "Advocate for U.S. policies that uphold justice.",
                      },
                      {
                        title:
                          "Empower Diasporic Communities",
                        desc:
                          "Center the voices of diasporic communities.",
                      },
                      {
                        title:
                          "Dismantle Harmful Structures",
                        desc:
                          "Challenge extractive systems through policy reform.",
                      },
                      {
                        title:
                          "Build Transnational Solidarity",
                        desc:
                          "Unite movements across the Global South.",
                      },
                    ].map((mission, index) => (
                      <div
                        key={mission.title}
                        className="flex items-start space-x-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#296E8A] text-2xl font-bold text-white shadow-md">
                          {index + 1}
                        </div>

                        <div>
                          <h4 className="mb-1 text-xl font-semibold text-[#296E8A]">
                            {mission.title}
                          </h4>

                          <p className="text-gray-700">
                            {mission.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid items-center">
                  <Image
                    src={lobbyfirm}
                    alt="Global South Lobby firm team collaborating"
                    width={800}
                    height={700}
                    className="w-full"
                  />
                </div>
              </div>

              {/* CTA */}
              <section className="flex flex-col px-6 pt-24 lg:px-36">
                <div className="text-center text-[27px] text-black">
                  <p>
                    Contact us for more information
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-4 text-center text-[14px] font-semibold text-[#13515E] underline"
                >
                  Let's connect
                </Link>
              </section>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}