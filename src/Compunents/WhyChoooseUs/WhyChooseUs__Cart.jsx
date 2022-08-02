import React from "react";

const WhyChooseUs__Cart = ({
  item: { id },
  item: { image },
  item: { name },
  item: { aboutName },
}) => {
  return (
    <div
      id={`${id}`}
      className=" h-full flex flex-col items-start justify-between p-6 m-2 cart__custom"
    >
      <img src={image} className="h-20" alt="" />
      <p className="text-3xl mt-9 font-bold main-font">{name}</p>
      <p className="text-2xl mt-9 text-left ">{aboutName}</p>
    </div>
  );
};

export default WhyChooseUs__Cart;
