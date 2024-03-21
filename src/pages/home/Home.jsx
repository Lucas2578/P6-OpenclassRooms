import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import imgHomeBanner from '../../assets/images/banner/home_banner.png';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs"/>
      </main>
    </div>
  );
};

export default Home;