'use client';
import Card from "./Reusables/Card";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const CardComponents = () => {

    return (
        <div className="bg-white pt-16">
            <div className="w-[50%] mx-auto">
                <h2 className="text-center text-3xl leading-[150%] mx-16 font-[500]">Over 1.5 million+ people are already using our app</h2>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
            </Swiper>

            <Swiper
                slidesPerView={3}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
                <SwiperSlide className="w-fit"><Card /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CardComponents;