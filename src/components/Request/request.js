import React from 'react';
import '../Request/request.css'; 

const Request = (props) => {
    return (
        <section className = 'card-request'>
            <fieldset>
                <h1>{props.name}</h1>
                <b>N. Mesa: {props.table}</b>
                <span>{props.creationDate}</span>
                <p>{props.time}</p>
                <ul>{props.order.map((item)=>
                    <li>{item.name}</li>)}
                </ul>
                <button>{props.status}</button>
            </fieldset>
        </section>
    )
}

export default Request;