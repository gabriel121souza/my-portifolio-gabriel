import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaLock, FaCode, FaTools, FaHardHat } from 'react-icons/fa';

const Projects: React.FC = () => {
  const { t } = useTranslation('projects');
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');

  // Dados dos projetos traduzidos
  const projects = {
    public: [
      {
        id: 1,
        title: t('projects.public.project1.title'),
        description: t('projects.public.project1.description'),
        technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
        status: t('status.inDevelopment'),
        githubUrl: 'https://github.com/seu-usuario/gestao-financeira',
        imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 2,
        title: t('projects.public.project2.title'),
        description: t('projects.public.project2.description'),
        technologies: ['Angular', 'Java', 'Spring Boot'],
        status: t('status.inDevelopment'),
        githubUrl: 'https://github.com/seu-usuario/plataforma-cursos',
        imageUrl: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      }
    ],
    private: [
      {
        id: 3,
        title: t('projects.private.project1.title'),
        description: t('projects.private.project1.description'),
        technologies: ['Java', 'Spring', 'PostgreSQL'],
        role: t('roles.backendDeveloper'),
        imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 4,
        title: t('projects.private.project2.title'),
        description: t('projects.private.project2.description'),
        technologies: ['Java', 'Spring', 'Angular', 'DB2', 'Openshift'],
        role: t('roles.backendDeveloper'),
        imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 5,
        title: t('projects.private.project3.title'),
        description: t('projects.private.project3.description'),
        technologies: ['Java', 'JSP', 'JSF', 'Spring Boot'],
        role: t('roles.fullstackDeveloper'),
        imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 6,
        title: t('projects.private.project4.title'),
        description: t('projects.private.project4.description'),
        technologies: ['Java', 'Spring Boot', 'React', 'OracleDb'],
        role: t('roles.fullstackDeveloper'),
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      }
    ]
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('title')} <span className="text-blue-600 dark:text-blue-400">{t('titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Abas de navegação */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('public')}
              className={`px-4 py-2 rounded-md flex items-center ${activeTab === 'public' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              <FaCode className="mr-2" />
              {t('tabs.personal')}
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-4 py-2 rounded-md flex items-center ${activeTab === 'private' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              <FaLock className="mr-2" />
              {t('tabs.professional')}
            </button>
          </div>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagem do projeto */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {activeTab === 'public' && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {t('status.inDevelopment').toUpperCase()}
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  {activeTab === 'private' && <FaLock className="text-gray-500" />}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Status para projetos pessoais */}
                {activeTab === 'public' && project.status && (
                  <div className="mb-4 flex items-center">
                    <FaTools className="text-yellow-500 mr-2" />
                    <span className="text-sm text-yellow-600 dark:text-yellow-400">
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links ou função */}
                <div className="flex justify-between items-center">
                  {activeTab === 'public' ? (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FaGithub className="mr-2" />
                        {t('repository')}
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {t('version')} 0.1.0
                      </span>
                    </>
                  ) : (
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <FaHardHat className="mr-2" />
                      {project.role}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;