import React from "react";
import Header from "../Header/Header";
import { bgTop, billyImg } from "../ImageExporter/ImageExporter";

const LandingContainer = () => {
  return (
    <div className="w-full flex flex-col align-start justify-start space-y-4 main-container__custom">
      <div className="custom__img">
        <img src={bgTop} alt="" />
      </div>
      <Header />
      <div className="bottom__container w-screen flex flex-row align-cetner justify-between p-10 ">
        <div className="left w-1/2 flex flex-col align-start justify-start">
          <h1 className={`text-white `}>
            We are The Brilliants In
            <br />
            Terms Of Digital
            <br />
            Marketing
          </h1>
          <p className={`text-white`}>Book your 30-minute free strategy call</p>
          <button className={`h-12 w-32 bg-white mt-5 `}>Book Now</button>
        </div>
        <div className="right w-1/2 flex flex-row align-start justify-start ">
          <img src={billyImg} alt="" className={`w-5/6`} />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
