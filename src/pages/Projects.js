import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A description of your first project",
      technologies: ["React", "CSS", "JavaScript"],
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A description of your second project",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A description of your third project",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
