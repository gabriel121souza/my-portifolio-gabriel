// src/components/ProjectCard.tsx
import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project; // Recebe um objeto Project como prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="links">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="button">
            Ver ao vivo
          </a>
        )}
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="button">
          Repositório
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;