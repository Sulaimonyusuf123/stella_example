// // Components/Dashboard/Layout.jsx
// import React from 'react';
// import { Outlet } from 'react-router-dom'; // Important!
// import { Sidebar } from './Sidebar';
// import { Header } from './Header';

// export const DashboardLayout = () => {
//   return (
//     <div className="flex h-screen bg-black">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <main className="flex-1 overflow-y-auto">
//           <Outlet /> {/* This renders the child routes */}
//         </main>
//       </div>
//     </div>
//   );
// };