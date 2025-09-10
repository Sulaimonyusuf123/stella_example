import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import personImage from '../Components/Group1.png'; 
import blockImage from '../Components/Group2.png'
import brand1 from "../Components/brand1.png"
import brand2 from "../Components/brand2.png"
import brand3 from "../Components/brand3.png"
import brand4 from "../Components/brand1.png"
import brand5 from "../Components/brand5.png"
import Footer from './Footer';
import benefit from "../Components/benefit.png"
import man from "../Components/man.png"
import GetStarted from './GetStarted';
import Testimonial from "../Components/Testimonial.png"
import CTA from "../Components/CTA"

const HeroSection = () => {
  
  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-blue-600">One platform</span>
              <br />
              <span className="text-gray-900">all things Crypto</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Open a free account in minutes right from your phone and make your money go further
            </p>

           
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-16">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                onClick={() => console.log('Get started clicked')}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get started
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center gap-[150px] mb-20">
            <img 
              src={blockImage} 
              alt="Dashboard analytics" 
              className="w-[562px] max-w-md h-[407px] object-contain"
            />
            <img 
              src={personImage} 
              alt="Professional person" 
              className="w-[152px] max-w-md h-[467px] object-contain"
            />
          </div>

         
          <div className="mb-20">
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 max-w-4xl mx-auto">
              <img src={brand1} alt="Brand 1" className="h-8 object-contain w-[140px] h-[25px]" />
              <img src={brand2} alt="Brand 2" className="h-8 object-contain w-[140px] h-[25px]" />
              <img src={brand3} alt="Brand 3" className="h-8 object-contain w-[140px] h-[25px]" />
              <img src={brand4} alt="Brand 4" className="h-8 object-contain w-[140px] h-[25px]" />
              <img src={brand5} alt="Brand 5" className="h-8 object-contain w-[140px] h-[25px]" />
            </div>
          </div>

        
          <div className="py-10 max-w-6xl border border-gray-200 rounded-2xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                
                <div className="text-center py-8 md:py-0 px-8 md:px-12">
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">99k</div>
                  <p className="text-gray-600">People have joined</p>
                </div>
                
                <div className="text-center py-8 md:py-0 px-8 md:px-12">
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">50k</div>
                  <p className="text-gray-600">VVIP users have joined</p>
                </div>
                
                <div className="text-center py-8 md:py-0 px-8 md:px-12">
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">100+</div>
                  <p className="text-gray-600">Big Companies have joined</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

     
   <section className="pt-20 pb-0 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <div className="space-y-8 pt-0 pb-20 mt-4">
     <div className="max-w-4xl mx-auto text-center sm:text-left -mt-8 sm:mt-0">
  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-12 leading-tight">
    The Most Trusted Cryptocurrency <br className="hidden sm:block" />
    <span className="sm:hidden"> </span>Platform
  </h2>
</div>
        
        <div className="flex items-start space-x-6 mb-8">
          <div className="flex-shrink-0 mt-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-base">
              01
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Sync between platforms
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              No matter if you're using our web interface or mobile app — your data is always synced. Just one account for all our services.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-6 mb-8">
          <div className="flex-shrink-0 mt-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-base">
              02
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              More focus, less clutter
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              No ads, just the crypto and content you love.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0 mt-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-base">
              03
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Security by default
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Enable privacy mode and app locking to protect your data.
            </p>
          </div>
        </div>
      </div>
      
      
     <div className="relative flex justify-center lg:justify-end h-full -mt-20 lg:-mt-40">
  <img 
    src={benefit}  
    alt="Mobile app interface showing cryptocurrency features" 
    className="w-full max-w-[708px] h-[400px] lg:h-[806px] object-contain"
  />
</div>
      
    </div>
  </div>
</section>

   
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
          <div className="lg:hidden text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                Create portfolio today
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Buy and sell popular digital currencies, keep track of them in the one place. 
                Has a variety of features that make it the best place to start trading
              </p>
              <div className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Started
                </button>
              </div>
            </div>
            
           
            <div className="flex justify-center">
              <img 
                src={man}  
                alt="Mobile app interface showing cryptocurrency features" 
                className="max-w-full h-[300px] object-contain"
              />
            </div>
          </div>

          
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
         
            <div className="relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
                <img 
                  src={man}  
                  alt="Mobile app interface showing cryptocurrency features" 
                  className="max-w-full h-[417px] object-contain"
                />
                </div>
                
              
                <div className="absolute top-16 left-16 w-16 h-0.5 bg-gray-300"></div>
                <div className="absolute top-20 left-12 w-20 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
          
            <div className="mt-12 lg:mt-0">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                  Create portfolio today
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Buy and sell popular digital currencies, keep track of them in the one place. 
                  Has a variety of features that make it the best place to start trading
                </p>
                <div className="pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <div>
        <GetStarted/>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <img 
          src={Testimonial}
          alt="Mobile app interface showing cryptocurrency features"
          className="w-full h-[508px] md:h-[900px] object-cover object-top"
        />
      </div>
      <div>
        <CTA/>
      </div>

      <Footer/>
    </>
  );
};

export default HeroSection;