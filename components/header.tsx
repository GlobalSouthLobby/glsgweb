"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { logo } from "@/constants/images";

import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative z-[99999999] flex w-full flex-col items-center justify-between p-4 min-[930px]:flex-row min-[930px]:p-6">
      {/* Logo */}
      <div className="flex w-full items-center justify-between min-[930px]:w-auto">
        <div>
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Global South Lobby Group USA logo"
              width={100}
              height={100}
              priority
              className="w-[50px] min-[930px]:w-[100px]"
            />

            <span className="ml-2 text-sm font-bold min-[930px]:text-base">
              Global South Lobby
              <br className="hidden min-[930px]:block" />
              Group USA (GSLGUSA)
            </span>
          </div>

          <p className="font-semibold italic">
            *Together We Rise*
          </p>
        </div>

        {/* Hamburger Menu */}
        <div className="min-[930px]:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={`absolute left-0 w-full flex-col items-center bg-white transition-all duration-300 ease-in-out
          min-[930px]:static
          min-[930px]:flex
          min-[930px]:w-auto
          min-[930px]:flex-row
          min-[930px]:space-x-4
          min-[930px]:bg-transparent
          ${
            menuOpen
              ? "top-16 flex p-4 shadow-md"
              : "hidden"
          }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="mb-4 rounded-full bg-[#13515E] px-4 py-2 text-white hover:bg-gray-900 min-[930px]:mb-0"
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={closeMenu}
          className="mb-4 rounded-full bg-[#13515E] px-4 py-2 text-white hover:bg-gray-900 min-[930px]:mb-0"
        >
          About
        </Link>

        <Link
          href="/atwork"
          onClick={closeMenu}
          className="mb-4 rounded-full bg-[#13515E] px-4 py-2 text-white hover:bg-gray-900 min-[930px]:mb-0"
        >
          At Work
        </Link>

        <Link
          href="/contact"
          onClick={closeMenu}
          className="mb-4 rounded-full bg-[#13515E] px-4 py-2 text-white hover:bg-gray-900 min-[930px]:mb-0"
        >
          Contact
        </Link>

        {/* Mobile CTA */}
        <Link
          href="/register"
          onClick={closeMenu}
          className="animate-pulse rounded-xl bg-[#F59E0B] px-5 py-3 text-center font-bold text-white shadow-lg min-[930px]:hidden"
        >
          Open for Lobby Representation &
          <br />
          Advocacy
          <span className="mt-1 block text-sm font-medium">
            Click Here to Register →
          </span>
        </Link>

        {/* Mobile Contact Info */}
        <div className="mt-4 text-center text-sm min-[930px]:hidden">
          <p className="font-bold text-[#13515E]">
            Phone: +1-202-747-7727
          </p>

          <p className="font-bold text-[#13515E]">
            Fax: +1-202-529-2162
          </p>

          <a
            href="mailto:Results@Gslgusa.org"
            className="font-bold text-gray-700"
          >
            Results@Gslgusa.org
          </a>
        </div>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden items-center gap-6 text-[12px] min-[930px]:flex">
        {/* CTA Button */}
        <Link
          href="/register"
          className="animate-pulse rounded-full bg-[#F59E0B] px-6 py-3 text-center font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#D97706]"
        >
          Open for Lobby Representation
          <span className="block text-xs font-medium">
            Click Here to Register →
          </span>
        </Link>

        {/* Contact Info */}
        <div className="text-right text-[12px]">
          <p className="font-bold text-[#13515E]">
            <span className="font-bold text-black">
              Phone:
            </span>{" "}
            +1-202-747-7727
          </p>

          <p className="font-bold text-[#13515E]">
            <span className="font-bold text-black">
              Fax:
            </span>{" "}
            +1-202-529-2162
          </p>

          <div className="flex items-center justify-end">
            <h4 className="mr-2 font-semibold text-black">
              Email:
            </h4>

            <a
              href="mailto:Results@Gslgusa.org"
              className="font-bold text-gray-700"
            >
              Results@Gslgusa.org
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}