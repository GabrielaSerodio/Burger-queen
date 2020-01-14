import React, { useState, useEffect } from 'react';
import { firestore } from 'firebase';

import Menu from '../../components/Menu/index';
import Title from '../../components/Title/title';
import Request from '../../components/Request/request';

function Kitchen (props) {

    const [request, setRequest] = useState([]);

    useEffect(() => {
        firestore().collection('request').get().then((snapshot) => {
            snapshot.docs.map((doc) => setRequest ((current) => [...current, doc.data()]))
        })
    }, []);

    return (
        <main>
            <header>
            <Menu />
            <h1>Cozinha Burguinho</h1>
            <Title value="Pedidos para serem executados:"/>
            </header>
            <section className="container-request">
                {request.map((order, index) => 
                    <Request creationDate = {order.creationDate}
                        key = {index}                       
                        time = {order.time}
                        table = {order.table}
                        name = {order.name} 
                        order = {order.order}
                        status = {order.status}
                    />  
                )}
            </section>
        </main>
    );    
}

export default Kitchen;

