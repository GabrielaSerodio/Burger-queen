import React, { useEffect , useState } from 'react';
import Button from '../../components/Button/index.js';
import Cards from '../../components/Cards/index';
import Menu from '../../components/Menu/index';
import Input from '../../components/Input/input';
import { firestore } from 'firebase';
import '../Hall/hall.css';


function Hall() {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);
    const [modal, setModal] = useState({status: false});
    const [options, setOptions] = useState("");
    const [extras, setExtras] = useState("");
    const [name, setName] = useState("");
    const [table, setTable] = useState("");


    useEffect(() => {
        firestore().collection('menu').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    setMenu((currentState) => [...currentState, doc.data()]);
                });
                })
    }, []);
    
    const addOrder = (menuItem) => {
        setOrder([...order, menuItem])
    } 

    const verifyOptions = (menuItem) => {
        if(menuItem.options.length !== 0){
            setModal({status: true, item: menuItem});
        } else {
            addOrder(menuItem);
        }
    }

    const addOptionsExtras = () => {
        const updatedItem = {...modal.item, name: `${modal.item.name} ${options} ${extras}`};
        addOrder(updatedItem);
        setModal({status: false});
    }  
    console.log(menu);

    return (
        <main>
            <Menu />
            <section className="data-client">
                <Input 
                    className="input input-name" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" 
                    placeholder="Nome cliente" 
                    maxlength="30" 
                />
                <Input 
                    className="input input-table" 
                    value={table}
                    onChange={e => setTable(e.target.value)}
                    type="number" 
                    placeholder="Mesa" 
                />
            </section>
            <section className="buttons-products">
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
            </section>
            <section className="container-cards">
                {menu.map((menuItem, index) => {
                    return (    
                        <>                    
                        <Cards 
                            key={index} {...menuItem} 
                            handleClick={() => {verifyOptions(menuItem)}} />
                        </>
                    )
                })}
            </section>
            <div>
                { modal.status ? (
                    <div>
                        <h3>Extras</h3>
                            {modal.item.extras.map((elem, index) => (
                                <div key={index}>
                                    <input onChange={() => setExtras(elem)} type="radio" name="extras" value={elem}/>
                                    <label>{elem}</label>
                                </div>
                            ))}
                        <h3>Opções</h3>
                            {modal.item.options.map((elem, index) => (
                                <div key={index}>
                                    <input onChange={() => setOptions(elem)} type="radio" name="options" value={elem}/>
                                    <label>{elem}</label>
                                </div>
                            ))}
                        
                    </div>
                ): false   }
            </div>
            <Button 
                className="button"
                title="Adicionar Extras"
                onClick={() => alert("SOU FODA DIGDIN DIGDIN")}
            />
            <section className="request">
                <h1>Meu pedido</h1>
                {order.map(elem =>  
                    <p>1 x {elem.name}</p>
                )}
                <Button 
                    title="Enviar Pedido"
                    type="submit"
                    className="button btn-request"
                    // onClick={}
                />  
            </section>
        </main>
    );
}


export default Hall;

