import React, { useState } from 'react';
import { ChevronRight, AlertCircle } from 'lucide-react';
import verifyImg from '../Images/email.png';
import phoneImg from '../Images/phone.png';
import autImg from '../Images/aut.png';
import loginImg from '../Images/login.png';
import antiImg from '../Images/anti.png';
import googleImg from '../Images/Google.png';
import notImg from '../Images/Status.png';

export const Security = () => {
  const [antiPhishingEnabled, setAntiPhishingEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6">
      <div className="max-w-full md:max-w-[calc(100%-2rem)] w-full">
        {/* Two-Factor Authentication Section */}
        <div className="mb-6 md:mb-8 bg-[#141414] rounded-2xl p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Two-Factor Authentication (2FA)</h2>
          <p className="text-gray-400 text-sm mb-4 md:mb-6">Please go to two-factor authentication binding.</p>
          
          <div className="space-y-4">
            {/* Email Verification */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={verifyImg} alt="Email Verification" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm md:text-base">Email Verification</h3>
                  <p className="text-gray-400 text-xs md:text-sm">stellar@gmail.com</p>
                </div>
              </div>
              <button className="text-[#00d9a3] hover:text-[#00f5ba] font-medium flex items-center gap-1 text-sm md:text-base self-start sm:self-auto">
                Change
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Phone Number Verification */}
            <div className="bg-[#1a1a1a] rounded-xl p-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={phoneImg} alt="Phone Verification" className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1 text-sm md:text-base">Phone Number Verification</h3>
                    <p className="text-gray-400 text-xs md:text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <img src={notImg} alt="Not configured" className="w-4 h-4" />
                    <span className="text-xs md:text-sm">Not configured</span>
                  </div>
                  <button className="text-[#00d9a3] hover:text-[#00f5ba] font-medium flex items-center gap-1 text-sm md:text-base">
                    Change
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Authenticator App */}
            <div className="bg-[#1a1a1a] rounded-xl p-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={autImg} alt="Authenticator App" className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1 text-sm md:text-base">Authenticator App</h3>
                    <p className="text-gray-400 text-xs md:text-sm">for login, withdrawals, security, and API</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <img src={notImg} alt="Not configured" className="w-4 h-4" />
                    <span className="text-xs md:text-sm">Not configured</span>
                  </div>
                  <button className="text-[#00d9a3] hover:text-[#00f5ba] font-medium flex items-center gap-1 text-sm md:text-base">
                    Change
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Settings Section */}
        <div className="mb-6 md:mb-8 bg-[#141414] rounded-2xl p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Advanced Settings</h2>
          <p className="text-gray-400 text-sm mb-4 md:mb-6">Please go to two-factor authentication binding.</p>
          
          <div className="space-y-4">
            {/* Login Password */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={loginImg} alt="Login Password" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm md:text-base">Login password</h3>
                  <p className="text-gray-400 text-xs md:text-sm">For protecting account security</p>
                </div>
              </div>
              <button className="text-gray-300 hover:text-white font-medium flex items-center gap-1 text-sm md:text-base self-start sm:self-auto">
                Setting
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Anti-Phishing Code */}
            <div className="bg-[#1a1a1a] rounded-xl p-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={antiImg} alt="Anti-Phishing Code" className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1 text-sm md:text-base">Anti-Phishing Code</h3>
                    <p className="text-gray-400 text-xs md:text-sm">Our emails have an anti-phishing code.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <img src={notImg} alt="Not Enabled" className="w-4 h-4" />
                    <span className="text-xs md:text-sm">Not Enabled</span>
                  </div>
                  <button
                    onClick={() => setAntiPhishingEnabled(!antiPhishingEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      antiPhishingEnabled ? 'bg-[#00d9a3]' : 'bg-[#2a2a2a]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                        antiPhishingEnabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third-party Account Management Section */}
        <div className="bg-[#141414] rounded-2xl p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Third-party Account Management</h2>
          
          <div className="bg-[#1a1a1a] rounded-xl p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={googleImg} alt="Google" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1 text-sm md:text-base">Google</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Log in with Google</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <img src={notImg} alt="Not bound" className="w-4 h-4" />
                  <span className="text-xs md:text-sm">Not bound</span>
                </div>
                <button className="text-[#00d9a3] hover:text-[#00f5ba] font-medium text-sm md:text-base">
                  Bind
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};