// src/sections/Skills.tsx
import React from 'react';

const Skills: React.FC = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js',
    'Redux', 'Context API', 'Next.js', 'Styled Components', 'Tailwind CSS', 'Sass',
    'Responsividade', 'UI/UX', 'Figma (Básico)'
  ];

  const backendSkills = [
    'Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'PostgreSQL', 'Firebase', 'GraphQL (Básico)'
  ];

  const devOpsTools = [
    'Git', 'GitHub', 'Netlify', 'Vercel', 'Heroku (Antigo)', 'Docker (Básico)', 'CI/CD (GitHub Actions)'
  ];

  const otherSkills = [
    'Metodologias Ágeis (Scrum)', 'Resolução de Problemas', 'Comunicação', 'Inglês Técnico'
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Minhas Habilidades</h2>

      <h3>Frontend</h3>
      <div className="skills-grid">
        {frontendSkills.map((skill) => (
          <span key={skill} className="skill-item">{skill}</span>
        ))}
      </div>

      <h3>Backend & Banco de Dados</h3>
      <div className="skills-grid">
        {backendSkills.map((skill) => (
          <span key={skill} className="skill-item">{skill}</span>
        ))}
      </div>

      <h3>Ferramentas & DevOps</h3>
      <div className="skills-grid">
        {devOpsTools.map((skill) => (
          <span key={skill} className="skill-item">{skill}</span>
        ))}
      </div>

      <h3>Outras Habilidades</h3>
      <div className="skills-grid">
        {otherSkills.map((skill) => (
          <span key={skill} className="skill-item">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;