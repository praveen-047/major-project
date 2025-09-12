import { Component } from "react";
import './index.css'
import { FaHome } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { MdDirectionsWalk } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import A1 from "./images/A1.png";
import A2 from "./images/A2.png";
import A3 from "./images/A3.png";
import A4 from "./images/A4.png";
import A5 from "./images/A5.png";
import dhanush from "./images/dhanush.jpg";
import praveen from "./images/praveen.jpg";
import sinchana from "./images/sinchana.jpg";
// import map from "./images/map.mp4";
import map_img from "./images/map_img.jpg";

class Meeting extends Component{
    render(){
        return(
            <div className="meeting-container">
                <div className="meeting-header">
                    <div className="meeting-icons-container">
                        <FaHome className="meeting-icons" />
                    </div>
                    <div className="meeting-icons-container">
                       <IoMdMic className="meeting-icons"/>
                       <FaVideo className="meeting-icons"/>
                       <FiMessageCircle className="meeting-icons"/>
                       <MdDirectionsWalk className="meeting-icons"/>
                    </div>
                </div>
                <div className="meeting-body-container">
                    <div className="meeting-online-container">
                        <div className="meeting-searchbar-container">
                            <div className="meeting-searchbar">
                                <IoSearch className="meeting-icons" />
                                <input placeholder="search"/>
                            </div>
                            <MdOutlineKeyboardArrowLeft className="meeting-icons"/>
                        </div>
                        <h2 className="meeting-heading">
                            online
                        </h2>
                       <div className="meeting-online">
                             <div className="meeting-user">
                           <img className="meeting-img" src={A1} alt="avatar" />
                           <p className="userName">
                                kalyan
                           </p>
                        </div>
                        <div className="meeting-user">
                           <img className="meeting-img" src={A2} alt="avatar" />
                           <p className="userName">
                                sinchana
                           </p>
                        </div>
                        <div className="meeting-user">
                           <img className="meeting-img" src={A3} alt="avatar" />
                           <p className="userName">
                                dhanush
                           </p>
                        </div>
                       </div>
                        <h2 className="meeting-heading">
                            offline
                        </h2>
                       <div className="meeting-offline">
                              <div className="meeting-user">
                           <img className="meeting-img" src={A4} alt="avatar" />
                           <p className="userName">
                                praveen
                           </p>
                        </div>
                         <div className="meeting-user">
                           <img className="meeting-img" src={A5} alt="avatar" />
                           <p className="userName">
                                raju
                           </p>
                        </div>
                       </div>
                    </div>
                     <div className="meeting-video-container">
                        <div className="meeting-video-display">
                           <img className="meeting-video" src={dhanush} alt="video display" />
                           <img className="meeting-video" src={sinchana} alt="video display" />
                           <img className="meeting-video" src={praveen} alt="video display" />
                     </div>
                     <div className="meeting-map">
                        {/* <video muted loop autoPlay>
                            <source src={map} type="video/mp4"/>
                        </video> */}
                         <img className="map" src={map_img} alt="map display" />
                     </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default Meeting;