import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import imgHomeBanner from '../../assets/images/banner/home_banner.webp';
import CardList from '../../components/card/CardList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <main>
          <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs" addOverlay={true}/>
          <CardList />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;