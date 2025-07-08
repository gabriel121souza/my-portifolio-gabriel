import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert(t('submitError'));
      }
    } catch (error) {
      alert(t('connectionError'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('title')} <span className="text-blue-600 dark:text-blue-400">{t('titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulário ou Mensagem de Sucesso */}
          <div className="w-full lg:w-1/2">
            {isSubmitted ? (
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {t('success.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('success.message')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-300"
                >
                  {t('success.button')}
                </button>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/gabrielsrodriguesdev@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value="#" />
                <input
                  type="hidden"
                  name="_subject"
                  value={t('emailSubject')}
                />

                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? t('form.sending') : t('form.submit')}
                </button>
              </form>
            )}
          </div>

          <div className="w-full lg:w-1/2">
            {/* Informações de contato */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                {t('contactInfo.title')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{t('contactInfo.email')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">gabrielsrodriguesdev@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{t('contactInfo.phone')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">+55 (61) 99358-1926</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{t('contactInfo.location')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{t('contactInfo.locationValue')}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">{t('contactInfo.social')}</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/gabriel-de-souza-rodrigues-a40760145/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a 
                      href="https://github.com/gabriel121souza" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;