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
          {collapseData.map((collapse, index) => (
            <Collapse key={index} title={collapse.title} children={
              <p className="collapse__content--text">
                {collapse.text}
                </p>
                }
              />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default About;