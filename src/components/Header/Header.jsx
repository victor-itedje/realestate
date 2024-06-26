import React, { useState } from "react";
import './Header.css';
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const getMenuStyles = (menuOpen) => {
        if(document.documentElement.clientWidth <= 800 ) {
            return{
                right: !menuOpen && "-100%"
        }
        }
    }
    return(
        <section className="h-wrapper">
            <div className="flexcenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler
                onOutsideClick={()=> {
                    setMenuOpen(false)
                }}
                >
                <div className="flexcenter h-menu"
                style={getMenuStyles(menuOpen)}>
                    <a href="#residence">Residencies</a>
                    <a href="#value">Our Value</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#getstarted">Get Started</a>
                   <button className="button"> <a href="#contact">Contact</a></button>
                </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={()=> setMenuOpen((prev)=>!prev)} >
                <img src="./right.png" alt="" width={25} height={25} />
            </div>
            </div>

            
        </section>
    )
}

export default Header