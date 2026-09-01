import { useState, useEffect } from "react";
import {Link} from "react-scroll"

function Navbar() {
    const [navActive, setNavActive] = useState (false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }
    
    const closeMenu = () => {
        setNavActive(false)

    }
    useEffect (
         ()=>{
            const handleResize = () => {
                    if(window.innerWidth <= 500){
                        closeMenu;
                    }
            };
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize",handleResize);
            }
        },[]
    );

    useEffect (()=>{
        if(window.innerWidth <= 1200){
            closeMenu;
        }
    },[]);
   return(
    <nav className={`navbar ${navActive ? "active" : ''}`}>
<div className="personal">
    <h3>Toheeb's Portfolio</h3>
</div>

        <a className={`nav_hamburger ${navActive ? "active" : ''}`} onClick={toggleNav}>
            <span className="nav__hamburger__line"> </span>
            <span className="nav__hamburger__line"> </span>
            <span className="nav__hamburger__line"> </span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ''}`}>
            <ul>
                <li>
                    <Link onClick={closeMenu}
                    activeClass='navbar--active-content'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='HeroSection'
                    className="navbar--content">
                    Home
                    </Link>
             
                </li>
                <li>
                    <Link onClick={closeMenu}
                    activeClass='navbar--active-content'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='Myportfolio'
                    className="navbar--content">
                    Portfolio
                    </Link>
             
                </li>
                <li>
                    <Link onClick={closeMenu}
                    activeClass='navbar--active-content'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='AboutMe'
                    className="navbar--content">
                    About Me
                    </Link>
             
                </li>
                <li>
                    <Link onClick={closeMenu}
                    activeClass='navbar--active-content'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='testimonial'
                    className="navbar--content">
                    Testimonials
                    </Link>
             
                </li>
            </ul>
        </div>
        <Link onClick={closeMenu}
                    activeClass='navbar--active-content'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to='Contact'
                    className="btn-contact"
        >Contact me</Link>
    </nav>
   )
    
       
    
}

export default Navbar;