interface CardProps {
    img: string;
    text: string;
    description: string;
}

const Card = ({ img, text, description }: CardProps) => {

    return (
        <section className="max-w-[400px] h-[230px] mt-16 p-7 flex flex-col gap-5 border-[1px] border-gray-300 rounded-lg shadow-xl">
            <div className="flex gap-3 items-center h-[50px]">
                <img src={img} alt="logo" className="rounded-[50%] h-[55px] w-[55px]" />
                <span className="text-[#151A1A] font-[500] text-xl">{text}</span>
            </div>
            <p className="text-[#B8B8B8] text-lg pr-9">{description}</p>
        </section>
    );
};

export default Card;