import React, { useState } from 'react';
import firebase from '../../utils/firebase';
import Logo from '../../pages/Login/images/logo.png';
import Input from '../../components/Input/input';
import Button from '../../components/Button/index';
import Title from '../../components/Title/title'
import Menu from '../../components/Menu/index';


// const signIn = () => {

//     firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .catch((error) => {
//         const errorCode = error.code;
//             if (errorCode === 'auth/wrong-password') {
//                 // document.querySelector('.error-password').textContent = 'Senha Incorreta';
//             } else if (errorCode === 'auth/user-not-found') {
//                 // document.querySelector('.error-email').textContent = 'Email não registrado!';
//             } else if (errorCode === 'auth/invalid-email') {
//                 // document.querySelector('.error-email').textContent = 'Formato de email inválido';
//             }
//         });
// };


function Login() {
    return (
        <div className="container-home">
            <Menu />
            <img className="img" src={Logo} alt="Logo"></img>
            <Title value="Insira seus dados de usuário" />
            <Input 
                className="input input-email" 
                type="email" 
                placeholder="usuário" 
                maxlength="30" 
            />
            <Input 
                className="input input-password" 
                type="password" 
                placeholder="senha" 
            />
            <Button 
                title="Acessar"
                className="button btn-login"
                // onClick={() => signIn()}
            />  
        </div>
    );
}

export default Login;

