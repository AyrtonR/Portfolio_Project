import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {

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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="section-title text-center">Contact Me</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out to me through my social media or email.
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-3xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 