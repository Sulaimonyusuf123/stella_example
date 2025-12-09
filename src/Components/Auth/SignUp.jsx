import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff, ChevronDown, ChevronLeft, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Main SignUp Component with Flow Management
export const SignUp = () => {
  const [currentStep, setCurrentStep] = useState('signup'); // 'signup' or 'verification'
  const [userEmail, setUserEmail] = useState('');

  return (
    <div>
      {currentStep === 'signup' && (
        <SignUpForm 
          onSignupComplete={(email) => {
            setUserEmail(email);
            setCurrentStep('verification');
          }} 
        />
      )}
      {currentStep === 'verification' && (
        <EmailVerification 
          email={userEmail}
          onBack={() => setCurrentStep('signup')}
        />
      )}
    </div>
  );
};

// Sign Up Form Component
const SignUpForm = ({ onSignupComplete }) => {
  const [activeTab, setActiveTab] = useState('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    referralCode: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const email = activeTab === 'email' ? formData.email : formData.phone + '@phone.com';
    onSignupComplete(email);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
      {/* Logo */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
            <h1 className="text-4xl font-bold">
              <span className="text-white">Stellar </span>
              <span className="text-cyan-400">Point</span>
            </h1>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Toggle Tabs */}
          <div className="flex items-center bg-slate-900/50 backdrop-blur-sm border-2 border-cyan-400 rounded-full p-1">
            <button
              type="button"
              onClick={() => setActiveTab('email')}
              className={`flex-1 py-3 rounded-full font-medium transition-all ${
                activeTab === 'email'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('phone')}
              className={`flex-1 py-3 rounded-full font-medium transition-all ${
                activeTab === 'phone'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Phone number
            </button>
          </div>

          {/* Email Input */}
          {activeTab === 'email' && (
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          )}

          {/* Phone Input */}
          {activeTab === 'phone' && (
            <div className="flex gap-2">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white hover:border-cyan-400 transition-colors"
              >
                <span className="text-xl">🇺🇸</span>
                <span>+1</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          )}

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Referral Code */}
          <div>
            <button
              type="button"
              onClick={() => setShowReferral(!showReferral)}
              className="flex items-center gap-2 text-white mb-2"
            >
              <span>Referral Code</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showReferral ? 'rotate-180' : ''}`} />
            </button>
            {showReferral && (
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleInputChange}
                placeholder="Enter referral code (optional)"
                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-800/50 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-0"
            />
            <label className="text-sm text-gray-400">
              By creating an account, I agree to Stellar Terms and Privacy Policy
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-4 bg-cyan-400 text-slate-900 rounded-full font-semibold hover:bg-cyan-500 transition-colors"
          >
            Sign Up to your account
          </button>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

// Email Verification Component
const EmailVerification = ({ email, onBack }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(50);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(50);
    setCode(['', '', '', '', '', '']);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="absolute -top-16 left-0 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
        >
          <ChevronLeft className="w-6 h-6" />
          <span>Back</span>
        </button>

        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            <span className="text-white">Stellar </span>
            <span className="text-cyan-400">Point</span>
          </h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-semibold mb-3">
            Email Verification Code
          </h2>
          <p className="text-gray-400 text-sm">
            Please enter the verification code sent to{' '}
            <span className="text-cyan-400">{email}</span>
            <button 
              onClick={onBack}
              className="inline-block ml-2 text-cyan-400 hover:text-cyan-300"
            >
              <Edit2 className="w-3 h-3 inline" />
            </button>
          </p>
        </div>

        {/* Code inputs */}
        <div className="flex gap-3 justify-center mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl text-white text-center text-xl font-semibold focus:outline-none focus:border-cyan-400 transition-colors"
            />
          ))}
        </div>

        {/* Resend section */}
        <div className="flex justify-between items-center text-sm mb-8">
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Didn't receive email?
          </button>
          <div className="text-gray-400">
            <span className="mr-4">
              {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
            </span>
            <button 
              onClick={handleResend}
              disabled={timer > 0}
              className={`${timer > 0 ? 'text-gray-600 cursor-not-allowed' : 'text-cyan-400 hover:text-cyan-300'} transition-colors`}
            >
              Resend
            </button>
          </div>
        </div>

        {/* Verify Button */}
        <button
          onClick={() => console.log('Verification code:', code.join(''))}
          className="w-full py-4 bg-cyan-400 text-slate-900 rounded-full font-semibold hover:bg-cyan-500 transition-colors"
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};