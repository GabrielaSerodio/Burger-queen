import React, { useState } from 'react';
import Logo from '../images/img.png';


function Login() {
    
    return (
        <div className="container-home">
            <img className="img" src={Logo} alt="Logo"></img>
            <h1>Burger Queen</h1>
            <h3>Boas vindas</h3>
            <p>Esolha uma das opções abaixo:</p>
            <button>
            Salão
            </button>
            <p>ou</p>
            <button>
            Cozinha
            </button>
        </div>
    );
}

export default Login;


// //onClick={() =>}

// // exemplo de func hooks

// // function Treinaweb (props){
// //     const [nome, setNome] = useState('TreinaWeb');

// //     render(){
// //         return {
// //             <div>
// //                 <p>{nome}</p>
// //                 <button onClick={() => setNome('React')} >CLICK</button>
// //             </div>
// //         }
// //     }
// // }