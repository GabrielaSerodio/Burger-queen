import React from 'react';
import { Link } from "react-router-dom";

function Nav () {
    return(
        <nav>
            <ul>
                <li><Link to="/login">Login Usuários</Link></li>
                <li><Link to="/kitchen">Acesso Cozinha</Link></li>
                <li><Link to="/hall">Acesso Salão</Link></li>

            </ul>
        </nav>
    );
}

export default Nav;