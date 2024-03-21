import React from "react";
import { Link } from "react-router-dom";
import logements from "../datas/logement.json";
import Card from "./Card";

const CardList = () => {

    return (
        <section className="card__list">
            {logements.map((logement) => {
                return (
                    <article key={logement.id} className="card__list--element">
                        <Link to={`/logement/${logement.id}`}>
                            <Card image={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                );
            })}
        </section>
    );
};

export default CardList;