import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import logementData from '../../components/datas/logement.json';
import Collapse from '../../components/collapse/Collapse';

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

  const customTitles = ["Titre Collapse 1", "Titre Collapse 2"];

  return (
    <div>
      <div className="container">
      <Header />
      <main className="logement">
        <div className="logement__img">
          <img src={pictures[currentIndex]} alt={logement.title} className="logement__img"/>
          <button className="logement__img--next" onClick={handleNextClick}>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
          <button className="logement__img--previous" onClick={handlePreviousClick}>
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <h2 className="logement__title">{logement.title}</h2>
        <p className="logement__location">{logement.location}</p>
        <div className="logement__tags">
          {tags.map((tag, index) => {
            return (
              <div key={index} className="logement__tags--element">
              <p>{tag}</p>
            </div>
            )
          })}
      </div>
      {logement && (
        <Collapse logement={logement} customTitles={customTitles} isFichLogement={true} />
      )}
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default FichLogement;