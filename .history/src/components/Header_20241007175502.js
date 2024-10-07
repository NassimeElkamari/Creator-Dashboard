import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-blue-600 dark:bg-gray-800 text-white p-4 pl-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold">overview</h1>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="mr-4 p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="bg-blue-700 dark:bg-gray-700 px-4 py-2 rounded hover:bg-blue-800 dark:hover:bg-gray-600 transition-colors duration-200">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
