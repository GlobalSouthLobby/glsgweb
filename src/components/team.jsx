import React from "react";
import { alex, andrew, appreciation, emmanuel, hassan, lebanese, leo, lisa, mike, team1, trumpCabinet } from "../constant/image";


const teamMembers = [
  {
    name: "Andrew gate",
    email:"",
    role:"",
    description:"Mr. Andrew Gates is a senior lobbyist that is result oriented and highly connected in the lobbying and real-estate circle in Washington DC. He has successfully lobbied on behalf of many countries from Africa and the Caribbean. Known as Mr. Bridge, he has a knack for connecting with people and governments",
    image: andrew,
    bgColor: "bg-blue-600"
  },
  {
    name: "Emmanuel Ezeh",
    email:"igrdirector@gslgusa.org",
    role:"Inter Governmental Relations Director",
    description:"An astute Public Administrator with decades of experience in the Nonprofit and Non-governmental organization sphere. ",
    image: emmanuel,
    bgColor: "bg-purple-800"
  },
  
  {
    name: "Katherine Marisol",
    email:"Manager@gslgusa.org",
    role:" Organizations Manager",
    description:"An experienced Labor Organizer , Activist and Administrator . She is the Organizations Manager in charge of daily affairs and coordination of  advocacy and lobbying on behalf institutions, organizations and civil rights groups.  ",
    image: lisa,
    bgColor: "bg-purple-900"
  },
  {
    name: "Matthew Elvis",
    email:"",
    role:"",
    description:"Matthew is an highly esteemed team member, Passionate about Interacting with people and governments at all levels, discussing issues that affect humanity and the world, particularly the Global South countries",
    image: alex,
    bgColor: "bg-orange-300"
  },
  {
    name: "Lothana A",
    email:"",
  
    description:"As a Public Administrator, Lothana is highly connected with people in government and politic across the United States and overseas, ",
    image: leo,
    bgColor: "bg-orange-200"
  },
];

const TeamSection = () => {
  return (
    <div className="py-10">
  {/* <p className="text-center mb-6 text-2xl md:text-3xl font-semibold leading-tight">
    Meet Our <br /> Inter Governmental Relations Director
  </p>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

    <div className="w-full md:w-[400px] h-[600px]">
      <img
        src={emmanuel}
        alt="Emmanuel Ezeh"
        className="w-full h-full object-cover rounded-md"
      />
    </div>


    <div className="w-full md:flex-1">
      <h1 className="text-xl font-semibold mb-1">Emmanuel Ezeh</h1>
      <p className="text-sm italic mb-4">Inter Governmental Relations Director</p>

      <div className="space-y-3 text-justify text-sm leading-relaxed">
        <p>
          Mr. Emmanuel C. Ezeh is the Inter-Governmental Relations Director of Global
          South Lobby Group USA. He is an astute Public Administrator with decades of experience
          in the Nonprofit and Non-governmental organization sphere. He was a candidate for a Doctorate
          degree in political science when COVID-19 struck.
        </p>
        <p>
          He holds a Bachelor of Science degree in Political Science and a Master's degree in Public
          Administration from California State University Dominguez Hills, California USA.
          Mr. Ezeh is also an FAA Licensed Commercial Pilot and Flight Instructor.
        </p>
        <p>
          Mr. Ezeh is highly connected with people in government and politicians across the United States
          and overseas. His passion lies in interacting with people and governments at all levels,
          discussing issues that affect humanity and the world, particularly the Global South countries.
        </p>
        <p>
          As an American of Global South origin, Mr. Ezeh understands the challenges faced by Global South countries
          and is passionate about being part of the solution. According to him, lobbying is a way of life,
          not just a job, but a vital part of life in Washington D.C.
        </p>
        <p>
          Mr. Ezeh is available for front-end and back-end consultations and lobbying. He gets desired results.
        </p>
        <p>
          He can be contacted at <strong>igrdirector@gslgusa.org</strong> for immediate engagement.
        </p>
      </div>

      <div className="">
        <div className="w-[200px] h-[200px]">
          <img src={trumpCabinet} alt="Meeting Image" className="w-full h-full rounded-md" />
        </div>
      </div>
    </div>
  </div> 
  */}


      <p className="ml-[20px] mb-[20px] text-[30px] font-semibold"><br/>Our Team</p>
    <div className="grid team sm:grid-cols-3 md:grid-cols-5">
       
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`relative flex-1 h-[300px] sm:h-[400px] ${member.bgColor} flex  items-center justify-center`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="object-cover h-[300px] sm:h-[400px] opacity-80"
          />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-lg font-semibold">{member.name}</h1>

             <p className="text-sm">{member.role}</p>
              <p className="text-[10px]">{member.description}</p>
              <strong>{member.email}</strong>
            </div>
          
        </div>
      ))}
    </div> 
    </div>
  );
};

export default TeamSection;
