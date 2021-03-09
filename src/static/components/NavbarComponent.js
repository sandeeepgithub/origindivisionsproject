import React, {useState} from 'react';
import {NavImages} from './DataComponent'
import './NavbarComponent.css';

function NavbarComponent({setPosition}) {

    const [scrolled, setScrolled] = useState(false)
    const [bars, setBars] = useState(false)
    const logo = NavImages[0].image
    const logoTransparent = NavImages[1].image


    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const handleOnClick = (val) => {
        
        setPosition(val)
        setBars(!bars)        
    }

    const barsHandler = () => {
        setBars(!bars)
    }

    window.addEventListener('scroll', function() {
        window.scrollY > 200 ? setScrolled(true) : setScrolled(false)
    })



    return(
        <nav className={scrolled ? "navigation scrolled" : "navigation"}>
            <div className="content">
                <div className="logo" onClick={handleLogoClick}>
                    <img src={scrolled ? logoTransparent : logoTransparent} alt="Origin Divisions" />
                </div>
                <ul className={bars ? "nav-links active" : "nav-links"}>
                    <li onClick={() => handleOnClick("0")}> Goals</li>
                    <li onClick={() => handleOnClick("1")}> Fields</li>
                    <li onClick={() => handleOnClick("2")}> Products</li>
                    <li onClick={() => handleOnClick("3")}>About Us</li>
                </ul>
                <i id="bars" className={bars ? "fa fa-times-circle" : "fa fa-bars"} onClick={barsHandler}></i>
            </div>
        </nav>
)
}

export default NavbarComponent


/*

*/