import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const nextSlide = () => swiperRef.slideNext();
  const prevSlide = () => swiperRef.slidePrev();

  return (
    <>
      <button className="" onClick={() => prevSlide()}>
        prev
      </button>
      <button className="" onClick={() => nextSlide()}>
        next
      </button>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
