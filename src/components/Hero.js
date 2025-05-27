import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import profilePicture from '../cropped2.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../languages/en.json';
import esTranslations from '../languages/es.json';

const Hero = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : esTranslations;

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/AyrtonR',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/ayrton-ramirez-154a72204/',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:ayrtonramirez2018@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              {translations.hero.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              {translations.hero.subtitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              {translations.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <motion.a
                href={process.env.PUBLIC_URL + '/cv_2025.pdf'}
                download="Ayrton_Ramirez_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <FaFileDownload />
                <span>{translations.hero.downloadCV}</span>
              </motion.a>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <motion.img
                src={profilePicture}
                alt="Ayrton Ramirez"
                className="rounded-full w-full h-full object-cover shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-blue-500 dark:border-blue-400 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 