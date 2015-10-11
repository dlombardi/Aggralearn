import React from "react";
import DataActions from "../actions/DataActions"
import API from "../API"

export default React.createClass({
  getInitialState(){
    return({register: false})
  },
  handleRegistration(event){
    event.preventDefault();
    let register = {};
    Object.keys(this.refs).forEach(key => register[key] = this.refs[key].value);
    console.log(register);
    API.registerUser(register);
  },
  handleLogin(event){
    event.preventDefault();
    let login = {};
    Object.keys(this.refs).forEach(key => login[key] = this.refs[key].value);
    API.loginUser(login);
  },
  toggleRegisterState(event){
    event.preventDefault();
    console.log("ok");
    var newState = !this.state.register
    this.setState({register: newState}, function(){
      console.log(this.state.register);
    });
  },
  render(){
    var registerBtn = <input onClick={this.handleRegistration} type="submit" name="login" className="login loginmodal-submit" value="Register" />;
    var loginBtn = <input onClick={this.handleLogin} type="submit" name="register" className="login loginmodal-submit" value="login" />;
    var emailField = <input type="text" name="email" placeholder="Email" ref="email"/>;
    return(
      <div>
        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog">
            <div className="loginmodal-container">
              <h1>Register for an Account</h1><br/>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="user" placeholder="Username" ref="username"/>
                {this.state.register ? emailField : " "}
                <input type="password" name="pass" placeholder="Password" ref="password"/>
                {this.state.register ? registerBtn : loginBtn}
              </form>
              <div className="login-help">
                <button className="btn btn-default" onClick={this.toggleRegisterState}>Sign Up!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
