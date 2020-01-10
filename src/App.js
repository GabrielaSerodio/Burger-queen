import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hall from '../src/pages/Hall/index';
import Login from './pages/Login/login';
import Kitchen from '../src/pages/Kitchen/index';
import '../src/style.css'

const App = () => {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/hall" component={Hall}/>
          <Route path="/kitchen" component={Kitchen}/>
        </Switch>
      </div>
    </Router>
)};

export default App;