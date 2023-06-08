import React from 'react'
import './NavBaritem.css'
import { NavLink } from 'react-router-dom';

const Navbaritem = (props) => {
    return (
            <li className="nav-item">
                <NavLink id='nav-link' className='nav-link' aria-current={"page"} to={props.path}>{props.name}</NavLink>
            </li>
    )
}

export default Navbaritem