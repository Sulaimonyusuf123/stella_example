import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Maximize2, Info } from 'lucide-react';
import { ComposedChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import bit from "../Images/Crypto.png"

const cryptoData = [
  { symbol: 'BTC', name: 'Bitcoin', price: '90,990.4231', change: '+86.5', color: '#F7931A', isPositive: true },
  { symbol: 'ETH', name: 'Ethereum', price: '4,710.418', change: '-4.5', color: '#627EEA', isPositive: false },
  { symbol: 'USDT', name: 'Tether', price: '80,000', change: '+11.6', color: '#26A17B', isPositive: true },
  { symbol: 'CDN', name: 'CDN Coin', price: '391,610.513', change: '+22.5', color: '#E84142', isPositive: true },
  { symbol: 'BTCH', name: 'Bitcoin Cash', price: '789,741.123', change: '-18.9', color: '#8B5CF6', isPositive: false },
  { symbol: 'QTUM', name: 'Qtum', price: '29,715.863', change: '-10.0', color: '#3D9AD3', isPositive: false },
  { symbol: 'BTM', name: 'Bytom', price: '3,896.753', change: '+16.5', color: '#666666', isPositive: true },
  { symbol: 'BTCD', name: 'BitcoinDark', price: '743,321.458', change: '-16.5', color: '#F7931A', isPositive: false },
  { symbol: 'BTS', name: 'BitShares', price: '6,852.120', change: '+41.8', color: '#35BAEB', isPositive: true },
  { symbol: 'CHIPS', name: 'Chips', price: '65,710.413', change: '-63.5', color: '#667EEA', isPositive: false },
  { symbol: 'CHAIN', name: 'Chain', price: '96,750.413', change: '-6.5', color: '#3D9AD3', isPositive: false },
  { symbol: 'COQUI', name: 'Coqui', price: '29,710.413', change: '+11.6', color: '#10B981', isPositive: true },
  { symbol: 'VERI', name: 'Veritaseum', price: '80,000', change: '+11.6', color: '#F59E0B', isPositive: true },
  { symbol: 'CMT', name: 'CyberMiles', price: '96,750.413', change: '-6.5', color: '#94A3B8', isPositive: false },
];

const chartData = Array.from({ length: 100 }, (_, i) => {
  const base = 4200 + Math.random() * 1000;
  const open = base + Math.random() * 100;
  const close = base + Math.random() * 100;
  const high = Math.max(open, close) + Math.random() * 50;
  const low = Math.min(open, close) - Math.random() * 50;
  
  return {
    time: i,
    open,
    close,
    high,
    low,
    isGreen: close > open,
  };
});

const orderBookData = Array(40).fill(null).map((_, i) => ({
  price: (57671.20 + Math.random() * 100).toFixed(2),
  amount: (0.000265 + Math.random() * 0.0001).toFixed(6),
  total: (15.2829 + Math.random() * 5).toFixed(4),
  isBuy: i > 19
}));

export const Spot = () => {
  const [activeTab, setActiveTab] = useState('SPOT');
  const [filterTab, setFilterTab] = useState('All');
  const [orderBookTab, setOrderBookTab] = useState('Order Book');
  const [buyTab, setBuyTab] = useState('Limit');
  const [sellTab, setSellTab] = useState('Limit');
  const [timeframe, setTimeframe] = useState('1H');

  const CandlestickBar = (props) => {
    const { x, y, width, payload } = props;
    const { open, close, high, low, isGreen } = payload;
    
    const color = isGreen ? '#10B981' : '#EF4444';
    const bodyHeight = Math.abs(close - open);
    const bodyY = Math.min(open, close);
    
    return (
      <g>
        <line
          x1={x + width / 2}
          y1={y}
          x2={x + width / 2}
          y2={y + (high - low)}
          stroke={color}
          strokeWidth={1}
        />
        <rect
          x={x}
          y={y + (high - Math.max(open, close))}
          width={width}
          height={bodyHeight || 1}
          fill={color}
        />
      </g>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4">
      {/* Header */}

      <div className="grid grid-cols-12 gap-4">
        
        {/* LEFT COLUMN */}
        <div className="col-span-7 space-y-4">
          
         {/* Price Header */}
<div className="bg-[#1a1a1a] rounded-2xl p-3">
  <div className="flex items-center justify-between">
    {/* Left Section */}
    <div className="flex items-center gap-2">
      <img src={bit} alt="Bitcoin" className="w-8 h-8 rounded-full" />
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-semibold whitespace-nowrap">BTC/USDT</span>
          <span className="text-gray-400 text-[10px] whitespace-nowrap">Bitcoin Price</span>
        </div>
        <div className="flex flex-col">
          <span className="text-green-500 text-lg font-bold whitespace-nowrap">98,759.89</span>
          <span className="text-gray-400 text-[10px] whitespace-nowrap">$98,759.89</span>
        </div>
      </div>
    </div>
    
    {/* Right Section - Stats */}
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <span className="text-gray-400 text-[10px] whitespace-nowrap">24h Change(BTC)</span>
        <span className="text-green-500 font-medium text-xs whitespace-nowrap">1,395.90 +1.43%</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400 text-[10px] whitespace-nowrap">24h High</span>
        <span className="font-medium text-xs whitespace-nowrap">98,962.45</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400 text-[10px] whitespace-nowrap">24h Low</span>
        <span className="font-medium text-xs whitespace-nowrap">94,256.54</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400 text-[10px] whitespace-nowrap">24h Change(BTC)</span>
        <span className="text-green-500 font-medium text-xs whitespace-nowrap">1,395.90 +1.43%</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400 text-[10px] whitespace-nowrap">24h Volume(USDT)</span>
        <span className="font-medium text-xs whitespace-nowrap">4,478,743,406.67</span>
      </div>
    </div>
  </div>
</div>
          {/* Chart */}
          <div className="bg-[#1a1a1a] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Time</span>
                {['1s', '15m', '1H', '4H', '1D', '1W'].map((time) => (
                  <button
                    key={time}
                    onClick={() => setTimeframe(time)}
                    className={`text-sm px-3 py-1 rounded transition-colors ${timeframe === time ? 'text-[#00d9a3]' : 'text-gray-400 hover:text-white'}`}
                  >
                    {time}
                  </button>
                ))}
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <Maximize2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
            </div>
            
            <div className="flex items-center gap-6 text-sm mb-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Open:</span>
                <span className="text-green-500">4011.90</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">High:</span>
                <span className="text-green-500">4011.90</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Low:</span>
                <span className="text-green-500">4011.90</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Close:</span>
                <span className="text-green-500">4011.90</span>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={chartData}>
                <XAxis 
                  dataKey="time" 
                  stroke="#2a2a2a"
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#2a2a2a"
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  domain={['dataMin - 100', 'dataMax + 100']}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar
                  dataKey="high"
                  shape={<CandlestickBar />}
                  fill="#10B981"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Trading Options */}
          <div className="flex items-center justify-between bg-[#1a1a1a] rounded-2xl p-3">
            <button className="px-6 py-2 bg-[#2a2a2a] rounded-lg text-sm font-medium">Spot</button>
            <button className="flex items-center gap-2 px-6 py-2 text-sm text-gray-400 hover:text-white">
              Cross Margin <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-6 py-2 text-sm text-gray-400 hover:text-white">Spot Trading Bot</button>
            <button className="px-6 py-2 text-sm text-gray-400 hover:text-white">Grid</button>
          </div>






          {/* Buy/Sell Forms */}
          <div className="grid grid-cols-2 gap-4">
            {/* Buy Form */}
            <div className="bg-[#1a1a1a] rounded-2xl p-4">
              <div className="flex gap-4 mb-4">
                {['Limit', 'Market', 'Spot Limit', 'Grid Trading'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setBuyTab(tab)}
                    className={`text-sm ${buyTab === tab ? 'text-[#00d9a3]' : 'text-gray-400 hover:text-white'} ${tab === 'Spot Limit' ? 'flex items-center gap-1' : ''}`}
                  >
                    {tab}
                    {tab === 'Spot Limit' && <Info className="w-3 h-3" />}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Limit Price</span>
                  <div className="flex items-center gap-2">
                    <span>31,164.55</span>
                    <span className="text-gray-400">USDT</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Quantity</span>
                  <div className="flex items-center gap-2">
                    <span>1</span>
                    <span className="text-gray-400">BTC</span>
                  </div>
                </div>

                <input type="range" className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00d9a3]" />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Order Value</span>
                  <div className="flex items-center gap-2">
                    <span>31,164.55</span>
                    <span className="text-gray-400">USDT</span>
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors">
                  Buy BTC
                </button>
              </div>
            </div>

            {/* Sell Form */}
            <div className="bg-[#1a1a1a] rounded-2xl p-4">
              <div className="flex gap-4 mb-4">
                {['Limit', 'Market', 'Spot Limit', 'Grid Trading'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSellTab(tab)}
                    className={`text-sm ${sellTab === tab ? 'text-[#00d9a3]' : 'text-gray-400 hover:text-white'} ${tab === 'Spot Limit' ? 'flex items-center gap-1' : ''}`}
                  >
                    {tab}
                    {tab === 'Spot Limit' && <Info className="w-3 h-3" />}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Limit Price</span>
                  <div className="flex items-center gap-2">
                    <span>31,164.55</span>
                    <span className="text-gray-400">USDT</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Quantity</span>
                  <div className="flex items-center gap-2">
                    <span>1</span>
                    <span className="text-gray-400">BTC</span>
                  </div>
                </div>

                <input type="range" className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500" />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Order Value</span>
                  <div className="flex items-center gap-2">
                    <span>31,164.55</span>
                    <span className="text-gray-400">USDT</span>
                  </div>
                </div>

                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">
                  Sell BTC
                </button>
              </div>
            </div>
          </div>
        </div>









        {/* RIGHT COLUMN */}
        <div className="col-span-5 flex flex-col gap-4">
          
          {/* Market List - Full height, no scrolling */}
          <div className="bg-[#1a1a1a] rounded-2xl p-4 flex flex-col">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button 
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'SPOT' ? 'bg-[#2a2a2a] text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('SPOT')}
              >
                SPOT
              </button>
              <button 
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'Futures' ? 'bg-[#2a2a2a] text-white' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('Futures')}
              >
                Futures
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#2a2a2a] text-white pl-10 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00d9a3]"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4">
              {['All', 'USD', 'USDT'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterTab === tab ? 'bg-[#2a2a2a] text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Headers */}
            <div className="flex justify-between text-xs text-gray-400 mb-2 px-2">
              <span>Market</span>
              <span>Price</span>
              <span>24h</span>
            </div>

            {/* Crypto List - Full display, no scrolling */}
            <div className="space-y-1">
              {cryptoData.map((crypto) => (
                <div key={crypto.symbol} className="flex items-center justify-between py-2 hover:bg-[#2a2a2a] rounded-lg px-2 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: crypto.color }}>
                      {crypto.symbol.charAt(0)}
                    </div>
                    <span className="text-sm font-medium">{crypto.symbol}</span>
                  </div>
                  <span className="text-sm text-gray-300 flex-1 text-center">{crypto.price}</span>
                  <span className={`text-xs px-2 py-1 rounded flex-shrink-0 ${crypto.isPositive ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                    {crypto.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Book - Full height, no scrolling */}
          <div className="bg-[#1a1a1a] rounded-2xl p-4 flex flex-col">
            <div className="flex gap-4 mb-4">
              {['Order Book', 'More Trade'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setOrderBookTab(tab)}
                  className={`text-sm font-medium ${orderBookTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Order Book Icons */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-red-500 rounded-sm"></div>
                <div className="w-1 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-1 h-3 bg-red-500 rounded-sm"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <span>0.01</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            {/* Order Book Headers */}
            <div className="grid grid-cols-3 text-xs text-gray-400 mb-2">
              <span>Price</span>
              <span className="text-center">Amount</span>
              <span className="text-right">Total</span>
            </div>

            {/* Order Book List - Full display, no scrolling */}
            <div className="space-y-0.5">
              {orderBookData.map((order, i) => (
                <div key={i} className="grid grid-cols-3 text-xs py-0.5">
                  <span className={order.isBuy ? 'text-green-500' : 'text-red-500'}>{order.price}</span>
                  <span className="text-gray-300 text-center">{order.amount}</span>
                  <span className="text-gray-300 text-right">{order.total}</span>
                </div>
              ))}
              
              {/* Current Price */}
              <div className="flex items-center justify-between bg-[#2a2a2a] rounded-lg p-2 my-2">
                <span className="text-green-500 font-bold text-sm">98,759.89</span>
                <span className="text-gray-400 text-xs">$98,759.89</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Buy/Sell Indicator */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex-1 flex items-center gap-2">
                <span className="text-xs text-gray-400">B</span>
                <span className="text-xs text-green-500">4.82%</span>
                <div className="flex-1 h-1 bg-green-500 rounded"></div>
              </div>
              <div className="flex-1 flex items-center gap-2 justify-end">
                <div className="flex-1 h-1 bg-red-500 rounded"></div>
                <span className="text-xs text-red-500">91.18%</span>
                <span className="text-xs text-gray-400">S</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};