import { Component } from 'react'

<<<<<<< HEAD
import A1 from './images/A1.png'; 
import A2 from './images/A2.png';
import A3 from './images/A3.png';
=======
import img1 from './images/img1.png'; 
import img2 from './images/img2.png';
import img3 from './images/img3.png';
>>>>>>> 0222a3c17a891c1d40269c2ea6d116f540ce4bab
import './index.css'


class Login extends Component{
    render(){
        return(
            <div className='login-container'>
                <div className='login-card'>
                    <div className='login-avatar-container'>
<<<<<<< HEAD
                        <img src = {A1} />
                        <img src = {A2} />
                        <img src = {A3} />
=======
                        <img src = {img1} />
                        <img src = {img2} />
                        <img src = {img3} />
>>>>>>> 0222a3c17a891c1d40269c2ea6d116f540ce4bab
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