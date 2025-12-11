import React from "react";
import Socials from "../socials/Socials";

const FashionStay = () => {
  const fashionData = [
    {
      title: "Led Zeppelin to launch collection with Vans",
      author: "VAUGHAN CHANCE",
      date: "02/15/2019",
    },
    {
      title: "This £55 Bag Is Fast Becoming Part of the It–Girl Uniform",
      author: "VAUGHAN CHANCE",
      date: "02/15/2019",
    },
    {
      title:
        "Elsa Hosk Looks Like an Absolute Vision in Victoria’s Secret’s $1M Fantasy Bra",
      author: "VAUGHAN CHANCE",
      date: "02/15/2019",
    },
    {
      title:
        "Gabriela Hearst’s Fall Collection Is for the Sophisticated Minimalist",
      author: "VAUGHAN CHANCE",
      date: "02/15/2019",
    },
    {
      title:
        "Selena Gomez Celebrates Her BFF’s Bachelorette Party in Cabo San Lucas",
      author: "VAUGHAN CHANCE",
      date: "02/15/2019",
    },
    {
      title: "Lucy Beale looks dramatically different as she poses in a bikini",
      author: "VAUGHAN CHANCE",
      date: "02/15/2019",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 h-auto">
      <div className="lg:col-span-7">
        <h2 className="text-3xl font-bold mb-6">Fashion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pe-4">
          {fashionData.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <div className="text-xs font-semibold uppercase text-gray-500 flex items-center gap-2">
                <span>{item.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5  ">
        <Socials/>
      </div>
    </div>
  );
};

export default FashionStay;
