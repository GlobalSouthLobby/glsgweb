import Image, { StaticImageData } from "next/image";

import {
  collins,
  mark,
  ruth,
} from "@/constants/images";

interface Testimonial {
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Mark Williams",
    role: "Fellow",
    image: mark,
    quote:
      "The Global South Lobby Group USA mentorship program is being incredibly empowering. The resources and guidance I am receiving helps me grow personally and professionally.",
    rating: 5,
  },
  {
    name: "Ruth Jacob",
    role: "Policy Intern",
    image: ruth,
    quote:
      "As an intern, I am getting hands-on experience in policy research and advocacy. The Global South Lobby Group USA experience is unmatched, and I’m proud to be part of it.",
    rating: 5,
  },
  {
    name: "Collins L",
    role: "Fellow",
    image: collins,
    quote:
      "Joining the Global South Lobby Group USA is one of the best decisions I’ve made. The team is dedicated, the environment is inclusive, and the mission is inspiring.",
    rating: 5,
  },
];

function Star() {
  return (
    <span className="text-[#ffd500dd]">
      ★
    </span>
  );
}

export default function TestimonialSection() {
  return (
    <section className="rounded-xl bg-[#EFEEFF] px-6 py-12 md:px-16">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block rounded-full bg-[#C5BBF6] px-4 py-1 text-sm font-semibold text-indigo-800">
          Voices of Impact
        </span>

        <h2 className="text-2xl font-bold text-indigo-900 md:text-4xl">
          What our members are saying
          <br />
          about Global South Lobby Group USA
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="p-6 text-center"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
            />

            <h3 className="text-lg font-bold text-black">
              {testimonial.name}
            </h3>

            <p className="mb-4 text-sm text-gray-600">
              {testimonial.role}
            </p>

            <p className="mb-4 text-[12px] italic text-gray-800 md:text-[18px]">
              "{testimonial.quote}"
            </p>

            <div className="flex justify-center text-xl">
              {Array.from({
                length: testimonial.rating,
              }).map((_, index) => (
                <Star key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}