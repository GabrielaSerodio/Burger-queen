import React from 'react';
import './input.css'

function Input(props) {
    return (
        <input 
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            maxlength={props.maxlength}
        >
        </input>
    );
}

export default Input;