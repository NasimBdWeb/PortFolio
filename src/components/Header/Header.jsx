import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../data/images/logo.svg';
import Moon from '../data/images/Moon.svg';
import Sun from '../data/images/Sun.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'



const navlinks = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/about',
        display: 'About',
    },
    {
        path: '/projects',
        display: 'Projects',
    },
    {
        path: '/contact',
        display: 'Contact',
    },
]



const Header = () => {

    const [theme, setTheme] = useState("dark-theme")

  
    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme")
        } else {
            setTheme("dark-theme")
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  
    return (
        <header>


            <NavLink to="/">
                {theme === 'dark-theme' ? (
                    <img
                        src="https://i.ibb.co/5RcttTn/profile-removebg-preview.png"
                        alt="signature1"
                        key={theme}
                        className="logo "
                    />
                ) : (
                    <img
                        src="https://i.ibb.co/ypbVvby/profile-removebg-preview-1.png"
                        alt="signature2"
                        key={theme}
                        className="logo min-w-[150px] max-w-[300px] w-1/3 h-[75px]"
                    />
                )}
            </NavLink>
         


            <ul className={click ? "menu active" : "menu"}>
                {
                    navlinks.map((link, index) => <li key={index} >
                        <NavLink to={link.path} >{link.display}</NavLink>
                    </li>)
                }

            </ul>

            {/* dark mode */}


            <div>
                <input type="checkbox" class="checkbox" id="checkbox" onClick={() => toggleTheme()} />
                <label for="checkbox" class="checkbox-label ">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                    <span class="ball"></span>
                </label>
            </div>

            {/* darkmode */}

            <div className="mobile" onClick={handleClick}>
                {click ? (<FontAwesomeIcon icon={faClose} />)
                    :
                    (<FontAwesomeIcon icon={faBars} />)
                }


            </div>



        </header>
    );
};

export default Header;