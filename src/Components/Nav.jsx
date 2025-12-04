// import React, { useState } from 'react';
// import { Search, Bell, Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export const Nav = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <Link to="/">
//             <div className="text-xl sm:text-2xl font-bold cursor-pointer">
//               <span className="text-white">Stellar</span>
//               <span className="text-cyan-400"> Point</span>
//             </div>
//           </Link>

//           {/* Desktop Menu Items */}
//           <div className="hidden lg:flex items-center space-x-8 text-gray-300">
//             <Link to="/market" className="hover:text-white transition">Market</Link>
//             <Link to="/spot" className="hover:text-white transition">Spot</Link>
//             <Link to="/support" className="hover:text-white transition">Support</Link>
//             <Link to="/learn" className="hover:text-white transition">Learn</Link>
//           </div>

//           {/* Desktop Right Side Actions */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <button className="p-2 hover:bg-slate-800 rounded-lg transition">
//               <Search className="w-5 h-5 text-gray-300" />
//             </button>
//             <button className="p-2 hover:bg-slate-800 rounded-lg transition relative">
//               <Bell className="w-5 h-5 text-gray-300" />
//             </button>
//             <Link to="/signup">
//               <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-medium">
//                 Sign up
//               </button>
//             </Link>
//             <Link to="/login">
//               <button className="px-6 py-2 border border-slate-700 text-white rounded-lg hover:border-slate-600 transition font-medium">
//                 Log in
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6 text-white" />
//             ) : (
//               <Menu className="w-6 h-6 text-white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu - Compact Dropdown on Right */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden absolute right-4 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-md rounded-xl border border-slate-800 shadow-xl">
//           <div className="py-2">
//             <Link to="/market" className="block text-gray-300 hover:text-white hover:bg-slate-800 transition px-4 py-2.5 text-sm">Market</Link>
//             <Link to="/spot" className="block text-gray-300 hover:text-white hover:bg-slate-800 transition px-4 py-2.5 text-sm">Spot</Link>
//             <Link to="/support" className="block text-gray-300 hover:text-white hover:bg-slate-800 transition px-4 py-2.5 text-sm">Support</Link>
//             <Link to="/learn" className="block text-gray-300 hover:text-white hover:bg-slate-800 transition px-4 py-2.5 text-sm">Learn</Link>
            
//             <div className="border-t border-slate-800 my-2"></div>
            
//             <div className="flex items-center gap-2 px-4 py-2">
//               <button className="p-2 hover:bg-slate-800 rounded-lg transition">
//                 <Search className="w-4 h-4 text-gray-300" />
//               </button>
//               <button className="p-2 hover:bg-slate-800 rounded-lg transition">
//                 <Bell className="w-4 h-4 text-gray-300" />
//               </button>
//             </div>
            
//             <div className="px-4 py-2 space-y-2">
//               <Link to="/signup" className="block">
//                 <button className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-medium text-sm">
//                   Sign up
//                 </button>
//               </Link>
//               <Link to="/login" className="block">
//                 <button className="w-full px-4 py-2 border border-slate-700 text-white rounded-lg hover:border-slate-600 transition font-medium text-sm">
//                   Log in
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// when i seperate the header and the navbar


// import React from 'react';
// import { Link } from 'react-router-dom';
// import headerBg from '../Components/Images/background.png';

// export const Header = () => {
//   return (
//     <div className="relative min-h-[80vh] overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img src={headerBg} alt="" className="w-full h-full object-cover object-center" />
//       </div>

//       {/* Hero Section */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-56">
//         <div className="max-w-2xl mx-auto text-center">
//           {/* Main Headline */}
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
//             Take <span className="text-cyan-400">control</span> of the <span className="text-cyan-400">crypto</span> market.
//             <br />
//             Build unstoppable <span className="text-cyan-400">wealth</span>.
//           </h1>

//           {/* Subheadline */}
//           <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 max-w-xl mx-auto px-2">
//             Stellar Point is your gateway into the world of cryptocurrency. Whether you're a beginner or a 
//             seasoned investor, our platform helps you build wealth through simple, fast, and intelligent crypto 
//             investing.
//           </p>

//           {/* Trust Indicators */}
//           <div className="flex items-center justify-center space-x-3 sm:space-x-6 mb-6 sm:mb-8 text-xs sm:text-sm mt-6 sm:mt-12">
//             <span className="text-white">Safe</span>
//             <span className="text-gray-300">Fast</span>
//             <span className="text-gray-300">Stable</span>
//             <span className="text-gray-300">Reliable</span>
//           </div>

//           {/* CTA Button */}
//           <Link to="/signup">
//             <button className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-medium text-sm sm:text-base lg:text-lg mt-6 sm:mt-8">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Stats Bar */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 lg:mt-36 mb-8 sm:mb-12">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-800">
//           <div className="text-center lg:text-left">
//             <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">48K+</div>
//             <div className="text-gray-400 text-xs sm:text-sm">Active investors</div>
//           </div>
//           <div className="text-center lg:text-left">
//             <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">$0.84B</div>
//             <div className="text-gray-400 text-xs sm:text-sm">24h trading volume</div>
//           </div>
//           <div className="text-center lg:text-left">
//             <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">300+</div>
//             <div className="text-gray-400 text-xs sm:text-sm">Digital assets</div>
//           </div>
//           <div className="text-center lg:text-left">
//             <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">92+</div>
//             <div className="text-gray-400 text-xs sm:text-sm">Countries</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };