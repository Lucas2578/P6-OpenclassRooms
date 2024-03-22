import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import logementData from '../../components/datas/logement.json';
import Collapse from '../../components/collapse/Collapse';
import Rating from '../../components/fichlogement/Rating';
import Host from '../../components/fichlogement/Host';

const FichLogement = () => {
  // Ici j'extrait les paramètres de l'URL (à savoir l'id du logement) dans ma variable logementId
  const { id: logementId } = useParams();
  // Ici je cherche les id de tous les logements et je compare à mon id à moi, une fois que j'ai trouvé une correspondance je stock toutes les informations à l'intérieur de ma variable logement
  const logement = logementData.find(logement => logement.id === logementId);

  const [currentIndex, setCurrentIndex] = useState(0);

  // J'ajoute le tableau de pictures présent dans mon fichier de donnée logement, dans ma variable "pictures"
  const pictures = logement.pictures;

  // J'ajoute le tableau des tags présent dans mon fichier de donnée logement, dans ma variable "tags"
  const tags = logement.tags;

  // Fonction avec opération modulo permettant de faire suivant en bouclant
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  }

  // Fonction avec opération modulo permettant de faire précédent en bouclant
  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div>
      <div className="container">
      <Header />
      <main className="logement">
        <div className="logement__img">
          <img src={pictures[currentIndex]} alt={logement.title} className="logement__img"/>
          <button className="logement__img--next" onClick={handleNextClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="logement__img--previous" onClick={handlePreviousClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <p className="logement__img--counter">{currentIndex + 1}/{pictures.length}</p>
        </div>


        <div class="logement__description">
          <div class="logement__description-element">
            <h2 className="logement__description-element-title">{logement.title}</h2>
            <p className="logement__description-element-location">{logement.location}</p>
            <div className="logement__description-element-tags">
                {tags.map((tag, index) => {
                  return (
                    <div key={index} className="logement__description-element-tags--element">
                      <p>{tag}</p>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className="logement__description-info">
            <Host name={logement.host.name} picture={logement.host.picture} />
            <Rating score={logement.rating} />
          </div>
        </div>


        {logement && ( <Collapse logement={logement} isFichLogement={true} /> )}
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default FichLogement;