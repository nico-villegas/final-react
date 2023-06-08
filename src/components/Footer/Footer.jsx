import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo-nuevo-color.png'
import whatsapp from '../../img/whatsapp.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'

const Footer = () => {
    return (
        <footer>
            <div className="grid-container-footer">
                <div className="footer-link">
                    <Link to='/'>
                        <img id='logo-home' src={logo} alt="logo-home" />
                    </Link>
                </div>
                <div className="grid-footer-img">
                    <div className="footer-img">

                        <Link to='https://web.whatsapp.com/' target="_blank"> 
                            <img src={whatsapp} alt="logo-de-whatsApp" />
                        </Link>
                        <Link to='https://www.instagram.com/' target="_blank"> 
                            <img src={instagram} alt="logo-de-instagram" />
                        </Link>
                        <Link to='https://www.facebook.com/' target="_blank"> 
                            <img src={facebook} alt="logo-de-facebook" />
                        </Link>
                    </div>
                </div>
                <div className="footer-parrafo">
                    <p>Copyright © 2023 Beto's, todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
