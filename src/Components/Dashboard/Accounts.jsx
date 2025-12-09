import React from 'react';
import { Edit2 } from 'lucide-react';
import headImg from '../Images/Component.png';

export const Accounts = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6">
      <div className="max-w-full md:max-w-[calc(100%-2rem)] w-full">
        
        {/* Account Info Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Account Info</h2>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={headImg} 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">Ricky Smith</h3>
                <p className="text-gray-400 text-xs md:text-sm">Austin, Texas, USA</p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-5 md:px-6 py-2.5 border-2 border-[#00d9a3] text-[#00d9a3] hover:bg-[#00d9a3] hover:text-black rounded-lg transition-colors font-medium text-sm md:text-base self-start sm:self-auto">
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
        </div>

        {/* Personal Information Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Personal information</h2>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-4 md:p-6">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-6 md:gap-y-8 flex-1 w-full">
                {/* First name */}
                <div>
                  <label className="block text-gray-400 text-xs md:text-sm mb-2">First name</label>
                  <p className="text-white text-sm md:text-base">Ricky</p>
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-gray-400 text-xs md:text-sm mb-2">Last Name</label>
                  <p className="text-white text-sm md:text-base">Smith</p>
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-gray-400 text-xs md:text-sm mb-2">Email address</label>
                  <p className="text-white text-sm md:text-base">Zyrix@gmail.com</p>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-400 text-xs md:text-sm mb-2">Phone</label>
                  <p className="text-white text-sm md:text-base">+1 (555) 123-4567</p>
                </div>
              </div>

              <button className="flex items-center gap-2 px-5 md:px-6 py-2.5 border-2 border-[#00d9a3] text-[#00d9a3] hover:bg-[#00d9a3] hover:text-black rounded-lg transition-colors font-medium text-sm md:text-base self-start lg:self-auto lg:ml-6">
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};