import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Redes sociais */}
        <div className="flex gap-6">
          <a
            href="https://github.com/gabriel121souza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-de-souza-rodrigues-a40760145/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          {/* Adicione mais links se quiser */}
        </div>

        {/* Direitos autorais */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Gabriel Rodrigues. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
