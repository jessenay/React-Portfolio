import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function AboutMe() {
  const [infoType, setInfoType] = useState('skills');

  const infoContent = {
    skills: "CSS, React.js, JavaScript, HTML, MySQL, Bootstrap, Tailwind, Node.js, MongoDB, APIs, Figma, Wireframes, Jest, Express.js, Handlebars.js, Sequelize, Mongoose, Git, GitHub, Heroku, Progressive Web Apps, Webpack, Responsive Design, Accessibility, SEO, Performance Optimization, Cross-Browser Compatibility, Debugging, Problem-Solving, Project Management, Team Collaboration, Communication, Time Management, Slack, Zoom",
    experience: "Looking to land an entry-level web developer position to utilize my skills and knowledge in a professional environment. I am a quick learner and a team player, and I am eager to contribute to a dynamic team.",
    education: "University of Utah General Education 2017-2018. Snow College General Education 2018-2019. University of Utah Coding Bootcamp 2023-2024"
  };

  return (
    <div className='about-me-container'>
      <h1 className="about-me">About Me</h1>
      <p className='about-me-text'>
Hello! My name is Jesse, and I'm a dedicated Full Stack Web Developer based in northern Utah. With a passion for crafting seamless, intuitive web experiences, my journey in web development began in 2023 when I discovered my love for turning ideas into reality through code. Specializing in both front-end and back-end technologies, I strive to create responsive, dynamic websites and applications that not only meet but exceed user expectations.
I believe that at the heart of every great web application is a solid, user-centric design and clean, efficient code. My approach to web development is grounded in continuous learning and adapting to the ever-evolving landscape of technologies. I'm committed to best practices, accessibility, and pushing the boundaries of what's possible on the web. For me, web development is not just about writing code but solving problems and making a positive impact on users' lives.
Outside of coding, I have a diverse range of interests that fuel my creativity and keep me inspired. I'm an avid outdoor enthusiast that enjoys fishing and hiking, a thrill seeker that loves to snowboard and ski, and a curious traveler, seeking out new cultures and cuisines. These interests not only provide a well-rounded life but also influence my work, bringing fresh perspectives and ideas to the projects I undertake.
Thank you for taking the time to learn about me. I'm always interested in discussing new projects or opportunities to collaborate. Let's connect and create something incredible together!</p>
      <div className="info-buttons">
      <span 
          className={`info-option ${infoType === 'skills' ? 'active-info' : ''}`} 
          onClick={() => setInfoType(infoType !== 'skills' ? 'skills' : '')}>
          Skills and Technologies {infoType === 'skills' ? <FaAngleUp /> : <FaAngleDown />}
        </span> | 
        <span 
          className={`info-option ${infoType === 'experience' ? 'active-info' : ''}`} 
          onClick={() => setInfoType(infoType !== 'experience' ? 'experience' : '')}>
          Experience {infoType === 'experience' ? <FaAngleUp /> : <FaAngleDown />}
        </span> | 
        <span 
          className={`info-option ${infoType === 'education' ? 'active-info' : ''}`} 
          onClick={() => setInfoType(infoType !== 'education' ? 'education' : '')}>
          Education {infoType === 'education' ? <FaAngleUp /> : <FaAngleDown />}
        </span>

      </div>
      {infoType && (
        <div className="info-content">
          <p>{infoContent[infoType]}</p>
        </div>
      )}
    </div>
  );
}
