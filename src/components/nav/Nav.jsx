import { React } from "react";
import { NavLink } from 'react-router-dom';

function Nav() {

    const routes = [
        { path: "/", name: "Accueil" },
        { path: "/about", name: "A propos" },
    ];

    return (
        <nav className="nav">
            <ul> 
                {routes.map(route => (
                <li key={route.path}>
                    {/* NavLink permet de créer une balise <a> qui prend en props l'url où l'utilisateur est censé aller, (défini dans mon tableau "routes") */}
                    {/* Ca permet aussi de rajouter une class "active" sur ma <li> lorsque je suis sur la page correspondante à l'url qu'elle renvoie */}
                    <NavLink to={route.path} activeclassname="active">
                        {route.name}
                    </NavLink>
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default Nav;