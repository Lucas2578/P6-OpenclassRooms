import React from "react";

function Banner({ image, texte }) {

    return (
        <div className="banner">
            <img className="banner__img" src={image} alt="Bannière home page" />
            <span className="banner__text">{texte}</span>
        </div>
    );
}

export default Banner;