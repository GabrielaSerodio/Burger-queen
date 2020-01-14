import React from 'react';
import '../Request/request.css'; 

const Request = (props) => {
    return (
        <section className = 'card-request'>
                <h1>Cliente: {props.name}</h1>
                <h1>Mesa: {props.table}</h1>
                <h1>Itens do pedido:</h1>
                <ul>{props.order.map((item)=>
                    <li> - {item.name}</li>)}
                </ul>
                <strong><p>{props.time}</p></strong>
        </section>
    )
}

export default Request;