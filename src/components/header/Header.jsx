import React, { useState, useEffect } from 'react';
import "./header.css"
import { HiOutlineMenuAlt4 } from "react-icons/all"
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [navVisible, setNavVisible ] = useState(false);

  const handleMenuClick = () => {
    setNavVisible(!navVisible)
  }

  // Change Navbar color on scroll
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarColor('black');
      } else {
        setNavbarColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" style={{backgroundColor: navbarColor}}>
      <nav className="flexCenter paddings innerWidth navigation">
        <a href="" className="flexCenter logo">ASPIRE <span className='logo__decor'></span></a>

        <OutsideClickHandler
          onOutsideClick={() => setNavVisible(false)}
        >
          <div className={`flexCenter nav__menu ${ navVisible ? "nav-active" : ""}`}>
            <a href="#" className="nav__item">Residencies</a>
            <a href="#" className="nav__item">Our Values</a>
            <a href="#" className="nav__item">Contact Us</a>
            <a href="#" className="nav__item">Get Started</a>
            <button className="nav__item button">Contact</button>
          </div>
        </OutsideClickHandler>

        <div className={`menu__icon ${ navVisible ? "menu-disable" : ""}`} onClick={ handleMenuClick } ><HiOutlineMenuAlt4 /></div>
      </nav>
    </header>
  )
}

export default Header