import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/space-gtech-2.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm lg:text-base rounded hover:bg-gray-800"
              >
                Contato
              </Link>
            </li>
          </ul>

          {/* Botão Hamburguer Mobile */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-white hover:text-blue-400 transition-colors px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;