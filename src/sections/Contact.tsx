import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';

const Contact: React.FC = () => {
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
        form.reset(); // Limpa o formulário
      } else {
        alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
      }
    } catch (error) {
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Entre em <span className="text-blue-600 dark:text-blue-400">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estou disponível para oportunidades e colaborações. Envie-me uma mensagem!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulário ou Mensagem de Sucesso */}
          <div className="w-full lg:w-1/2">
            {isSubmitted ? (
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Obrigado pelo seu contato. Responderei o mais breve possível.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-300"
                >
                  Enviar nova mensagem
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
                    value="Novo contato do portfólio de Gabriel"
                  />

                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Nome
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
                    Email
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
                    Mensagem
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
                  {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>

          <div className="w-full lg:w-1/2">
           {/* Informações de contato */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Informações para Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">gabrielsrodriguesdev@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Telefone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+55 (61) 99358-1926</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Localização</h4>
                    <p className="text-gray-600 dark:text-gray-300">Brasília, Brasil</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/gabriel-de-souza-rodrigues-a40760145/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a 
                      href="https://github.com/gabriel121souza" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
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