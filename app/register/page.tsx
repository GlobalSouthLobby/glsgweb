"use client";

import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

// Replace with your actual image import
import {
    lobbypeople, lobbyfirm, dome1, community,
    meeting,
    union,
    UN,
    dome2,
} from "@/constants/images";

export default function RegisterPage() {
    // Formspree form ID pulled from env var — set NEXT_PUBLIC_FORMSPREE_FORM_ID in .env.local
    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
    );

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
                            {state.succeeded ? (
                                // SUCCESS STATE
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <FiCheckCircle className="mb-4 h-16 w-16 text-[#13515E]" />
                                    <h3 className="text-2xl font-bold text-[#13515E]">
                                        Request Submitted
                                    </h3>
                                    <p className="mt-3 max-w-md text-gray-600">
                                        Thank you. Our team has received your
                                        representation request and will be in
                                        touch shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
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
                                                    id="fullName"
                                                    name="fullName"
                                                    required
                                                    autoComplete="name"
                                                    className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                                />
                                                <ValidationError
                                                    prefix="Full Name"
                                                    field="fullName"
                                                    errors={state.errors}
                                                    className="mt-1 text-sm text-red-600"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block font-medium">
                                                    Country Representing
                                                </label>

                                                <input
                                                    type="text"
                                                    id="countryRepresenting"
                                                    name="countryRepresenting"
                                                    required
                                                    className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                                />
                                                <ValidationError
                                                    prefix="Country Representing"
                                                    field="countryRepresenting"
                                                    errors={state.errors}
                                                    className="mt-1 text-sm text-red-600"
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
                                                    id="positionInCountry"
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
                                                    id="corporationRepresenting"
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
                                                    id="positionInCorporation"
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
                                                id="serviceSought"
                                                name="serviceSought"
                                                required
                                                defaultValue=""
                                                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                            >
                                                <option value="" disabled>
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
                                            <ValidationError
                                                prefix="Service Sought"
                                                field="serviceSought"
                                                errors={state.errors}
                                                className="mt-1 text-sm text-red-600"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <label className="mb-2 block font-medium">
                                                What are the issues?
                                            </label>

                                            <textarea
                                                id="issues"
                                                name="issues"
                                                required
                                                rows={4}
                                                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#13515E]"
                                            />
                                            <ValidationError
                                                prefix="Issues"
                                                field="issues"
                                                errors={state.errors}
                                                className="mt-1 text-sm text-red-600"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <label className="mb-2 block font-medium">
                                                Describe briefly what exact
                                                service you seek
                                            </label>

                                            <textarea
                                                id="serviceDescription"
                                                name="serviceDescription"
                                                required
                                                rows={5}
                                                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#13515E]"
                                            />
                                            <ValidationError
                                                prefix="Service Description"
                                                field="serviceDescription"
                                                errors={state.errors}
                                                className="mt-1 text-sm text-red-600"
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
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    autoComplete="tel"
                                                    className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                                />
                                                <ValidationError
                                                    prefix="Phone"
                                                    field="phone"
                                                    errors={state.errors}
                                                    className="mt-1 text-sm text-red-600"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block font-medium">
                                                    Email Address
                                                </label>

                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    autoComplete="email"
                                                    className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#13515E]"
                                                />
                                                <ValidationError
                                                    prefix="Email"
                                                    field="email"
                                                    errors={state.errors}
                                                    className="mt-1 text-sm text-red-600"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full rounded-2xl cursor-pointer bg-[#13515E] py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#0f404a] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {state.submitting
                                            ? "Submitting..."
                                            : "Submit Representation Request →"}
                                    </button>
                                </form>
                            )}
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
                </div>
            </div>
        </main>
    );
}