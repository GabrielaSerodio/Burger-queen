import React from 'react';
import { Link } from "react-router-dom";

function Nav () {
    return(
        <nav>
            <ul>
                <li><Link to="/kitchen">Cozinha</Link></li>
                <li><Link to="/hall">Salão</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;