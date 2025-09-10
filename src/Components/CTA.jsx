import React from 'react';
// Import your frame images
import frame20 from '../Components/Ellipse.png';
import frame21 from '../Components/luna.png';
import frame22 from '../Components/eth.png';
import frame23 from '../Components/btc.png';

const CryptoCTABanner = () => {
  return (
    <div className="relative w-full py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl overflow-hidden min-h-[100px]">
          <div className="absolute inset-0">  
            <div className="absolute top-0 right-1/4 w-80 h-80 border border-white border-opacity-10 rounded-full transform translate-y-[-40%]"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 border border-white border-opacity-10 rounded-full transform translate-y-[40%]"></div>
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
            <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-white bg-opacity-40 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-white bg-opacity-20 rounded-full"></div>
          </div>
          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Join a new generation of<br />investors
                </h2>
                <div>
                  <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition duration-200 shadow-lg">
                    Get started
                  </button>
                </div>
              </div>
              
           
              <div className="relative h-48 lg:h-80">
                
                <div className="lg:hidden flex justify-center items-center space-x-4 h-full">
                  
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                    <img 
                      src={frame23} 
                      alt="Bitcoin"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  
                 
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <img 
                      src={frame22} 
                      alt="Ethereum"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  
                 
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-2xl">
                    <img 
                      src={frame21} 
                      alt="Luna"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

            
                <div className="hidden lg:block">
                 
                  <div className="absolute -top-4 -right-4 w-24 h-24 z-20">
                    <div className="w-full h-full bg-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                      <img 
                        src={frame23} 
                        alt="Bitcoin"
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </div>
                  
               
                  <div className="absolute bottom-8 right-12 w-18 h-18">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <img 
                        src={frame22} 
                        alt="Ethereum"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                  
                  
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-16">
                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center shadow-2xl">
                      <img 
                        src={frame21} 
                        alt="Luna"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  
                 
                  <div className="absolute top-1/4 right-1/3 w-10 h-10">
                    <div className="w-full h-full bg-white bg-opacity-15 rounded-full border border-white border-opacity-25"></div>
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/4 w-6 h-6">
                    <div className="w-full h-full bg-white bg-opacity-20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCTABanner;