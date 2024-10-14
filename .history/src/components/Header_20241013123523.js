import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaBell, FaUser, FaCog } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header>
      
    </header>
  );
};

export default Header;
