import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './Components/Landing';
import { SignUp}  from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </div>
  );
};

export default App;