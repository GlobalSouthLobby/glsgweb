import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {
  arrow,
  lobbyfirm,
  lobbyist,
  washingtonmap,
  firstdc,
  seconddc,
  emmanuel,
  trumpCabinet,
  emma,
  trump,
} from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Ezeh() {
  const navigate = useNavigate()
  return (
    <div className="relative">
      <Helmet>
        {/* Page title */}
        <title>
          Emmanuel Ezeh – Inter-Governmental Relations Director | Global South Lobby Group USA
        </title>

        {/* Meta description */}
        <meta
          name="description"
          content="Meet Emmanuel Ezeh, Inter-Governmental Relations Director at Global South Lobby Group USA. With decades of public administration experience, he advocates for Global South countries, connects with U.S. lawmakers, and offers expert lobbying in Washington D.C."
        />

        {/* Targeted keywords */}
        <meta
          name="keywords"
          content="Emmanuel Ezeh, Global South Lobby, Inter-Governmental Relations Director, lobbying USA, public administration, international relations, Washington DC advocacy"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Emmanuel Ezeh – Global South Lobby Group USA" />
        <meta
          property="og:description"
          content="Learn more about Emmanuel Ezeh, Inter-Governmental Relations Director at Global South Lobby Group USA. Based in Washington D.C., he advocates for Global South countries through effective lobbying and policy engagement."
        />
        <meta property="og:image" content={emma} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://gslgusa.org/profile/ezeh" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emmanuel Ezeh – Global South Lobby Group USA" />
        <meta
          name="twitter:description"
          content="Inter-Governmental Relations Director of Global South Lobby Group USA. Experienced public administrator and lobbyist advocating for Global South interests in Washington D.C."
        />
        <meta name="twitter:image" content={emma} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://gslgusa.org/profile/ezeh" />

        {/* Author */}
        <meta name="author" content="Global South Lobby Group USA" />
      </Helmet>

      <div className="relative bg-cover bg-center bg-no-repeat py-[5px] text-black transition-all duration-1000 ease-in-out">
        <div className="relative z-10">
          <Header />

          {/* Profile Section */}
          <section className="bg-white px-6 py-12 md:px-[40px]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Left Column - Images */}
              <div className="w-full md:w-[400px] h-[600px]">
                <img
                  src={emma}
                  alt="Portrait of Emmanuel Ezeh, Inter-Governmental Relations Director"
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
                <div className="hidden md:block w-[350px] h-[250px] ml-5 mt-4">
                  <img
                    src={trumpCabinet}
                    alt="Emmanuel Ezeh in a cabinet meeting"
                    className="w-full h-full rounded-md"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column - Bio */}
              <div className="w-full md:flex-1">
                <h1 className="text-2xl font-bold mb-1 text-gray-900">
                  Emmanuel Ezeh
                </h1>
                <h2 className="text-base text-gray-600 italic mb-4">
                  Inter-Governmental Relations Director – Global South Lobby Group USA
                </h2>

                <div className="space-y-3 text-justify text-sm leading-relaxed text-gray-800">
                  <p>
                    Mr. Emmanuel Ezeh is the Inter-Governmental Relations Director of Global South Lobby Group USA. He is an astute Public Administrator with decades of experience in the Nonprofit and Non-governmental organization sphere. He was a candidate for a Doctorate degree in political science when COVID-19 struck.
                  </p>
                  <p>
                    He holds a Bachelor of Science in Political Science and a Master’s
                    degree in Public Administration from California State University,
                    Dominguez Hills. In addition, Mr. Ezeh is an FAA-licensed Commercial
                    Pilot and Certified Flight Instructor.
                  </p>
                  <p>
                    Mr. Ezeh is highly connected with people in government and politicians across the 
                    United States and overseas. His passion lies in interacting with people
                     and governments at all levels, discussing issues that affect humanity and 
                     the world, particularly the Global South countries.
                  </p>
                  <p>
                  As an American of Global South origin, Mr. Ezeh understands the challenges faced by Global South countries and is passionate about being part of the solution. According to him, lobbying is a way of life, not just a job, but a vital part of life in Washington D.C.
                  </p>
                  <p>
                    Mr. Ezeh offers both front-end and back-end consultation and lobbying
                    services, consistently achieving desired results. For direct
                    engagement, contact him at:{' '}
                    <a
                      href="mailto:igrdirector@gslgusa.org"
                      className="font-bold text-black underline"
                    >
                      igrdirector@gslgusa.org
                    </a>
                    .
                  </p>
                </div>

                {/* Additional Images */}
                <div className="flex flex-col md:flex-row mt-5 gap-4">
                  <div className="block md:hidden max-w-[350px] h-[250px]">
                    <img
                      src={trumpCabinet}
                      alt="Emmanuel Ezeh in a policy meeting"
                      className="w-full h-full rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-auto h-auto md:max-w-[400px] md:max-h-[450px]">
                    <img
                      src={trump}
                      alt="Emmanuel Ezeh attending a formal meeting"
                      className="w-full h-full rounded-md"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="flex flex-col lg:px-36 px-6 pt-24">
            <div className="text-center text-[27px] text-black flex-col flex">
              <p>Contact us for more information</p>
            </div>
            <div>
              <div
                onClick={() => navigate('/contact')}
                className="text-[#13515E] cursor-pointer text-center text-[12px] justify-center flex items-center font-semibold rounded-[50px] underline whitespace-nowrap"
              >
                Let&apos;s connect
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Ezeh
