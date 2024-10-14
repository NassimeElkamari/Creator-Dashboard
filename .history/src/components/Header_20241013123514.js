import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaBell, FaUser, FaCog } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md">
      
    </header>
  );
};

export default Header;
