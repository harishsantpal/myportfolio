import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


import './footer.css';

const Footer = () => {

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-nav">
                <ul>
                    <li><button onClick={() => smoothScroll('home')}>Home</button></li>
                    <li><button onClick={() => smoothScroll('about')}>About Me</button></li>
                    <li><button onClick={() => smoothScroll('experience')}>Experience</button></li>
                    <li><button onClick={() => smoothScroll('projects')}>Projects</button></li>
                    <li><button onClick={() => smoothScroll('skills')}>Skills</button></li>
                    <li><button onClick={() => smoothScroll('education')}>Education</button></li>
                    <li><button onClick={() => smoothScroll('certification')}>Certification</button></li>
                    <li><button onClick={() => smoothScroll('contactme')}>Contact Us</button></li>
                </ul>
            </div>
            <div className="footer-contact">
                <div className="contact-item">
                    <h1 className='icon'><IoMail className='back' /></h1>
                    <p>harishsantpal8113@gmail.com</p>
                </div>
                <div className="contact-item">
                    <h1 className='icon'><FaMobileScreen className='back' /></h1>
                    <p>+91-7058781290</p>
                </div>
                <div className="contact-item" onClick={() => window.open('https://github.com/harishsantpal', '_blank')}>
                    <h1 className='icon'><FaGithub className='back' /></h1>
                    <p>github.com/harishsantpal</p>
                </div>
                <div className="contact-item" onClick={() => window.open('https://www.linkedin.com/in/harish-santpal-001b041b6', '_blank')}>
                    <h1 className='icon'><FaLinkedin className='back' /></h1>
                    <p>linkedin.com/in/harish-santpal</p>
                </div>

            </div>
            <div className="footer-info">
                <p>Designed & Developed by <span> Harish Santpal</span></p>
            </div>
        </footer>
    );
};

export default Footer;
