import React from 'react';
import '../Received/received.css';

const Received = (props) => {
    return (
        <section>
            <ul className="desc-product">
            {props.order.map((item, i) =>
                <li className="item-product" key= {i}>
                1x {item.name} <strong>R${item.price},00</strong>
                <button className="btn-delete" onClick = {(e)=> {e.preventDefault(); props.onDelete(i)}}>ⓧ</button>
                </li>
                )}
            </ul>
            <div>
                <h2 className="h2-total">Total R${props.order.reduce((acc, cur) => acc + cur.price,0)},00</h2>
            </div>
        </section>
    );
};

export default Received;