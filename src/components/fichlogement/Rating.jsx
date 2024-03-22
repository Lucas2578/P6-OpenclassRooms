import React from 'react';

function Rating(props) {
    const score = props.score;
    const notes = [1, 2, 3, 4, 5];

    return (
        <div className="logement__description-info--rating">
            {notes.map((index) => (
                // Ici on compare l'index au score, si l'index (qui correspond au numéro de l'étoile) est plus petit que le score, alors, cela ajoutera la 
                // class "full-star", sinon, cela ajoutera "empty-star"
                <i key={index} className={`fa-solid fa-star ${index < score ? 'full-star' : 'empty-star'}`}></i>
            ))}
        </div>
    );
}

export default Rating;