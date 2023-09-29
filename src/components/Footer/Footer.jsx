import React from 'react';
import '../Footer/Footer.css'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Nasim<span><img style={{ height: '30px' }} src="../../assets/Images/logp.png" alt="" /></span></h3>
                <p className="footer-links">
                  <NavLink className='linkitem' to='/contact'></NavLink>
                  <NavLink className='linkitem' to='/contact'></NavLink>
                  <NavLink className='linkitem' to='/home'>Home</NavLink>
                  <NavLink className='linkitem' to='/about'>About</NavLink>
                  <NavLink className='linkitem' to='/projects'>Projects</NavLink>
                  <NavLink className='linkitem' to='/contact'>Contact</NavLink>
                  <NavLink className='linkitem' to='/contact'></NavLink>
                   
                   
                </p>
                {/* <p className="footer-company-name">Sell Cart Pvt Ltd © 2015</p> */}
            </div>
            <div className="footer-center">
                <div >
                <Link  className='fCenetr'> <p><FontAwesomeIcon icon={faMap}  beatFade /> </p> Sylhet,Bangladesh</Link>
                </div>
            
                <div>
                
                <Link  className='fCenetr' to="mailto:info@nasimbd.online"> <p><FontAwesomeIcon icon={faEnvelope} beatFade /> </p>   info@nasimbd.online</Link> 
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-icons">
                <Link className='facebookicon' to="http://www.facebook.com/nasimbd.net" target="_blank" ><FontAwesomeIcon icon={faFacebook} beatFade /></Link>
                <Link className='linkedinicon' to="http://www.facebook.com/nasimbd.net" target="_blank" ><FontAwesomeIcon icon={faLinkedin} beatFade /></Link>
                <Link className='whatsappicon' to="https://api.whatsapp.com/send?phone=8801764545654" target="_blank" ><FontAwesomeIcon icon={faWhatsapp} beatFade /></Link>
                <Link className='githubicon' to="http://www.facebook.com/nasimbd.net" target="_blank" ><FontAwesomeIcon icon={faGithub} beatFade /></Link>
                </div>
            </div>
        </footer>


     

    );
};

export default Footer;