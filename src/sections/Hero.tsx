import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imgMain from '../assets/imagem-main.avif';

const Hero: React.FC = () => {
  const { t } = useTranslation('hero');

  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://gist.githubusercontent.com/rafaelnacle/1ec0a6a5e50aa4a524a674ce2a1b7d3a/raw/eb213f2ae7430a9cc9d65f5a59a1d10a1f716e0a/pattern.svg')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hello')} <span className="text-blue-400">Gabriel</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                {t('developer')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              {t('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('projects')}
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                {t('contact')}
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-blue-500 rounded-3xl opacity-20 blur-lg"></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={imgMain}
                  alt="Gabriel Silva - Desenvolvedor"
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;