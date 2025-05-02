import React from 'react';
import { collins, mark, ruth } from '../constant/image';

const testimonials = [
  {
    name: "Mark Williams",
    role: "Fellow",
    image: mark, // Replace with actual path
    quote:
      "The Global South Lobby Group USA mentorship program is being incredibly empowering. The resources and guidance I am receiving helps me grow personally and professionally",
    rating: 5,
  },
  {
    name: "Ruth Jacob",
    role: "Policy Intern",
    image: ruth, // Replace with actual path
    quote:
      "As an intern, I am getting hands-on experience in policy research and advocacy. The Global South Lobby Group USA is being unmatched, and I’m proud to be part of it.",
    rating: 5,
  },
  {
    name: "Collins L",
    role: "Fellow",
    image: collins, // Replace with actual path
    quote:
      "Joining the Global South Lobby Group USA is one of the best decisions I’ve made. The team is dedicated, the environment is inclusive, and the mission is inspiring",
    rating: 5,
  },
];

const Star = () => <span className="text-[#ffd500dd]">★</span>;

const TestimonialSection = () => {
  return (
    <div className="bg-[#EFEEFF] py-12 px-6 md:px-16 rounded-xl">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#C5BBF6] text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-2">
        Voices of Impact
        </span>
        <h2 className="text-2xl  md:text-4xl font-bold text-indigo-900">
        What our members are saying <br/> about Global South Lobby Group USA
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-black">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
            <p className="text-gray-800 text-[12px] md:text-[18px] italic mb-4">"{testimonial.quote}"</p>
            <div className="flex justify-center text-xl">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
