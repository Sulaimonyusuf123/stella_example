import React from 'react'
import bitcoin from '../Components/Images/bitcoin.png'
import ethereum from '../Components/Images/Etherum.png'
import tether from '../Components/Images/tether.png'
import ripple from '../Components/Images/ripple.png'
import dogecoin from '../Components/Images/dogecoin.png'
import chart1 from '../Components/Images/chart1.png'
import chart2 from '../Components/Images/chart1.png'
import chart3 from '../Components/Images/chart1.png'
import chart4 from '../Components/Images/chart1.png'
import chart5 from '../Components/Images/chart1.png'

const marketData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$94,456.987',
    change: '+16.5',
    isPositive: true,
    icon: bitcoin,
    chart: chart1
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$50,632.964',
    change: '-10.8',
    isPositive: false,
    icon: ethereum,
    chart: chart2
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: '$15,896.123',
    change: '-5.8',
    isPositive: false,
    icon: tether,
    chart: chart3
  },
  {
    id: 4,
    name: 'Ripple',
    symbol: 'XRP',
    price: '$5,548.621',
    change: '+14.6',
    isPositive: true,
    icon: ripple,
    chart: chart4
  },
  {
    id: 5,
    name: 'Dogecoin',
    symbol: 'Dodge',
    price: '$15,548.621',
    change: '+14.6',
    isPositive: true,
    icon: dogecoin,
    chart: chart5
  }
]

export const Market = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Container matching Header's max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className='flex items-center justify-center md:justify-start gap-3 mb-8'>
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Market</h1>
          <h1 className='text-3xl md:text-4xl font-bold text-white'>Trend</h1>
        </div>
        
        {/* Table Container */}
        <div className="bg-[#1a1a1a] backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left p-3 md:p-6 text-gray-400 font-medium text-xs md:text-base hidden md:table-cell">#</th>
                  <th className="text-left p-3 md:p-6 text-gray-400 font-medium text-xs md:text-base">Name</th>
                  <th className="text-left p-3 md:p-6 text-gray-400 font-medium text-xs md:text-base">Price</th>
                  <th className="text-left p-3 md:p-6 text-gray-400 font-medium text-xs md:text-base hidden sm:table-cell">24h Changes</th>
                  <th className="text-left p-3 md:p-6 text-gray-400 font-medium text-xs md:text-base hidden lg:table-cell">Chart</th>
                  <th className="text-left p-3 md:p-6 text-gray-400 font-medium text-xs md:text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((crypto) => (
                  <tr key={crypto.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                    <td className="p-3 md:p-6 text-gray-300 text-xs md:text-base hidden md:table-cell">{crypto.id}</td>
                    <td className="p-3 md:p-6">
                      <div className="flex items-center gap-2 md:gap-3">
                        <img src={crypto.icon} alt={crypto.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
                        <div>
                          <div className="text-white font-medium text-xs md:text-base">{crypto.name}</div>
                          <div className="text-gray-500 text-xs">{crypto.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 md:p-6 text-white font-medium text-xs md:text-base">{crypto.price}</td>
                    <td className="p-3 md:p-6 hidden sm:table-cell">
                      <span className={`text-xs md:text-base ${crypto.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {crypto.change}
                      </span>
                    </td>
                    <td className="p-3 md:p-6 hidden lg:table-cell">
                      <img src={crypto.chart} alt="chart" className="h-12 w-32 object-contain" />
                    </td>
                    <td className="p-3 md:p-6">
                      <button className="text-cyan-500 hover:text-cyan-600 font-medium transition-colors text-xs md:text-base">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}