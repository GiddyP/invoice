import { invoiceLogo } from "@public/images";
import Image from "next/image";
import LogoImages from "../Reusables/LogoImages";
import { logo1, logo2, logo3 } from "@public/icons";

interface AboutSectionProps {
  sectionTitle: string;
  listItems: string[];
}


const RenderAboutSection = ({ sectionTitle, listItems }: AboutSectionProps) => (
  <div className="w-full flex flex-col">
    <span className="mb-10 text-lg font-bold">{sectionTitle}</span>
    <ul className="flex flex-col gap-6 text-lg text-[#7E7E7E] leading-[150%]">
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <section className="h-[70vh] w-full flex flex-col items-center bg-white py-4 mx-auto">
      <div className="flex mt-8 pb-12 mb-3 w-[80%] border-b-[1px] border-b-[#A0A0A0]">
        <div className="flex flex-col w-[50%] py-24 gap-4">
          <div className="flex gap-3">
            <div className="w-[60px] h-[30px] relative">
              <LogoImages
                img={logo1}
                alt='logo1'
                width={27}
                className='absolute top-0'
                duration={1.1}
                y={-50}
              />

              <LogoImages
                img={logo2}
                alt='logo2'
                width={31}
                className='absolute top-0 left-[13px]'
                duration={.9}
                y={-50}
              />

              <LogoImages
                img={logo3}
                alt='logo3'
                width={36}
                className='absolute top-0 left-[30px]'
                duration={.6}
                y={-50}
              />
            </div>
            <span className='font-bold text-2xl'>Invoice</span>
          </div>

          <p className="mr-[200px] text-lg text-[#7E7E7E] leading-[150%]">Lorem ipsum dolor sit amet consectetur. Feugiat ac a risus et ullamcorper non.</p>
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

      <span className="text-center text-[#7E7E7E] text-sm leading-[22px]">© Copyright 2022 Homely. All rights reserved.</span>
    </section>
  );
};

export default Footer;