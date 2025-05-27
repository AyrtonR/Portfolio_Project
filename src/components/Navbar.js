import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../languages/en.json';
import esTranslations from '../languages/es.json';

const Navbar = ({ darkMode, setDarkMode }) => {
  const { language, toggleLanguage } = useLanguage();
  const translations = language === 'en' ? enTranslations : esTranslations;
  
  const navItems = [
    { name: translations.navbar.home, to: 'hero' },
    { name: translations.navbar.about, to: 'about' },
    { name: translations.navbar.skills, to: 'skills' },
    { name: translations.navbar.projects, to: 'projects' },
    { name: translations.navbar.contact, to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-40"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold text-gray-800 dark:text-white"
          >
            AR
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 