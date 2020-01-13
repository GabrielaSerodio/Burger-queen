import React, { useEffect , useState } from 'react';
import { firestore } from 'firebase';
import '../Hall/hall.css';
import Button from '../../components/Button/index.js';
import Cards from '../../components/Cards/index';
import Menu from '../../components/Menu/index';
import Input from '../../components/Input/input';
import Received from '../../components/Received/received';

function Hall() {

    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);
    const [breakfast, setBreakfast] = useState(null);
    const [drinks, setDrinks] = useState(null);
    const [modal, setModal] = useState({status: false});
    const [options, setOptions] = useState("");
    const [extras, setExtras] = useState("");
    const [name, setName] = useState("");
    const [table, setTable] = useState("");

    useEffect(() => { 
        firestore().collection('menu').get().then((snapshot) => {
            snapshot.docs.map((doc) => setMenu ((current) => [...current, doc.data()]))
        })
    },[]); 

    const addOrder = (menuItem) => {
        setOrder([...order, menuItem])   
    }

    const onDelete = key => {
        setOrder(order.filter((x,i) => i !== key))
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

    const  sendToFirebase = (e) => {
        e.preventDefault();
        
        if(name == null)
            return alert("Preencha os dados do cliente!")
    
        firestore().collection('request').doc().set({
            name: name,
            table: table,
            order: order,
            status: 'pending',
            time:   new Date().toLocaleString('pt-BR')
    
        })
        .then(alert("Pedido Enviado!"))
    }

    return (
        <main>
            <header>
                <Menu />
            </header>
            <section className="buttons-products">
                <Button
                    className="btn"
                    title="Cardápio Geral"
                    onClick={()=>{setBreakfast(false)}}
                />
                <Button 
                    className="btn"
                    id="breakfast"
                    title="Café da manhã"
                    onClick={()=>{setBreakfast(true)}}
                />
                <Button 
                    className="btn"
                    id="drinks"
                    title="Bebidas"
                    onClick={() =>{setDrinks(true)}}
                />
            </section>
            <section className="container-cards">
                {menu.filter((i)=>{return i.breakfast === breakfast}).map((menuItem, index) => {
                    return (                      
                        <Cards 
                            key={index} {...menuItem} 
                            handleClick={() => {verifyOptions(menuItem)}} />
                    )
                })}
            </section>
            <Received {...{name: name, order: order, table: table}} onDelete = {onDelete}/>
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
                            <Button 
                                className="button"
                                title="Adicionar Extras"
                                onClick={addOptionsExtras}
                            />
                    </div>
                ): false }
            </div>
            <aside className="data-client">
                <form className="form-request" >
                    <Input 
                        className="input input-name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text" 
                        placeholder="Nome cliente" 
                        maxLength="30" 
                    />
                    <Input 
                        className="input input-table" 
                        value={table}
                        onChange={e => setTable(e.target.value)}
                        type="number" 
                        placeholder="Número da mesa" 
                    />
                        <Button 
                            title="Enviar Pedido"
                            className="button btn-request"
                            onClick={sendToFirebase}
                        />  
                </form>
            </aside>
        </main>
    )
}

export default Hall;
