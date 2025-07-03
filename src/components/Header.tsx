import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/space-gtech-2.png';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo com tamanho controlado */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            <img
              src={logo}
              alt="Gabriel Silva - Desenvolvedor Full Stack"
              className="h-12 md:h-16 w-auto" // Altura responsiva
            />
          </Link>
          
          {/* Menu de navegação */}
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

          {/* Menu mobile (opcional) - pode adicionar depois */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;