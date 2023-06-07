import { Cube3d, sendArrow, sendArrow2, sheild } from "@public/icons";
import LargeCard from "../LargeCard";
import SmallCard from "../SmallCard";
import { StaticImageData } from "next/image";

interface CardProps {
    icon1: StaticImageData;
    icon2: StaticImageData;
    text: string;
    sectionClassName: string;
    imageClassName: string;
    textClassName: string;
}

const cardData: CardProps[] = [
    {
        icon1: sheild,
        icon2: sendArrow,
        text: 'Guaranteed security from the booked institution',
        sectionClassName: 'bg-primary',
        imageClassName: 'bg-[#ffffff2b]',
        textClassName: 'text-white',
    },
    {
        icon1: Cube3d,
        icon2: sendArrow2,
        text: 'Futuristic that is clear and easy to understand',
        sectionClassName: 'bg-[#F3F3F3]',
        imageClassName: 'bg-[#FF8D2433]',
        textClassName: '!text-[#292D32]',
    },
];

const DashBoardLook = () => {

    return (
        <div className="h-[150vh] 2xl:h-[130vh] bg-white flex justify-between items-center flex-col gap-12 py-24">
            <LargeCard />
            <div className="flex justify-between w-[80%] h-[354px]">
                {cardData.map((card, index) => (
                    <SmallCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default DashBoardLook;