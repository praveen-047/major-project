import { Component } from 'react'

import A1 from './images/A1.png'; 
import A2 from './images/A2.png';
import A3 from './images/A3.png';
import './index.css'


class Login extends Component{
    render(){
        return(
            <div className='login-container'>
                <div className='login-card'>
                    <div className='login-avatar-container'>
                        <img src = {A1} />
                        <img src = {A2} />
                        <img src = {A3} />
                    </div>
                    <form action='post'>
                        <label for = "email">
                            email
                        </label>
                        <input type  = "email" placeholder='enter your email address' id = 'email'>
                        </input>
                        <label for = 'pass'>
                            password
                        </label>
                         <input type  = "password" placeholder='enter your password' id = 'pass'></input>
                         <button type='submit'>login</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Login