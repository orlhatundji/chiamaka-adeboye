import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Hooks
import useWindowDimensions from "./windowDimensionHook";

const OtherProjects = () => {
  const { width } = useWindowDimensions();
  const [swiperRef, setSwiperRef] = useState(null);
  const nextSlide = () => swiperRef.slideNext();
  const prevSlide = () => swiperRef.slidePrev();
  

  return (
    <>
      <div className="border-b border-black pb-20">
        <div className="container pt-14 pb-20">
          <div className="flex items-center justify-between mb-14">
            <h3 className="opacity-60">Other Projects</h3>
            <div className="flex gap-x-3 items-center">
              <button className="" onClick={() => prevSlide()}>
                <StaticImage
                  src="../images/prev.png"
                  className="max-w-[40px] mx-auto block"
                />
              </button>
              <button className="" onClick={() => nextSlide()}>
                <StaticImage
                  src="../images/next.png"
                  className="max-w-[40px] mx-auto block"
                />
              </button>
            </div>
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={width < 600 ? 1 : 2}
            centeredSlides={false}
            spaceBetween={30}
            pagination={false}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <div className="bg-white border-[3px] border-black px-[38px] pt-[64px] md:h-[460px] flex items-end overflow-hidden">
                  <StaticImage
                    src="../images/yellowcard2.png"
                    className="max-w-[261px] mx-auto block"
                  />
                </div>
                <h3 className="card-title mt-[50px]">Afriticket</h3>
                <p className="subtitle3 mt-3">
                  I designed a simple way for users to see important updates to
                  the product.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <div className="bg-white border-[3px] border-black px-[38px] pt-[64px] md:h-[460px] flex items-end overflow-hidden">
                  <StaticImage
                    src="../images/afriticket.png"
                    className="max-w-[261px] auto mx-auto block"
                  />
                </div>
                <h3 className="card-title mt-[50px]">Kiddiebox</h3>
                <p className="subtitle3 mt-3">
                  A better way to manage your preschool
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className="bg-white border-[3px] border-black px-[38px] pt-[64px] h-[460px] flex items-end overflow-hidden">
                  <StaticImage
                    src="../images/yellowcard2.png"
                    className="max-w-[261px] mx-auto block"
                  />
                </div>
                <h3 className="card-title mt-[50px]">Afriticket</h3>
                <p className="subtitle3 mt-3">
                  I designed a simple way for users to see important updates to
                  the product.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <div className="bg-white border-[3px] border-black px-[38px] pt-[64px] h-[460px] flex items-end overflow-hidden">
                  <StaticImage
                    src="../images/afriticket.png"
                    className="max-w-[261px] auto mx-auto block"
                  />
                </div>
                <h3 className="card-title mt-[50px]">Kiddiebox</h3>
                <p className="subtitle3 mt-3">
                  A better way to manage your preschool
                </p>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OtherProjects;
