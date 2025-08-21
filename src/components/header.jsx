import React, { useState } from 'react'
import { logo } from '../constant/image'
import { useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-6 relative">
            {/* Logo and Menu Button */}
            <div className="flex justify-between items-center w-full md:w-auto">
                <div>
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-[50px] md:w-[100px]" />
                    <span className="ml-2 text-sm md:text-base font-bold">
                        Global South Lobby <br className="hidden md:block" /> Group USA
                    </span>
                </div>
                <p className='italic font-semibold'>*Together We Rise*</p>
                </div>
                

                {/* Hamburger Icon - visible on small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Navigation Links */}
            <div
                className={`flex-col md:flex md:flex-row md:space-x-6 items-center absolute md:static  md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${menuOpen ? 'flex top-16  left-0 bg-white shadow-md p-4' : 'hidden'
                    }`}
            >
                <button
                    className="bg-[#13515E] text-white px-4 py-2 rounded-full hover:bg-gray-900 mb-4 md:mb-0"
                    onClick={() => {
                        navigate('/');
                        setMenuOpen(false); // Close menu after navigating
                    }}
                >
                    Home
                </button><button
                    className="bg-[#13515E] text-white px-4 py-2 rounded-full hover:bg-gray-900 mb-4 md:mb-0"
                    onClick={() => {
                        navigate('/about');
                        setMenuOpen(false); // Close menu after navigating
                    }}
                >
                    About
                </button>
                <button
                    className="bg-[#13515E] text-white px-4 py-2 rounded-full hover:bg-gray-900 mb-4 md:mb-0"
                    onClick={() => {
                        navigate('/contact');
                        setMenuOpen(false); // Close menu after navigating
                    }}
                >
                    Contact
                </button>
                <button
                    className="bg-[#13515E] text-white px-4 py-2 rounded-full hover:bg-gray-900 mb-4 md:mb-0"
                    onClick={() => {
                        navigate('/atwork');
                        setMenuOpen(false); // Close menu after navigating
                    }}
                >
                    At Work
                </button>
                {/* <a href="/" className="hover:font-bold hover:border-b-2 hover:border-[#13515E] mb-4 md:mb-0">Home</a>
                <a href="/about" className="hover:font-bold hover:border-b-2 hover:border-[#13515E] mb-4 md:mb-0">About</a>
                <a href="/contact" className="hover:font-bold hover:border-b-2 hover:border-[#13515E] mb-4 md:mb-0">Contact</a> */}

            </div>

            {/* Contact Info */}
            <div className="hidden md:block text-sm md:text-base text-right">
                <p className="text-[#13515E] font-bold "><span className='font-bold text-black'>Phone: </span>+1 - 202 – 747 - 7727</p>
                <p className="text-[#13515E] font-bold "><span className='font-bold text-black'>Fax: </span>+1 - 202 – 529 – 2162</p>


                <div className='flex items-center'>
                    <h4 className=" font-semibold text-black mr-2">Email:</h4>
                    <p className="text-gray-700 font-bold">Results@Gslgusa.org</p>
                </div>
            </div>
        </nav>
    )
}

export default Header
