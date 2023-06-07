'use client';
import Card from "./Reusables/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { cardData, cardData2 } from "@constants";

interface CardData {
    id: number;
    img: string;
    text: string;
    description: string;
}

interface SwiperProps {
    cardData: CardData[];
}

interface SwiperData {
    key: string;
    data: CardData[];
}

const swiperData: SwiperData[] = [
    { key: 'swiper1', data: cardData },
    { key: 'swiper2', data: cardData2 },
];

const RenderSwiper = ({ cardData }: SwiperProps) => (
    <Swiper
        slidesPerView={3}
        spaceBetween={1}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cursor-grab"
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
);

const CardComponents = () => {

    return (
        <div className="bg-white pt-16">
            <div className="w-[50%] mx-auto">
                <h2 className="text-center text-3xl leading-[150%] mx-16 font-[500]">Over 1.5 million+ people are already using our app</h2>
            </div>
            {swiperData.map(({ key, data }) => (
                <RenderSwiper key={key} cardData={data} />
            ))}
        </div>
    );
};

export default CardComponents;