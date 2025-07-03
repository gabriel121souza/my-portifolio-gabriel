import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 z-50 shadow-md">
  <div className="container mx-auto px-4">
    <nav className="flex flex-col md:flex-row items-center justify-between py-4">
      <Link to="/" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors">
        Gabrie S. Rodrigues
      </Link>
      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <li><Link to="/" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded hover:bg-gray-800">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded hover:bg-gray-800">Sobre Mim</Link></li>
        <li><Link to="/skills" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded hover:bg-gray-800">Habilidades</Link></li>
        <li><Link to="/projects" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded hover:bg-gray-800">Projetos</Link></li>
        <li><Link to="/contact" className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded hover:bg-gray-800">Contato</Link></li>
      </ul>
    </nav>
  </div>
</header>

      );
};

export default Header;
