import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaHome, FaPen, FaFileAlt, FaUsers, FaChartLine, FaDollarSign, FaPalette, FaChartBar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'; // For collapse icons

const Sidebar = () => {
  const location = useLocation(); 
  const [openSections, setOpenSections] = useState({ audience: false, grow: false, monetize: false, design: false, analyze: false });

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'ml-4 gap-2 p-4 text-lg text-blue-700 dark:text-blue-400 border-l-4 font-bold border-blue-700 dark:border-blue-400 flex items-center'
      : 'ml-4 gap-2 p-4 text-lg text-gray-600 dark:text-gray-300 flex items-center hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200';
  };

  const toggleSection = (section) => {
    setOpenSections(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 h-screen">
      {/* Branding */}
      <div className="p-6 border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Hamid's Newsletter</h2>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        <ul className="space-y-4">

          {/* Dashboard */}
          <li>
            <Link to="/dashboard/overview" className={getLinkClasses('/dashboard/overview')}>
              <FaHome className="mr-2" /> Dashboard
            </Link>
          </li>

          {/* Start Writing */}
          <li>
            <div className="p-4 ml-4">
              <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg w-full">
                <FaPen className="mr-2" /> Start writing
                <IoIosArrowDown className="ml-auto" />
              </button>
            </div>
          </li>

          {/* Posts Section */}
          <li>
            <Link to="/dashboard/posts" className={getLinkClasses('/dashboard/posts')}>
              <FaFileAlt className="mr-2" /> Posts
            </Link>
          </li>

          {/* Audience Section - Collapsible */}
          <li>
            <button onClick={() => toggleSection('audience')} className="flex items-center ml-4 p-4 w-full text-left">
              <FaUsers className="mr-2" /> Audience
              {openSections.audience ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
            </button>
            {openSections.audience && (
              <ul className="pl-12 space-y-2">
                <li>
                  <Link to="/dashboard/subscribers" className={getLinkClasses('/dashboard/subscribers')}>
                    Subscribers
                  </Link>
                </li>
                {/* Add other subitems as needed */}
              </ul>
            )}
          </li>

          {/* Grow Section */}
          <li>
            <button onClick={() => toggleSection('grow')} className="flex items-center ml-4 p-4 w-full text-left">
              <FaChartLine className="mr-2" /> Grow
              {openSections.grow ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
            </button>
            {openSections.grow && (
              <ul className="pl-12 space-y-2">
                <li>
                  <Link to="/dashboard/growth" className={getLinkClasses('/dashboard/growth')}>
                    Growth Analytics
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Monetize Section */}
          <li>
            <button onClick={() => toggleSection('monetize')} className="flex items-center ml-4 p-4 w-full text-left">
              <FaDollarSign className="mr-2" /> Monetize
              {openSections.monetize ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
            </button>
            {openSections.monetize && (
              <ul className="pl-12 space-y-2">
                <li>
                  <Link to="/dashboard/monetization" className={getLinkClasses('/dashboard/monetization')}>
                    Monetization Strategies
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Design Section */}
          <li>
            <button onClick={() => toggleSection('design')} className="flex items-center ml-4 p-4 w-full text-left">
              <FaPalette className="mr-2" /> Design
              {openSections.design ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
            </button>
            {openSections.design && (
              <ul className="pl-12 space-y-2">
                <li>
                  <Link to="/dashboard/design" className={getLinkClasses('/dashboard/design')}>
                    Customize Layout
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Analyze Section */}
          <li>
            <button onClick={() => toggleSection('analyze')} className="flex items-center ml-4 p-4 w-full text-left">
              <FaChartBar className="mr-2" /> Analyze
              {openSections.analyze ? <IoIosArrowDown className="ml-auto" /> : <IoIosArrowForward className="ml-auto" />}
            </button>
            {openSections.analyze && (
              <ul className="pl-12 space-y-2">
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
