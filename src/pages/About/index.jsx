import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { arrow, lobbyfirm, lobbyist } from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function About() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="relative bg-cover bg-center bg-no-repeat py-[5px] text-black transition-all duration-1000 ease-in-out">
        <Helmet>
          <title>About Global South Lobby Group USA | Advocacy & Lobbying in Washington D.C.</title>
          <meta
            name="description"
            content="Learn about Global South Lobby Group USA — our mission, vision, and advocacy work in Washington D.C. We represent Global South nations through lobbying, policy reform, and strategic partnerships."
          />
          <meta
            name="keywords"
            content="Global South, Lobby Group USA, Advocacy, Lobbying, Policy, Washington D.C., International Relations, Diaspora, Global South Mission"
          />
          <meta name="author" content="Global South Lobby Group USA" />
          <link rel="canonical" href="https://gslgusa.org/about" />

          {/* Open Graph */}
          <meta property="og:title" content="About Global South Lobby Group USA | Advocacy & Lobbying" />
          <meta property="og:description" content="Discover our mission, vision, and values as we advocate for Global South nations in U.S. political corridors." />
          <meta property="og:image" content="https://gslgusa.org/about-banner.jpg" />
          <meta property="og:url" content="https://gslgusa.org/about" />
          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Global South Lobby Group USA" />
          <meta name="twitter:description" content="Learn about our mission, vision, and lobbying efforts in Washington D.C. for Global South nations." />
          <meta name="twitter:image" content="https://gslgusa.org/about-banner.jpg" />

          {/* JSON-LD Schema */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "About Global South Lobby Group USA",
                "url": "https://gslgusa.org/about",
                "mainEntity": {
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
              }
            `}
          </script>
        </Helmet>

        {/* Content above overlay */}
        <div className="relative z-10">
          <Header />

          <section className="bg-white px-6 py-12 md:px-[40px]">
            {/* Hero / Header */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                About Global South Lobby Group USA
              </h1>
              <div className="flex flex-col lg:flex-row justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mt-4 mb-[20px] lg:mb-0">
                    {[
                      "Consultation",
                      "Collaboration",
                      "Representation",
                      "No one size fits all approach"
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#296E8A] px-4 h-[50px] font-bold flex items-center py-1 text-sm rounded-full text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 w-full lg:max-w-2xl">
                    We ambitiously advocate and protect the rights and interests of our clients, including pro-active and defensive lobbying. We also facilitate introductions of U.S Law makers to our clients and arrange person to person meetings if and when necessary. Here in Washington D.C. USA, we are very close to the sources where policies are formulated and put out for adoption and if no lobbyist or lobby group is present to represent your interest, you’ll be disadvantaged and taken advantage of. We have a highly esteemed reputation and relationships that matter with the people that matter the most which very often yields desired results.
                </p>
              </div>
            </div>

            {/* Team / Values */}
            <div className="mb-12">
              <div className="relative flex flex-col sm:flex-row">
                <img
                  src={lobbyist}
                  alt="Global South lobbyist presenting advocacy strategies in Washington D.C."
                  className="rounded-lg w-full sm:max-w-[300px] sm:max-h-[300px] md:max-w-[400px] md:max-h-[400px] lg:max-h-full lg:max-w-full"
                  loading="lazy"
                />
                <div className="absolute left-[30%] hidden sm:block md:left-[40%] lg:top-[10%] lg:left-[50%]">
                  <img src={arrow} width={"200px"} alt="Arrow pointing to core values" loading="lazy" />
                </div>
                <div className="mt-[40px] sm:mt-[120px]">
                  <h2 className="text-[24px] font-thin text-center">Our Core Values</h2>
                  <section className="py-8 lg:py-16 px-6 text-[14px] lg:text-[20px] relative max-w-5xl font-bold mx-auto text-center italic">
                  We represent the interest of our global south client countries with passion and indept understanding of what the issues and their ramifications are
                  </section>
                </div>
              </div>
            </div>

            {/* Stats & Vision */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">100%</h3>
                <div className="text-xs bg-black text-white px-3 py-1 rounded-full inline-block mb-4">
                  Excellence Commitment
                </div>
                <p className="text-[16px] text-gray-600">
                Additionally, most of our staffs are Americans of Global South origin that have families and friends in their respective countries of global south. We need no explanation and or convincing as to what the issues are, because we are also from there, we know the issues and they impact us just as much. For us, Its personal and as such we ensure we get the best results possible within the least amount of time.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-500 mb-2">Our Vision</h2>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                Our vision is representing States of Foreign Governments and Institutions in influencing and shaping or reshaping policies that dictate their relationships with the Governments of the United States of America. These States are Governments of the Countries of the Caribbean, South America, Africa, Asia and Oceania, collectively known as Global South
                </h3>
                <p className="text-gray-600 text-sm">
                    We work with the assigned committes in the U.S. House of Representatives, the U.S. Senate and other Governmental Institutions that create, shape and institute policies on the Economy, Environment, Immigration, State Security, Trade, Tourism, Climate, Foreign Aids, Foreign and Defense Policy, Human Rights, Social Justice and Crisis Management.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-10 mt-[50px]">
              <div>
                <h2 className="text-xl text-gray-500 mb-2">Our Mission</h2>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    To build a powerful, informed, and connected presence of the Global South in U.S. political corridors — advocating for policies that promote equity, dignity, and long-term sovereignty.
                </h3>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-left">
                  {[
                    {
                      title: "Advance Equitable Policies",
                      desc: "Advocate for U.S. policies that uphold justice, equity, and sovereignty of Global South nations."
                    },
                    {
                      title: "Empower Diasporic Communities",
                      desc: "Center the voices of diasporic communities through civic education, organizing, and leadership development."
                    },
                    {
                      title: "Dismantle Harmful Structures",
                      desc: "Challenge extractive systems and neocolonial practices through strategic lobbying and policy reform."
                    },
                    {
                      title: "Build Transnational Solidarity",
                      desc: "Unite movements across the Global South and diaspora for collective strength and shared strategy."
                    }
                  ].map((mission, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="text-2xl font-bold text-white bg-[#296E8A] w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-[#296E8A] mb-1">
                          {mission.title}
                        </h4>
                        <p className="text-gray-700">{mission.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid items-center">
                <img
                  src={lobbyfirm}
                  alt="Global South Lobby firm team collaborating in Washington D.C."
                  height={"700px"}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact CTA */}
            <section className="flex flex-col px-6 lg:px-36 pt-24">
              <div className="text-center text-[27px] text-black">
                <p>Contact us for more information</p>
              </div>
              <div>
                <div
                  onClick={() => navigate('/contact')}
                  className="text-[#13515E] cursor-pointer text-center text-[14px] font-semibold underline mt-4"
                >
                  Let’s connect
                </div>
              </div>
            </section>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About
