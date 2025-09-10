import React from 'react';
import Header from './Components/Header'; // Update path as needed
import HeroSection from './Components/HeroSection'; // Update path as needed

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default App;