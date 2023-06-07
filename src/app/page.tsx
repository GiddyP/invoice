import { Cube3d, sendArrow, sendArrow2, sheild } from '@public/icons';
import { WorldImage } from '@public/images';
import AppLayout from '@src/components/AppLayout';
import CardComponents from '@src/components/CardComponents';
import ExecellentFeatures from '@src/components/ExecellentFeatures';
import ExpenseManager from '@src/components/ExpenseManager';
import FindAnswers from '@src/components/FindAnswers';
import Footer from '@src/components/Footer';
import Hero from '@src/components/Hero';
import LargeCard from '@src/components/LargeCard';
import SmallCard from '@src/components/SmallCard';
import Subscription from '@src/components/Subscription';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <AppLayout>

        <Image
          src={WorldImage}
          alt='world-image'
          className='absolute top-[310px] -z-10 w-full'
          priority
        />
        <Hero />
        <div className="h-[150vh] 2xl:h-[130vh] bg-white flex justify-between items-center flex-col gap-12 py-24">
          <LargeCard />
          <div className="flex justify-between w-[80%] h-[354px]">
            <SmallCard
              icon1={sheild}
              icon2={sendArrow}
              text='Guaranteed security from the booked institution'
              sectionClassName='bg-primary'
              imageClassName='bg-[#ffffff2b]'
              textClassName='text-white'
            />

            <SmallCard
              icon1={Cube3d}
              icon2={sendArrow2}
              text='futuristic that is clear and easy to understand'
              sectionClassName='bg-[#F3F3F3]'
              imageClassName='bg-[#FF8D2433]'
              textClassName='!text-[#292D32]'
            />
          </div>
        </div>

        <ExpenseManager />
        <ExecellentFeatures />
        <FindAnswers />
        <CardComponents />
        <Subscription />
      </AppLayout>
    </>
  );
};

export default page;