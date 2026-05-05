import React from 'react';
import feat1 from "../Components/Images/four.png"
import feat2 from "../Components/Images/Graph.png"
import feat3 from "../Components/Images/illustration.png"
import feat4 from "../Components/Images/Social.png"



export const Feature = () => {

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Three Feature Cards */}
        <div className="mb-20">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 px-4">
            <span className="text-gray-300">Designed for safety. </span>
            <span className="text-teal-400">Built for everyone.</span>
          </h2>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Military-grade Security */}
            <div className="bg-[#1a1a1a] backdrop-blur-sm border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="mb-6 h-48 flex items-center justify-center">
                <img src={feat1} alt="Security Chart" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
                <span className="text-teal-400">Military-grade</span>
                <span className="text-white"> Security</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left px-2 md:px-0">
                Your assets are stored using cold wallets, encryption, and system-wide protection protocols.
              </p>
            </div>

            {/* Card 2 - Lightning-Fast Transactions */}
            <div className="bg-[#1a1a1a] backdrop-blur-sm border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="mb-6 h-48 flex items-center justify-center">
                <img src={feat2} alt="Crypto Exchange" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
                <span className="text-teal-400">Lightning-Fast</span>
                <span className="text-white"> Transactions</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left px-2 md:px-0">
                Trade and move your crypto instantly with optimized blockchain execution.
              </p>
            </div>

            {/* Card 3 - Intelligent Investment Tools */}
            <div className="bg-[#1a1a1a] backdrop-blur-sm border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="mb-6 h-48 flex items-center justify-center">
                <img src={feat3} alt="Investment Chart" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
                <span className="text-teal-400">Intelligent</span>
                <span className="text-white"> Investment Tools</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left px-2 md:px-0">
                Track trends, review charts, set alerts, and make better investment decisions with precision.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Financial Innovation */}
        <div className="bg-[#1a1a1a] backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 px-2">
                <span className="text-white">Your next step into smarter </span>
                <span className="text-teal-400">financial innovation.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed px-4 lg:px-0">
                Stay ahead of the market with real-time analytics, advanced trading tools, and automated strategies designed to maximize your digital asset growth.
              </p>
            </div>

            {/* Right Side - Crypto Icons */}
            <div className="flex items-center justify-center mt-6 lg:mt-0">
              <img src={feat4} alt="Crypto Coins" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;