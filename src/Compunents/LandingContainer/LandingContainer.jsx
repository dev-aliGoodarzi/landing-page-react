import React from "react";
import Header from "../Header/Header";
import { bgTop, billyImg } from "../ImageExporter/ImageExporter";

const LandingContainer = () => {
  return (
    <div
      className="
          flex flex-col items-start p-2
          2xl:w-full 2xl:flex 2xl:flex-col 2xl:align-start 2xl:justify-start 2xl:p-20 2xl:pt-5
          xl :w-full xl:flex xl: xl:align-start xl:justify-start xl:p-10
          main-container__custom"
    >
      <div className="custom__img">
        <img src={bgTop} alt="" />
      </div>
      <Header />
      <div
        className="
       flex flex-col items-start justify-start
       2xl:w-full 2xl:flex 2xl:flex-row 2xl:items-cetner 2xl:justify-between 2xl:p-10
       xl: w-full xl:flex xl:flex-row xl:items-start xl:justify-between xl:p-5

       bottom__container
      "
      >
        <div
          className="
          h-60 flex flex-col items-start justify-start
          2xl:w-1/2 2xl:flex 2xl:flex-col 2xl:items-start 2xl:justify-start
        xl:w-1/2 xl:flex xl:flex-col xl:items-start xl:justify-start
        
        left 
        "
        >
          <h1
            className={`
            text-3xl
          text-white 
          2xl:text-7xl
          xl:text-7xl
          
          `}
          >
            We are The Brilliants In
            {window.innerWidth > 400 && <br />}
            Terms Of Digital
            {window.innerWidth > 400 && <br />}
            Marketing
          </h1>
          <p className={`text-white 2xl:mt-5`}>
            Book your 30-minute free strategy call
          </p>
          <button
            className={`
            w-44 h-10 flex flex-row items-center justify-center
            xl:h-14 xl:w-60 xl:mt-6 
            2xl:h-20 2xl:w-64 bg-white 2xl:mt-10 p-5 
          `}
          >
            Book Now
          </button>
        </div>
        <div
          className="
        w-full h-full  flex flex-row items-center justify-center
        2xl:w-1/2 2xl:flex 2xl:flex-row 2xl:align-center 2xl:justify-end 
        xl:w-1/2 xl:flex-row xl:align-start xl:justify-start
        
        right 
        "
        >
          <img
            src={billyImg}
            alt=""
            className={`
          2xl:w-10/12 2xl:h-full
          xl:w-full
          `}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
