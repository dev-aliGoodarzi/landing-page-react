import React from "react";
import { leftImg } from "../ImageExporter/ImageExporter";

const AboutSEO = () => {
  return (
    <div className="w-full flex flex-row items-center p-32 justify-center aboutSEO__Custom ">
      <div className="w-full  flex flex-row  items-center justify-between custom__innerItems">
        <div className="left pl-5 h-full flex flex-col items-center justify-center w-1/3">
          <img src={leftImg} alt="" />
        </div>
        <div className="right h-full w-3/6 flex flex-col items-start justify-between pt-16 pb-16">
          <h1 className=" w-full text-left text-5xl">
            Search Engine Optimization
          </h1>
          <p className="text-base w-5/6 popinas-main">
            Sed in vel egestas ac facilisis adipiscing sit pretium tortor.
            <br />
            Donec vivamus in magna lorem imperdiet duis bibendum condimentum.
          </p>
          <p className="text-base popinas-main">
            Ultrices justo, ut eleifend sed platea. Mauris risus est nec
            <br />
            sed tempor aenean.
          </p>
          <button
            className="w-max h-14 p-5 pl-10 pr-10 text-white flex flex-col items-center justify-center "
            style={{ background: "#CB0F4C", borderRadius: "5px" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSEO;
