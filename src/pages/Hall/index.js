import React, { useEffect , useState } from 'react';
import { firestore } from 'firebase';
import Button from '../../components/Button/index.js';
import Cards from '../../components/Cards/index';
import Menu from '../../components/Menu/index';
import Input from '../../components/Input/input';
import Received from '../../components/Received/received';
import '../Hall/hall.css';

function Hall() {

    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);
    const [breakfast, setBreakfast] = useState(null);
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
        
        if(setName === "" || setTable === "")
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
        <body>
            <header>
                <Menu />
            </header>
            <main>
                <section className="container-hall">
                    <section className="buttons-products">
                        <Button
                            className="button btn-menu"
                            title="Jantar"
                            onClick={()=>{setBreakfast(false)}}
                        />
                        <Button 
                            className="button btn-breakfast"
                            id="breakfast"
                            title="Café da manhã"
                            onClick={()=>{setBreakfast(true)}}
                        />
                    </section>
                        <section className="cards-products">
                            {menu.filter((i)=>{return i.breakfast === breakfast}).map((menuItem, index) => {
                                return (                      
                                    <Cards 
                                        key={index} {...menuItem} 
                                        handleClick={() => {verifyOptions(menuItem)}}
                                    />
                                )
                            })}
                        </section>
                        <form className="form-request" >
                            <h2>Resumo do pedido</h2>
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
                                { modal.status ? (
                                    <div className="extras">
                                        <h3 className="text-modal">Extras</h3>
                                            {modal.item.extras.map((elem, index) => (
                                                <div key={index}>
                                                    <input onChange={() => setExtras(elem)} className="text-modal" type="radio" name="extras" value={elem}/>
                                                    <label className="text-modal">{elem}</label>
                                                </div>
                                            ))}
                                        <h3 className="h3-options text-modal">Opções</h3>
                                            {modal.item.options.map((elem, index) => (
                                                <div key={index}>
                                                    <input onChange={() => setOptions(elem)} className="text-modal" type="radio" name="options" value={elem}/>
                                                    <label className="text-modal">{elem}</label>
                                                </div>
                                            ))}
                                            <Button 
                                                className="button btn-extras"
                                                title="Adicionar Extras"
                                                onClick={addOptionsExtras}
                                            />
                                    </div>
                                ): false }
                            <Received {...{name: name, order: order, table: table}} onDelete = {onDelete}/>
                            <Button 
                                title="Enviar Pedido"
                                className="button btn-request"
                                onClick={sendToFirebase}
                                disabled={order.length === 0}
                            />  
                        </form>
                </section>    
            </main>
        </body>
    )
}

export default Hall;
