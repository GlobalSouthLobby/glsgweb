import Image from "next/image";
import Link from "next/link";

import { logo } from "@/constants/images";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-[20px] font-semibold text-black">
      <div className="container mx-auto flex flex-col flex-wrap gap-16 px-5 py-8 md:flex-row md:flex-nowrap md:items-center lg:justify-between lg:gap-48 lg:py-0">
        
        {/* Logo Section */}
        <div className="w-64 flex-shrink-0 px-4 md:mx-0 md:text-left lg:mx-auto">
          <Image
            src={logo}
            alt="GSLGUSA Logo"
            className="h-16 w-auto lg:h-24"
            priority
          />

          <p className="text-gray-700">20 F St. 7th floor.</p>
          <p className="text-gray-700">
            Washington D.C. 20001, U. S. A.
          </p>

          <a
            href="mailto:Results@Gslgusa.org"
            className="text-gray-700 underline"
          >
            Results@Gslgusa.org
          </a>

          {/*
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/company/gslg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="text-[#0A66C2]" />
            </a>

            <a
              href="https://x.com/GslgUSA?t=e0NSSpifbiuoBYmUKKutvQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={30} />
            </a>
          </div>
          */}
        </div>

        {/* Links */}
        <div className="flex-grow flex-wrap justify-between pt-0 md:flex md:text-left lg:pt-32">
          
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="mb-10 font-medium tracking-widest">
              Quick Link
            </h2>

            <nav>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:text-primary"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="cursor-pointer hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/atwork"
                    className="cursor-pointer hover:text-primary"
                  >
                    At Work
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="mb-10 font-medium tracking-widest">
              Legals
            </h2>

            <nav>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy
                  </Link>
                </li>

                <li>
                  <Link href="/security" className="hover:text-primary">
                    Security
                  </Link>
                </li>

                <li>
                  <Link href="/conditions" className="hover:text-primary">
                    Conditions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>

      <div className="py-8">
        <div className="container mx-auto text-center">
          <p>
            Copyright © {new Date().getFullYear()} GSLGUSA | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}