import React from "react";

function Card({ image, title }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card__img" />
            <h2 class="card__title">{title}</h2>
        </div>
    )
}

export default Card;