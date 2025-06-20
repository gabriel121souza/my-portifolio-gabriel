import React from 'react';
import bgVideo from '../assets/gift-backrground.mp4';
import minhaFoto from '../assets/foto-perfil.png';
import resume from '../assets/gabriel-de-souza-rodrigues.pdf';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10" />

      {/* Título topo */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-[30vh] text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-[0_0_8px_#3b82f6]">
          Sua Solução Tech Começa Aqui.
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mt-4 drop-shadow-[0_0_6px_#3b82f6]">
          Transforme Suas Ideias em Realidade Digital.
        </p>
      </div>

      {/* Card com imagem e dados */}
      <div className="relative z-20 flex justify-center items-center px-4 py-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center gap-6">
          {/* Foto */}
          <img
            src={minhaFoto}
            alt="Gabriel"
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-4 border-white object-cover shadow-md"
          />

          {/* Informações */}
          <div className="text-white text-center md:text-left flex flex-col gap-3 md:gap-4 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold drop-shadow-[0_0_8px_#3b82f6]">Gabriel de Souza</h2>
            <p><span className="font-semibold drop-shadow-[0_0_8px_#00ffcc]">Email: </span><span className='drop-shadow-[0_0_8px_#3b82f6]'>gabrielsrodriguesdev@gmail.com</span></p>
            <p><span className="font-semibold drop-shadow-[0_0_8px_#00ffcc]">Nacionalidade:</span> <span className='drop-shadow-[0_0_8px_#3b82f6]'>Brasileiro</span></p>
            <p><span className="font-semibold drop-shadow-[0_0_8px_#00ffcc]">Endereço:</span> <span className='drop-shadow-[0_0_8px_#3b82f6]'>Brasília</span></p>
            <div className="flex justify-center md:justify-start">
              <a
                href={resume}
                download="Curriculo-Gabriel"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
