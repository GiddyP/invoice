'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface RenderUserStatsProps {
  count: number;
  count2?: number;
  label: string;
  additional?: string;
}

interface AnimatedNumbersProps {
  value: number | undefined;
}

interface StatsProps {
  count: number;
  count2?: number;
  additional?: string;
  label: string;
}

const statsData: StatsProps[] = [
  {
    count: 1,
    count2: 5,
    additional: "M +",
    label: "Happy Users",
  },
  {
    count: 4,
    count2: 9,
    label: "Rating apps",
  },
  {
    count: 75,
    additional: "+",
    label: "Partners",
  },
  {
    count: 125,
    additional: "+",
    label: "Awards",
  },
];


const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef<any>(null);
  const motionValue = useMotionValue<number | undefined>(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: false });

  useEffect(() => {
    springValue.onChange((latest) => {
      if (value && ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });

    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue, springValue]);

  return <span ref={ref}></span>;
};


const RenderUserStats = ({ count, count2, label, additional }: RenderUserStatsProps) => {
  return (
    <div className="flex flex-col items-center gap-2 text-[#7E7E7E]">
      <h3 className="text-6xl text-primary">
        <AnimatedNumbers value={count} />
        {count2 !== undefined && (
          <>
            <span>.</span>
            <AnimatedNumbers value={count2} />
          </>
        )}
        {additional && <span>{additional}</span>}
      </h3>
      <span className="text-xl">{label}</span>
    </div>
  );
};


const ExpenseManager = () => {
  return (
    <section className="h-[50vh] flex flex-col justify-center items-center gap-4">
      <h3 className="text-[#141414] text-4xl font-[500] leading-[150%] text-center">
        Expense manager with trusted apps
      </h3>

      <div className="grid grid-cols-4 px-24 py-8 w-full">
        {statsData.map((stats, index) => (
          <RenderUserStats key={index} {...stats} />
        ))}
      </div>
    </section>
  );
};


export default ExpenseManager;