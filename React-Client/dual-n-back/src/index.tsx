import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
registerServiceWorker();
