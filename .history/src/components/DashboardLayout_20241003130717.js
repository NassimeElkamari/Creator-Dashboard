// src/components/DashboardLayout.js

import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
