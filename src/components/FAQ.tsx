"use client";
import React, { useState } from "react";

interface FaqCardProps {
  item: any;
}

const FaqCard: React.FC<FaqCardProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200/80 bg-white/50 backdrop-blur-sm rounded-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="text-lg font-medium text-gray-800">
          {item.question}
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.1665V15.8332"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16699 10H15.8337"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 text-gray-600">{item.answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Which battery is best for Toto (e-rickshaw)?",
      answer:
        "The best battery for a Toto (e-rickshaw) depends on load capacity and daily running distance. High-cycle EV batteries designed for heavy daily usage offer better backup, longer life, and lower maintenance.",
    },
    {
      question: "Do you sell batteries only for Toto (e-rickshaw)?",
      answer:
        "Yes. We specialize in batteries for Toto (e-rickshaw), electric loaders, and electric bikes. We focus only on electric vehicle batteries.",
    },
    {
      question: "Where can I buy Toto battery in Cooch Behar?",
      answer:
        "You can buy Toto (e-rickshaw) batteries directly from our store in Cooch Behar. We provide local availability, fair pricing, and support.",
    },
    {
      question: "How long does a Toto battery last?",
      answer:
        "A Toto battery typically lasts 12–24 months depending on usage, load, charging habits, and road conditions. Proper charging and maintenance can increase battery life.",
    },
    {
      question: "What is the price of Toto battery in Cooch Behar?",
      answer:
        "Toto battery prices vary based on capacity and battery type. We offer reasonable and competitive pricing in Cooch Behar—contact us for the latest rates.",
    },
    {
      question: "Is your Toto battery suitable for daily commercial use?",
      answer:
        "Yes. Our Toto batteries are designed for heavy daily commercial use, including passenger transport and goods movement.",
    },
    {
      question: "Do you provide installation support for Toto batteries?",
      answer:
        "Yes. We provide guidance and support for proper installation of Toto (e-rickshaw) batteries to ensure safe and efficient operation.",
    },
    {
      question: "Do you sell electric loader batteries in Cooch Behar?",
      answer:
        "Yes. Along with Toto batteries, we sell batteries for electric loaders and electric bikes in Cooch Behar.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-2 rainbow-gradient rounded-full opacity-60 blur-md"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-1.5 text-sm font-semibold">
              FAQs
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-tight">
            Got questions? <br />
            Here’s the answers.
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
