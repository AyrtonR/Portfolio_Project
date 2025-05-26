import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
          <h2 className="section-title text-center">About Me</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                I am a recent graduate from Oulu University of Applied Sciences, where I completed my studies in Information Technology. 
                My academic journey has equipped me with a strong foundation in both front-end and back-end development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                I enjoy building user-friendly applications that are not just functional, but also enjoyable to use.
                I’m especially interested in full-stack development and love the process of turning ideas reality.  
            </p>
            <p className="text-gray-600 dark:text-gray-300">
                Outside of coding, I’m a pretty easy-going person who gets along well with all kinds of people. 
                I like to unwind by playing video games, watching football or motorsports, and spending time with animals. 
                My girlfriend and I share our home with two cats who definitely keep things interesting. 
                I believe that staying curious and having fun outside of work helps keep me sharp and creative in what I do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 