import React from 'react';
import { Link } from "react-router-dom";

import './style.css';


const Menu = () => 
    <header>
        <nav>
            <ul>
                <li><Link to="/">Sair</Link></li>
                <li><Link to="/kitchen">Acesso Cozinha</Link></li>
                <li><Link to="/hall">Acesso Salão</Link></li>
            </ul>
        </nav>
    </header>;

export default Menu;


