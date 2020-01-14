import React from 'react';

const Received = (props) => {
    return (
        <div>
            <ol>
            {props.order.map((item, i) =>
                <li key= {i}>
                {item.name}
                {item.table}
                <button onClick = {()=> {props.onDelete(i)}}>x</button>
                </li>
                )}
            </ol>
            <section>
                <h2>Total R${props.order.reduce((acc, cur) => acc + cur.price,0)},00</h2>
            </section>
        </div>
    );
};

export default Received;