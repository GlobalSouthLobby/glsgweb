import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { arrow, lobbyfirm, lobbyist, washingtonmap, firstdc, seconddc, emmanuel, trumpCabinet, emma, lisa } from '../../constant/image'
import { useNavigate } from 'react-router-dom'
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const bgImages = [
    firstdc,
    seconddc
];
function Kat() {
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

                            <div className="w-full md:w-[400px] h-[400px]">
                                <img
                                    src={lisa}
                                    alt="lisa"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>


                            <div className="w-full md:flex-1">
                                <h1 className="text-xl font-semibold mb-1">Katherine Marisol</h1>
                                <p className="text-sm italic mb-4">Organizations Manager</p>

                                <div className="space-y-3 text-justify text-sm leading-relaxed">
                                    <p>
                                    Mrs. Katherine Marisol is an experienced Labor Organizer , Activist and Administrator . She is the Organizations Manager in charge of daily affairs and coordination of  advocacy and lobbying on behalf institutions, organizations and civil rights groups.
                                    An American born in the Caribbean, she is very passionate about lobbying on behalf of global south countries. Mrs. Katherine is married with three grown children. 
                                    </p>
                                    <p>
                                        She can be contacted at <strong>Manager@gslgusa.org</strong> for immediate engagement.
                                    </p>
                                    <p className="text-gray-700"><strong>Fax </strong>: +1 - 202 – 529 – 2162</p>
                                    <p className="text-gray-700"><strong>Toll Free </strong>: 1 – 844 – 887 – 8343</p>
                                    
                                </div>

                               
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

export default Kat