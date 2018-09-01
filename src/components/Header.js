import React from 'react'
import PropTypes from 'prop-types'
import {Link} from'react-router-dom'
import '../stylesheets/Header.css'

const Header = (props) =>{
    const {brand} = props;
    return(
        <div className="navbar navbar-expand-lg navbar-light">
            <Link to='/' className="navbar-brand">{brand}</Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link to='/' className="nav-link">
                    <i class="fas fa-home"></i> Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact/add' className="nav-link">
                    <i class="far fa-plus-square"></i> Add</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-link">
                    <i class="far fa-address-book"></i> Contacts</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link">
                    <i class="far fa-question-circle"></i> About</Link>
                </li>
                </ul>
            </div>
        </div>
    )
}

Header.defaultProps = {
    brand : 'My App'
}

Header.propTypes = {
    brand : PropTypes.string.isRequired
}

export default Header;