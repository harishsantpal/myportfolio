import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#home">Harish</a>
            </div>
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li><button onClick={() => smoothScroll('about')}>About Me</button></li>
                <li><button onClick={() => smoothScroll('experience')}>Experience</button></li>
                <li><button onClick={() => smoothScroll('projects')}>Projects</button></li>
                <li><button onClick={() => smoothScroll('skills')}>Skills</button></li>
                <li><button onClick={() => smoothScroll('education')}>Education</button></li>
                <li><button onClick={() => smoothScroll('certification')}>Certification</button></li>
                <li><button onClick={() => smoothScroll('contactme')}>Contact Us</button></li>
            </ul>
            <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="hamburger"></div>
            </div>
        </nav>
    );
}

export default Navbar;
