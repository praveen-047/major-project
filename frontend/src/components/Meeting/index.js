import { Component } from 'react'
import Header from '../Header'
import './index.css'

class Metting extends Component{
    render(){
        return(
            <div className='meeting-container'>
                <Header/>
                <div className='meeting-main-container'></div>
            </div>
        )
    }
}