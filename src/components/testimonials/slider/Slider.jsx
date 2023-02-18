import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Data } from "../Data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            {Data.map(({id, image, title, description}) => {
            return (
                <SwiperSlide className="testimonial__card" key={id}>
                    <img src={image} alt="ColleagueImage" className="testimonial__img" />
                    <h3 className="testimonial__name">{title}</h3> <br />
                    <p className="testimonial__desctription">{description}</p>
                </SwiperSlide>
            )
            })}
      </Swiper>
    </>
  );
}
