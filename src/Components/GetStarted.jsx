import React from 'react';
// Import your feature images
import feature from './feature5.png';
import feature1 from './feature6.png';
import feature2 from './feature7.png';

const GetStartedSection = () => {
  const steps = [
    {
      id: 1,
      image: feature1, // Sign Up image
      title: "Sign Up",
      description: "Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends"
    },
    {
      id: 2,
      image: feature2, // Fund image  
      title: "Fund",
      description: "Choose you preferred payment method such as bank transfer or credit card to top up your wallet"
    },
    {
      id: 3,
      image: feature, // Buy Crypto image
      title: "Buy Crypto",
      description: "Sign up for free wallet on web, iOS or Android and follow our easy process to set up your profile"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started in Just<br />Few Minute
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Has a variety of features that make it the best place to start trading
          </p>
        </div>
                        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Single Card Container with Image and Text */}
              <div className="bg-white rounded-3xl shadow-lg p-8 mx-auto max-w-sm">
                {/* Image Container */}
                <div className="flex justify-center items-center h-48 mb-6">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                                                
                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;