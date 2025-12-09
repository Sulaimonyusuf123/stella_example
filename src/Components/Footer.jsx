import React from 'react'
import radio from '../Components/Images/Support.png'

export const Footer = () => {
  return (
    <footer className="text-white bg-[#1a1a1a] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo centered at top with radio icon on same line */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1 hidden md:block"></div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Stellar <span className="text-teal-400">Point</span>
          </h2>
          <div className="flex-1 flex justify-end">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-400 flex items-center justify-center">
              <img 
                src={radio} 
                alt="support"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
          </div>
        </div>

        {/* Footer columns */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 max-w-4xl mx-auto">
            {/* Services Column */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Services</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    Spot
                  </a>
                </li>
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Product</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    Reporting APP
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Company</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    Announcement
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Support</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm md:text-base">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400 text-xs md:text-sm">
            Copy Right 2025 Stellar Point. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}