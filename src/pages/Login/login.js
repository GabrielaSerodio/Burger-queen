import React, { useState } from 'react';
import firebase from '../../utils/firebase';
import Logo from '../../pages/Login/images/logo.png';
import Input from '../../components/Input/input';
import Button from '../../components/Button/index';
import Title from '../../components/Title/title'
import { withRouter } from 'react-router-dom';
import { firestore } from 'firebase';
import '../Login/login.css';

const Login = (props) => {
    
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");

    const validateLogin = () => {
        return email.length > 0 && passw.length >0;
    };

    async function signIn(e) {
        e.preventDefault();
        try {
            const auth = await firebase.signIn(email, passw)
            firestore().collection(`users`).doc(auth.user.uid).get().then( dados => {
                props.history.push(`/${dados.data().role}`)
            })
        } catch(error) {
            alert(error.message)
        }
    }

    return (
        <main>
            <section className="container">
                <div className="header">
                    <img className="img" src={Logo} alt="Logo" />
                    <Title value="Insira seus dados de usuário" />
                </div>
                <div>
                    <form className="form">
                        <Input 
                            className="input input-login" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email" 
                            placeholder="email" 
                            maxLength="30" 
                        />
                        <Input 
                            className="input input-login" 
                            value={passw}
                            onChange={e=> setPassw(e.target.value)}
                            type="password" 
                            placeholder="senha" 
                        />
                        <Button 
                            title="Acessar"
                            disabled={!validateLogin()}
                            type="submit"
                            className="button btn-login"
                            onClick={signIn}
                        />  
                    </form> 
                </div>
            </section>
        </main>
    );
};

export default withRouter((Login));
