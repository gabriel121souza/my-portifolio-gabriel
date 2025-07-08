import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('footer');

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
            aria-label={t('github')}
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-de-souza-rodrigues-a40760145/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label={t('linkedin')}
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>

        {/* Direitos autorais */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;