import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    
    
    render(){
        return (
            <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link " to="/photos">Photos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/todos">Todos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/users">Users</Link>
                </li>
                </ul>
            </div>
        )
    }
} 

export default Header