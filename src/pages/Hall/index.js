import React, { useState } from 'react';
import Button from '../../components/Button/index.js';

function Hall() {
    
    return (
        <div className="container-page-hall">
            <Button
                className="button"
                title="Cardápio Geral"
                onClick={() => alert('TA ROLANDO')}
            />
            <Button 
                className="button"
                title="Café da manhã"
                onClick={() => alert("SOU FODA DIGDIN DIGDIN")}
            />
        </div>
    );
}


export default Hall;





// function Home() {
//     const [count, setCount] = useState(0);

//     return (
//         <div className="container-home">
//             <img className="img" src={Logo} alt="Logo"></img>
//             <h1>Burger Queen</h1>
//             <h3>Boas vindas</h3>
//             <p>Esolha uma das opções abaixo:</p>
//             <button>
//             Salão
//             </button>
//             <p>ou</p>
//             <button>
//             Cozinha
//             </button>
//         </div>
//     );
// }

// export default Home;