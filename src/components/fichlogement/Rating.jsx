import React from 'react';

function Rating(props) {
    const score = props.score;
    // Initialisation d'un tableau "notes"
    const notes = [1, 2, 3, 4, 5];

    return (
        <ul className="logement__description-info--rating">
            {notes.map((index) => (
                // Ici on compare l'index au score, si l'index (qui correspond au numéro de l'étoile) est plus petit ou égal que le score, alors, cela ajoutera la 
                // class "full-star", sinon, cela ajoutera "empty-star"
                <li key={index} className={`fa-solid fa-star ${index <= score ? 'full-star' : 'empty-star'}`}></li>
            ))}
        </ul>
    );
}

export default Rating;