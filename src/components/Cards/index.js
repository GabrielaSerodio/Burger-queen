import React from 'react';
import Add from '../../images/add-black.png';
import './cards.css';

function Cards(props) {
    return (
            <section onClick={props.handleClick} className="container-cards">
                <section className="sec-desc">
                    <p>{props.name}</p>
                    <p>R${props.price},00</p>
                </section>
                <section className="sec-btn">
                    <button className="btn-add-product" onClick={props.handleClick}>
                        <img className="img-add" src={Add} alt="Logo" />
                    </button>
                </section>              
            </section>
        
    )
}

export default Cards;
