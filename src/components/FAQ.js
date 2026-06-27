'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "What is KrediLoop?",
    answer: "KrediLoop is a digital platform modernizing traditional savings groups (Ajo). It helps communities save, build credit history, and access loans together securely."
  },
  {
    question: "How does KrediLoop work?",
    answer: "Users can create or join a savings group, contribute periodically, and take turns receiving the pooled funds. KrediLoop tracks all transactions to build your credit score."
  },
  {
    question: "Is my money safe with KrediLoop?",
    answer: "Yes! KrediLoop uses bank-level encryption and partners with licensed financial institutions to ensure your funds are completely secure."
  },
  {
    question: "Who can use KrediLoop?",
    answer: "Anyone looking to save money in a community setting. Whether you're an individual, a small business owner, or part of a community organization, KrediLoop is for you."
  },
  {
    question: "How do I access the loans if I need an immediate savings payout?",
    answer: "As you build credit history with your group, KrediLoop may offer instant micro-loans backed by your savings profile."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-9 max-w-[1232px] mx-auto">
      <h2 className="text-[24px] md:text-[54px] font-semibold text-center mb-10 md:mb-16 leading-tight">
        Everything You <span className="text-[#2F5CF0]">Need</span> to Know
      </h2>

      <div className="space-y-3 relative -mt-[-25px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-[#EBF0FF] rounded-[18px] overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#EBF0FF]' : 'bg-[#F9FBFF]'}`}
          >
            {/* Button row — min-h so it never collapses on mobile */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full min-h-[70px] md:h-[99px] flex justify-between items-center px-5 md:px-8 py-4 md:py-0 text-left focus:outline-none gap-4"
            >
              <span className="font-semibold text-[15px] md:text-[19px] text-[#0B163A] leading-snug">{faq.question}</span>
              <svg
                className={`w-5 h-5 md:w-6 md:h-6 text-[#2F5CF0] flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Answer — max-h transition for smooth open/close without fixed heights */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="font-light text-[15px] md:text-[19px] text-[#514F4F] leading-relaxed px-5 md:px-8 pb-5 md:pb-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
