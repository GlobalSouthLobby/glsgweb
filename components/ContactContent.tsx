"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";

import {
  firstdc,
  seconddc,
  dome1,
  dome2,
} from "@/constants/images";

import {
  MdLocationOn,
  MdEmail,
  MdPhone,
} from "react-icons/md";

const bgImages = [
  firstdc,
  seconddc,
  dome1,
  dome2,
];

export default function ContactContent() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(
        (prev) => (prev + 1) % bgImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Global South Lobby Group USA",
            url: "https://gslgusa.org",
            logo: "https://gslgusa.org/logo.png",

            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-202-747-7727",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
            ],

            address: {
              "@type": "PostalAddress",
              "streetAddress": "20 F St. 7th Floor",
              addressLocality: "Washington",
              addressRegion: "DC",
              postalCode: "20001",
              addressCountry: "US",
            },
          }),
        }}
      />

      <div className="relative">
        <div className="relative bg-cover bg-center bg-no-repeat text-black transition-all duration-1000 ease-in-out">
          <div className="relative z-10">
            <Header />

            <section className="bg-white px-6 py-12 md:px-[40px]">
              <header className="mb-10">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Contact Global South Lobby Group USA
                </h1>

                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  Do you need Representation or have
                  Collaboration Ideas?
                </h2>

                <p className="mb-6 text-gray-700">
                  Get in touch with our
                  Intergovernmental Relations Director
                  or Organizations Manager for tailored
                  support.
                </p>

                <div className="mb-4 text-[23px] font-bold">
                  Intergovernmental Relations Director{" "}
                  <Link
                    href="/profile/ezeh"
                    className="cursor-pointer border-b border-blue-600 text-blue-600"
                  >
                    Click here
                  </Link>

                  <span className="ml-2 text-gray-600">
                    (For Government Issues)
                  </span>

                  <br />

                  Organizations Manager{" "}
                  <Link
                    href="/profile/katherine"
                    className="ml-2 cursor-pointer border-b border-blue-600 text-blue-600"
                  >
                    Click here
                  </Link>

                  <span className="ml-2 text-gray-600">
                    (For Corporation or Other Issues)
                  </span>
                </div>
              </header>

              <div className="flex flex-col justify-between md:flex-row">
                <div className="mt-4 mb-2 flex flex-wrap gap-2 md:mb-0">
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

                <p className="ml-2 max-w-2xl text-gray-600">
                  Your Voice Matters. Every message we
                  receive is another step in
                  strengthening the voice of the Global
                  South.

                  <br />
                  <br />

                  Our Washington D.C. office is open
                  for meetings by scheduled appointment.
                  Virtual meetings are available
                  worldwide.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-6 lg:flex-row">
                {/* Contact Info */}
                <div className="flex w-full flex-col gap-6 lg:w-[60%]">
                  <div className="flex items-start gap-4">
                    <MdLocationOn className="text-3xl text-[#296E8A]" />

                    <div>
                      <h3 className="text-lg font-semibold">
                        Address
                      </h3>

                      <p>20 F St. 7th Floor</p>
                      <p>Washington D.C. 20001, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MdPhone className="text-3xl text-[#296E8A]" />

                    <div>
                      <h3 className="text-lg font-semibold">
                        Phone
                      </h3>

                      <p>
                        <strong>Main:</strong>{" "}
                        +1-202-747-7727
                      </p>

                      <p>
                        <strong>Fax:</strong>{" "}
                        +1-202-529-2162
                      </p>

                      <p>
                        <strong>Toll Free:</strong>{" "}
                        1-844-887-8343
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MdEmail className="text-3xl text-[#296E8A]" />

                    <div>
                      <h3 className="text-lg font-semibold">
                        Email
                      </h3>

                      <p>Results@Gslgusa.org</p>
                    </div>
                  </div>
                </div>

                {/* Slider */}
                <div
                  className="relative mt-4 h-[400px] w-full rounded-xl bg-cover bg-center bg-no-repeat shadow"
                  style={{
                    backgroundImage: `url(${bgImages[currentBg].src})`,
                  }}
                  role="img"
                  aria-label="Washington D.C. office background"
                />
              </div>

              <p className="mt-6 text-sm text-gray-500">
                💬 Messages are typically responded to
                within 48 hours.
              </p>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}