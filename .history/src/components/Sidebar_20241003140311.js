// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h2 className="text-2xl font-bold text-center p-4">Admin Dashboard</h2>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard/overview" className="block p-4 hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/campaigns" className="block p-4 hover:bg-gray-700">Campaigns</Link>
          </li>
          <li>
            <Link to="/dashboard/subscribers" className="block p-4 hover:bg-gray-700">Subscribers</Link>
          </li>
          <li>
            <Link to="/dashboard/reports" className="block p-4 hover:bg-gray-700">Reports</Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className="block p-4 hover:bg-gray-700">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
