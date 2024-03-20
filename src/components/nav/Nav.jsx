import { React, useState, useEffect } from "react";
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
                    <NavLink to={route.path} activeClassName="active">
                        {route.name}
                    </NavLink>
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default Nav;