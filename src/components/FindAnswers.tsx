import { ArrowDownIcon, VectorStickIcon } from "./Reusables/SvgIcons";

interface LiTextProps {
    text: string;
    text2?: string;
    className?: string;
    iconClassName?: string;
}


const LiText = ({ text, text2, className, iconClassName }: LiTextProps) => {

    return (
        <>
            <li className={`text-[#292D32] text-2xl w-[90%] py-8 ${ className }`} >
                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-3xl font-[600]">{text}</h4>
                    <ArrowDownIcon className={`w-[42px] ${iconClassName}`} />
                </div>

                <span className="text-lg">{text2}</span>
            </li>
        </>
    );
};

const FindAnswers = () => {

    return (
        <section className="min-h-screen flex w-full justify-center py-24 px-5">
            <div className="flex w-[89%] ">
                <div className="w-1/2 pr-32 pl-14 gap-6 py-8">
                    <h3 className="text-[#292D32] text-5xl font-semibold leading-[1.5]">Find the answer you needs</h3>
                    <span className="text-[#292D32] text-xl leading-[1.5]">there may be some questions that come to mind</span>
                </div>

                <ul className="w-1/2">

                    <LiText text="1. Delivery between countries" text2="Send your package now anywhere safely. You can also monitor the journey of your package regularly." className="border-b-[1px] border-b-[#818181]" />
                    <LiText text="2. Delivery between countries" className="border-b-[1px] border-b-[#818181]" iconClassName="transform -rotate-90" />
                    <LiText text="3. Delivery between countries" iconClassName="transform -rotate-90"  />
                </ul>
            </div>
        </section>
    );
};

export default FindAnswers;