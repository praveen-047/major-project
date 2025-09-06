import { Component } from "react";

import img2 from "./images/img2.png";
import img1 from "./images/img1.png";
import img3 from "./images/img3.png";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onChangeEmail = (event)=>{
    this.setState({
        email:event.target.value
    })
  }

  onChangePassword = (event)=>{
    this.setState({
        password:event.target.value
    })
  }

  submitLoginForm = async (event)=>{
    event.preventDefault()
    const{email,password} = this.state
    const userDetails = {email,password}
    const url = 'https://localhost:3000/login'
    const options = {
        method:'POST',
        body:JSON.stringify(userDetails)
    }

    const response = await fetch(url,options)
    const data = response.json()

    if(response.ok===true){
        this.onLoginSuccess(data.jwt_token)
    }
    else{
        this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-avatar-container">
            <img className="login-img" src={img2} alt="avatar" />
            <img className="login-img" src={img1} alt="avatar" />
            <img className="login-img" src={img3} alt="avatar" />
          </div>
          <form onSubmit={this.submitLoginForm} className="login-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="enter your email address"
              id="email"
              onChange={this.onChangeEmail}
            ></input>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              placeholder="enter your password"
              id="pass"
              onChange={this.onChangePassword}
            ></input>
            <button className="login-button" type="submit">
              login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
