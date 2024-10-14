import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaHome, FaPen, FaFileAlt, FaUsers, FaChartBar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'; // Added IoIosArrowUp
import { FaPenToSquare } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation(); 
  const [openSections, setOpenSections] = useState({ audience: false, analyze: false, writing: false });
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setIsCollapsed(location.pathname === '/dashboard/newCampaign');
  }, [location.pathname]);

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-4 px-4 py-2 text-lg ${isCollapsed ? 'justify-center' : ''} ${
      isActive
        ? 'bg-gray-200 dark:bg-gray-800 rounded-xl'
        : 'text-gray-600 dark:text-gray-300'
    }`;
  };

  const toggleSection = (section) => {
    setOpenSections(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white dark:bg-gray-900 px-2 text-gray-600 dark:text-gray-300 h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Branding */}
      <div className={`p-6 border-b border-gray-300 dark:border-gray-700 ${isCollapsed ? 'text-center' : ''}`}>
        {isCollapsed ? (
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">NN</h2>
        ) : (
          <h2 className="text-md font-bold text-gray-800 dark:text-gray-100">Nassime's Newsletter</h2>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-grow overflow-y-auto">
        <ul className="space-y-2">

          {/* Dashboard */}
          <li>
            <Link to="/dashboard/overview" className={getLinkClasses('/dashboard/overview')}>
              <FaHome className="w-5 h-5 min-w-[1.25rem]" /> {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>

          {/* Start Writing */}
          <li className={`${isCollapsed ? 'flex ' : ''}`}>
            <div className={`${isCollapsed ? 'w-10' : 'w-full '}`}>
              <button 
                onClick={() => {
                  if (!isCollapsed) {
                    toggleSection('writing');
                  }
                }} 
                className={`flex items-center bg-[#dfdaf8] py-2 mt-5 border border-purple-600 text-purple-900 rounded-lg ${isCollapsed ? 'w-10 h-10 justify-center' : 'w-full pl-2'}`}
              >
                <div className="flex items-center flex-grow">
                  <FaPenToSquare className={`w-5 h-5 text-purple-900 min-w-[1.25rem] ${isCollapsed ? 'ml-0' : 'ml-4'} `}/>
                  {!isCollapsed && (
                    <span className="flex-grow border-r border-purple-500 pr-2  font-semibold">Start writing</span>
                  )}
                </div>
                {!isCollapsed && (
                  <div className="flex-shrink-0 ml-auto mr-4">
                    {openSections.writing ? <IoIosArrowUp className="text-purple-900" /> : <IoIosArrowDown className="text-purple-900" />}
                  </div>
                )}
              </button>
              {openSections.writing && !isCollapsed && (
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
            <Link to="/dashboard/posts" className={getLinkClasses('/dashboard/posts') + ' mt-3'}>
              <FaFileAlt className="w-5 h-5 min-w-[1.25rem]" /> {!isCollapsed && <span>Posts</span>}
            </Link>
          </li>

          {/* Audience Section */}
          <li>
            <button onClick={() => toggleSection('audience')} className={`w-full ${getLinkClasses('')}`}>
              <FaUsers className="w-5 h-5 min-w-[1.25rem]" />
              {!isCollapsed && (
                <>
                  <span className="flex-grow text-left">Audience</span>
                  {openSections.audience ? <IoIosArrowDown className="ml-2" /> : <IoIosArrowForward className="ml-2" />}
                </>
              )}
            </button>
            {openSections.audience && !isCollapsed && (
              <ul className="pl-12 space-y-2 bg-white dark:bg-gray-900">
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
          <li>
            <button onClick={() => toggleSection('analyze')} className={`w-full ${getLinkClasses('')}`}>
              <FaChartBar className="w-5 h-5 min-w-[1.25rem]" />
              {!isCollapsed && (
                <>
                  <span className="flex-grow text-left">Analyze</span>
                  {openSections.analyze ? <IoIosArrowDown className="ml-2" /> : <IoIosArrowForward className="ml-2" />}
                </>
              )}
            </button>
            {openSections.analyze && !isCollapsed && (
              <ul className="pl-12 space-y-2 bg-white dark:bg-gray-900">
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
