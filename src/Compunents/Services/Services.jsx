import React from "react";
import {
  group,
  mail,
  search,
  seo,
  world,
} from "../ImageExporter/ImageExporter";

const Services = () => {
  const servicesCards = [
    {
      id: "svc-card-1",
      name: "Seo marketing",
      image: seo,
    },
    {
      id: "svc-card-2",
      name: "Email Marketing",
      image: mail,
    },
    {
      id: "svc-card-3",
      name: "Growth Hacking",
      image: group,
    },
    {
      id: "svc-card-4",
      name: "Google PPC",
      image: search,
    },
    {
      id: "svc-card-5",
      name: "Automation Setup",
      image: world,
    },
  ];
  return (
    <div className="w-full p-10 flex flex-col items-center justify-start services__custom">
      <p className="text-2xl" style={{ color: "#CB0F4C" }}>
        Services
      </p>
      <h1 className="font-bold text-5xl mt-8">What We Offer</h1>
      <p
        className="w-full flex flex-col items-center justify-center mt-10"
        style={{ color: "#362424" }}
      >
        Ea nam dicat utamur tincidunt, cu sea audiam vocibus. Esse nemore mei
        eu.
        <br />
        <span>Virtute commune dissentiet te pri, te sonet periculis mel.</span>
      </p>
      <div className="cartContainer w-full flex flex-row items-center justify-between pt-5 pl-20 pr-20">
        {servicesCards.map((item) => {
          return (
            <div
              key={item.id}
              className="w-1/6 flex flex-col items-center justify-evenly card__item"
            >
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
