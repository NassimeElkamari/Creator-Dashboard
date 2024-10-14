import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaHome, FaPen, FaFileAlt, FaUsers, FaChartBar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'; // Added IoIosArrowUp
import { FaPenToSquare } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation(); 
  const [openSections, setOpenSections] = useState({ audience: false, analyze: false, writing: false });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'ml-4 flex items-center gap-4 p-4 text-lg text-blue-700 dark:text-blue-400 border-l-4 font-bold border-blue-700 dark:border-blue-400'
      : 'ml-4 flex items-center gap-4 p-4 text-lg text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200';
  };

  const toggleSection = (section) => {
    setOpenSections(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Branding */}
      <div className={`p-6 border-b border-gray-300 dark:border-gray-700 ${isCollapsed ? 'text-center' : ''}`}>
        {isCollapsed ? (
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">NN</h2>
        ) : (
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Nassime's Newsletter</h2>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-grow overflow-y-auto">
        <ul className="space-y-4">

          {/* Dashboard */}
          <li>
            <Link to="/dashboard/overview" className={getLinkClasses('/dashboard/overview')} onClick={toggleSidebar}>
              <FaHome className="w-5 h-5" /> {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>

          {/* Start Writing */}
          <li>
            <div className={`${isCollapsed ? 'mx-auto w-10' : 'ml-4'}`}>
              <button 
                onClick={() => {
                  toggleSection('writing');
                  if (!isCollapsed) setIsCollapsed(true);
                }} 
                className={`flex items-center bg-[#dfdaf8] border border-purple-600 text-purple-900 rounded-lg ${isCollapsed ? 'w-10 h-10 justify-center' : 'w-full'}`}
              >
                <FaPenToSquare className="w-5 h-5 text-purple-900" />
                {!isCollapsed && (
                  <>
                    <span className="ml-4 flex-grow">Start writing</span>
                    {openSections.writing ? <IoIosArrowUp className="mr-4 text-purple-900" /> : <IoIosArrowDown className="mr-4 text-purple-900" />}
                  </>
                )}
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
              <FaFileAlt className="w-5 h-5" /> {!isCollapsed && <span>Posts</span>}
            </Link>
          </li>

          {/* Audience Section */}
          <li className="relative">
            <button onClick={() => toggleSection('audience')} className={`flex items-center ${isCollapsed ? 'justify-center' : 'ml-4'} p-4 w-full text-left gap-4`}>
              <FaUsers className="w-5 h-5" />
              {!isCollapsed && (
                <>
                  <span>Audience</span>
                  {openSections.audience ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
                </>
              )}
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
            <button onClick={() => toggleSection('analyze')} className={`flex items-center ${isCollapsed ? 'justify-center' : 'ml-4'} p-4 w-full text-left gap-4`}>
              <FaChartBar className="w-5 h-5" />
              {!isCollapsed && (
                <>
                  <span>Analyze</span>
                  {openSections.analyze ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
                </>
              )}
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
