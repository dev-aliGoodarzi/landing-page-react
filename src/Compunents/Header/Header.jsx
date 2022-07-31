import React from "react";

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
    <div className="">
      <div className="logo__custom"></div>
      <div className="items__custom"></div>
    </div>
  );
};

export default Header;
