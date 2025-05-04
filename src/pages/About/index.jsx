import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { arrow, lobbyfirm, lobbyist } from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="relative">
            <div
                className="relative bg-cover bg-center bg-no-repeat py-[5px]  text-black transition-all duration-1000 ease-in-out"

            >

                {/* Content above overlay */}
                <div className="relative z-10">

                    <Header />

                    <section className="bg-white px-6 py-12 md:px-[40px]">
                        {/* Header */}
                        <div className="mb-10">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Global South Lobby Group <br />USA Family
                            </h1>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div>
                                    {/* <h4 className="text-sm font-bold text-gray-500 mb-2">Our Services includes:</h4> */}
                                    <div className="flex flex-wrap gap-2 mt-4 mb-[20px] lg:mb-0">
                                        {["Consultation", "General collaboration", "Representation", "No one size fits all approach"].map((tag, idx) => (
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
                                    We ambitiously advocate and protect the rights and interests of our clients, including pro-active and defensive lobbying. We also facilitate introductions of U.S Law makers to our clients and arrange person to person meetings if and when necessary.
                                    Here in Washington D.C. USA, we are very close to the sources where policies are formulated and put out for adoption and if no lobbyist or lobby group is present to represent your interest, you’ll be disadvantaged and taken advantage of.
                                    We have a highly esteemed reputation and relationships that matter with the people that matter the most which very often yields desired results.
                                </p>

                            </div>

                        </div>

                        {/* Team Section */}
                        <div className="mb-12">
                            <div className="relative flex flex-col sm:flex-row">

                                <img
                                    src={lobbyist}
                                    alt="Team SS Group"

                                    className="rounded-lg w-full  sm:max-w-[300px] sm:max-h-[300px] md:max-w-[400px] md:max-h-[400px] lg:max-h-full lg:max-w-full"
                                />

                                {/* <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-semibold">
              Tim SS Group
            </span>
            <span className="text-sm text-gray-500 mt-2">Together, We Grow</span>
            <div className="flex items-center mt-4">
              <img
                src=""
                alt="Employees"
                width={80}
                height={30}
                className="rounded-full"
              />
              <span className="ml-3 text-gray-800 font-medium">50+ Employees working</span>
            </div>
          </div> */}
                                <div className='absolute left-[30%] hidden sm:block md:left-[40%] lg:top-[10%] lg:left-[50%]'>
                                    <img src={arrow} width={"200px"} />
                                </div>
                                <div className='mt-[40px] sm:mt-[120px]'>
                                    <div className='text-[24px] font-thin text-center'>Our Core Values</div>
                                    <section className="py-8 lg:py-16 px-6 text-[14px] lg:text-[24px] relative max-w-5xl font-bold mx-auto text-center italic">
                                        We represent the interest of our global south client countries with passion and indept understanding of what the issues and their ramifications are
                                    </section>
                                </div>



                            </div>
                        </div>

                        {/* Statistics & Vision */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-gray-100 p-6 rounded-xl">
                                <h3 className="text-2xl font-semibold mb-4">100%</h3>
                                <div className="text-xs bg-black text-white px-3 py-1 rounded-full inline-block mb-4">
                                    Excellence Commitment
                                </div>
                                <p className="text-[18px] text-gray-600 mb-2">
                                    Additionally, most of our staffs are Americans of Global South origin that have families and friends in their respective countries of global south.  We need no explanation and or convincing as to what the issues are, because we are also from there, we know the issues and they impact us just as much.
                                    For us, Its  personal and as such we ensure we get the best results possible within the least amount of time.
                                </p>


                            </div>

                            <div>
                                <h4 className="text-sm text-gray-500 mb-2">Our Vision</h4>
                                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                                    Our vision is representing States of Foreign Governments and Institutions
                                    in influencing and shaping or reshaping policies that dictate their relationships
                                    with the Governments of the United States of America. These States are Governments
                                    of the Countries of the Caribbean, South America, Africa, Asia and Oceania, collectively
                                    known as Global South
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    We work with the assigned committes in the U.S. House of Representatives,
                                    the U.S. Senate and other Governmental Institutions that create, shape and institute
                                    policies on the Economy, Environment, Immigration, State Security, Trade, Tourism, Climate,
                                    Foreign Aids, Foreign and Defense Policy, Human Rights, Social Justice and Crisis Management.
                                </p>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 gap-10 mt-[50px]'>
                            <div>
                                <h4 className="text-sm text-gray-500 mb-2">Our Mission</h4>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    To build a powerful, informed, and connected presence of the Global South
                                    in U.S. political corridors — advocating for policies that promote equity,
                                    dignity, and long-term sovereignty.
                                </h3>
                                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-left">
                                    {/* Mission 1 */}
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl font-bold text-white bg-[#296E8A] w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-[#296E8A] mb-1">
                                                Advance Equitable Policies
                                            </h4>
                                            <p className="text-gray-700">
                                                Advocate for U.S. policies that uphold justice, equity, and the
                                                self-determination of Global South nations.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mission 2 */}
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl font-bold text-white bg-[#296E8A] w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-[#296E8A] mb-1">
                                                Empower Diasporic Communities
                                            </h4>
                                            <p className="text-gray-700">
                                                Center the voices of diasporic communities through civic education,
                                                organizing, and leadership development.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mission 3 */}
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl font-bold text-white bg-[#296E8A] w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-[#296E8A] mb-1">
                                                Dismantle Harmful Structures
                                            </h4>
                                            <p className="text-gray-700">
                                                Challenge extractive systems and neocolonial practices through strategic
                                                lobbying, campaigns, and policy reform.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mission 4 */}
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl font-bold text-white bg-[#296E8A] w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-[#296E8A] mb-1">
                                                Build Transnational Solidarity
                                            </h4>
                                            <p className="text-gray-700">
                                                Unite movements across the Global South and diaspora to share strategy,
                                                resources, and collective strength.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='grid items-center'>
                                <img src={lobbyfirm} height={"700px"} />
                            </div>
                        </div>

                        <section className="flex flex-col  px-6 lg:px-36 pt-24 ">
                            <div className="text-center text-[27px] text-black flex flex-col ">
                                <p>Contact us for more Information</p>
                            </div>
                            <div className="">
                                <div onClick={() => {
                                    navigate('/contact')
                                }} className="text-[#13515E] cursor-pointer text-center text-[12px] justify-center flex items-center font-semibold rounded-[50px] underline whitespace-nowrap">Let's connect</div>
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