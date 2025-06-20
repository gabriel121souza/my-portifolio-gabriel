// src/sections/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <img src="/images/seu-avatar.jpg" alt="Seu Nome" /> {/* Coloque sua foto em public/images */}
        <p>Olá! Meu nome é [Seu Nome], e sou um desenvolvedor front-end apaixonado por criar interfaces de usuário intuitivas e eficientes.</p>
        <p>Com X anos de experiência, sou proficiente em React, TypeScript, JavaScript, HTML e CSS. Tenho um forte interesse em [sua área de interesse, ex: UI/UX, acessibilidade, performance] e estou sempre buscando aprender novas tecnologias e melhores práticas.</p>
        <p>Minha jornada na programação começou quando [conte uma breve história sobre como você começou]. Desde então, venho construindo projetos que resolvem problemas reais e contribuem para uma melhor experiência digital.</p>
        <p>Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para explorar meus projetos e entrar em contato!</p>
      </div>
    </section>
  );
};

export default About;