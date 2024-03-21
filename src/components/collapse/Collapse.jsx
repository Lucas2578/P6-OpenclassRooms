import { React, useState } from 'react';
import collapse from '../datas/dataCollapse.json';

function Collapse () {
    // Ici on initialise une liste qui va garder en mémoire si chaque collapse est ouvert ou fermé et on les met de base fermé (false)
    //////// setIsOpenList = fonction fournie par React qui met à jour l'état isOpenList
    const [isOpenList, setIsOpenList] = useState(collapse.map(() => false));

    // Fonction qui permet de switch entre false ou true sur ma variable "isOpen", on prend comme argument l'index (0 = première collapse générée, 1 = deuxième collapse générée...)
    const toggleCollapse = (index) => {
        // On copie la liste actuelle des états pour pouvoir modifier ensuite (spread operator = décomposition du tableau et donc je copie élément par élément dans updatedIsOpenList)
        const updatedIsOpenList = [...isOpenList];
        // On inverse l'état du collapse où l'on a cliqué
        updatedIsOpenList[index] = !updatedIsOpenList[index];
        // On met à jour la liste des états avec la nouvelle valeur pour le collapse
        setIsOpenList(updatedIsOpenList);
    }

    // Filtre pour récupérer uniquement les collapses possédant une catégorie "about"
    const filteredCollapse = collapse.filter(collapse => collapse.categorie === 'about');

    return (
        <div className="collapse">
            {/* On parcours toutes les données filtrées pour créer un élément pour chaque collapse qui a la catégorie "about" */}
            {filteredCollapse.map((collapse, index) => (
                // Déclenche la fonction "toggleCollapse" au clic avec l'index de la collapse en argument
                <div key={collapse.id} className="collapse__header" onClick={() => toggleCollapse(index)}>
                    <div className="collapse__title">
                        <h2>{collapse.title}</h2>
                        {/* Si isOpenList est true, ça affiche un chevron-down (?) et si c'est false, ça affiche un chevron-up (:) */}
                        {isOpenList[index] ? (
                            <i class="fa-solid fa-chevron-down"></i>
                        ) : (
                            <i class="fa-solid fa-chevron-up"></i>
                        )}
                    </div>
                    {/* On se sert de && pour que SI la collapse est true (donc ouverte), cela affiche le content */}
                    {isOpenList[index] && <div className="collapse__content">{collapse.text}</div>}
                </div>
            ))}
        </div>
    );
}

export default Collapse;