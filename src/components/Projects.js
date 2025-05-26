import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Spotify Clone',
      description: 'A modern Spotify clone built with React, featuring music playback, playlist management, and a responsive design that mimics the original Spotify interface.',
      technologies: ['React', 'JavaScript', 'CSS', 'Spotify API'],
      github: 'https://github.com/AyrtonR/Project-Spotify-2024',
      image: 'spotify.jpg'
    },
    {
      title: 'Restaurant Shop',
      description: 'A full-featured restaurant website with menu management, shopping cart functionality, and user authentication. Includes both frontend and backend implementation.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      github: 'https://github.com/AyrtonR/Project-Resturant-Shop',
      image: 'restaurant.jpg'
    },
    {
      title: 'Bachelor\'s Thesis',
      description: 'This thesis explores the development of a headless e-commerce web application, focusing on the use of Shopify Hydrogen, a modern framework for building customizable, scalable online stores.',
      technologies: ['Research', 'Frontend Frameworks', 'Shopify Hydrogen'],
      live: 'https://www.theseus.fi/handle/10024/874538',
      image: 'thesis.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
      technologies: ['React'],
      github: 'https://github.com/AyrtonR/Portfolio_Project',
      live: '#',
      image: 'portfolio.jpg'
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
          <h2 className="section-title text-center">Projects</h2>
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      title="View on GitHub"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        title="View Live"
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