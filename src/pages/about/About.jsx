import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import imgAboutBanner from '../../assets/images/banner/about_banner.webp';
import Collapse from '../../components/collapse/Collapse';
import collapseData from '../../components/datas/dataCollapse.json';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Banner image={imgAboutBanner}/>
        <main>
          <Collapse data={collapseData} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default About;