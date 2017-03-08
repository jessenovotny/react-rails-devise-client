const Store = require('./Store')

class UserStore extends Store {
  constructor(initialState){
    super(null)
  }

  loginUser(user){
    this.setState(user)
  }

  logoutUser(){
    this.setState(null)
  }
}

module.exports = new UserStore()