import { Component } from "react";
import "./index.css";

class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="login-box">
          <div className="avatars">
            <img
              src="https://i.ibb.co/vZ1QXwC/avatar1.png"
              alt="avatar1"
            />
            <img
              src="https://i.ibb.co/m0cYpD4/avatar2.png"
              alt="avatar2"
            />
            <img
              src="https://i.ibb.co/5hr0tMC/avatar3.png"
              alt="avatar3"
            />
          </div>

          <button className="google-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
            />
            Sign in with Google
          </button>

          <p className="divider">Or</p>

          <form>
            {/* In React, use htmlFor instead of for */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
            />

            <button type="submit" className="signin-btn">
              Sign in
            </button>
          </form>

          <p className="footer-text">
            Already a user? <a href="#">Login</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
