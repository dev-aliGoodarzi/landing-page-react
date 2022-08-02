import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/css";
import {
  slide1Img,
  slide2Img,
  slide3Img,
} from "../ImageExporter/ImageExporter";
import SlideCard from "./SlideCard";
SwiperCore.use([Pagination]);
const Blog = () => {
  const slides = [
    {
      id: "slide-1",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide1Img,
    },
    {
      id: "slide-2",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide2Img,
    },
    {
      id: "slide-3",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide3Img,
    },
    {
      id: "slide-4",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide1Img,
    },
    {
      id: "slide-5",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide2Img,
    },
    {
      id: "slide-6",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide3Img,
    },
    {
      id: "slide-7",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide1Img,
    },
    {
      id: "slide-8",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide2Img,
    },
    {
      id: "slide-9",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide3Img,
    },
    {
      id: "slide-10",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide1Img,
    },
    {
      id: "slide-11",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide2Img,
    },
    {
      id: "slide-12",
      name: `How to Uncrease Your ROI Through scientific SEM?`,
      date: "August 2, 2021",
      bgImg: slide3Img,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-20 blog__mainContainer__custom">
      <p className="text-3xl" style={{ color: "#CB0F4C" }}>
        Blog
      </p>
      <h1 className="font-bold text-5xl m-5 main-font">latest News</h1>
      <p
        className="text-base popinas-main w-full text-center"
        style={{ color: "#362424" }}
      >
        Senectus et scelerisque convallis at sollicitudin tellus
        <br />
        volutpa quam. Viverra placerat morbi ut imperdiet.
      </p>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        initialSlide={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full mt-20"
      >
        {slides.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SlideCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination">PAGINATION HERE</div>
    </div>
  );
};

export default Blog;
