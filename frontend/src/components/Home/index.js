import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css"
import Avt from "./images/Avt1.png";

class Home extends Component {
  state = {
    user:null
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async ()=>{
    const token = Cookies.get("jwt_token");

    if (!token) {
      this.props.history.replace("/login");
      return;
    }

    const url = 'http://localhost:5000/me'
    const options = {
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:token,
        }
    }

    const response = await fetch(url,options)
    const data = await response.json()

    if(response.ok){
        this.setState({user:data})
    }
    else{
        alert('can not able to fetch profile')
    }
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="room-container">
  {/* Header - Full Width */}
  <header className="roomtitle-card">
    <h1 className="brand-title">BubbleSpace</h1>
    <div className="profile">
      <span className="profile-name">Profile</span>
      <img
        src={user.avatar || "https://via.placeholder.com/40"}
        alt="User Avatar"
        className="profile-avatar"
      />
    </div>
  </header>

  {/* Main Content Split */}
  <div className="main-content">
    {/* Left Section - Forms */}
    <div className="form-section">
      {/* Join Virtual Space */}
      <form className="form-block">
        <h2 className="form-title">
            Join your <span className="highlight">Virtual Space</span>
        </h2>
        <input 
            type="text"
            placeholder="Room ID"
            className="join-room-id-field"
            />
        <input
            type="text"
            placeholder="password"
            className="join-room-pass-field"
            />
        <button className="btn create-btn" type="submit">
            Join
        </button>

      </form>

      {/* Divider */}
      <hr className="divider" />

      {/* Create Virtual Space */}
      <form className="form-block">
        <h2 className="form-title">
            Create your <span className="highlight">Virtual Space</span>
        </h2>
        <input 
            type="text"
            placeholder="Create Room ID"
            className="create-room-id-field"
            />
        <input
            type="text"
            placeholder="Create password"
            className="create-room-pass-field"
            />
        <button className="btn create-btn" type="submit">
            Create room
        </button>

      </form>
      
    </div>

    {/* Right Section - Illustration */}
    <div className="Image">
      <img src={Avt} alt="Virtual Space Illustration" />
    </div>
  </div>
</div>
    );
  }
}

export default Home;


<div className="form-block">
        <h2 className="form-title">
          Create your <span className="highlight">Virtual Space</span>
        </h2>
        <input
          type="text"
          placeholder="Create room Id"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Create password"
          className="input-field"
        />
        <button className="btn create-btn">Create space</button>
      </div>