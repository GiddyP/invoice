import { createInvoice, excellentFeature } from "@public/images";
import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeaturedCard2";

const ExecellentFeatures = () => {
    return (
        <section className="py-16 px-24 min-h-screen bg-white">
            <div className="flex justify-center">
                <h3 className="text-center text-5xl 2xl:text-6xl font-bold leading-[150%] mx-60 mb-10">Excellent features that we provide for you</h3>
            </div>

            <FeatureCard
                text1="Send your invoice quickly and practically with USD & NGN Currency"
                text2="You can easily create invoice with USD Currency or Naira, whatever your choice is."
                buttonText="Learn More"
                icon={excellentFeature}
                className="mt-20"
            />
          
            <FeatureCard2
                text1="Create invoices quickly in less than 3 minutes"
                text2="Wait 3 minutes, and your invoice will be ready soon, 3 minutes is 3 minutes no delay"
                buttonText="Get Started"
                icon={createInvoice}
                className="mt-20"
            />

            <FeatureCard
                text1="Send your invoice quickly and practically"
                text2="Lorem ipsum dolor sit amet consectetur. Arcu donec eu orci nisl quis ornare. Scelerisque posuere integer facilisis"
                buttonText="Learn More"
                icon={excellentFeature}
                className="mt-20"
            />
            
        </section>
    );
};

export default ExecellentFeatures;