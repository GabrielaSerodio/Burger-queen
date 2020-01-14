import React from 'react';
import { Link } from "react-router-dom";

import './style.css';

const Menu = () => 
    <header>
        <nav className="navbar">
            <ul className="navbar-list">
                <a href><li className="navbar-item"><Link to="/">Sair</Link></li></a>
                <a href><li className="navbar-item"><Link to="/hall">Acesso Salão</Link></li></a>
                <a href><li className="navbar-item"><Link to="/kitchen">Acesso Cozinha</Link></li></a>
            </ul>
        </nav>
    </header>

export default Menu;


