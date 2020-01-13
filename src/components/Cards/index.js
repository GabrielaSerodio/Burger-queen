import React from 'react';
import './cards.css';

function Cards(props) {
    return (
            <section onClick={props.handleClick} className="cards">
                <p>{props.name}</p>
                <p>R${props.price},00</p>
            </section>
        
    )
}

export default Cards;

// {/* <img class='img-bar' src='${menu.data().image}' /> */}