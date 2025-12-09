import React from 'react';
import { ChevronRight, CheckCircle2, User, FileText } from 'lucide-react';
import identifyImg from '../Images/identify.png';

export const Identification = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6">
      <div className="max-w-full md:max-w-[calc(100%-2rem)] w-full">
        {/* Top Section with three cards */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 md:mb-8">
          {/* Identification Card */}
          <div className="bg-[#1a1a1a] rounded-2xl p-5 md:p-6 relative overflow-hidden w-full lg:max-w-2xl lg:flex-shrink-0">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Identification</h2>
            <p className="text-gray-400 text-sm mb-2">UID:88230293</p>
            <p className="text-gray-400 text-sm">
              A crypto ID shows user info<br />and security.
            </p>
            
            {/* Identification Image */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <img src={identifyImg} alt="Identification" className="w-24 md:w-32 h-24 md:h-32 object-contain opacity-80" />
            </div>
          </div>

          {/* Withdrawal FAQ Card */}
          <div className="bg-[#1a1a1a] rounded-2xl p-5 md:p-6 w-full lg:w-[520px] lg:flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-semibold">Withdrawal FAQ</h2>
              <button className="text-[#00d9a3] hover:text-[#00f5ba] flex items-center gap-1 text-xs md:text-sm font-medium">
                View More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-400 text-xs md:text-sm hover:text-gray-300 cursor-pointer">
                Why is identity verification necessary?
              </p>
              <p className="text-gray-400 text-xs md:text-sm hover:text-gray-300 cursor-pointer">
                Why isn't my country/region listed?
              </p>
              <p className="text-gray-400 text-xs md:text-sm hover:text-gray-300 cursor-pointer">
                What are the restrictions of identity verification?
              </p>
            </div>
          </div>
        </div>

        {/* Basic Verification Section */}
        <div className="bg-[#141414] rounded-2xl p-5 md:p-6 mb-6 md:mb-8 max-w-full lg:max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">Basic Verification</h2>
            <button className="bg-[#00d9a3] hover:bg-[#00f5ba] text-black font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm md:text-base">
              Verify Now
            </button>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#00d9a3] rounded-full"></div>
              <h3 className="text-base md:text-lg font-medium">Benefits</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">24h Withdraw limit</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">5 BTC</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">24h Deposit limit</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">No Limit</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">Get Crypto with Fiat</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">Permit</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">other</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">More Trial Fund</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Requirement */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#00d9a3] rounded-full"></div>
              <h3 className="text-base md:text-lg font-medium">Requirement</h3>
            </div>
            
            <button className="w-full bg-[#2a2a2a] hover:bg-[#333333] text-gray-300 px-4 md:px-6 py-4 rounded-xl flex items-center gap-3 transition-colors text-sm md:text-base">
              <User className="w-5 h-5 text-[#00d9a3] flex-shrink-0" />
              <span>Basic Authentication Info</span>
            </button>
          </div>
        </div>

        {/* Advanced Verification Section */}
        <div className="bg-[#141414] rounded-2xl p-5 md:p-6 max-w-full lg:max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">Advanced Verification</h2>
            <span className="bg-[#2a2a2a] text-gray-400 px-4 py-2 rounded-lg text-xs md:text-sm">
              Basic Verification Required
            </span>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#00d9a3] rounded-full"></div>
              <h3 className="text-base md:text-lg font-medium">Benefits</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">24h Withdraw limit</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">50 BTC</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">24h Deposit limit</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">No Limit</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">Get Crypto with Fiat</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">Permit</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm md:text-base">other</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-base">More Trial Fund</span>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Requirement */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#00d9a3] rounded-full"></div>
              <h3 className="text-base md:text-lg font-medium">Requirement</h3>
            </div>
            
            <button className="w-full bg-[#2a2a2a] hover:bg-[#333333] text-gray-300 px-4 md:px-6 py-4 rounded-xl flex items-center gap-3 transition-colors text-sm md:text-base">
              <FileText className="w-5 h-5 text-[#00d9a3] flex-shrink-0" />
              <span>Documentation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};