import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Home from './pages/Home.js';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
