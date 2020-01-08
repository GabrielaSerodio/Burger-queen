import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import firebase from '../src/utils/firebase';
import Hall from '../src/pages/Hall/index';
import Menu from '../src/components/Menu/index';
import Login from '../src/pages/Login/index';
import Kitchen from '../src/pages/Kitchen/index';
import '../src/style.css'

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
      </div>
      <div>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route path="/hall" component={Hall}/>
          <Route path="/kitchen" component={Kitchen}/>
        </Switch>
      </div>
    </Router>
)};


export default App;

{/* <div className="App">
<Menu />
<Hall />      
</div> */}