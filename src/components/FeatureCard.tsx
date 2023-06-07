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
                    width={500}
                    // height={50}
                    priority
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                />
            </div>


            <div className="flex flex-col gap-10 w-[55%] pl-32 justify-center">
                <h3 className="text-4xl leading-[170%] font-bold text-[#292D32]">{text1}</h3>
                <p className="text-[#7E7E7E] text-xl leading-[1.5]">{text2}</p>
                <Button text={buttonText} className="text-white text-xl font-semibold px-10 py-4 rounded-[100px] bg-primary w-fit" />
            </div>
        </div>
    );
};

export default FeatureCard;