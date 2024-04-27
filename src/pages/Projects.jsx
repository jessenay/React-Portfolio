import React from 'react';
import '../App.css';
import { ProjectCircle, fitnessTrackerImg, foragerImg, portfolioImg, comingSoonImg, verifimintImg, FeastbookImg } from '../components/Project';

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
    title: "VERIFIMINT",
    imageUrl: verifimintImg,
    link: "https://verifimint.com/"
  },
  {
    title: "FeastBook",
    imageUrl: FeastbookImg,
    link: "https://feastbook.onrender.com"
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

  