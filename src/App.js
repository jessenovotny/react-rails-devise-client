import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import {browserHistory} from 'react-router';
import $ from 'jquery'
const userStore = require('./stores/UserStore')
const actions = require('./actions/Actions')
import Button from 'react-bootstrap/lib/Button'

class App extends Component {

  constructor(){
    super()
    this.state = {
      current_user: userStore.getState()
    }
    this.logout = this.logout.bind(this)
  }

  logout(){
    $.ajax({
      method: "DELETE",
      url: "http://localhost:3001/users/sign_out.json"
    })
    .done(() => {
      actions.logoutUser()
      browserHistory.push('/sign_in')
    })
  }

  componentWillMount(){
    if (!userStore.getState()){
      browserHistory.push('/sign_in')
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Welcome to this awesome app!
        </p>
        <p className="App-intro">
          <Button onClick={this.logout}>Log Out</Button>
        </p>
      </div>
    );
  }
}

export default App;
