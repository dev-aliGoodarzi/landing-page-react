import React from "react";
import {
  whyChooseUsbottomLeftImg,
  whyChooseUsbottomRightImg,
  whyChooseUsTopLeftImg,
  whyChooseUsTopRightImg,
} from "../ImageExporter/ImageExporter";
import WhyChooseUs__Cart from "./WhyChooseUs__Cart";

const WhyChoooseUs = () => {
  const cards = {
    top: [
      {
        id: "card--top-1",
        image: whyChooseUsTopLeftImg,
        name: `Professional & Certified Company`,
        aboutName: `Ornare dictum risus cursus amet maurisasfa`,
      },
      {
        id: "card--top-2",
        image: whyChooseUsTopRightImg,
        name: `Business & Product
        Concept too`,
        aboutName: "Ornare dictum risus cursus amet maurisasfa",
      },
    ],
    bottom: [
      {
        id: "card--bottom-1",
        image: whyChooseUsbottomLeftImg,
        name: `Pixel & Perfect
        Design`,
        aboutName: "Ornare dictum risus cursus amet maurisasfa",
      },
      {
        id: "card--bottom-2",
        image: whyChooseUsbottomRightImg,
        name: `International Good
        Relationship`,
        aboutName: "Ornare dictum risus cursus amet maurisasfa",
      },
    ],
  };
  return (
    <div className="w-full p-20 flex items-center justify-center whyChooseUs__Custom ">
      <div className="w-full h-full innerContainer flex flex-row ites-center justify-center innerContainer__custom px-20">
        <div className="left w-1/2 h-full flex flex-col items-start justify-start">
          <p className="text-xl " style={{ color: "#CB0F4C" }}>
            WHY CHOOSE US
          </p>
          <h1 className="text-5xl font-bold mt-5 main-font">
            We create a curious BUZZ
          </h1>
          <p className="text-2xl mt-5">
            Senectus et scelerisque convallis at sollicitudin tellus volutpa
            <br />
            quam. Viverra placerat morbi ut imperdiet.
          </p>
          <ul className="list-disc pl-4 ">
            <li className="text-base mt-7">
              Senectus et scelerisque convallis at sollicitudin tellus volut
              <br />
              quam. Viverra placerat morbi ut imperdiet.
            </li>
            <li className="text-base mt-7">
              Senectus et scelerisque convallis at sollicitudin tellus volut
              <br />
              quam. Viverra placerat morbi ut imperdiet.
            </li>
            <li className="text-base mt-7">
              Senectus et scelerisque convallis at sollicitudin tellus volut
              <br />
              quam. Viverra placerat morbi ut imperdiet.
            </li>
          </ul>
          <button
            className="w-max h-14 p-5 pl-10 pr-10 text-white flex flex-col items-center justify-center mt-16 "
            style={{ background: "#CB0F4C", borderRadius: "5px" }}
          >
            Discover More
          </button>
        </div>
        <div className="right w-1/2 h-full flex flex-col items-center justify-center">
          <div className="top w-full h-1/2 flex flex-row items-center justify-between">
            {cards.top.map((item) => {
              return (
                <WhyChooseUs__Cart item={item} pic={item.image} key={item.id} />
              );
            })}
          </div>
          <div className="bottom w-full h-1/2 flex flex-row items-center justify-between">
            {cards.bottom.map((item) => {
              return (
                <WhyChooseUs__Cart item={item} pic={item.image} key={item.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoooseUs;
