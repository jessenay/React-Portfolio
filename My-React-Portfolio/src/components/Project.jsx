import React from 'react';
import fitnessTrackerImg from '../assets/fitness-tracker.png';
import foragerImg from '../assets/forager.png';
import portfolioImg from '../assets/portfolio.png';
import comingSoonImg from '../assets/coming-soon.png';

function ProjectCircle({ project }) {
  return (
    <div
      className="project-circle"
      onClick={() => window.open(project.link, "_blank")}
      style={{ backgroundImage: `url(${project.imageUrl})` }}
      title={project.title}
    >
      {/* Optionally, you can add a title or any other content inside the circle */}
      <div className="project-title">{project.title}</div>
    </div>
  );
}

export { ProjectCircle, fitnessTrackerImg, foragerImg, portfolioImg, comingSoonImg };
