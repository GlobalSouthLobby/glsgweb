"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

// Replace with your actual image import
import {
    lobbypeople, lobbyfirm, dome1, community,
    meeting,
    union,
    UN,
    dome2,
} from "@/constants/images";


export default function RegisterPage() {
    const [serviceType, setServiceType] = useState("");

    return (
        <main className="min-h-screen bg-white">
            <div className="grid min-h-screen lg:grid-cols-2">
                {/* FORM SIDE */}
                <div className="flex items-center justify-center bg-slate-50 p-6 lg:p-12">
                    <Link
  href="/"
  className="absolute left-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#13515E] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#13515E] hover:text-white"
>
  <FiArrowLeft size={22} />
</Link>
                    <div className="w-full max-w-3xl mt-4">
                        <div className="mb-8 mt-8">
                            <span className="rounded-full bg-[#13515E]/10 px-4 py-2 text-sm font-medium text-[#13515E]">
                                GSLGUSA Registration Portal
                            </span>

                            <h1 className="mt-6 text-3xl font-bold text-[#13515E] md:text-5xl">
                                Representation Request
                            </h1>

                            <p className="mt-4 text-gray-600">
                                Complete the form below and our team will
                                review your lobbying, advocacy, or
                                consultation request.
                            </p>
                        </div>

                        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                            <form
                                action="https://formspree.io/f/YOUR_FORM_ID"
                                method="POST"
                                className="space-y-8"
                            >
                                {/* Formspree Hidden Fields */}
                                <input
                                    type="hidden"
                                    name="_subject"
                                    value="New GSLGUSA Representation Request"
                                />

                                {/* Personal Information */}
                                <div>
                                    <h3 className="mb-5 border-b pb-3 text-xl font-semibold text-[#13515E]">
                                        Personal Information
                                    </h3>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block font-medium">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                autoComplete="name"
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block font-medium">
                                                Country Representing
                                            </label>

                                            <input
                                                type="text"
                                                name="countryRepresenting"
                                                required
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Organization */}
                                <div>
                                    <h3 className="mb-5 border-b pb-3 text-xl font-semibold text-[#13515E]">
                                        Organization Information
                                    </h3>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block font-medium">
                                                Position in Country
                                            </label>

                                            <input
                                                type="text"
                                                name="positionInCountry"
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block font-medium">
                                                Corporation Representing
                                            </label>

                                            <input
                                                type="text"
                                                name="corporationRepresenting"
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="mb-2 block font-medium">
                                                Position in Corporation
                                            </label>

                                            <input
                                                type="text"
                                                name="positionInCorporation"
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Services */}
                                <div>
                                    <h3 className="mb-5 border-b pb-3 text-xl font-semibold text-[#13515E]">
                                        Services Requested
                                    </h3>

                                    <div>
                                        <label className="mb-2 block font-medium">
                                            Service Sought
                                        </label>

                                        <select
                                            name="serviceSought"
                                            required
                                            value={serviceType}
                                            onChange={(e) =>
                                                setServiceType(e.target.value)
                                            }
                                            className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                        >
                                            <option value="">
                                                Select Service
                                            </option>

                                            <option value="Lobbying">
                                                Lobbying
                                            </option>

                                            <option value="Advocacy">
                                                Advocacy
                                            </option>

                                            <option value="Consultation">
                                                Consultation
                                            </option>

                                            <option value="Multiple">
                                                Multiple Services
                                            </option>
                                        </select>
                                    </div>

                                    <div className="mt-5">
                                        <label className="mb-2 block font-medium">
                                            What are the issues?
                                        </label>

                                        <textarea
                                            name="issues"
                                            required
                                            rows={4}
                                            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#13515E]"
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="mb-2 block font-medium">
                                            Describe briefly what exact
                                            service you seek
                                        </label>

                                        <textarea
                                            name="serviceDescription"
                                            required
                                            rows={5}
                                            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#13515E]"
                                        />
                                    </div>
                                </div>

                                {/* Contact */}
                                <div>
                                    <h3 className="mb-5 border-b pb-3 text-xl font-semibold text-[#13515E]">
                                        Contact Information
                                    </h3>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block font-medium">
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                autoComplete="tel"
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block font-medium">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                autoComplete="email"
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-2xl bg-[#13515E] py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#0f404a]"
                                >
                                    Submit Representation Request →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative min-h-[400px] lg:min-h-screen">
                    <Image
                        src={community}
                        alt="Lobby Representation"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-[#13515E]/90 via-[#13515E]/70 to-black/60" />

                    <div className="absolute inset-0 flex flex-col justify-center px-8 text-white lg:px-16">
                        <span className="mb-4 w-fit rounded-full border border-white/30 px-4 py-2 text-sm backdrop-blur-md">
                            Global South Lobby Group USA
                        </span>

                        <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
                            Lobbying.
                            <br />
                            Advocacy.
                            <br />
                            Consultation.
                        </h2>

                        <p className="mt-6 max-w-xl text-lg text-slate-200">
                            Engage with policymakers,
                            institutions, government agencies,
                            corporations, and stakeholders
                            through professional representation
                            and strategic advisory services.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                                ✓ Professional Lobby Representation
                            </div>

                            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                                ✓ Policy Advocacy & Stakeholder Engagement
                            </div>

                            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                                ✓ Strategic Consultation & Advisory
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
