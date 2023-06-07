'use client';
import { ArrowRight } from "@public/icons";
import { invoiceDisplay } from "@public/images";
import { useState } from 'react';
import Image from "next/image";

const LargeCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <section className="w-[80%] h-[354px] flex rounded-3xl p-16 bg-[#141414] relative">
            <div className="flex flex-col justify-between w-1/2 gap-3 pr-32 text-white">
                <h3 className="font-[500] text-4xl leading-[1.3]">Multifunctional and useful dashboard</h3>
                <p className="font-[500] text-xl text-[#7E7E7E] leading-[1.3]">We have lot of features waiting for you already in your dashboard</p>

                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="text-[#FF7A00] text-xl 2xl:text-lg">Try Now</span>
                    <Image
                        src={ArrowRight}
                        alt='invoice'
                        priority
                        className={`transition-transform duration-300 ${ isHovered && 'translate-x-2' }`}
                    />
                </div>
            </div>
            <div className="flex w-1/2">
                <Image
                    src={invoiceDisplay}
                    alt='invoice'
                    width={620}
                    priority
                    className="absolute bottom-0 right-0"
                />
            </div>
        </section>
    );
};

export default LargeCard;