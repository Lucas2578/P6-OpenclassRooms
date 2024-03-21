import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const NoPageFound = ({ errorNumber, errorText }) => {
  return (
    <div>
      <div className="container">
        <Header />
        <main className="error">
          <h2 className="error__number">404</h2>
          <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
          <a className="error__back" href="#/">Retourner sur la page d'accueil</a>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default NoPageFound;