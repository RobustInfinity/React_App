import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/Header.css'

const Header = (props) =>{
    const {brand} = props;
    return(
        <div className="navbar navbar-expand-lg navbar-light container col-md-10">
            <a className="navbar-brand">{brand}</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
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