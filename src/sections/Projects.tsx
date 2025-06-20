// src/sections/Projects.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects'; // Importa os dados dos projetos

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;