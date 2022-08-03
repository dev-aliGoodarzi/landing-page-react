// React
import React from "react";
// React
// Modules And Components
import Comiunity from "./Comiunity/Comiunity";
import Contact from "./Contact/Contact";
import DigiMarketers from "./DigiMarketers/DigiMarketers";
import NewsLetter from "./NewsLetter/NewsLetter";
import ViewerGuides from "./ViewerGuides/ViewerGuides";
// Modules And Components

const Footer = () => {
  return (
    <div className="footer relative flex flex-col items-center justify-between mt-52">
      <div className="orderHelper w-1/2 py-10 flex flex-col items-center justify-between">
        <h1 className="text-5xl main-font">Have a project in mind?</h1>
        <button
          className="w-max h-14 p-5 pl-10 pr-10 text-white flex flex-col items-center justify-center mt-16 "
          style={{ background: "#CB0F4C", borderRadius: "5px" }}
        >
          BOOK NOW
        </button>
      </div>
      <div className="top w-full h-full flex flex-row items-end justify-between px-36 pb-20">
        <DigiMarketers />
        <Contact />
        <ViewerGuides />
        <Comiunity />
        <NewsLetter />
      </div>
      <div
        className="bottom h-24 w-full"
        style={{ background: "#CB0F4C" }}
      ></div>
    </div>
  );
};

export default Footer;
