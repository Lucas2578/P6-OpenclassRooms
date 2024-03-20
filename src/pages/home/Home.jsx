import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import imgHomeBanner from '../../assets/images/banner/home_banner.png';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs"/>
    </div>
  );
};

export default Home;