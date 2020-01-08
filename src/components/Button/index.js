import React from 'react';

import './style.css';

function Button(props) {
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
            >
            {props.title}
        </button>
    );
}

export default Button;