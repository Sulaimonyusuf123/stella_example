import React from 'react';
import { ChevronRight, Shield, CreditCard, Settings } from 'lucide-react';
import headImg from '../Images/Component.png';

export const Overview = () => {
  const loginActivity = [
    { time: '2025-04-24 19:50:45', status: 'Success', ip: '192.72.134.201' },
    { time: '2025-04-24 19:50:45', status: 'Fail', ip: '176.82.123.201' },
    { time: '2025-04-20 19:50:45', status: 'Success', ip: '176.82.123.201' },
    { time: '2025-04-20 19:50:45', status: 'Success', ip: '176.82.123.201' }
  ];

  return (
    <div className="p-4 md:p-8 bg-black min-h-screen text-white">
      <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Setting</h2>
      
      {/* User Info Card */}
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <img
            src={headImg}
            alt="User"
            className="w-16 h-16 rounded-full object-cover"
          />
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1 w-full">
            <div>
              <p className="text-sm text-gray-400 mb-1">User ID</p>
              <p className="font-semibold">88230293</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-gray-400">Identity Verification</p>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <p className="text-teal-400 text-sm">Unverified</p>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-gray-400">Security</p>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
                <p className="text-red-500 text-sm">Low</p>
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">Last login</p>
                <p className="text-sm">09/16/2025, Austin, Texas</p>
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">Time Zone</p>
                <p className="text-sm">Chicago (GMT-6)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Center */}
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-base md:text-lg mb-1">Security Center</p>
              <p className="text-sm text-gray-400">
                Your current security Level <span className="text-red-500 ml-2">Low</span>
              </p>
            </div>
          </div>
          <button className="text-teal-400 flex items-center gap-2 hover:text-teal-300 transition-colors text-sm md:text-base">
            Upgrade <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Identification */}
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-base md:text-lg mb-1">Identification</p>
              <p className="text-sm text-gray-400">
                Verification level <span className="text-teal-400 ml-2">Unverified</span>
              </p>
            </div>
          </div>
          <button className="text-teal-400 flex items-center gap-2 hover:text-teal-300 transition-colors text-sm md:text-base">
            Verify now <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Preference Settings */}
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-base md:text-lg mb-1">Preference Settings</p>
              <p className="text-sm text-gray-400">Verification level</p>
            </div>
          </div>
          <button className="text-teal-400 flex items-center gap-2 hover:text-teal-300 transition-colors text-sm md:text-base">
            Manage <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Log In Activity */}
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Log In Activity</h3>
        
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-medium text-gray-400 whitespace-nowrap">Time</th>
                  <th className="text-left py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-medium text-gray-400 whitespace-nowrap">Login Status</th>
                  <th className="text-left py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm font-medium text-gray-400 whitespace-nowrap">IP</th>
                </tr>
              </thead>
              <tbody>
                {loginActivity.map((activity, index) => (
                  <tr key={index} className="border-b border-gray-800/50 last:border-0">
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm whitespace-nowrap">{activity.time}</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm">
                      <span className={activity.status === 'Success' ? 'text-green-500' : 'text-red-500'}>
                        {activity.status}
                      </span>
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-xs md:text-sm whitespace-nowrap">{activity.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};