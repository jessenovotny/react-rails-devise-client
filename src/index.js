import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/auth/SignIn'
import './stylesheets/index.css';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route path='/sign_in' component={SignIn}/>
  </Router>,
  document.getElementById('root')
);
