import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  firstdc,
  seconddc,
  dome1,
  dome2,
} from "../../constant/image";
import { useNavigate } from "react-router-dom";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const bgImages = [firstdc, seconddc, dome1, dome2];

function Contact() {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Contact Us | Global South Lobby Group USA – Advocacy & Lobbying
        </title>
        <meta
          name="description"
          content="Contact Global South Lobby Group USA in Washington D.C. for advocacy, lobbying, and partnership opportunities. Schedule meetings or connect virtually worldwide."
        />
        <meta
          name="keywords"
          content="Global South Lobbying, Advocacy, Policy, International Relations, Washington DC Lobby, Government Relations, Contact Global South"
        />
        <meta name="author" content="Global South Lobby Group USA" />
        <link rel="canonical" href="https://gslgusa.org/contact" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Global South Lobby Group USA"
        />
        <meta
          property="og:description"
          content="Reach Global South Lobby Group USA in Washington D.C. for collaboration, advocacy, and lobbying efforts."
        />
        <meta property="og:url" content="https://gslgusa.org/contact" />
        <meta property="og:image" content={firstdc} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Global South Lobby Group USA"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Global South Lobby Group USA for lobbying, advocacy, and international relations inquiries."
        />
        <meta name="twitter:image" content={firstdc} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
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
              streetAddress: "20 F St. 7th floor",
              addressLocality: "Washington",
              addressRegion: "DC",
              postalCode: "20001",
              addressCountry: "USA",
            },
          })}
        </script>
      </Helmet>

      <div className="relative bg-cover bg-center bg-no-repeat text-black transition-all duration-1000 ease-in-out">
        <div className="relative z-10">
          <Header />

          {/* Main Contact Section */}
          <section className="bg-white px-6 py-12 md:px-[40px]">
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Contact Global South Lobby Group USA
              </h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Do you need Representation or have Collaboration Ideas?
              </h2>
              <p className="text-gray-700 mb-6">
                Get in touch with our Intergovernmental Relations Director or
                Organizations Manager for tailored support.
              </p>

              <div className="font-bold mb-4 text-[23px]">
                Intergovernmental Relations Director{" "}
                <span
                  className="border-b border-blue-600 text-blue-600 cursor-pointer"
                  onClick={() => navigate("/profile/ezeh")}
                >
                  Click here
                </span>{" "}
                <span className="ml-2 text-gray-600">
                  (For Government Issues)
                </span>
                <br />
                Organizations Manager{" "}
                <span
                  className="ml-2 border-b border-blue-600 text-blue-600 cursor-pointer"
                  onClick={() => navigate("/profile/katherine")}
                >
                  Click here
                </span>{" "}
                <span className="ml-2 text-gray-600">
                  (For Corporation or Other Issues)
                </span>
              </div>
            </header>

            {/* Tags + Statement */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-wrap gap-2 mt-4 mb-2 md:mb-0">
                {[
                  "Consultation",
                  "Collaboration",
                  "Representation",
                  "No one size fits all approach",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#296E8A] px-4 h-[50px] font-bold flex items-center py-1 text-sm rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 ml-2 max-w-2xl">
Your Voice Matters. Every message we receive is another step in strengthening the voice of the Global South. Thank you for reaching out.
Our Washington D.C. office is open for meetings by scheduled appointment. Virtual meetings are available worldwide
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              {/* Left Panel */}
              <div className="flex flex-col gap-6 w-full lg:w-[60%]">
                <div className="flex items-start gap-4">
                  <MdLocationOn className="text-3xl text-[#296E8A]" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      Address
                    </h3>
                    <p className="text-gray-700">20 F St. 7th floor</p>
                    <p className="text-gray-700">Washington D.C. 20001, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdPhone className="text-3xl text-[#296E8A]" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Phone</h3>
                    <p className="text-gray-700">
                      <strong>Main:</strong> +1-202-747-7727
                    </p>
                    <p className="text-gray-700">
                      <strong>Fax:</strong> +1-202-529-2162
                    </p>
                    <p className="text-gray-700">
                      <strong>Toll Free:</strong> 1-844-887-8343
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdEmail className="text-3xl text-[#296E8A]" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Email</h3>
                    <p className="text-gray-700">Results@Gslgusa.org</p>
                  </div>
                </div>
              </div>

              {/* Right Panel – Background Image */}
              <div
                className="relative mt-4 bg-cover bg-center bg-no-repeat w-full h-[400px] rounded-xl shadow"
                style={{
                  backgroundImage: `url(${bgImages[currentBg]})`,
                }}
                role="img"
                aria-label="Washington D.C. office background"
              />
            </div>

            <p className="text-sm text-gray-500 mt-6">
              💬 Messages are typically responded to within 48 hours.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
