import AnimatedText from "../Reusables/AnimatedText";
import Button from "../Reusables/Button";

const Hero = () => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <section className="w-[62%] grid gap-9 p-2">
        <AnimatedText
          text="Make your online invoicing easier here Create invoices quickly in less than 3 minutes"
          className="text-[2.9rem] 2xl:text-5xl text-center font-semibold leading-[150%]"
        />

        <p className="text-lg 2xl:text-3xl text-center text-[#7E7E7E] mx-10 leading-[150%]">
          Create invoices quickly in less than 3 minutes to receive money from anywhere in the world without stress.
        </p>

        <Button
          text="Try For Free"
          className="text-white text-sm font-semibold px-12 py-4 rounded-[100px] bg-primary place-self-center design"
        />
      </section>
    </div>
  );
};

export default Hero;
