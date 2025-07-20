import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
