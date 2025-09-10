import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from "../Components/Logo.png"

const CryptoFooter = () => {
  const footerSections = {
    company: {
      title: "Company",
      links: [
        "About Us",
        "Blog",
        "Careers",
        "Student",
        "Security",
        "Trust and Safety",
        "Newsroom",
        "Videos"
      ]
    },
    learn: {
      title: "Learn",
      links: [
        "What's Trending",
        "Product News",
        "Events",
        "University",
        "Research",
        "Market Updates"
      ]
    },
    products: {
      title: "Products",
      links: [
        "Stock & Fund",
        "Cash Card",
        "Crypto",
        "Options",
        "Gold",
        "Learn Snacks"
      ]
    },
    support: {
      title: "Support",
      links: [
        "Support Center",
        "Contact Us",
        "System Status",
        "Areas of Availability"
      ]
    },
    resources: {
      title: "Resources",
      links: [
        "Prices",
        "Site Widgets",
        "Tax",
        "Support"
      ]
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12">
        
      
        <div className="lg:hidden">
         
          <div className="text-center mb-8 space-y-4">
            <div className="flex justify-center">
              <a 
                href="/" 
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={logo} 
                  alt="urCrypto Logo" 
                  className="w-[155px] h-[38px]"
                />
              </a>
            </div>
            <p className="text-gray-600 text-base font-normal leading-6">
              Take your crypto to the next level
            </p>
            
          
            <div className="flex justify-center space-x-3 pt-2">
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        
          <div className="grid grid-cols-2 gap-8 mb-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="text-gray-900 font-semibold text-base leading-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-normal leading-5"
                        style={{ fontFamily: 'Inter', letterSpacing: '0px' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
        <div className="hidden lg:grid lg:grid-cols-6 gap-8 lg:gap-12">
      
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <a 
                href="/" 
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={logo} 
                  alt="urCrypto Logo" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <p className="text-gray-600 text-base font-normal leading-6">
              Take your crypto to the next level
            </p>
            
           
            <div className="flex space-x-3 pt-2">
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="text-gray-900 font-semibold text-base leading-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-gray-900 transition-colors text-base font-normal leading-6"
                        style={{ fontFamily: 'Inter', letterSpacing: '0px' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

       
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-base font-normal leading-6" style={{ fontFamily: 'Inter' }}>
              ©All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CryptoFooter;