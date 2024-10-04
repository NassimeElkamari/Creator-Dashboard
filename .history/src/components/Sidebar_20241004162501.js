// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBullhorn, FaUsers, FaEnvelope, FaChartBar, FaUser, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-gray-600">
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard/overview" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaHome className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/campaigns" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaBullhorn className="mr-2" /> Campaigns
            </Link>
          </li>
          <li>
            <Link to="/dashboard/subscribers" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaUsers className="mr-2" /> Subscribers
            </Link>
          </li>
          <li>
            <Link to="/dashboard/emailPerformance" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaEnvelope className="mr-2" /> Email Performance
            </Link>
          </li>
          <li>
            <Link to="/dashboard/contentModeration" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaUsers className="mr-2" /> Content Moderation
            </Link>
          </li>
          <li>
            <Link to="/dashboard/analytics" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaChartBar className="mr-2" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/dashboard/userManagement" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaUser className="mr-2" /> User Management
            </Link>
          </li>
          <li>
            <Link to="/dashboard/notifications" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaBell className="mr-2" /> Notifications
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className="ml-4 gap-2 p-4 hover:bg-gray-700 flex items-center">
              <FaCog className="mr-2" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
