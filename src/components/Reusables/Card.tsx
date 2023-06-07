import { invoiceLogo } from "@public/images";
import Image from "next/image";

const Card = () => {

    return (
        <section className="max-w-[400px] max-h-[290px] mt-16 p-7 flex flex-col gap-5 border-[1px] border-gray-300 rounded-lg shadow-lg">
            <div className="flex gap-3 items-center h-[50px]">
                {/* <div className="flex items-center justify-center">
                </div> */}
                <img src='/images/invoice-logo.png' alt="logo" className="rounded-[50%] h-[55px] w-[55px]" />
                <span className="text-[#151A1A] font-[500] text-xl">Aldarani ramos</span>
            </div>
            <p className="text-[#B8B8B8] text-lg pr-9">Very satisfied with this insurance service. strongly guarantees us in the future to be prosperous</p>
        </section>
    );
};

export default Card;