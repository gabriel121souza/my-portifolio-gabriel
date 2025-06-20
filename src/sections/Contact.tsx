// src/sections/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de formulário gratuito
    // Ex: Formspree, Getform, ou simplesmente redirecionar para um e-mail.
    // Para Formspree, a action do form seria algo como:
    // action="https://formspree.io/f/SEU_ID_FORM" method="POST"

    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada! (Funcionalidade de envio real precisa de backend ou serviço)');
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contato</h2>
      <div className="contact-content">
        <p>Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="button">Enviar Mensagem</button>
        </form>
        <p style={{ marginTop: '30px' }}>Você também pode me encontrar em:</p>
        <p>Email: <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/SEU_USUARIO" target="_blank" rel="noopener noreferrer">linkedin.com/in/SEU_USUARIO</a></p>
        <p>GitHub: <a href="https://github.com/SEU_USUARIO" target="_blank" rel="noopener noreferrer">github.com/SEU_USUARIO</a></p>
      </div>
    </section>
  );
};

export default Contact;