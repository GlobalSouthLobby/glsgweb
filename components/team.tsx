import Image from "next/image";

import {
  alex,
  andrew,
  emmanuel,
  leo,
  lisa,
} from "@/constants/images";

interface TeamMember {
  name: string;
  email: string;
  role?: string;
  description: string;
  image: any;
  bgColor: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Andrew gate",
    email: "",
    role: "",
    description:
      "Mr. Andrew Gates is a senior lobbyist that is result oriented and highly connected in the lobbying and real-estate circle in Washington DC. He has successfully lobbied on behalf of many countries from Africa and the Caribbean. Known as Mr. Bridge, he has a knack for connecting with people and governments.",
    image: andrew,
    bgColor: "bg-blue-600",
  },
  {
    name: "Dr. Ezeh Emmanuel C.",
    email: "igrdirector@gslgusa.org",
    role: "Inter Governmental Relations Director",
    description:
      "An astute Public Administrator with decades of experience in the Nonprofit and Non-governmental organization sphere. Advancing strategic partnerships between United States and the Global South Countries through Lobbying, Policy Advocacy, diplomacy and international engagements.",
    image: emmanuel,
    bgColor: "bg-purple-800",
  },
  {
    name: "Katherine Marisol",
    email: "Manager@gslgusa.org",
    role: "Organizations Manager",
    description:
      "An experienced Labor Organizer, Activist and Administrator. She is the Organizations Manager in charge of daily affairs and coordination of advocacy and lobbying on behalf of institutions, organizations and civil rights groups.",
    image: lisa,
    bgColor: "bg-purple-900",
  },
  {
    name: "Matthew Elvis",
    email: "",
    role: "",
    description:
      "Matthew is a highly esteemed team member, passionate about interacting with people and governments at all levels, discussing issues that affect humanity and the world, particularly the Global South countries.",
    image: alex,
    bgColor: "bg-orange-300",
  },
  {
    name: "Lothana A",
    email: "",
    description:
      "As a Public Administrator, Lothana is highly connected with people in government and politics across the United States and overseas.",
    image: leo,
    bgColor: "bg-orange-200",
  },
];

export default function TeamSection() {
  return (
    <section className="py-10">
      <h2 className="ml-[20px] mb-[20px] text-[30px] font-semibold">
        Our Team
      </h2>

      <div className="team grid sm:grid-cols-3 md:grid-cols-5">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className={`relative flex h-[300px] flex-1 items-center justify-center sm:h-[400px] ${member.bgColor}`}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 20vw"
            />

            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="text-lg font-semibold">
                {member.name}
              </h3>

              {member.role && (
                <p className="text-sm">{member.role}</p>
              )}

              <p className="text-[10px]">
                {member.description}
              </p>

              {member.email && (
                <strong>{member.email}</strong>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}