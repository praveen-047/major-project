import { Component } from "react";
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import img2 from "./images/img2.png";
import img1 from "./images/img1.png";
import img3 from "./images/img3.png";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    showError: false,
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

  onClickRegister = ()=>{
    const{history} = this.props 
    history.replace('/signup')
  }

  onLoginSuccess = (jwtToken)=>{
    Cookies.set('jwt_token',jwtToken,{expires:30})
    const {history} = this.props 
    history.replace('/avatars')
  }
  
  onLoginFailure = (error)=>{
    this.setState({
      showError:true,
      error,
    })
  }

  submitLoginForm = async (event)=>{
    event.preventDefault()
    const{email,password} = this.state
    const userDetails = {email,password}
    const url = "http://localhost:5000/login";

    const options = {
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          'Accept': 'application/json',
        },
        body:JSON.stringify(userDetails)
    }

    const response = await fetch(url,options)
    const data = await response.json()

    if(response.ok===true){
        this.onLoginSuccess(data.jwt_token)
    }
    else{
        this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    // const jwtToken = Cookies.get('jwt_token')
    // if(jwtToken!== undefined){
    //   return <Redirect to="/" />
    // }

    const{showError,error} = this.state
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
            <p className="signup-link" onClick={this.onClickRegister}>Don't have a account? Register</p>
            <p className="error-msg">{showError && error}</p>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;
