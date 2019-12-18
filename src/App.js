import React from 'react';
// import "./styles.css";
// import Home from './pages/Home.js';
import firebase from '../src/utils/firebase';

import Hall from '../src/pages/Hall/index';
import Menu from '../src/components/Menu/index';

const database = firebase.firestore();


const App = () => (
    <div className="App">
      <Menu />
      <Hall />      
    </div>
  );


export default App;

