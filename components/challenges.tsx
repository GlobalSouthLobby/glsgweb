interface ListItemProps {
  text: string;
}

const challenges: string[] = [
  "Limited access to fair legislation for marginalized communities.",
  "Small businesses drowned by unfair regulations.",
  "Underfunded social programs that fail to meet people's needs.",
  "Communities' voices often unheard in Washington D.C.",
];

const solutions: string[] = [
  "We advocate for inclusive policy changes and equitable representation at all government levels.",
  "We lobby for policies that empower small businesses and promote free, fair markets.",
  "We push for increased, responsible funding for critical social services.",
  "We organize grassroots campaigns to amplify real community voices nationally.",
];

function ListItem({ text }: ListItemProps) {
  return (
    <li className="mb-2 flex items-start gap-2">
      <span className="text-lg text-[#13515E]">
        ↗
      </span>

      <span>{text}</span>
    </li>
  );
}

export default function GrowthComparisonSection() {
  return (
    <section className="bg-white px-6 py-16 text-gray-800 md:px-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
          We Understand Your{" "}
          <span className="text-[#13515E]">
            Challenges
          </span>
          .
          <br />
          We Have The{" "}
          <span className="text-[#13515E]">
            Solutions
          </span>
          .
        </h2>
      </div>

      <div className="relative z-10 w-full text-[18px]">
        <div>
          We at Global South Lobby Group USA are your
          perfect vehicle for achieving your desired
          results. We know the issues affecting you and
          your countries very well and we can help in
          resolving them. We have the contacts, the
          access, the knowledge and the capacity of
          getting your desired results here in
          Washington D.C. Our services include
          consultations, general collaborations and a
          no-one-size-fits-all approach.
        </div>

        {/*
        <div className="mt-10">
          <p className="mb-2 text-sm text-gray-500">
            You are here
          </p>

          <ul className="text-base text-gray-700">
            {challenges.map((item) => (
              <ListItem
                key={item}
                text={item}
              />
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <p className="mb-2 text-sm text-gray-500">
            You want to be here
          </p>

          <ul className="text-base text-gray-700">
            {solutions.map((item) => (
              <ListItem
                key={item}
                text={item}
              />
            ))}
          </ul>
        </div>
        */}
      </div>
    </section>
  );
}