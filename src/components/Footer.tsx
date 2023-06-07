import { invoiceLogo } from "@public/images";
import Image from "next/image";

interface AboutSectionProps {
  sectionTitle: string;
  listItems: string[];
}


const RenderAboutSection = ({ sectionTitle, listItems }: AboutSectionProps) => (
  <div className="w-full flex flex-col">
    <span className="mb-5 text-lg font-bold">{sectionTitle}</span>
    <ul className="flex flex-col gap-3 text-lg text-[#7E7E7E]">
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <section className="h-[70vh] w-full flex flex-col items-center bg-white py-4 mx-auto">
      <div className="flex mt-8 pb-12 mb-6 w-[80%] border-b-[1px] border-b-[#A0A0A0]">
        <div className="flex flex-col w-[50%] py-24 gap-4">
          <div className="flex gap-3 py-2">
            <Image
              src={invoiceLogo}
              alt='logo'
              width={50}
              height={50}
              priority
            />
            <h3 className="text-xl font-bold">Invoice</h3>
          </div>

          <p className="mr-[100px] text-lg text-[#7E7E7E] leading-[150%]">Lorem ipsum dolor sit amet consectetur. Feugiat ac a risus et ullamcorper non.</p>
        </div>


        <div className="flex justify-between w-[50%] py-9">
          <RenderAboutSection
            sectionTitle="About"
            listItems={['About us', 'Features', 'Blog', 'Pricing']}
          />

          <RenderAboutSection
            sectionTitle="Company"
            listItems={['How we work', 'Press Room', 'Jobs', 'Community']}
          />

          <RenderAboutSection
            sectionTitle="Legal"
            listItems={['Terms of use', 'Privacy Policy', 'Security Policy', 'Cookie Settings']}
          />

        </div>
      </div>

      <span className="text-center text-[#7E7E7E] text-sm">© Copyright 2022 Homely. All rights reserved.</span>


    </section>
  );
};

export default Footer;