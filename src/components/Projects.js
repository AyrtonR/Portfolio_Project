import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../languages/en.json';
import esTranslations from '../languages/es.json';

const Projects = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : esTranslations;

  const projects = [
    {
        title: translations.projects.items[0].title,
        description: translations.projects.items[0].description,
        technologies: translations.projects.items[0].technologies,
        github: ' https://github.com/AyrtonR/Graded-exercise-1',
        live: ' https://ayrtonr.github.io/Graded-exercise-1/E-commerce.html',
      },
      {
        title: translations.projects.items[1].title,
        description: translations.projects.items[1].description,
        technologies: translations.projects.items[1].technologies,
        github: 'https://github.com/AWA-Team-38/r38',
        live: 'https://www.youtube.com/watch?v=wDLDFD9d67g',
      },
      {
        title: translations.projects.items[2].title,
        description: translations.projects.items[2].description,
        technologies: translations.projects.items[2].technologies,
        github: 'https://github.com/PDIG19/G19',
        live: 'https://youtu.be/coDswu2fXf8?si=nDpZqsXSj56nLnoB',
      },
    {
        title: translations.projects.items[3].title,
        description: translations.projects.items[3].description,
        technologies: translations.projects.items[3].technologies,
        github: 'https://github.com/AyrtonR/Project-Spotify-2024',
      },
    {
      title: translations.projects.items[4].title,
      description: translations.projects.items[4].description,
      technologies: translations.projects.items[4].technologies,
      live: 'https://www.theseus.fi/handle/10024/874538',
    },
    {
      title: translations.projects.items[5].title,
      description: translations.projects.items[5].description,
      technologies: translations.projects.items[5].technologies,
      github: 'https://github.com/AyrtonR/Portfolio_Project',
      live: 'https://ayrtonr.github.io/Portfolio_Project/',
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">{translations.projects.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        title={translations.projects.viewCode}
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        title={translations.projects.viewProject}
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 