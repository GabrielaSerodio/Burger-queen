import React from 'react';
import './cards.css';

function Cards(props) {
    return (
        <section 
            onCLick={props.handleClick}
            className={props.className}
        >
        <img class='img-bar' src='${menu.data().image}' />
        <p>{props.name}</p>
        <p>R${props.price},00</p>

        </section>
    )
}

export default Cards;