import React from 'react';
import imgPerfil from '../assets/foto-perfil.png';
import resume from '../assets/gabriel-de-souza-rodrigues.pdf';

const SobreMim: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Sobre <span className="text-blue-600 dark:text-blue-400">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Foto de perfil */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl">
                <img 
                  src={imgPerfil}
                  alt="Gabriel Silva" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white dark:group-hover:border-gray-900 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Texto sobre mim */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Desenvolvedor Full Stack
            </h3>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-6">
              <p className="mb-4">
                Olá! Eu sou Gabriel, um apaixonado por tecnologia e criação de soluções digitais. 
                Com mais de 4 anos de experiência no mercado, já trabalhei em diversos projetos 
                desafiadores que me permitiram desenvolver habilidades técnicas e criativas.
              </p>
              <p className="mb-4">
                Minha jornada começou como Programador Backend com Springboot onde tenho mais familiaridade, depois de 3 anos trabalhando como desenvolvedor backend, comecei a trabalhar com React Js. Hoje, combino essas duas paixões para criar interfaces bonitas, funcionais e 
                com segurança e manutebilidade.
              </p>
              <p>
                Acredito que a tecnologia deve ser acessível e intuitiva. Meu objetivo é desenvolver 
                soluções que simplifiquem a vida das pessoas enquanto proporcionam uma experiência 
                agradável e memorável.
              </p>
            </div>

            {/* Informações pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="mr-3 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Profissão</h4>
                  <p className="text-gray-600 dark:text-gray-400">Desenvolvedor Full Stack</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="mr-3 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Localização</h4>
                  <p className="text-gray-600 dark:text-gray-400">Brasilia, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="mr-3 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Contato</h4>
                  <p className="text-gray-600 dark:text-gray-400">gabrielsrodriguesdev@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="mr-3 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Experiência</h4>
                  <p className="text-gray-600 dark:text-gray-400">4+ anos</p>
                </div>
              </div>
            </div>

            {/* Botão de download do CV */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={resume} 
                download
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar CV
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;