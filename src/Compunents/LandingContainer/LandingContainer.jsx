import React from "react";
import Header from "../Header/Header";
import { bgTop, billyImg } from "../ImageExporter/ImageExporter";

const LandingContainer = () => {
  return (
    <div className="w-full flex flex-col align-start justify-start p-20 pt-5 main-container__custom">
      <div className="custom__img">
        <img src={bgTop} alt="" />
      </div>
      <Header />
      <div className="bottom__container w-full flex flex-row align-cetner justify-between p-10 ">
        <div className="left w-1/2 flex flex-col align-start justify-start">
          <h1 className={`text-white `}>
            We are The Brilliants In
            <br />
            Terms Of Digital
            <br />
            Marketing
          </h1>
          <p className={`text-white mt-5`}>
            Book your 30-minute free strategy call
          </p>
          <button className={`h-16 w-64 bg-white mt-10 `}>Book Now</button>
        </div>
        <div className="right w-1/2 flex flex-row align-start justify-start ">
          <img src={billyImg} alt="" className={`w-full`} />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
