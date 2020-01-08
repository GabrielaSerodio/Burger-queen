import React, { useEffect , useState } from 'react';
import dataBase from '../../utils/firebase';
import Button from '../../components/Button/index.js';
import Cards from '../../components/Cards/index';
import Menu from '../../components/Menu/index'



function Hall() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        dataBase.collection('menu').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    setMenu((currentState) => [...currentState, doc.data()]);
                });
                })
    }, []);
    

    return (
        <div>
            <Menu />
        <div>
            {menu.map(menuItem => 
            <Cards 
                className="cards"
                name={menuItem.name}
                price={menuItem.price}
                handleClick={() => console.log(menuItem)}
            />
            )}
        </div>
        <div className="container-page-hall">
            <Button
                className="button"
                title="Cardápio Geral"
                onClick={() => alert("ae mulekote")}
            />
            <Button 
                className="button"
                title="Café da manhã"
                onClick={() => alert("SOU FODA DIGDIN DIGDIN")}
            />
        </div>
        </div>
    );
}


export default Hall;

