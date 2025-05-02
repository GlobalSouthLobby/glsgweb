import React from 'react'
import { logo } from '../constant/image'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className=" text-[20px] font-semibold  text-black">
            <div className="container px-5 py-8 lg:py-0 mx-auto gap-16 lg:gap-48 flex md:items-center lg:justify-between md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 px-4 lg:mx-auto md:text-left">
                    <img src={logo} alt='logo' className='h-16 lg:h-24 w-auto' />
                    <p className="text-gray-700">20 F St. 7th floor.</p>
                    <p className="text-gray-700">Washington D.C. 20001, U. S. A.</p>
                    <p className="text-gray-700 underline">Results@Gslgusa.org</p>

                    <div className='flex gap-3 mt-[20px]'>
                        <a href='https://www.linkedin.com/company/gslg/'>
                            <FaLinkedin size={30} color='#0A66C2'/>
                        </a>
                       

                        <a href='https://x.com/GslgUSA?t=e0NSSpifbiuoBYmUKKutvQ&s=09'>
                            <FaXTwitter size={30}  />
                        </a>

                        
                    </div>
                </div>
                <div className="flex-grow flex justify-between lg:pt-32 flex-wrap md:text-left">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="font-medium tracking-widest mb-10">Quick Link</h2>
                        <nav className="list-none flex flex-col gap-6 mb-10">
                            <li>
                                <a href={'/'} className="cursor-pointer hover:text-primary">Home</a>
                            </li>
                            <li>
                                <a href={'/about'} className="cursor-pointer hover:text-primary">About US</a>
                            </li>
                            <li>
                                <a href={'/contact'} className="cursor-pointer hover:text-primary">Contact</a>
                            </li>

                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="font-medium tracking-widest mb-10">Legals</h2>
                        <nav className="list-none flex flex-col gap-6 mb-10">
                            <li>
                                <a className="hover:text-primary">Privacy</a>
                            </li>
                            <li>
                                <a className=" hover:text-primary">Security</a>
                            </li>
                            <li>
                                <a className=" hover:text-primary">Conditions</a>
                            </li>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="py-8">
                <div className="container text-center">
                    <p>Copyright 2025 GSLGUSA | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer