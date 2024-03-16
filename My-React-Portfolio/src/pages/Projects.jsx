import React from 'react';
import '../App.css'; // Make sure your CSS is correctly pathed
import { ProjectCircle, fitnessTrackerImg, foragerImg, portfolioImg, comingSoonImg } from '../components/Project';

const projects = [
  {
    title: "Fitness Tracker",
    imageUrl: fitnessTrackerImg,
    link: "https://workout-fitness-tracker-herokuapp.com",
  },
  {
    title: "Forager",
    imageUrl: foragerImg,
    link: "https://dougyfresh208.github.io/BWWC/",
  },
  {
    title: "React Portfolio",
    imageUrl: portfolioImg,
    link: "https://github.com/jessenay/React-Portfolio",
  },
  {
    title: "Coming Soon",
    imageUrl: comingSoonImg,
    link: ""
  },
  {
    title: "Coming Soon",
    imageUrl: comingSoonImg,
    link: ""
  },
  {
    title: "Coming Soon",
    imageUrl: comingSoonImg,
    link: ""
  }
];

export default function Projects() {
  return (
    <div>
      <h1 className= "projects">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCircle key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

  