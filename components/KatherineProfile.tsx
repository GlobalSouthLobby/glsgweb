"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { lisa } from "@/constants/images";

export default function KatherineProfile() {
  return (
    <>
      <Script
        id="katherine-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Katherine Marisol",
            jobTitle: "Organizations Manager",
            worksFor: {
              "@type": "Organization",
              name: "Global South Lobby Group USA",
            },
            email: "Manager@gslgusa.org",
            url: "https://gslgusa.org/profile/katherine",
          }),
        }}
      />

      <div className="relative">
        <div className="relative bg-cover bg-center bg-no-repeat py-[5px] text-black transition-all duration-1000 ease-in-out">
          <div className="relative z-10">
            <Header />

            {/* Profile Section */}
            <section className="bg-white px-6 py-12 md:px-[40px]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                {/* Left Image */}
                <div className="w-full md:w-[400px]">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={lisa}
                      alt="Portrait of Katherine Marisol"
                      fill
                      priority
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div className="w-full md:flex-1">
                  <h1 className="text-2xl font-bold mb-1 text-gray-900">
                    Katherine Marisol
                  </h1>

                  <h2 className="text-base text-gray-600 italic mb-4">
                    Organizations Manager –
                    Global South Lobby Group USA
                  </h2>

                  <div className="space-y-3 text-justify text-sm leading-relaxed text-gray-800">
                    <p>
                      Mrs. Katherine Marisol is an
                      experienced labor organizer,
                      activist and administrator.
                    </p>

                    <p>
                      She serves as the
                      <strong>
                        {" "}
                        Organizations Manager
                      </strong>{" "}
                      at Global South Lobby Group USA,
                      overseeing daily affairs and
                      coordinating advocacy and
                      lobbying efforts on behalf of
                      institutions, organizations and
                      civil rights groups.
                    </p>

                    <p>
                      Born in the Caribbean and raised
                      in the United States, she is
                      passionate about lobbying for
                      Global South countries and
                      advancing equity through public
                      policy advocacy.
                    </p>

                    <p>
                      Mrs. Marisol is married and a
                      proud mother of three grown
                      children.
                    </p>

                    <p>
                      Contact:
                      {" "}
                      <a
                        href="mailto:Manager@gslgusa.org"
                        className="font-bold underline"
                      >
                        Manager@gslgusa.org
                      </a>
                    </p>

                    <p>
                      <strong>Fax:</strong>{" "}
                      +1 (202) 529-2162
                    </p>

                    <p>
                      <strong>Toll Free:</strong>{" "}
                      1-844-887-8343
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <section className="flex flex-col px-6 lg:px-36 pt-24">
                <div className="text-center text-[27px] text-black flex flex-col">
                  <p>
                    Contact us for more information
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <Link
                    href="/contact"
                    className="text-[#13515E] text-center text-[12px] font-semibold underline"
                  >
                    Let&apos;s connect
                  </Link>
                </div>
              </section>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}