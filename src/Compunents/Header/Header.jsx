import React from "react";
import { Link } from "react-router-dom";
import { iconSearch, logo } from "../ImageExporter/ImageExporter";

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
    <div className=" w-screen  flex flex-row justify-between align-center border-box p-5 pl-10 pr-10 header__custom">
      <div className="w-1/8 flex flex-row justify-between items-center logo__custom">
        <img src={logo} alt="" />
        <span>Digi Marketers</span>
      </div>
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
        <img src={iconSearch} className={`ml-64`} alt=""></img>
      </div>
    </div>
  );
};

export default Header;
