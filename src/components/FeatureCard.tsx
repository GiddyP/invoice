'use client'
import Image, { StaticImageData } from "next/image";
import Button from "./Reusables/Button";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

interface FeatureCardProps {
    text1: string;
    text2: string;
    buttonText: string;
    icon: StaticImageData;
    className?: string;
}



const FeatureCard = ({ text1, text2, buttonText, icon, className }: FeatureCardProps) => {
    return (
        <div className={`flex w-full justify-between ${className}`}>
            <div className="flex justify-center items-center mx-auto cursor-pointer">
                <FramerImage
                    src={icon}
                    alt='icon-image'
                    width={420}
                    // height={50}
                    priority
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                />
            </div>


            <div className="flex flex-col gap-7 w-[55%] pl-32 justify-center">
                <h3 className="text-3xl leading-[1.8] font-bold">{text1}</h3>
                <p className="text-[#7E7E7E] text-sm pr-24 leading-[1.5]">{text2}</p>
                <Button text={buttonText} className="text-white text-sm font-semibold px-7 py-3 rounded-3xl bg-primary w-fit" />
            </div>
        </div>
    );
};

export default FeatureCard;