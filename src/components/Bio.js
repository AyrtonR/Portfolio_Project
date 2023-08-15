import React from 'react';

const Bio = () => {
  return (
    <section className="bio-section">
<div className="section">
      <h2>About Me</h2>
      <p>
        I started coding back in 2015 and quickly fell in love with it. Nowadays, I write 
        a lot of code in many languages!
    </p>
    <p>
        My main focus these days is to get better at what I do and to keep learning.
    </p>
    <p>
        When I'm not on the computer, I enjoy going to the gym. I'm also very passionate
        about sports like football and Formula 1. I like going outside with my dog to explore
        new places.
    </p>   
</div>        
    <div className="section" id="skills">
    <h2>Skills</h2>
    <div className="skills-list">
    <h3>Languages</h3>
    <p>JavaScript, TypeScript, HTML5, CSS</p>
    
    <h3>Frameworks</h3>
    <p>.Net, React, Node.js</p>
    
    <h3>Tools</h3>
    <p>Visual Studio Code, Git, Github, npm, Postman</p>
    
    <h3>Cloud Services</h3>
    <p>Google Firestore, Heroku</p>
  </div>  
  </div>           
  <div className="section" id="education">
        <h2>Education</h2>
        <p>
            Oulu University of Applied Sciences
        </p>
        <p>
        Bachelor of Engineering (BEng), Information Technology
        </p>
        <p> 
            2020 - Present
        </p>
    </div>      
<div className="section" id="languages">
    <h2>Languages</h2>
        <p> Fluent: Spanish, English  </p>
        <p> Intermediate: Finnish </p>
</div>      
<div className="section" id="projects">
  <h2>Projects</h2>
  <div className="project">
    <a href="https://github.com/PDIG19/G19" target="_blank" rel="noopener noreferrer">Project Course: G19</a><br/>
    This was a project done for a course. I worked on the backend using C# and I did the database with SQLite.
    In this project we created a E-commerce computer parts store.
    Here is a <a href="https://www.youtube.com/watch?v=coDswu2fXf8" target="_blank" rel="noopener noreferrer">video </a> of the app working.
  </div>
  <div className="project">
    <a href="https://github.com/AWA-Team-38/r38" target="_blank" rel="noopener noreferrer">Project Course: AWA-Team-38/r38</a><br />
    For this course, I worked on the backend and used JavaScript.
    Here is a <a href="https://www.youtube.com/watch?v=wDLDFD9d67g" target="_blank" rel="noopener noreferrer">video </a> of the app working in Postman.
  </div>
  <div className="project">
    <a href="https://github.com/AyrtonR/Capstone_Coursera" target="_blank" rel="noopener noreferrer">Front-End Developer Capstone Course</a><br />
    This was a project made for the Front-End Developer Capstone course in Coursera. It was made with React.
    It is a "Reserve-a-table" function for a fictional restaurant.
  </div>
  <div className="project">
    <a href="https://github.com/AyrtonR/Graded-exercise-1" target="_blank" rel="noopener noreferrer">E-commerce Shop</a><br />
    The e-commerce shop is made with HTML and CSS. Deployed <a href="https://ayrtonr.github.io/Graded-exercise-1/E-commerce.html" target="_blank" rel="noopener noreferrer">here</a>.
  </div>
  </div>
</section>
  );
};

export default Bio;