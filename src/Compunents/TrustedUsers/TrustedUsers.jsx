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
      className={` flex flex-col items-center justify-center trustedUsersContainer`}
    >
      <div className="container h-1/3 flex flex-col items-center justify-evenly main__custom">
        <h2 className={`font-bold`}>
          trusted by over <span style={{ color: "#CB0F4C" }}>13,041+</span>{" "}
          happy customers, including
        </h2>
        <div className="trustedUserImagesAndPics w-full flex flex-row items-center justify-evenly">
          {trustedUsersList.map((item) => {
            return (
              <div
                key={item.id}
                className={` w-1/6 flex flex-row items-center justify-start `}
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
