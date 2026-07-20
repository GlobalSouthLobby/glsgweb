"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

import {
  emma,
  trump,
  trumpCabinet,
} from "@/constants/images";

export default function EzehProfile() {
  return (
    <>
      <Script
        id="ezeh-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Dr. Ezeh Emmanuel C.",
            jobTitle: "Inter-Governmental Relations Director",
            worksFor: {
              "@type": "Organization",
              name: "Global South Lobby Group USA",
            },
            email: "igrdirector@gslgusa.org",
            url: "https://gslgusa.org/profile/ezeh",
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

                {/* Left Column */}
                <div className="w-full md:w-[400px]">
                  <div className="relative h-[600px] w-full">
                    <Image
                      src={emma}
                      alt="Portrait of Dr. Ezeh Emmanuel C."
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>

                  <div className="hidden md:block relative w-[350px] h-[250px] ml-5 mt-4">
                    <Image
                      src={trumpCabinet}
                      alt="Dr. Ezeh Emmanuel C. in a cabinet meeting"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:flex-1">
                  <h1 className="text-2xl font-bold mb-1 text-gray-900">
                    Dr. Ezeh Emmanuel C.
                  </h1>

                  <h2 className="text-base text-gray-600 italic mb-3">
                    Inter-Governmental Relations Director – Global South Lobby
                    Group USA
                  </h2>

                  <p className="text-sm font-medium text-[#13515E] mb-6">
                    Advancing strategic partnerships between United States and
                    the Global South Countries through Lobbying, Policy
                    Advocacy, Diplomacy and International Engagements.
                  </p>

                  <div className="space-y-3 text-justify text-sm leading-relaxed text-gray-800">
                    <p>
                      Dr. Ezeh Emmanuel C. is the
                      Inter-Governmental Relations Director of Global South Lobby
                      Group USA. He is an astute Public Administrator with
                      decades of experience in nonprofit and non-governmental
                      organizations. In addition, he holds advanced degrees in
                      Political Science and Public Administration from
                      California State University, Dominguez Hills.
                    </p>

                    <p>
                      Dr. Ezeh is also an FAA Licensed Commercial Pilot and
                      Certified Flight Instructor.
                    </p>

                    <p>
                      He is highly connected with government officials and
                      political leaders throughout the United States and
                      internationally, particularly on issues affecting Global
                      South countries.
                    </p>

                    <p>
                      As an American of Global South origin, he understands the
                      challenges faced by developing nations and is passionate
                      about creating practical solutions through advocacy,
                      lobbying, diplomacy, and international engagement.
                    </p>

                    <p>
                      Dr. Ezeh offers consultation, representation and lobbying
                      services that consistently achieve meaningful results.
                    </p>

                    <p>
                      Contact:{" "}
                      <a
                        href="mailto:igrdirector@gslgusa.org"
                        className="font-bold underline"
                      >
                        igrdirector@gslgusa.org
                      </a>
                    </p>
                  </div>

                  {/* Additional Images */}
                  <div className="flex flex-col md:flex-row mt-5 gap-4">

                    <div className="block md:hidden relative max-w-[350px] h-[250px]">
                      <Image
                        src={trumpCabinet}
                        alt="Dr. Ezeh Emmanuel C. at a policy meeting"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>

                    <div className="relative w-full md:max-w-[400px] h-[450px]">
                      <Image
                        src={trump}
                        alt="Dr. Ezeh Emmanuel C. attending a formal meeting"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="flex flex-col lg:px-36 px-6 pt-24">
              <div className="text-center text-[27px] text-black flex-col flex">
                <p>Contact us for more information</p>
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
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}