'use client'
import Image, { StaticImageData } from "next/image";
import Button from "./Reusables/Button";
import { timer } from "@public/icons";
import { VectorStickIcon } from "./Reusables/SvgIcons";
import { motion } from "framer-motion";

const FramerImage = motion(Image)

interface FeatureCard2Props {
    text1: string;
    text2: string;
    buttonText: string;
    icon: StaticImageData;
    className?: string;
}

const FeatureCard2 = ({ text1, text2, buttonText, icon, className }: FeatureCard2Props) => {
    return (
        <div className={`flex w-full justify-between ${ className } relative`}>
            <div className="flex flex-col gap-7 w-[55%] pl-12 pr-32 justify-center">
                <h3 className="text-3xl leading-[1.8] font-bold">{text1}</h3>
                <p className="text-[#7E7E7E] text-lg pr-8 leading-[1.5]">{text2}</p>
                <Button text={buttonText} className="text-white text-sm font-semibold px-7 py-3 rounded-3xl bg-primary w-fit" />
            </div>

            <div className="flex justify-center items-center mx-auto bg-[#2A2A2A] p-9 rounded-2xl cursor-pointer">
                <FramerImage
                    src={icon}
                    alt='logo'
                    width={350}
                    // height={50}
                    priority
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </div>
            <Button text='Create Invoice' className="absolute top-3 right-[350px] text-white text-sm font-semibold px-8 py-3 rounded-md bg-primary w-fit" />

            <button className="absolute flex justify-center items-center top-[320px] right-[350px] px-2 py-3 rounded-md bg-primary w-fit">
                <div className="flex">
                    <Image
                        src={timer}
                        alt='logo'
                        width={38}
                        // height={50}
                        priority
                    />
                </div>
                <span className="text-xs text-white px-2 text-start leading-[1.5]">Wait 3 minutes, and your <br /> invoice will be ready soon</span>
            </button>

            <VectorStickIcon className="top-[260px] right-[560px] absolute w-[60px]" />
        </div>
    );
};

export default FeatureCard2;