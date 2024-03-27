import React from 'react';
import "./styles/app.scss";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import NoPageFound from './pages/errors/NoPageFound';
import About from './pages/about/About';
import FichLogement from './pages/logements/FichLogement';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path ="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;