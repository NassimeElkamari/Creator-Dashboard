import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { FaHome, FaBullhorn, FaUsers, FaEnvelope, FaChartBar, FaUser, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation(); // Get the current route

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'ml-4 gap-2 p-4 text-lg text-blue-700 dark:text-blue-400 border-l-4 font-bold border-blue-700 dark:border-blue-400 flex items-center'
      : 'ml-4 gap-2 p-4 text-lg text-gray-600 dark:text-gray-300 flex items-center hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200';
  };

  return (
    <div className="w-64 h-[] bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard/overview" className={getLinkClasses('/dashboard/overview')}>
              <FaHome className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/campaigns" className={getLinkClasses('/dashboard/campaigns')}>
              <FaBullhorn className="mr-2" /> Campaigns
            </Link>
          </li>
          <li>
            <Link to="/dashboard/subscribers" className={getLinkClasses('/dashboard/subscribers')}>
              <FaUsers className="mr-2" /> Subscribers
            </Link>
          </li>
          <li>
            <Link to="/dashboard/emailPerformance" className={getLinkClasses('/dashboard/emailPerformance')}>
              <FaEnvelope className="mr-2" /> Email Performance
            </Link>
          </li>
          <li>
            <Link to="/dashboard/contentModeration" className={getLinkClasses('/dashboard/contentModeration')}>
              <FaUsers className="mr-2" /> Content Moderation
            </Link>
          </li>
          <li>
            <Link to="/dashboard/analytics" className={getLinkClasses('/dashboard/analytics')}>
              <FaChartBar className="mr-2" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/dashboard/userManagement" className={getLinkClasses('/dashboard/userManagement')}>
              <FaUser className="mr-2" /> User Management
            </Link>
          </li>
          <li>
            <Link to="/dashboard/notifications" className={getLinkClasses('/dashboard/notifications')}>
              <FaBell className="mr-2" /> Notifications
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className={getLinkClasses('/dashboard/settings')}>
              <FaCog className="mr-2" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
