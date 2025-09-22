import React, { useState, useEffect } from 'react';
import {
  community,
  congress,
  globemap,
  lobbyman,
  lobbypeople,
  logo,
  meeting,
  UN,
  union,
  washingtonmap
} from '../../constant/image';
import { FaHandPaper } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import TestimonialSection from '../../components/testimontial';
import GrowthComparisonSection from '../../components/challenges';
import TeamSection from '../../components/team';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Helmet } from 'react-helmet-async';

const bgImages = [globemap, community, meeting, union, UN];

function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Global South Lobby Group USA | Advocacy, Policy & Lobbying in Washington D.C.
        </title>
        <meta
          name="description"
          content="Global South Lobby Group USA champions policies that impact the Global South through lobbying, advocacy, and international partnerships in Washington D.C."
        />
        <meta
          name="keywords"
          content="Global South, Lobby Group, Advocacy, Lobbying, Washington D.C., International Relations, Policy, Diaspora, Development Aid"
        />
        <meta name="author" content="Global South Lobby Group USA" />
        <link rel="canonical" href="https://gslgusa.org/" />

        {/* Open Graph */}
        <meta property="og:title" content="Global South Lobby Group USA | Advocacy & Lobbying" />
        <meta property="og:description" content="Championing Global South voices in U.S. policy through advocacy, lobbying, and partnerships." />
        <meta property="og:image" content="https://gslgusa.org/og-banner.jpg" />
        <meta property="og:url" content="https://gslgusa.org/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global South Lobby Group USA | Advocacy & Lobbying" />
        <meta name="twitter:description" content="Championing Global South voices in U.S. policy through advocacy, lobbying, and partnerships." />
        <meta name="twitter:image" content="https://gslgusa.org/og-banner.jpg" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Global South Lobby Group USA",
              "url": "https://gslgusa.org",
              "logo": "https://gslgusa.org/logo.png",
              "sameAs": [
                "https://twitter.com/YourHandle",
                "https://linkedin.com/company/YourPage"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "info@gslgusa.org"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="relative">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center bg-no-repeat py-[5px] text-black transition-all duration-1000 ease-in-out">
          <div className="relative z-10">
            <Header />
            <section className="text-center px-[20px] lg:px-[40px] pt-5">
              <h1 className="text-[40px] font-bold mb-4">
                Advocacy and Lobbying <br />
                <span className="text-[#13515E]">For Global South Countries</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg">
                Championing policies that impact the Global South from the heart of the USA.
              </p>
              
            </section>
            <div
              className="relative mt-[20px] bg-cover bg-center bg-no-repeat h-[400px] text-transparent transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
            >
              .
            </div>
          </div>
        </div>

        {/* Issues Section */}
        <GrowthComparisonSection />

        {/* Quote Section */}
        <section className="relative bg-white py-4 px-6 lg:px-24 text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="p-6 rounded-xl shadow-sm ml-4">
                <p className="text-[18px] font-bold text-black italic leading-relaxed">
                  "In this era of TRUMP 2.0, It’s no longer business as usual or what you know,
                  rather its America First and then who you know."
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-11 transform -translate-y-1/2 h-40 w-10 bg-white rounded-full border-l-2 border-dotted border-gray-300"></div>
            </div>
            <div>
              <p className="text-base font-semibold leading-relaxed text-gray-800">
                The bottom-line is to make your country great while making America Great Again.
                We at Global South Lobby Group USA are your perfect vehicle for achieving your
                desired results. We know the issues affecting you and your countries very well and
                we can help in resolving them. We have the contacts, the access, the knowledge and
                the capacity of getting your desired results here in Washington D.C.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Why GSLG */}
        <section className="text-black py-16 px-6 md:px-[50px]">
          <div className="text-center w-full mb-12">
            <h2 className="text-[30px] font-bold">WHY GSLG?</h2>
            <h3 className="text-3xl md:text-4xl font-bold mt-2">
              Unearthing the immense benefits.
            </h3>
          </div>

          <div className="grid md:grid-cols-1 lg:mx-[100px] text-[24px] gap-10 items-start">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={lobbyman}
                alt="Lobbyist presenting Global South advocacy strategies in Washington D.C."
                className="rounded-xl w-full md:max-w-[450px] h-[250px] object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold">
                  For <span className="font-bold">People</span>
                </h4>
                <p className="text-sm">
                  For too long, voices from the Global South have been filtered, misrepresented,
                  or completely absent in high-level policy discussions. Our lobby group ensures
                  that <strong>we speak for ourselves</strong> — not through intermediaries, but
                  through direct advocacy.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-4">
              <img
                src={lobbypeople}
                alt="Global South leaders and diaspora communities collaborating"
                className="rounded-xl w-full md:max-w-[450px] h-[250px] object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold">
                  For <span className="font-bold">the Leaders</span>
                </h4>
                <p className="text-sm">
                  We bring together leaders, grassroots organizers, and diaspora communities
                  to shape U.S. foreign policy and development aid strategies that respect
                  sovereignty, dignity, and sustainable growth in our regions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <div className="my-[50px] px-[40px]">
          <TestimonialSection />
        </div>

        {/* FAQ Section */}
        <section className="py-12 px-6 lg:px-24">
         
          {/* FAQ Schema */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What issues does GSLG focus on?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We focus on policies around climate change, global trade, human rights, and international development that directly affect Global South nations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can leaders engage with GSLG?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Leaders, diplomats, and grassroots advocates can collaborate with us by participating in our lobbying campaigns and international partnerships in Washington D.C."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is GSLG only for governments?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. We also work with NGOs, diaspora communities, and private organizations to ensure fair representation of Global South interests."
                    }
                  }
                ]
              }
            `}
          </script>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
