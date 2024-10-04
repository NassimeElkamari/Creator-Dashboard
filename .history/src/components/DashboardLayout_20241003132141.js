// src/components/DashboardLayout.js

import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
        
      </header>

      {/* Main layout with Sidebar and Content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
