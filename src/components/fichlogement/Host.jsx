import React from 'react';

function Host(props) {
    return (
        <div className="logement__description-info-host">
            <span className="logement__description-info-host--name">{props.name}</span>
            <img className="logement__description-info-host--picture" src={props.picture} alt={`Propriétaire ${props.name}`} />
        </div>
    )
}

export default Host;