import React, { useState } from "react";
import {
  testimonialImage1,
  testimonialImage2,
  testimonialImage3,
  testimonialImage4,
  testimonialImage5,
  testimonialImage6,
  testimonialImage7,
} from "../ImageExporter/ImageExporter";

const CustomersSay = () => {
  const [currentUserImg, setCurrentUserImg] = useState(testimonialImage1);
  const imagesArray = [
    {
      id: "testimonial-Img-1",
      image: testimonialImage2,
    },
    {
      id: "testimonial-Img-2",
      image: testimonialImage3,
    },
    {
      id: "testimonial-Img-3",
      image: testimonialImage4,
    },
    {
      id: "testimonial-Img-4",
      image: testimonialImage5,
    },
    {
      id: "testimonial-Img-5",
      image: testimonialImage6,
    },
    {
      id: "testimonial-Img-6",
      image: testimonialImage7,
    },
  ];
  return (
    <div className="w-full px-20 my-10 ">
      <div className="w-full flex flex-col items-center justify-center innerCOntainer">
        <p className="text-xl font-bold mt-5" style={{ color: "#CB0F4C" }}>
          Testimonial
        </p>
        <h1 className="text-5xl font-bold mt-5">What Our Customers Say</h1>
        <p className="text-2xl text-center mt-5">
          Senectus et scelerisque convallis at sollicitudin tellus volutpa
          <br />
          quam. Viverra placerat morbi ut imperdiet.
        </p>
        <img
          className="w-52 h-52 mt-24"
          src={currentUserImg}
          alt=""
          onClick={() => setCurrentUserImg(testimonialImage1)}
        />
        <p className="text-2xl font-bold text-center pt-10">
          Senectus et scelerisque convallis at sollicitudin tellus volutpat
          quam. Ipsum bibendum iaculis gravida
          <br />
          adipiscing porttitor purus, sodales tristique. Viverra placerat morbi
          ut imperdiet.
        </p>
        <p className="pt-8 text-3xl" style={{ color: "#CB0F4C" }}>
          Keya Akter
        </p>
        <p className="text-2xl mt-2.5 ">Customer</p>
        <div className="w-full px-80 mt-24 imageContainer flex flex-row items-center justify-between">
          {imagesArray.map((item) => {
            return (
              <img
                className="h-24 w-24"
                key={item.id}
                src={item.image}
                alt={item.id}
                onClick={() => setCurrentUserImg(item.image)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
