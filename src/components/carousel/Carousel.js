import React from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ChefCard from "../chefCard/ChefCard";
import RecipieCard from "../recipieCard/RecipieCard";

const Carousel = ({ title, data, isChef }) => {
  return (
    <div className="py-2 mx-auto max-w-6xl">
      <h3 className="my-4">
        {title}
      </h3>
      <Swiper
        // navigation={true}
        className="mySwiper"
        slidesPerView={1}
        breakpoints={{
            800: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1124: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }}
        modules={Navigation}
      >
        {data.map((el, index) => {
          return (
            <SwiperSlide key={index} >
                {!isChef ? <RecipieCard el={el} /> : <ChefCard />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
