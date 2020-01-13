import React from 'react';
import './input.css'

function Input(props) {
    return (
        <input 
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            onChange={props.onChange}
            value={props.value}
        >
        </input>
    );
}

export default Input;

