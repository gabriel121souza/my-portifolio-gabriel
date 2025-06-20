// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string; // Opcional
  repoLink: string;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Aplicativo de Tarefas',
    description: 'Um aplicativo web responsivo para gerenciar suas tarefas diárias, com funcionalidades de adicionar, remover e marcar como concluído.',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Local Storage'],
    liveLink: 'https://seutodolist.netlify.app', // Substitua pelo link real
    repoLink: 'https://github.com/SEU_USUARIO/seu-repo-todolist', // Substitua pelo link real
    imageUrl: '/images/seu-projeto-1.png', // Coloque uma imagem do projeto em public/images
  },
  {
    id: '2',
    title: 'Landing Page Responsiva',
    description: 'Uma landing page moderna e totalmente responsiva para uma empresa fictícia de tecnologia, demonstrando habilidades em layout e design.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
    liveLink: 'https://seulandingpage.vercel.app', // Substitua pelo link real
    repoLink: 'https://github.com/SEU_USUARIO/seu-repo-landingpage', // Substitua pelo link real
    imageUrl: '/images/seu-projeto-2.png', // Coloque uma imagem do projeto em public/images
  },
  {
    id: '3',
    title: 'Sistema de Blog (MVP)',
    description: 'Um sistema de blog com funcionalidade de criação e visualização de posts, incluindo autenticação de usuário simples.',
    technologies: ['React', 'TypeScript', 'Context API', 'Firebase (Firestore & Auth)'],
    // liveLink: 'https://seublog.web.app', // Pode ser opcional se for um MVP local ou privado
    repoLink: 'https://github.com/SEU_USUARIO/seu-repo-blog', // Substitua pelo link real
    imageUrl: '/images/seu-projeto-3.png', // Coloque uma imagem do projeto em public/images
  },
  // Adicione mais projetos aqui seguindo o mesmo formato
];