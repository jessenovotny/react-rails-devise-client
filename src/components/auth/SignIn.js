import React from 'react';
import SignInForm from './SignInForm'
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Alert from 'react-bootstrap/lib/Alert'
const actions = require('../../actions/Actions')
const userStore = require('../../stores/UserStore')

class SignIn extends React.Component {
  constructor(){
    super()
    this.state = {
      alert: null
    }
    this.handleSignInClick = this.handleSignInClick.bind(this)
  }

  handleSignInClick(event, userCreds){
    event.preventDefault()
    $.ajax({
      method: "POST",
      url: "http://localhost:3001/users/sign_in.json",
      data: {
        user: {          
          email: userCreds.email,
          password: userCreds.password
        }
      }
    })
    .done(user => {
      actions.loginUser(user)
      browserHistory.push('/')
    })
    .catch(data => {
      this.setState({alert: data.responseJSON.error})
    })
  }

  componentWillMount(){
      if (userStore.getState()){
        browserHistory.push('/')
      }
  }

  componentDidMount(){
    this.removeListener = userStore.addListener(user => {
      this.setState({user})
    })
  }

  componentWillUnmount(){
    this.removeListener()
  }

  render() {
    const alert = (
      <Alert bsStyle="danger">{this.state.alert}</Alert>
    );

    return (
      <div className="col-lg-8 col-lg-offset-2">
        <h1 className="centered-text">Log In</h1>
        {this.state.alert ? alert : null}
        <SignInForm handleSignInClick={this.handleSignInClick} />
      </div>
    );
  }
}

module.exports = SignIn
