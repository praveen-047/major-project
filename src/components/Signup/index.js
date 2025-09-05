import { Component } from "react";
import A1 from "./images/A1.png";
import A2 from "./images/A2.png";
import A3 from "./images/A3.png";
import "./index.css";

class Signup extends Component {
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
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">Register / Signup</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
