import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Frequent = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      question: "How does Stellar Point work?",
      answer: "Stellar offers a variety of trading and investment options that allow you to buy and sell crypto with as little as $100. With products like zero-fee conversion, spot trading, margin trading, and futures trading, you can try out different strategies and build your skills on Stellar without worrying about high fees."
    },
    {
      question: "Can I start trading with just $100?",
      answer: "Stellar offers a variety of trading and investment options that allow you to buy and sell crypto with as little as $100. With products like zero-fee conversion, spot trading, margin trading, and futures trading, you can try out different strategies and build your skills on Stellar without worrying about high fees."
    },
    {
      question: "How can I buy coin?",
      answer: "You can buy coins through our platform using various payment methods including bank transfer, credit card, or debit card. Simply create an account, verify your identity, and start trading."
    },
    {
      question: "How can I contact Stellar support?",
      answer: "You can reach our support team 24/7 through live chat, email at support@stellarpoint.com, or by submitting a ticket through your dashboard."
    },
    {
      question: "How to track cryptocurrency prices?",
      answer: "Our platform provides real-time price tracking for all major cryptocurrencies. You can also set up price alerts to notify you when your target price is reached."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Container matching Header's max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center md:text-left">
          Frequently Asked <span className="text-teal-400">Questions</span>
        </h2>

        <div className="space-y-6 flex flex-col items-center md:items-stretch">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 w-full md:w-[95%] ${
                openIndex === index
                  ? 'bg-[#1a1a1a] border-2 border-teal-400'
                  : 'bg-[#1a1a1a] border-2 border-transparent'
              } ${
                index % 2 === 0 ? 'md:mr-0 md:ml-auto' : 'md:ml-0 md:mr-auto'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-white text-base md:text-lg font-medium pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-white w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-white w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}