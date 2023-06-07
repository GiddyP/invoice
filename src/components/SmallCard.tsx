import { sendArrow, sheild } from "@public/icons";
import { invoiceDisplay } from "@public/images";
import Image, { StaticImageData } from "next/image";

interface SmallCardProps {
    icon1: StaticImageData;
    icon2: StaticImageData;
    text: string;
    sectionClassName?: string;
    imageClassName?: string;
    textClassName?: string
}
// bg-[#FF8D2433]
// bg-[#ffffff2b]

const SmallCard = ({ icon1, icon2, text, sectionClassName, imageClassName, textClassName }: SmallCardProps) => {
    return (
        <section className={`w-[48%] h-full flex flex-col gap-16 rounded-3xl py-6 2xl:py-10 px-10 ${ sectionClassName } relative`}>
            <div className="flex justify-between items-center">
                <div className={`flex justify-center items-center w-[120px] h-[120px] rounded-full ${ imageClassName } shadow-lg p-2`}>
                    <Image
                        src={icon1}
                        alt="invoice-1"
                        width={42}
                        priority
                    />
                </div>
                <div className="flex justify-center items-center w-[60px] h-[60px] p-2">
                    <Image
                        src={icon2}
                        alt="invoice-1"
                        width={60}
                        height={60}
                        priority
                    />
                </div>
            </div>
            <h3 className={`text-[#fff] font-[500] text-[2.1rem] 2xl:text-4xl leading-[1.5] ${textClassName}`}>{text}</h3>
        </section>
    );
};

export default SmallCard;
