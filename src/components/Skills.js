import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { DiJava, DiDotnet } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../languages/en.json';
import esTranslations from '../languages/es.json';

const Skills = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : esTranslations;

  const skills = [
    { name: 'Javascript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Java', icon: <DiJava className="text-red-600" /> },
    { name: 'C#', icon: <TbBrandCSharp className="text-purple-600" /> },
    { name: 'HTML & CSS', icon: <><FaHtml5 className="text-orange-500" /> <FaCss3Alt className="text-blue-400" /></> },
    { name: '.NET', icon: <DiDotnet className="text-purple-800" /> },
    { name: 'ReactJS', icon: <FaReact className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">{translations.skills.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center"
              >
                <div className="text-4xl mb-4 flex items-center gap-2">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 