import React from "react";
import {
  facebookIcon,
  googleIcon,
  logo,
  twitterIcon,
  youtubeIcon,
} from "../../ImageExporter/ImageExporter";

const DigiMarketers = () => {
  const icons = [
    {
      id: "facebookIcon",
      image: facebookIcon,
    },
    {
      id: "youtubeIcon",
      image: youtubeIcon,
    },
    {
      id: "twitterIcon",
      image: twitterIcon,
    },
    {
      id: "googleIcon",
      image: googleIcon,
    },
  ];
  return (
    <div className="digimarkers flex flex-col items-start justify-between ">
      <p className="h-max flex flex-row items-center justify-center">
        <img src={logo} alt="" />
        <span className="text-white ml-2 main-font">Digi Marketers</span>
      </p>
      <p
        className="text-white text-lg mt-7 popinas-main"
        id="leftSectionTag__P"
      >
        Accumsan, vel nunc, pellentesque ac in.
        <br />
        Euismod ipsum, lectus dictum massa,
        <br />
        mauris congue pulvinar dictum
        <br />
        elementum. Vitae auctor non amet id
        <br />
        sapien magna sem.
      </p>
      <div className="iconsContainer flex flex-row items-center justify-between -ml-3 mt-5">
        {icons.map((item) => {
          return <img key={item.id} src={item.image} alt="" className="ml-3" />;
        })}
      </div>
    </div>
  );
};

export default DigiMarketers;
