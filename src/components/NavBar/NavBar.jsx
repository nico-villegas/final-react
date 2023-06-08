import React from 'react'
import './NavBar.css'
import logo from '../../img/logo-nuevo-color.png'
import Navbaritem from '../NavBaritem/NavBaritem'
import Cartwidget from '../CartWidget/Cartwidget'
import { Link } from 'react-router-dom'




const Navbar = (props) => {

    const nav_item = [
        {
            path: "/category/imperial",
            name: "Imperiales",
        },
        {
            path: "/category/camionero",
            name: "Camioneros"
        },
        {
            path: "/category/torpedo",
            name: "Torpedos"
        }
    ]


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to='/'>
                    <img id='logo-home' src={logo} alt="logo-home"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            nav_item.map(({ path, name }, index) => (
                                <Navbaritem path={path} name={name} key={index} />
                            ))
                        }
                        <Cartwidget className='carrito'/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar