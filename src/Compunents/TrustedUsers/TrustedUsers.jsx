import React from "react";

import {
  fresh,
  gugiat,
  spiner,
  twinqo,
  xacton,
} from "../ImageExporter/ImageExporter";

const TrustedUsers = () => {
  const trustedUsersList = [
    {
      id: "t-user-1",
      name: "Xacton",
      imgUrl: xacton,
      textColor: "#5499E8",
    },
    {
      id: "t-user-2",
      name: "Twinqo",
      imgUrl: twinqo,
      textColor: "#D0154C",
    },
    {
      id: "t-user-3",
      name: "Fresh",
      imgUrl: fresh,
      textColor: "#2F9800",
    },
    {
      id: "t-user-4",
      name: "Spiner",
      imgUrl: spiner,
      textColor: "#CD1D65",
    },
    {
      id: "t-user-5",
      name: "Fugiat",
      imgUrl: gugiat,
      textColor: "#A61DB4",
    },
  ];
  return (
    <div
      className={`
      2xl:w-full  2xl:flex flex-col  2xl:items-center 2xl:justify-center 2xl:px-28 2xl:pt-32 2xl:pb-48 2xl:trustedUsersContainer 
      `}
    >
      <div
        className="
      flex flex-col items-center justify-center
      2xl:w-full 2xl:h-1/3 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-evenly 2xl:main__custom"
      >
        <h2
          className={`font-bold ${
            window.innerWidth < 450 && "px-3 text-center text-xl"
          }`}
        >
          trusted by over <span style={{ color: "#CB0F4C" }}>13,041+</span>{" "}
          happy customers, including
        </h2>
        <div className="trustedUserImagesAndPics 2xl:w-full 2xl:flex flex-row 2xl:items-center 2xl:mt-16 justify-between px-24">
          {trustedUsersList.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex flex-row items-center justify-start ${
                  window.innerWidth < 450 &&
                  "w-full justify-start items-start  pt-5"
                }`}
              >
                <img src={item.imgUrl} className={``} alt="" />
                <span
                  className={`ml-5 font-bold`}
                  style={{ color: item.textColor }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TrustedUsers;
