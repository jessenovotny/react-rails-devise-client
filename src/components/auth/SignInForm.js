import React from 'react';

class SignInForm extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSignInClick = this.handleSignInClick.bind(this)
  }

  handleInputChange(ev){
    const nextState = this.state
    nextState[ev.target.name] = ev.target.value
    this.setState(nextState)
  }

  handleSignInClick(ev){
    const userCreds = this.state
    this.props.handleSignInClick(ev, userCreds)
  }

  render() {
    return (
        <form>
          <div className="form-group">
            <input type='email'
              className="form-control"
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <input type='password'
              className="form-control"
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInputChange} />
          </div>
          <input type="submit" className="btn btn-info" onClick={this.handleSignInClick} defaultValue='Log In' />
        </form>
      
    );
  }
}

module.exports = SignInForm
