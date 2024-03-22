import React, { useState } from 'react';
import dataCollapse from '../datas/dataCollapse.json';

function Collapse({ isFichLogement, logement }) {
    // Ici on initialise une liste qui va garder en mémoire si chaque collapse est ouvert ou fermé et on les met de base fermé (false)
    /////// setIsOpenList = fonction fournie par React qui met à jour l'état isOpenList
    const [isOpenList, setIsOpenList] = useState(dataCollapse.map(() => false));

    // Fonction qui permet de switch entre false ou true sur ma variable "isOpen", on prend comme argument l'index (0 = première collapse générée, 1 = deuxième collapse générée...)
    const toggleCollapse = (index) => {
        // On copie la liste actuelle des états pour pouvoir modifier ensuite (spread operator = décomposition du tableau et donc je copie élément par élément dans updatedIsOpenList)
        const updatedIsOpenList = [...isOpenList];
        // On inverse l'état du collapse où l'on a cliqué
        updatedIsOpenList[index] = !updatedIsOpenList[index];
        // On met à jour la liste des états avec la nouvelle valeur pour le collapse
        setIsOpenList(updatedIsOpenList);
    }

    return (
        <div className={`collapse-${isFichLogement ? 'fichlogement' : 'about'}`}>
            {/* Affichage des collapses provenant de dataCollapse.json uniquement si ce n'est pas la page FichLogement */}
            {!isFichLogement && dataCollapse.map((item, index) => (
                <div key={item.id} className="collapse__header">
                    <div className="collapse__title">
                        {/* Affichage du titre du collapse */}
                        <h2>{item.title}</h2>
                        {/* Bouton pour basculer l'état d'ouverture du collapse, (index) permettant de savoir sur quelle collapse on a cliqué */}
                        <button className={`collapse__title--button ${isOpenList[index] ? 'open' : ''}`} onClick={() => toggleCollapse(index)}>
                            <i className="fa-solid fa-chevron-up"></i>
                        </button>
                    </div>
                    {/* Affichage du contenu du collapse s'il est ouvert, (index) permettant de savoir l'état de la collapse */}
                    {isOpenList[index] && (
                        <div className="collapse__content">
                            <p className="collapse__content--text">{item.text}</p>
                        </div>
                    )}
                </div>
            ))}
            {/* Ajout des collapses pour la page FichLogement */}
            {isFichLogement && (
                //////// React.Fragment, qui sert à envelopper plusieurs éléments JSX
                <>
                    <div className="collapse__header">
                        <div className="collapse__title">
                            <h2>Description</h2>
                            <button className={`collapse__title--button ${isOpenList[dataCollapse.length] ? 'open' : ''}`} onClick={() => toggleCollapse(dataCollapse.length)}>
                                <i className="fa-solid fa-chevron-up"></i>
                            </button>
                        </div>
                        {/* Affichage de la description du logement si le collapse est ouvert */}
                        {isOpenList[dataCollapse.length] && (
                            <div className="collapse__content">
                                <p className="collapse__content--text">{logement.description}</p>
                            </div>
                        )}
                    </div>
                    {/* Collapse pour afficher les équipements du logement */}
                    <div className="collapse__header">
                        <div className="collapse__title">
                            <h2>Équipements</h2>
                            {/* On rajoute ici l'index (+ 1) en brut, car les collapses ne sont pas générés automatiquement */}
                            <button className={`collapse__title--button ${isOpenList[dataCollapse.length + 1] ? 'open' : ''}`} onClick={() => toggleCollapse(dataCollapse.length + 1)}>
                                <i className="fa-solid fa-chevron-up"></i>
                            </button>
                        </div>
                        {/* Affichage des équipements du logement si le collapse est ouvert */}
                        {isOpenList[dataCollapse.length + 1] && (
                            <div className="collapse__content">
                                <ul className="collapse__content--list">
                                    {/* Mapping à travers les équipements et affichage de chacun dans une liste */}
                                    {logement.equipments.map((equipment, index) => (
                                        <li className="collapse__content--list-element" key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Collapse;