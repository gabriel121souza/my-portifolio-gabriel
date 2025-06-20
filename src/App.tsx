import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow pt-20"> {/* flex-grow para expandir e empurrar o footer */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <section className="text-center py-24 px-4">
                  <h2 className="text-2xl font-bold">404 - Página Não Encontrada</h2>
                  <p className="mt-2">
                    Parece que você se perdeu no espaço. Volte para o{' '}
                    <Link to="/" className="text-blue-500 hover:underline">Início</Link>.
                  </p>
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
