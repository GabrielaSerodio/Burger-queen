import firebase from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCv-00zerykE8HP8uG7nFhNKITbMzS6WVo",
    authDomain: "sap003-burger-queen.firebaseapp.com",
    databaseURL: "https://sap003-burger-queen.firebaseio.com",
    projectId: "sap003-burger-queen",
    storageBucket: "sap003-burger-queen.appspot.com",
    messagingSenderId: "410353198503",
    appId: "1:410353198503:web:2bfbe2e9cb0181b4cb8282",
    measurementId: "G-XG86G92FB1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dataBase = firebase.firestore();

export default dataBase;