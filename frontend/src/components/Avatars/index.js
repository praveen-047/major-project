import React, { Component } from "react";
import Cookies from 'js-cookie'
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
    this.state = { // default name
      selectedAvatar: A1, // default avatar
    };
  }

  handleAvatarClick = (avatar) => {
    this.setState({ selectedAvatar: avatar });
  };

  handleOk = async () => {
    const{selectedAvatar} = this.state
    
    const token = Cookies.get('jwt_token')

    const url = 'http://localhost:5000/avatar'
    const options = {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        Authorization:token
      },
      body:JSON.stringify({avatar:selectedAvatar})
    }

    const response = await fetch(url,options)
    const data = await response.json()

    if(response.ok){
      alert('Avatar saved successfully')
      const {history} = this.props
      history.replace('/')
    }else{
      alert(data.error_msg || "Error saving avatar")
    }

  };

  render() {
    const { selectedAvatar } = this.state;
    const avatars = [A1, A2, A3, A4, A5, A6, A7, A8];

    return (
      <div className="avatar-page">
        <div className="avatar-card">
          {/* Username */}
          <h2 className="avatar-username">Choose your avatar</h2>

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
