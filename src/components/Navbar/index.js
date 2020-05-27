import React from 'react';

import { NavLink } from 'react-router-dom';

import './styles.css';

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <li className="logo">breno.</li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/home">Início</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/projects">Projetos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/contact">Contato</NavLink>
                </li>
            </ul>
        </nav>
    )

}