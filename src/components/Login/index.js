import { Component } from 'react'

import img1 from './images/img1.png'; 
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import './index.css'


class Login extends Component{
    render(){
        return(
            <div className='login-container'>
                <div className='login-card'>
                    <div className='login-avatar-container'>
                        <img src = {img1} />
                        <img src = {img2} />
                        <img src = {img3} />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Login