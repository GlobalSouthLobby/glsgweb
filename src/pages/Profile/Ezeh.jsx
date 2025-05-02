import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { arrow, lobbyfirm, lobbyist, washingtonmap, firstdc, seconddc, emmanuel, trumpCabinet, emma, trump } from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const bgImages = [
    firstdc,
    seconddc
];

function Ezeh() {
    const navigate = useNavigate();
    return (
        <div className="relative">
            <div
                className="relative bg-cover bg-center bg-no-repeat  py-[5px]  text-black transition-all duration-1000 ease-in-out"
            >
                {/* Content above overlay */}
                <div className="relative z-10">
                    <Header />
                    <section className="bg-white px-6 py-12 md:px-[40px]">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                            <div className="w-full md:w-[400px] h-[600px]">
                                <img
                                    src={emma}
                                    alt="Emmanuel Ezeh"
                                    className="w-full h-full object-cover rounded-md"
                                />
                                   <div className="hidden md:block w-[350px] h-[250px] ml-5">
                                        <img src={trumpCabinet} alt="Meeting Image" className="w-full h-full rounded-md" />
                                    </div>
                            </div>


                            <div className="w-full md:flex-1">
                                <h1 className="text-xl font-semibold mb-1">Emmanuel Ezeh</h1>
                                <p className="text-sm italic mb-4">Inter Governmental Relations Director</p>

                                <div className="space-y-3 text-justify text-sm leading-relaxed">
                                    <p>
                                        Mr. Emmanuel C. Ezeh is the Inter-Governmental Relations Director of Global
                                        South Lobby Group USA. He is an astute Public Administrator with decades of experience
                                        in the Nonprofit and Non-governmental organization sphere. He was a candidate for a Doctorate
                                        degree in political science when COVID-19 struck.
                                    </p>
                                    <p>
                                        He holds a Bachelor of Science degree in Political Science and a Master's degree in Public
                                        Administration from California State University Dominguez Hills, California USA.
                                        Mr. Ezeh is also an FAA Licensed Commercial Pilot and Flight Instructor.
                                    </p>
                                    <p>
                                        Mr. Ezeh is highly connected with people in government and politicians across the United States
                                        and overseas. His passion lies in interacting with people and governments at all levels,
                                        discussing issues that affect humanity and the world, particularly the Global South countries.
                                    </p>
                                    <p>
                                        As an American of Global South origin, Mr. Ezeh understands the challenges faced by Global South countries
                                        and is passionate about being part of the solution. According to him, lobbying is a way of life,
                                        not just a job, but a vital part of life in Washington D.C.
                                    </p>
                                    <p>
                                        Mr. Ezeh is available for front-end and back-end consultations and lobbying. He gets desired results.
                                    </p>
                                    <p>
                                        He can be contacted at <strong>igrdirector@gslgusa.org</strong> for immediate engagement.
                                    </p>
                                </div>

                                <div className="flex flex-col md:flex-row mt-3">
                                <div className="block md:hidden max-w-[350px] h-[250px] mb-2 md:ml-5">
                                        <img src={trumpCabinet} alt="Meeting Image" className="w-full h-full rounded-md" />
                                    </div>
                                    <div className="w-auto h-auto md:max-w-[400px] md:max-h-[450px]">
                                        <img src={trump} alt="Meeting Image" className="w-full h-full rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="flex flex-col lg:px-36 px-6 pt-24 ">
                        <div className="text-center text-[27px] text-black  flex-col flex  ">
                            <p>Contact us for more Information</p>
                        </div>
                        <div className="">
                            <div onClick={() => {
                                navigate('/contact')
                            }} className="text-[#13515E] cursor-pointer text-center text-[12px] justify-center flex items-center font-semibold rounded-[50px] underline whitespace-nowrap">Let's connect</div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Ezeh