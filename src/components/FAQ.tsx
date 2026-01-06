import React, { useState } from 'react';
import { FAQItem } from '../types';

interface FaqCardProps {
  item: FAQItem;
}

const FaqCard: React.FC<FaqCardProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200/80 bg-white/50 backdrop-blur-sm rounded-xl">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left"
            >
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4.1665V15.8332" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.16699 10H15.8337" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-6 pb-6 text-gray-600">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqData: FAQItem[] = [
        { question: "What is Popcorn?", answer: "Popcorn is a simple, all-in-one global phone plan that just works. Enjoy unlimited talk, text, and data worldwide for one price. No hidden fees, roaming charges or hassle." },
        { question: "What countries are you available in?", answer: "We’re live in 180+ countries. The only places we haven’t seen users are a few remote islands or unstable regions like North Korea." },
        { question: "Can I keep my current phone number?", answer: "Absolutely, we support US numbers and you can transfer yours directly in the app. Or grab a fresh one if you’d like." },
        { question: "Will it work on my phone?", answer: "If your phone supports eSIM and is from the last 5 years, you’re good to go." },
        { question: "How much does it cost?", answer: "$69/mo including taxes. That’s it." },
        { question: "Can I cancel anytime?", answer: "No contracts, just pay monthly and cancel anytime." }
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
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-tight">Got questions? <br />Here’s the answers.</h2>
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
