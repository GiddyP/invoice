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
import { cardData, cardData2 } from "@constants";

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
                className="mySwiper cursor-grab"
                // Your additional customizations here
                // Example: autoplay, navigation, etc.
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                navigation
            >
                {cardData.map((card) => (
                    <SwiperSlide key={card.id} className="w-fit">
                        <Card img={card.img} text={card.text} description={card.description} />
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <Swiper
                slidesPerView={3}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper cursor-grab"
                // Your additional customizations here
                // Example: autoplay, navigation, etc.
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                navigation
            >
                {cardData2.map((card) => (
                    <SwiperSlide key={card.id} className="w-fit">
                        <Card img={card.img} text={card.text} description={card.description} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default CardComponents;