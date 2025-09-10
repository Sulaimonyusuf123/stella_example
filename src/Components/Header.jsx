import React, { useState } from 'react';
import logo from "../Components/Logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8" style={{ paddingTop: '15px', paddingBottom: '16px' }}>
        <div className="flex items-center justify-between h-16">
         
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <img src={logo} alt="urCrypto" className="w-[155px] h-[38px] hover:opacity-80 transition-opacity" />
            </a>
          </div>
          
         
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Price
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Learn
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Support
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sign in
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium border border-blue-600">
              Get started
            </button>
          </div>
          
         
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
       
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
             
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1">
                  Products
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1">
                  Price
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1">
                  Learn
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1">
                  Support
                </a>
              </div>
              
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-left px-2 py-1">
                  Sign in
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium border border-blue-600 text-center">
                  Get started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;