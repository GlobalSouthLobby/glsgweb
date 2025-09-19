import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { arrow, lobbyfirm, lobbyist, washingtonmap, firstdc, seconddc, dome1, dome2 } from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { Helmet } from 'react-helmet-async'

const bgImages = [
  firstdc,
  seconddc,
  dome1,
  dome2
];
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
        <title>Contact US: Global South Lobby Group USA | Advocacy & Lobbying</title>
        <meta
          name="description"
          content="Get in touch with the Global South Lobby Group USA. Contact our Washington D.C. office for advocacy, lobbying, or partnership inquiries"
        />
        <meta name="keywords" content="Global South, Lobbying, Advocacy, USA, Policy, International Relations, contact," />
        <meta name="author" content="Global South Lobby Group USA" />
        <link rel="canonical" href="https://gslgusa.org/contact" />
      </Helmet>
      <div
        className="relative bg-cover bg-center bg-no-repeat  py-[5px]  text-black transition-all duration-1000 ease-in-out"
      >
        {/* Content above overlay */}
        <div className="relative z-10">
          <Header />
          <section className="bg-white px-6 py-12 md:px-[40px]">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Do you need Representation?
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Have Questions, Ideas, <br /> Collaboration? Reach us @
              </h1>
              <div className='font-bold mb-4 text-[22px]'>
                Inter Governmental Relations Director <span className='border-b border-blue-600 text-blue-600 cursor-pointer' onClick={() => navigate('/profile/ezeh')}>Click here</span>
                <span className='ml-2'>(For Government Issues)</span>
                <br />Organizations Manager
                <span className='ml-2 border-b border-blue-600 text-blue-600 cursor-pointer' onClick={() => navigate('/profile/katherine')}>Click here</span>
                <span className='ml-2'>(For Corporation or Other Issues)</span>
              </div>


              <div>

              </div>

              <div className='flex flex-col md:flex-row justify-between'>
                <div className="flex flex-wrap gap-2 mt-4 mb-2 md:mb-0 ">
                  {["Consultation", "General collaboration", "Representation", "No one size fits all approach"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#296E8A] px-4 h-[50px] font-bold flex items-center py-1 text-sm rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 ml-2 max-w-2xl">
                  Your Voice Matters.
                  Every message we receive is another step in strengthening the voice of the Global South. Thank you for reaching out.
                  <br />
                  Our Washington D.C. office is open for meetings by scheduled appointment. Virtual meetings are available worldwide.
                </p>

              </div>

            </div>


            {/* Contact Info */}
            {/* Contact Info Panel */}


            <div className='flex flex-col lg:flex-row gap-2 justify-between'>
              <div className="flex flex-wrap mb-4 lg:mb-0 justify-between items-start lg:flex-col w-full lg:w-[60%]">
                <div className="flex items-start gap-4 mb-3">
                  <MdLocationOn className="text-3xl text-[#296E8A]" />
                  <div>
                    <h4 className="text-lg font-semibold text-black">Address</h4>
                    <p className="text-gray-700">20 F St. 7th floor.</p>
                    <p className="text-gray-700">Washington D.C. 20001, U. S. A.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-3">
                  <MdPhone className="text-3xl text-[#296E8A]" />
                  <div>
                    <h4 className="text-lg font-semibold text-black">Phone</h4>
                    <p className="text-gray-700"><strong>Phone </strong>: +1 - 202 – 747 -7727</p>
                    <p className="text-gray-700"><strong>Fax </strong>: +1 - 202 – 529 – 2162</p>
                    <p className="text-gray-700"><strong>Toll Free </strong>: 1 – 844 – 887 – 8343</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-3">
                  <MdEmail className="text-3xl text-[#296E8A]" />
                  <div>
                    <h4 className="text-lg font-semibold text-black">Email</h4>
                    <p className="text-gray-700">Results@Gslgusa.org</p>
                  </div>
                </div>


              </div>

              <div className='relative mt-[20px] bg-cover bg-center bg-no-repeat w-full h-[400px] text-transparent transition-all duration-1000 ease-in-out'
                style={{

                  backgroundImage: `url(${bgImages[currentBg]})`,
                }}>
                .
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              💬 *Messages are typically responded to within 48 hours.*
            </p>

          </section>

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact