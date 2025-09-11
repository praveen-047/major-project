import { Component } from "react";
import Cookies from "js-cookie";

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
      // <div className="home-page">
      //   <h1>Welcome, {user.name} 👋</h1>

      //   {/* ✅ Show avatar if available */}
      //   {user.avatar ? (
      //     <img
      //       src={user.avatar}
      //       alt="User Avatar"
      //       style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      //     />
      //   ) : (
      //     <p>No avatar selected</p>
      //   )}
      // </div>
    );
  }
}

export default Home;
