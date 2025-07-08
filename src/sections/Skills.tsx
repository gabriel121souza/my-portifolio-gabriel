import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaCloud, 
  FaReact, 
  FaGitAlt, 
  FaNodeJs, 
  FaDocker 
} from 'react-icons/fa';
import { RiJavaLine } from 'react-icons/ri';
import { 
  SiSpringboot, 
  SiAngular, 
  SiTypescript
} from 'react-icons/si';

const Skills: React.FC = () => {
  const { t } = useTranslation('skills');

  // Dados das habilidades com componentes de ícone
  const skills = [
    { name: t('skills.java'), level: 90, icon: <RiJavaLine className="text-[#DD0031]" /> },
    { name: t('skills.spring'), level: 90, icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: t('skills.react'), level: 75, icon: <FaReact className="text-[#61DAFB]" /> },
    { name: t('skills.git'), level: 85, icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: t('skills.node'), level: 75, icon: <FaNodeJs className="text-[#339933]" /> },
    { name: t('skills.angular'), level: 60, icon: <SiAngular className="text-[#DD0031]" /> },
    { name: t('skills.typescript'), level: 75, icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: t('skills.docker'), level: 70, icon: <FaDocker className="text-[#2496ED]" /> },
    { name: t('skills.cloud'), level: 75, icon: <FaCloud className="text-[#0078D7]" /> },
  ];

  const relatedTechs = t('relatedTechs', { returnObjects: true });

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
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

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-600 rounded-lg shadow-sm mr-4">
                  <span className="text-3xl">
                    {skill.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              {/* Barra de progresso */}
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>{t('proficiency')}</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seção adicional de outras habilidades */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            {t('relatedTechsTitle')}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {relatedTechs.map((tech: string, index: number) => (
              <div 
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;