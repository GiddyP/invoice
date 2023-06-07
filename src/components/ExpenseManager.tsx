'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface RenderUserStatsProps {
  count: number;
  label: string;
  additional?: string;
}

interface AnimatedNumbersProps {
  value: number;
}


const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef<any>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000
  });
  const isInview = useInView(ref,
    { once: false }
  );

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <span ref={ref}></span>
  );
};

const RenderUserStats = ({ count, label, additional }: RenderUserStatsProps) => {
  return (
    <div className="flex flex-col items-center gap-2 text-[#7E7E7E]">
      <h3 className="text-6xl text-primary">
        <AnimatedNumbers value={count} /><span>{additional}</span>
      </h3>
      <span className='text-xl'>{label}</span>
    </div>
  );
};

const ExpenseManager = () => {
  return (
    <section className="h-[50vh] flex flex-col justify-center items-center gap-4">
      <div className="w-2/3 flex flex-col justify-center items-center gap-12">
        <h3 className="text-[#141414] text-4xl  font-[500] leading-[150%] text-center">
          Expense manager with trusted apps
        </h3>

        <div className="w-full grid grid-cols-4 gap-4 py-8">
          <RenderUserStats count={1} additional='.5M +' label="Happy Users" />
          <RenderUserStats count={4} additional='.9' label="Rating apps" />
          <RenderUserStats count={75} additional=' +' label="Partners" />
          <RenderUserStats count={125} additional=' +' label="Awards" />
        </div>
      </div>
    </section>
  );
};

export default ExpenseManager;