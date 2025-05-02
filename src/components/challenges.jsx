import React from 'react';

const challenges = [
  "Limited access to fair legislation for marginalized communities.",
  "Small businesses drowned by unfair regulations.",
  "Underfunded social programs that fail to meet people's needs.",
  "Communities' voices often unheard in Washington D.C.",

];

const solutions = [
  "We advocate for inclusive policy changes and equitable representation at all government levels.",
  "We lobby for policies that empower small businesses and promote free, fair markets.",
  "We push for increased, responsible funding for critical social services.",
  "We organize grassroots campaigns to amplify real community voices nationally.",

];

const ListItem = ({ text }) => (
  <li className="flex items-start gap-2 mb-2">
    <span className="text-[#13515E] text-lg">↗</span>
    <span>{text}</span>
  </li>
);

const GrowthComparisonSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 text-gray-800">
      <div className="text-center mb-12">
        {/* <button className="bg-black text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
          Issue we tackle
        </button> */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          We Understand Your <span className="text-[#13515E]">Challenges</span>.
          <br />
          We Have The <span className="text-[#13515E]">Solutions</span>.
          <br/>
          {/* We Have Your Solutions <span className="text-[#13515E]">Out</span>. */}

        </h2>
      </div>

      <div className="w-full text-[18px] relative z-10">
        <div>
        We at Global South Lobby Group USA are your perfect vehicle for achieving your
          desired results.
          We know the issues affecting you and your countries very well and we can help in
          resolving them. We have the contacts, the access, the knowledge and the
          capacity of getting your desired results here in Washington D.C
          Our services include consultations, general collaborations and a no one size fits all
          approach.
        </div>
        {/* Challenges */}
        {/* <div>
          <p className="text-sm text-gray-500 mb-2">You are here</p>
          <h3 className="text-xl font-semibold mb-4">
            
          </h3>
          <ul className="text-base text-gray-700">
            {challenges.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </ul>
        </div> */}
{/* 
      
        <div>
          <p className="text-sm text-gray-500 mb-2">You want to be here</p>
          <h3 className="text-xl font-semibold mb-4">
         
          </h3>
          <ul className="text-base text-gray-700">
            {solutions.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </ul>
        </div> */}
      </div>

      {/* Optional decorative wave line — can be added with SVG or background */}
    </section>
  );
};

export default GrowthComparisonSection;
