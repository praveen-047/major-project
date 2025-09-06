import React, { Component } from "react";
import "./index.css";

// Import your avatar images
import A1 from "./images/A1.png";
import A2 from "./images/A2.png";
import A3 from "./images/A3.png";
import A4 from "./images/A4.png";
import A5 from "./images/A5.png";
import A6 from "./images/A6.png";
import A7 from "./images/A7.png";
import A8 from "./images/A8.png";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "User Name", // default name
      selectedAvatar: A1, // default avatar
    };
  }

  handleAvatarClick = (avatar) => {
    this.setState({ selectedAvatar: avatar });
  };

  handleOk = () => {
    alert(`Selected Avatar saved for ${this.state.username}`);
    // Later: you can navigate to another page or save in backend
  };

  render() {
    const { username, selectedAvatar } = this.state;
    const avatars = [A1, A2, A3, A4, A5, A6, A7, A8];

    return (
      <div className="avatar-page">
        <div className="avatar-card">
          {/* Username */}
          <h2 className="avatar-username">{username}</h2>

          {/* Selected Avatar */}
          <div className="selected-avatar">
            <img src={selectedAvatar} alt="selected avatar" />
          </div>

          {/* Avatar Grid */}
          <div className="avatar-grid">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`avatar-${index + 1}`}
                className="avatar-option"
                onClick={() => this.handleAvatarClick(avatar)}
              />
            ))}
          </div>

          {/* OK Button */}
          <button className="ok-btn" onClick={this.handleOk}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default Avatar;
