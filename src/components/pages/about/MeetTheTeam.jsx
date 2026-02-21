import React from "react";

/* ================= IMPORT IMAGES ================= */

import bgImage from "../../../assets/bgimage.jpg";

import himanshu from "../../../assets/himanshu.jpg";
import monika from "../../../assets/monika.jpg";
import nikhil from "../../../assets/nikhil.jpg";
import nitesh from "../../../assets/nitesh.jpg";
import priya from "../../../assets/priya.jpg";
import sachin from "../../../assets/sachin.jpg";
import shiva from "../../../assets/shiva.jpg";
import sushant from "../../../assets/sushant.jpg";
import sumit from "../../../assets/sumit.jpg";
import priyanshu from "../../../assets/priyanshu.jpg";
import mukesh from "../../../assets/mukesh.jpg";
import umang from "../../../assets/umang.jpg"

/* ================= TEAM DATA ================= */

const teamMembers = [
  { name: "PRIYA DIVEDI", role: "HR", image: priya },
  { name: "SACHIN RATHORE", role: "MERN Stack Developer", image: sachin },
  { name: "HIMANSHU RAWAT", role: "MERN Stack Developer", image: himanshu },
  { name: "SUMIT JOSHI", role: "SEO", image: sumit },
  { name: "NIKHIL KUMAR", role: "Jr. Accountant", image: nikhil },
  { name: "MONIKA TANWAR", role: "Jr. Accountant", image: monika },
  { name: "SHIVA PANDEY", role: "Jr. Accountant", image: shiva },
  { name: "SUSHANT KUMAR SINGH", role: "Jr. Accountant", image: sushant },
  { name: "NITESH GUPTA", role: "Network Engineer", image: nitesh },
  { name: "MUKESH KUMAR", role: "FRONTEND DEVELOPER", image: mukesh },
  { name: "PRIYANSHU DIVEDI", role: "FRONTEND DEVELOPER", image: priyanshu },
    { name: "UMANG", role: "GRAPHIC DESIGNER", image: umang },
];

/* ================= TEAM CARD ================= */

const TeamCard = ({ member, large }) => {
  return (
    <div
      className={`group relative ${
        large ? "h-[420px]" : "h-[260px]"
      } rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2`}
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        style={{ objectPosition: "center 35%" }}
      />

      {/* Gray Hover Overlay */}
      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition duration-500"></div>

      {/* Text */}
      <div className="absolute bottom-0 p-6 text-white w-full">
        <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
        <p className="text-white text-sm">{member.role}</p>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */

function MeetTheTeam() {
  return (
    <main className="bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative py-26 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet The Team</h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            A passionate group of professionals building innovation together.
          </p>
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-center mb-9">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className={`${index % 2 === 1 ? "lg:mt-12" : ""}`}>
              <TeamCard member={member} large />
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXTENDED TEAM ================= */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-9">
            Our Extended Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.slice(4).map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MeetTheTeam;
