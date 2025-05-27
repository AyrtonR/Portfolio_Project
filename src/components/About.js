import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../languages/en.json';
import esTranslations from '../languages/es.json';

const About = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : esTranslations;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">{translations.about.title}</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {translations.about.paragraph1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {translations.about.paragraph2}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {translations.about.paragraph3}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 