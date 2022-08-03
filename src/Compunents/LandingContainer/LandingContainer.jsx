import React from "react";
import Header from "../Header/Header";
import { bgTop, billyImg } from "../ImageExporter/ImageExporter";

const LandingContainer = () => {
  return (
    <div className="2xl:w-full 2xl:flex 2xl:flex-col 2xl:align-start 2xl:justify-start 2xl:p-20 2xl:pt-5 main-container__custom">
      <div className="custom__img">
        <img src={bgTop} alt="" />
      </div>
      <Header />
      <div className="bottom__container 2xl:w-full 2xl:flex 2xl:flex-row 2xl:align-cetner 2xl:justify-between 2xl:p-10 ">
        <div className="left 2xl:w-1/2 flex 2xl:flex-col 2xl:align-start 2xl:justify-start">
          <h1 className={`text-white `}>
            We are The Brilliants In
            <br />
            Terms Of Digital
            <br />
            Marketing
          </h1>
          <p className={`text-white 2xl:mt-5`}>
            Book your 30-minute free strategy call
          </p>
          <button className={`2xl:h-16 2xl:w-64 bg-white 2xl:mt-10 `}>
            Book Now
          </button>
        </div>
        <div className="right 2xl:w-1/2 flex 2xl:flex-row 2xl:align-start 2xl:justify-start ">
          <img src={billyImg} alt="" className={`2xl:w-full`} />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
