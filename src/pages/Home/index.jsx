import React, { useState, useEffect } from 'react';
import { community, congress, globemap, lobbyman, lobbypeople, logo, meeting, UN, union, washingtonmap } from '../../constant/image';
import { FaHandPaper } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import TestimonialSection from '../../components/testimontial';
import GrowthComparisonSection from '../../components/challenges';
import TeamSection from '../../components/team';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useLocation } from "react-router-dom";

const bgImages = [
    globemap,
    community,
    meeting,
    union,
    UN
];



function Home() {
    const [currentBg, setCurrentBg] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % bgImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div
                className="relative bg-cover bg-center bg-no-repeat  py-[5px]  text-black transition-all duration-1000 ease-in-out"

            >

                {/* Content above overlay */}
                <div className="relative z-10 ">

                    <Header />
                    <section className="text-center px-[20px] lg:px-[40px] pt-5 ">
                        <h2 className="text-[40px] font-bold mb-4">Advocacy and Lobbying <br /> <span className='text-[#13515E]'>For Global South Countries</span> </h2>
                        <p className="max-w-2xl mx-auto text-lg ">Championing policies that impact the Global South from the heart of the USA.</p>
                        {/* <div className="my-6">
                            <button onClick={() => navigate('/about')} className="bg-[#13515E]  text-white px-6 py-3 rounded-[5px] hover:bg-gray-50 hover:text-black">Explore Our Mission</button>
                        </div> */}
                    </section>
                    <div className='relative mt-[20px] bg-cover bg-center bg-no-repeat h-[400px] text-transparent transition-all duration-1000 ease-in-out'
                        style={{

                            backgroundImage: `url(${bgImages[currentBg]})`,
                        }}>
                        .
                    </div>
                </div>
            </div>
            <div className='px-[20px] lg:px-[40px]'></div>
            {/* Issues Section */}
            <GrowthComparisonSection />
            {/* <section className="py-16 px-6 ">
                <h3 className="text-3xl font-semibold text-center mb-12">Issues We Tackle</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Climate Policy', 'Global Trade', 'Human Rights'].map(issue => (
                        <div key={issue} className="flex flex-col justify-center items-center p-6 text-center  rounded-xl shadow-sm bg-white">
                            <FaHandPaper size={50} />
                            <h4 className="text-xl font-bold mb-2">{issue}</h4>
                            <p className="text-gray-600">Our advocacy centers on creating fair and sustainable global systems.</p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="relative bg-white py-4 px-6 lg:px-24 text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Blurb */}
                    <div className="relative">
                        <div className=" p-6 rounded-xl shadow-sm ml-4">
                            <p className="text-[18px] font-bold text-black italic leading-relaxed ">
                                "In this era of TRUMP 2.0, It’s no longer business as usual or what you know, rather its America First and then who you know.  "
                            </p>
                        </div>

                        {/* Optional Decorative Curve (can be replaced with SVG for exact shape) */}
                        <div className="hidden md:block absolute top-1/2 -right-11 transform -translate-y-1/2 h-40 w-10 bg-white rounded-full border-l-2 border-dotted border-gray-300"></div>
                    </div>

                    {/* Right Text */}
                    <div>
                        <p className="text-base font-semibold leading-relaxed text-gray-800">
                            {/* <span className="font-bold">
                                The Lobby Group USA team
                            </span>{" "} */}
                            The bottom-line is to make your country great while making America Great Again. How you do that or how you go about doing that is totally up to you.
                            We at Global South Lobby Group USA are your perfect vehicle for achieving your desired results.
                            We know the issues affecting you and your countries very well and we can help in resolving them.  We have the contacts, the access, the knowledge and the capacity of getting your desired results here in Washington D.C
                        </p>
                    </div>
                </div>
            </section>

            <div>
                <TeamSection />
            </div>

            <section className=" text-black py-16 px-6 md:px-[50px]">
                <div className="text-center w-full mb-12">
                    <h3 className="text-[30px] font-bold ">WHY GSLG ?</h3>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Unearthing the immense benefits.
                    </h2>
                </div>

                <div className="grid md:grid-cols-1 lg:mx-[100px] text-[24px] gap-10 items-start">
                    <div className="flex flex-col md:flex-row gap-6">
                        <img
                            src={lobbyman}

                            alt="Tech professional presentation"
                            className="rounded-xl w-full md:max-w-[450px] h-[250px] object-cover"
                        />
                        <div>
                            <h4 className="font-semibold ">
                                For <span className="font-bold">People</span>
                            </h4>
                            <p className="text-sm ">
                                For too long, voices from the Global South have been filtered, misrepresented,
                                or completely absent in high-level policy discussions.
                                Our lobby group ensures that <strong>we speak for ourselves</strong> —
                                not through intermediaries, but through direct advocacy.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse gap-4">
                        <img
                            src={lobbypeople}
                            alt="Organization booth interaction"
                            className="rounded-xl w-full md:max-w-[450px] h-[250px] object-cover"
                        />
                        <div>
                            <h4 className="font-semibold ">
                                For <span className="font-bold">the Leaders</span>
                            </h4>
                            <p className="text-sm ">
                                We bring together leaders, grassroots organizers, and diaspora communities
                                to shape U.S. foreign policy and development aid strategies that respect
                                sovereignty, dignity, and sustainable growth in our regions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='my-[50px] px-[40px]'>
                <TestimonialSection />
            </div>


            <Footer />
        </div>
    );
}

export default Home;
