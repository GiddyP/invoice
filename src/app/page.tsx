import { WorldImage } from '@public/images';
import AppLayout from '@src/components/AppLayout';
import CardComponents from '@src/components/CardComponents';
import ExecellentFeatures from '@src/components/PageFragments/ExecellentFeatures';
import ExpenseManager from '@src/components/PageFragments/ExpenseManager';
import FindAnswers from '@src/components/PageFragments/FindAnswers';
import Hero from '@src/components/PageFragments/Hero';
import Subscription from '@src/components/PageFragments/Subscription';
import Image from 'next/image';
import DashBoardLook from '@src/components/PageFragments/DashBoardLook';

const page = () => (
  <AppLayout>
    <Image
      src={WorldImage}
      alt='world-image'
      className='absolute top-[310px] -z-10 w-full'
      priority
    />
    <Hero />
    <DashBoardLook />
    <ExpenseManager />
    <ExecellentFeatures />
    <FindAnswers />
    <CardComponents />
    <Subscription />
  </AppLayout>
);


export default page;