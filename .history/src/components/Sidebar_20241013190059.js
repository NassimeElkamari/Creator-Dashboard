import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaHome, FaPen, FaFileAlt, FaUsers, FaChartBar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'; // Added IoIosArrowUp
import { FaPenToSquare } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation(); 
  const [openSections, setOpenSections] = useState({ audience: false, analyze: false, writing: false });

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'ml-4 flex items-center gap-4 p-4 text-lg text-blue-700 dark:text-blue-400 border-l-4 font-bold border-blue-700 dark:border-blue-400'
      : 'ml-4 flex items-center gap-4 p-4 text-lg text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200';
  };

  const toggleSection = (section) => {
    setOpenSections(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 h-screen flex flex-col">
      {/* Branding */}
      <div className="p-6 border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Nassime's Newsletter</h2>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-grow overflow-y-auto">
        <ul className="space-y-4">

          {/* Dashboard */}
          <li>
            <Link to="/dashboard/overview" className={getLinkClasses('/dashboard/overview')}>
              <FaHome className="w-5 h-5" /> <span>Dashboard</span>
            </Link>
          </li>

          {/* Start Writing */}
          <li>
            <div className="ml-4">
              <button 
                onClick={() => toggleSection('writing')} 
                className="flex items-center bg-[#dfdaf8] border border-purple-600 text-purple-900 rounded-lg w-full"
              >
                <div className="pl-4 flex items-center flex-grow gap-4 hover:bg-purple-300 py-2 transition-all duration-500">
                  <FaPenToSquare className="w-5 h-5 text-purple-900" /> <span>Start writing</span>
                </div>
                {openSections.writing ? <IoIosArrowUp className="mr-4 text-purple-900" /> : <IoIosArrowDown className="mr-4 text-purple-900" />}
              </button>
              {openSections.writing && (
                <ul className="mt-2 space-y-2 bg-white bg-opacity-150 dark:bg-purple-900 dark:bg-opacity-30 rounded-lg p-2">
                  <li>
                    <Link to="/dashboard/newCampaign" className="block px-4 py-2 text-black hover:bg-gray-200 rounded">
                      Upload Video
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/choose-library" className="block px-4 py-2 text-black hover:bg-gray-200 rounded">
                      Choose from Library
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* Posts Section */}
          <li>
            <Link to="/dashboard/posts" className={getLinkClasses('/dashboard/posts')}>
              <FaFileAlt className="w-5 h-5" /> <span>Posts</span>
            </Link>
          </li>

          {/* Audience Section - Collapsible */}
          <li className="relative">
            <button onClick={() => toggleSection('audience')} className="flex items-center ml-4 p-4 w-full text-left gap-4">
              <FaUsers className="w-5 h-5" /> <span>Audience</span>
              {openSections.audience ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
            </button>
            {openSections.audience && (
              <ul className="absolute top-full left-0 w-full pl-12 space-y-2 bg-white dark:bg-gray-900 z-10">
                <li>
                  <Link to="/dashboard/subscribers" className={getLinkClasses('/dashboard/subscribers')}>
                    Subscribers
                  </Link>
                </li>
                {/* Add other subitems as needed */}
              </ul>
            )}
          </li>

          {/* Analyze Section */}
          <li className="relative">
            <button onClick={() => toggleSection('analyze')} className="flex items-center ml-4 p-4 w-full text-left gap-4">
              <FaChartBar className="w-5 h-5" /> <span>Analyze</span>
              {openSections.analyze ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
            </button>
            {openSections.analyze && (
              <ul className="absolute top-full left-0 w-full pl-12 space-y-2 bg-white dark:bg-gray-900 z-10">
                <li>
                  <Link to="/dashboard/analytics" className={getLinkClasses('/dashboard/analytics')}>
                    View Analytics
                  </Link>
                </li>
              </ul>
            )}
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
