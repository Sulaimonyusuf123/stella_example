import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './Components/Landing';
import { SignUp } from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';
import { DashboardLayout } from './Components/Dashboard/Sidebar'; // Just import this one
import { Overview } from './Components/Dashboard/Overview';
import { Security } from './Components/Dashboard/Security';
import { Identification } from './Components/Dashboard/Identification';
import { Accounts } from './Components/Dashboard/Accounts';
import { Spot } from './Components/Dashboard/Spot';
import  Transaction  from './Components/Dashboard/Transaction';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<div>Dashboard Home</div>} />
          <Route path="settings/overview" element={<Overview />} />
         <Route path="settings/security" element={<Security />} />
         <Route path="settings/identification" element={<Identification />} />
         <Route path="settings/account" element={<Accounts />} />
          <Route path="trade/spot-trading" element={<Spot />} />
            <Route path="trade/transaction-history" element={<Transaction />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;