import React from "react";

function Banner({ image, texte, addOverlay }) {
    const bannerClass = addOverlay ? "banner banner--overlay" : "banner";

    return (
        <div className={bannerClass}>
            <img className="banner__img" src={image} alt="Bannière home page" />
            <span className="banner__text">{texte}</span>
        </div>
    );
}

export default Banner;