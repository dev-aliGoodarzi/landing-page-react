import React from "react";
import { arrow, share } from "../ImageExporter/ImageExporter";

const SlideCard = ({ item: { name, date, bgImg } }) => {
  return (
    <div className="w-full h-80 p-7 flex flex-col items-start justify-between slideCard">
      <img src={bgImg} alt="" className="brightness-50" />
      <div className="top w-full h-1/3">
        <p className="text-base text-white main-font">{date}</p>
        <p className="font-bold text-2xl text-white popinas-main">{name}</p>
      </div>
      <div className="bottom w-full flex flex-row items-center justify-between">
        <div className="left w-max flex flex-row items-center justify-between">
          <span className="text-white">READ MORE</span>
          <img src={arrow} className="ml-5" alt="" />
        </div>
        <img src={share} className="w-1/8 h-1/8" alt="" />
      </div>
    </div>
  );
};

export default SlideCard;
