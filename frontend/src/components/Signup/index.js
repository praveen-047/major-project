import { Component } from "react";
import A1 from "./images/A1.png";
import A2 from "./images/A2.png";
import A3 from "./images/A3.png";
import "./index.css";

class Signup extends Component {
  state = {
    name:'',
    email:'',
    password:'',
  }

  onChangeName = (event)=>{
    this.setState({name:event.target.value})
  }

  onChangeEmail = (event)=>{
    this.setState({email:event.target.value})
  }

  onChangePassword = (event)=>{
    this.setState({password:event.target.value})
  }

  onClickLogin = ()=>{
    const{history} = this.props
    history.replace('/login')
  }

  onSignupSuccess = ()=>{
    const {history} = this.props 
    history.replace('/login')
  }
  
  onSignupFailure = (error)=>{
    this.setState({
      showError:true,
      error,
    })
  }

  submitSignupForm = async (event)=>{
    event.preventDefault()
    const {name,email,password} = this.state
    const userDetails = {name,email,password}

    const url = "http://localhost:5000/signup";

    const options = {
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body:JSON.stringify(userDetails)
    }

    const response = await fetch(url,options)
    const data = await response.json()
    if(response.ok===true){
      this.onSignupSuccess()
    }
    else{
      this.onSignupFailure(data.error_msg)
    }
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-card">
          {/* Avatars */}
          <div className="signup-avatar-container">
            <img src={A1} alt="avatar1" />
            <img src={A2} alt="avatar2" />
            <img src={A3} alt="avatar3" />
          </div>

          {/* Signup Form */}
          <form onSubmit={this.submitSignupForm} className="signup-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              onChange={this.onChangeName}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
              onChange={this.onChangeEmail}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={this.onChangePassword}
            />

            <button className="signup-button" type="submit">Register / Signup</button>
            <p className="login-link" onClick={this.onClickLogin}>Already have a account? Login</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
