import React, { useState } from 'react';
import { Search } from 'lucide-react';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import image4 from '../Images/image4.png';
import chart1 from '../Images/chart.png';
import btcIcon from '../Images/bitcoin.png';
import indicator from '../Images/indicator.png';

export default function Transaction() {
  const [activeTab, setActiveTab] = useState('AI Trade');
  
  const tabs = ['All Traders', 'AI Trade', 'Leaderboard', 'Long Positions', 'Short Position'];
  
  const tradingCards = [
    {
      id: 1,
      image: image1,
      coin: 'Bitcoin',
      symbol: 'BTC',
      amount: '6,882',
      usdValue: '$95,518.00',
      trader: 'Bybit AI Copy Trade',
      totalTrade: '2790',
      position: 'Long',
      profit: '+14.25%',
      successRate: '96%'
    },
    {
      id: 2,
      image: image2,
      coin: 'Ethereum',
      symbol: 'ETH',
      amount: '6,882',
      usdValue: '$5,518.00',
      trader: 'Bitget AI Copy Trade',
      totalTrade: '2790',
      position: 'Long',
      profit: '+14.25%',
      successRate: '96%'
    },
    {
      id: 3,
      image: image3,
      coin: 'Bitcoin',
      symbol: 'BTC',
      amount: '6,882',
      usdValue: '$95,518.00',
      trader: 'Binance AI Copy Trade',
      totalTrade: '2790',
      position: 'Long',
      profit: '+14.25%',
      successRate: '96%'
    },
    {
      id: 4,
      image: image4,
      coin: 'Ethereum',
      symbol: 'ETH',
      amount: '6,882',
      usdValue: '$5,518.00',
      trader: 'Gate.io',
      totalTrade: '2790',
      position: 'Long',
      profit: '+14.25%',
      successRate: '96%'
    }
  ];

  const cryptoList = [
    { symbol: 'BTC', name: 'Bitcoin', price: '95,695.4213', change: '+0.65%', isPositive: true },
    { symbol: 'ETH', name: 'Ethereum', price: '4,719.45', change: '-1.20%', isPositive: false },
    { symbol: 'USDT', name: 'Tether', price: '1.00', change: '+0.01%', isPositive: true },
    { symbol: 'CDN', name: 'CDN Coin', price: '89,690.513', change: '+0.25%', isPositive: true },
    { symbol: 'BTCH', name: 'Bitcoin Cash', price: '789,745.03', change: '-0.85%', isPositive: false },
    { symbol: 'QTUM', name: 'Qtum', price: '23,715.863', change: '-0.45%', isPositive: false },
    { symbol: 'BTM', name: 'Bytom', price: '3,898,753', change: '+1.15%', isPositive: true },
    { symbol: 'BTCD', name: 'BitcoinDark', price: '743,235.458', change: '-0.92%', isPositive: false },
    { symbol: 'BTS', name: 'BitShares', price: '8,923,230', change: '+0.38%', isPositive: true },
    { symbol: 'CHIPS', name: 'CHIPS', price: '89,745.43', change: '-1.15%', isPositive: false },
    { symbol: 'CHAIN', name: 'Chain', price: '95,715.943', change: '-0.73%', isPositive: false },
    { symbol: 'COQUI', name: 'Coqui Cash', price: '28,715.43', change: '+0.95%', isPositive: true },
    { symbol: 'VERI', name: 'Veritaseum', price: '60.00', change: '+2.15%', isPositive: true },
    { symbol: 'CMT', name: 'CyberMiles', price: '95,715.43', change: '-0.55%', isPositive: false }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Copy Trade</h1>
        
        {/* Tabs */}
        <div className="flex gap-2 md:gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium transition-all text-sm md:text-base ${
                activeTab === tab
                  ? 'bg-[#00d9c6] text-black'
                  : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        <div className="w-full lg:flex-1 space-y-4 md:space-y-6">
          {tradingCards.map((card) => (
            <div key={card.id} className="bg-[#1a1a1a] rounded-2xl p-4 md:p-6 relative">
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                
                {/* FIRST FLEX - Robot Image - Hidden on mobile */}
                <div className="hidden md:block w-40 flex-shrink-0 self-stretch">
                  <img src={card.image} alt="Robot" className="w-full h-full object-cover rounded-xl" />
                </div>

                {/* SECOND FLEX - Bitcoin Icon, Text, Chart, Price, Trader Info, Copy Button */}
                <div className="flex-1">
                  {/* Bitcoin Icon and Text */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      ₿
                    </div>
                    <span className="text-lg font-semibold">{card.coin}</span>
                  </div>

                  {/* Chart below bitcoin icon and text */}
                  <div className="mb-4">
                    <img src={chart1} alt="Chart" className="w-full h-16 md:h-20 object-contain" />
                  </div>

                  {/* 6,882 BTC below chart */}
                  <div className="mb-4">
                    <div className="text-xl md:text-2xl font-bold mb-1">
                      {card.amount} <span className="text-gray-500 text-sm md:text-base">{card.symbol}</span>
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">1 {card.symbol} = {card.usdValue}</div>
                  </div>

                  {/* Bybit AI Copy Trade below 6,882 BTC */}
                  <div className="mb-4">
                    <div className="text-white font-semibold text-base md:text-lg mb-1">{card.trader}</div>
                    <div className="text-gray-400 text-xs md:text-sm">Total Trade: {card.totalTrade}</div>
                  </div>

                  {/* Stats on mobile - visible only on small screens */}
                  <div className="md:hidden flex gap-4 mb-4">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Potential profit:</div>
                      <div className="text-green-400 font-semibold text-sm">{card.profit}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">Success Rate:</div>
                      <div className="text-green-400 font-semibold text-sm">{card.successRate}</div>
                    </div>
                  </div>

                  {/* Copy Trade Button at bottom */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-[#00d9c6] text-black px-6 md:px-8 py-2.5 rounded-lg font-semibold hover:bg-[#00c4b3] transition-colors text-sm md:text-base">
                      Copy Trade
                    </button>
                    <button className="md:hidden bg-transparent border-2 border-gray-600 text-white px-5 py-2 rounded-lg font-semibold hover:border-gray-500 transition-colors text-sm">
                      View Trade History
                    </button>
                  </div>
                </div>

                {/* THIRD FLEX - Indicator (Long/Short/Profit/View History) - Hidden on mobile */}
                <div className="hidden md:flex flex-col items-end justify-between min-w-[160px]">
                  {/* Green Active Indicator at top */}
                  <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
                  
                  {/* Long Badge */}
                  <span className="px-5 py-2 rounded-full text-sm font-medium mb-2 bg-green-500/20 text-green-400 border border-green-500/50">
                    Long
                  </span>
                  
                  {/* Short Text/Badge */}
                  <div className="text-gray-400 text-sm mb-4">Short</div>

                  {/* Potential Profit */}
                  <div className="text-right mb-3">
                    <div className="text-gray-400 text-xs mb-1">Potential profit:</div>
                    <div className="text-green-400 font-semibold text-base">{card.profit}</div>
                  </div>

                  {/* Success Rate */}
                  <div className="text-right mb-4">
                    <div className="text-gray-400 text-xs mb-1">Success Rate:</div>
                    <div className="text-green-400 font-semibold text-base">{card.successRate}</div>
                  </div>

                  {/* View Trade History Button */}
                  <button className="bg-transparent border-2 border-gray-600 text-white px-5 py-2 rounded-lg font-semibold hover:border-gray-500 transition-colors text-sm">
                    View Trade History
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              ‹
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#00d9c6] text-black rounded font-semibold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              3
            </button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              10
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              11
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              ›
            </button>
          </div>
        </div>

        {/* Right Sidebar - Market List and Trading Panel */}
        <div className="w-full lg:w-80 space-y-6">
          {/* Market List */}
          <div className="bg-[#1a1a1a] rounded-2xl p-4">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button className="flex-1 py-2 bg-[#0a0a0a] text-white rounded-lg font-medium text-sm md:text-base">SPOT</button>
              <button className="flex-1 py-2 text-gray-400 hover:bg-[#252525] rounded-lg font-medium text-sm md:text-base">Futures</button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-[#0a0a0a] text-white pl-10 pr-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-[#00d9c6] text-sm md:text-base"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4">
              <button className="px-3 md:px-4 py-1.5 bg-[#00d9c6] text-black rounded-lg text-xs md:text-sm font-medium">All</button>
              <button className="px-3 md:px-4 py-1.5 text-gray-400 hover:bg-[#252525] rounded-lg text-xs md:text-sm font-medium">USD</button>
              <button className="px-3 md:px-4 py-1.5 text-gray-400 hover:bg-[#252525] rounded-lg text-xs md:text-sm font-medium">USDT</button>
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-3 gap-2 mb-3 text-xs text-gray-500 font-medium px-2">
              <div>Market</div>
              <div className="text-right">Price</div>
              <div className="text-right">24h</div>
            </div>

            {/* Crypto List */}
            <div className="space-y-2">
              {cryptoList.map((crypto, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 items-center py-2 px-2 hover:bg-[#252525] rounded-lg transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
                      {crypto.symbol.slice(0, 1)}
                    </div>
                    <span className="text-xs md:text-sm font-medium">{crypto.symbol}</span>
                  </div>
                  <div className="text-right text-xs md:text-sm">{crypto.price}</div>
                  <div className="text-right">
                    <span className={`text-xs px-1.5 md:px-2 py-1 rounded ${
                      crypto.isPositive 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {crypto.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Buy/Sell Buttons */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-[#00d9c6] text-black py-2.5 rounded-lg font-semibold hover:bg-[#00c4b3] transition-colors text-sm md:text-base">
                Buy
              </button>
              <button className="flex-1 bg-red-500/20 text-red-400 py-2.5 rounded-lg font-semibold hover:bg-red-500/30 transition-colors border border-red-500/50 text-sm md:text-base">
                Sell
              </button>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="bg-[#1a1a1a] rounded-2xl p-4 md:p-6">
            {/* BTC Slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">₿</div>
                  <span className="font-semibold text-sm md:text-base">BTC</span>
                </div>
                <span className="text-xl md:text-2xl font-bold">0.1824</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.0001" 
                defaultValue="0.1824"
                className="w-full h-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full appearance-none cursor-pointer"
              />
            </div>

            {/* ETH Slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">Ξ</div>
                  <span className="font-semibold text-sm md:text-base">ETH</span>
                </div>
                <span className="text-xl md:text-2xl font-bold">6.1824</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10" 
                step="0.0001" 
                defaultValue="6.1824"
                className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full appearance-none cursor-pointer"
              />
            </div>

            {/* Exchange Rate */}
            <div className="text-center mb-6">
              <span className="text-gray-400 text-sm md:text-base">1 BTC = </span>
              <span className="text-white font-bold text-base md:text-lg">23.456 ETH</span>
            </div>

            {/* Buy Button */}
            <button className="w-full bg-[#00d9c6] text-black py-3 md:py-3.5 rounded-lg font-bold text-base md:text-lg hover:bg-[#00c4b3] transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}