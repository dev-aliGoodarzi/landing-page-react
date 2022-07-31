import React from "react";
import { billyImage } from "../ImageExporter/ImageExporter";

const AboutUs = () => {
  return (
    <div className="w-full  box-border  flex flex-row item-center justify-cetner ">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="left w-1/3 flex flex-row items-center justify-start box-border pl-16">
          <img src={billyImage} className="w-full h-full" alt="" />
        </div>
        <div className="right h-full w-1/2 flex flex-col items-start justify-evenly box-border  ">
          <p className="text-lg font-bold" style={{ color: "#CB0F4C" }}>
            About US
          </p>
          <p className="text-5xl">
            We Are Here
            <br />
            For Business Solution Idea
          </p>
          <p className="text-2xl">
            Senectus et scelerisque convallis at sollicitudin tellus
            <br />
            volutpat quam. Ipsum bibendum iaculis gravida adipiscing
            <br />
            porttitor purus, sodales tristique. Viverra placerat morbi ut
            <br />
            imperdiet. Ornare at sodales cras tincidunt condimentum id posuere.
          </p>
          <button
            className="w-max h-14 p-5 pl-10 pr-10 text-white flex flex-col items-center justify-center "
            style={{ background: "#CB0F4C", borderRadius: "5px" }}
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
