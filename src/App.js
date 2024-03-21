import React from 'react';
import "./styles/app.scss";
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import NoPageFound from './pages/errors/NoPageFound';
import About from './pages/about/About';
import FichLogement from './pages/logements/FichLogement';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path ="*" element={<NoPageFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;