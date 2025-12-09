import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Search, Clock, Wallet, Bell, ChevronDown, Home, ArrowLeftRight, Settings, Ticket, Gift, ChevronRight, Menu, X } from 'lucide-react';
import headImg from '../Images/Component.png';

// Sidebar Component
export const Sidebar = ({ isMobileOpen, onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState({ wallet: false, trade: false, setting: true });
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/dashboard' },
    { 
      id: 'wallet', 
      icon: Wallet, 
      label: 'Wallet',
      submenu: [
        { label: 'Asset', path: '/dashboard/wallet/asset' },
        { label: 'Deposit', path: '/dashboard/wallet/deposit' },
        { label: 'Withdraw', path: '/dashboard/wallet/withdraw' }
      ]
    },
    { 
      id: 'trade', 
      icon: ArrowLeftRight, 
      label: 'Trade',
      submenu: [
        { label: 'Spot Trading', path: '/dashboard/trade/spot-trading' },
        { label: 'Transaction History', path: '/dashboard/trade/transaction-history' }
      ]
    },
    { 
      id: 'setting', 
      icon: Settings, 
      label: 'Setting',
      submenu: [
        { label: 'Overview', path: '/dashboard/settings/overview' },
        { label: 'Security', path: '/dashboard/settings/security' },
        { label: 'Identification', path: '/dashboard/settings/identification' },
        { label: 'Account', path: '/dashboard/settings/account' }
      ]
    },
    { id: 'ticket', icon: Ticket, label: 'Ticket', path: '/dashboard/ticket' },
    { id: 'rewards', icon: Gift, label: 'Rewards', path: '/dashboard/rewards' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 bg-[#0a0a0a] border-r border-gray-800 flex flex-col h-screen
        fixed lg:relative z-50
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white">
            Stellar <span className="text-teal-400">Point</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.id} className="mb-1">
              <button
                onClick={() => {
                  if (item.submenu) {
                    toggleMenu(item.id);
                  } else {
                    handleNavigation(item.path);
                  }
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path) ? 'bg-gray-800 text-teal-400' : 'text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.submenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${expandedMenus[item.id] ? 'rotate-180' : ''}`}
                  />
                )}
              </button>

              {/* Submenu */}
              {item.submenu && expandedMenus[item.id] && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => handleNavigation(subItem.path)}
                      className={`w-full text-left px-8 py-2 rounded-lg text-sm transition-colors ${
                        isActive(subItem.path) ? 'text-teal-400 bg-gray-800/50' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={() => handleNavigation('/dashboard/account-settings')}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <img
              src={headImg}
              alt="Ricky Smith"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 text-left">
              <p className="font-medium text-sm text-white">Ricky Smith</p>
              <p className="text-teal-400 text-xs">Account Setting</p>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        </div>
      </aside>
    </>
  );
};

// Header Component
export const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-[#0a0a0a] border-b border-gray-800 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-400 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-xl lg:text-2xl font-bold text-white">
          <span className="text-teal-400"></span>
        </h1>

        <div className="flex items-center gap-3 lg:gap-6">
          <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
            <Clock size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors hidden md:block">
            <Wallet size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <img
            src={headImg}
            alt="User"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

// Layout Component
export const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black">
      <Sidebar 
        isMobileOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};