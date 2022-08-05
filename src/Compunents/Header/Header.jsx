import React from "react";
import { Link } from "react-router-dom";
import { iconSearch, logo } from "../ImageExporter/ImageExporter";

import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      routeToNavigate: "/",
    },
    {
      id: 2,
      name: "Service",
      routeToNavigate: "/service",
    },
    {
      id: 3,
      name: "Blog",
      routeToNavigate: "/blog",
    },
    {
      id: 4,
      name: "Portfolio",
      routeToNavigate: "/portfolio",
    },
    {
      id: 5,
      name: "Contact",
      routeToNavigate: "/contact",
    },
  ];
  return (
    <div
      className=" 
   w-full flex flex-row items-center justify-between  pb-4
    2xl:w-full 2xl:flex 2xl:flex-row 2xl:2xl:justify-between 2xl:align-center 2xl:border-box 2xl:p-5 2xl:pl-10 2xl:pr-10 header__custom"
    >
      <div
        className="
      w-1/8 flex flex-row items-center justify-center
      2xl:w-1/8 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:logo__custom"
      >
        <img
          className={`${window.innerWidth < 450 && "w-7 h-7"}`}
          src={logo}
          alt=""
        />
        <span className={`text-white`}>Digi Marketers</span>
      </div>
      {window.innerWidth > 450 ? (
        <div className="right__items w-1/2 flex justify-between align-center">
          <div className="items__custom flex flex-row align-center justify-between w-max">
            {links.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.routeToNavigate}
                  className={`links m-1`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <img src={iconSearch} className={`ml-24`} alt="" />
        </div>
      ) : (
        <GiHamburgerMenu />
      )}
    </div>
  );
};

export default Header;
