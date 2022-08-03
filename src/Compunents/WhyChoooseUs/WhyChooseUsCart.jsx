import React from "react";

const WhyChooseUsCart = ({
  item: { id, image, name, aboutName, hasMarginTop },
}) => {
  return (
    <div
      id={`${id}`}
      className={`flex flex-col items-start justify-between p-6 m-2 cart__custom ${
        hasMarginTop && "mt-16"
      }`}
      onClick={() => console.log(hasMarginTop)}
    >
      <img src={image} className="h-20" alt="" />
      <p className="text-3xl mt-9 font-bold main-font">{name}</p>
      <p className="text-2xl mt-9 text-left ">{aboutName}</p>
    </div>
  );
};

export default WhyChooseUsCart;
