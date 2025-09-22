import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {
  firstdc,
  seconddc,
  lisa,
} from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Kat() {
  const navigate = useNavigate()
  return (
    <div className="relative">
      <Helmet>
        {/* Page title */}
        <title>
          Katherine Marisol – Organizations Manager | Global South Lobby Group USA
        </title>

        {/* Meta description */}
        <meta
          name="description"
          content="Meet Katherine Marisol, Organizations Manager at Global South Lobby Group USA. An experienced labor organizer and activist, she manages daily affairs, advocacy, and lobbying on behalf of institutions and civil rights groups."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Katherine Marisol, Global South Lobby, Organizations Manager, labor organizer, advocacy, lobbying, USA, civil rights, international relations"
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Katherine Marisol – Global South Lobby Group USA" />
        <meta
          property="og:description"
          content="Learn about Katherine Marisol, Organizations Manager at Global South Lobby Group USA. Passionate about advocacy and lobbying for Global South countries and civil rights organizations."
        />
        <meta property="og:image" content={lisa} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://gslgusa.org/profile/kat" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Katherine Marisol – Global South Lobby Group USA" />
        <meta
          name="twitter:description"
          content="Organizations Manager of Global South Lobby Group USA. Experienced labor organizer, activist, and administrator advocating for Global South countries."
        />
        <meta name="twitter:image" content={lisa} />

        {/* Canonical */}
        <link rel="canonical" href="https://gslgusa.org/profile/katherine" />

        {/* Author */}
        <meta name="author" content="Global South Lobby Group USA" />
      </Helmet>

      <div className="relative bg-cover bg-center bg-no-repeat py-[5px] text-black transition-all duration-1000 ease-in-out">
        <div className="relative z-10">
          <Header />

          {/* Profile Section */}
          <section className="bg-white px-6 py-12 md:px-[40px]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Left - Image */}
              <div className="w-full md:w-[400px] h-[400px]">
                <img
                  src={lisa}
                  alt="Portrait of Katherine Marisol, Organizations Manager"
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>

              {/* Right - Bio */}
              <div className="w-full md:flex-1">
                <h1 className="text-2xl font-bold mb-1 text-gray-900">
                  Katherine Marisol
                </h1>
                <h2 className="text-base text-gray-600 italic mb-4">
                  Organizations Manager – Global South Lobby Group USA
                </h2>

                <div className="space-y-3 text-justify text-sm leading-relaxed text-gray-800">
                  <p>
                    Mrs. Katherine Marisol is an experienced labor organizer, activist, and administrator. 
                    She serves as the <strong>Organizations Manager</strong> at Global South Lobby Group USA, 
                    overseeing daily affairs and coordinating advocacy and lobbying efforts on behalf of 
                    institutions, organizations, and civil rights groups.
                  </p>
                  <p>
                    Born in the Caribbean and raised in the United States, she is deeply passionate about 
                    lobbying for Global South countries and advancing equity through public policy advocacy. 
                    Mrs. Marisol is married and a proud mother of three grown children.
                  </p>
                  <p>
                    She can be contacted directly at:{' '}
                    <a
                      href="mailto:Manager@gslgusa.org"
                      className="font-bold text-black underline"
                    >
                      Manager@gslgusa.org
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Fax:</strong> +1 (202) 529-2162
                  </p>
                  <p className="text-gray-700">
                    <strong>Toll Free:</strong> 1-844-887-8343
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <section className="flex flex-col px-6 lg:px-36 pt-24">
              <div className="text-center text-[27px] text-black flex flex-col">
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
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Kat
