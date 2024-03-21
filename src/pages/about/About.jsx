import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import imgAboutBanner from '../../assets/images/banner/about_banner.png';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Banner image={imgAboutBanner}/>
        <main>
          
        <Collapse />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default About;