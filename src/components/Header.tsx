import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/space-gtech-2.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation('header');
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Efeito para sincronizar o estado com as mudanças de idioma
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem('preferredLanguage', lng);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            <img
              src={logo}
              alt="Gabriel Silva - Desenvolvedor Full Stack"
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-4 lg:gap-6">
              <li>
                <Link 
                  to="/" 
                  className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills" 
                  className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
                >
                  {t('skills')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
                >
                  {t('projects')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>

            {/* Seletor de idioma - Desktop */}
            <div className="ml-4 flex border border-gray-600 rounded-md overflow-hidden bg-gray-800">
              <button
                onClick={() => changeLanguage('pt')}
                className={`px-3 py-1 text-sm transition-colors ${
                  currentLanguage === 'pt' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                disabled={currentLanguage === 'pt'}
                aria-label="Português"
              >
                PT
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm transition-colors ${
                  currentLanguage === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                disabled={currentLanguage === 'en'}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Botão Hamburguer Mobile */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 mb-4 py-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('skills')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('projects')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </li>
              
              {/* Seletor de idioma - Mobile */}
              <li className="flex justify-center mt-4">
                <div className="flex border border-gray-600 rounded-md overflow-hidden bg-gray-700">
                  <button
                    onClick={() => {
                      changeLanguage('pt');
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 transition-colors ${
                      currentLanguage === 'pt' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-600'
                    }`}
                    disabled={currentLanguage === 'pt'}
                  >
                    Português
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('en');
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 transition-colors ${
                      currentLanguage === 'en' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-600'
                    }`}
                    disabled={currentLanguage === 'en'}
                  >
                    English
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;