'use client';
import { useState, useEffect } from 'react';

const words = ["Ajo", "Esusu", "Susu", "Adashe", "Akawo", "Savings"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const pauseTimeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="font-serif italic font-normal text-[#2F5CF0] relative inline-block min-w-[3ch] text-left">
      {words[index].substring(0, subIndex)}
      <span className={`opacity-${blink ? '100' : '0'} transition-opacity duration-100 font-sans text-[#0B163A] ml-[2px]`}>
        |
      </span>
    </span>
  );
}
