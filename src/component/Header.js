import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import '../styles/header.css'


export default function Header(){
    const [isUp, setIsUp] = useState(false)

    useEffect(() => {
        checkPage()

        const links = document.querySelectorAll('.navlink-elem');
    
        if (links.length) {
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
            links.forEach((link) => {
                link.classList.remove('active');
            });
            e.preventDefault();
            link.classList.add('active');
            });
        });
        }

        document.title = "Meet Felicia Winna";
    });

    function checkPage(){
        var navlink = document.getElementById("navlink");
        var logoContainer = document.getElementById("logo")

        isUp ? navlink.classList.remove("home-nav") : navlink.classList.add("home-nav")
        isUp ? logoContainer.style.setProperty('width', 'calc(20vw - 48px)') : logoContainer.style.setProperty('width', 'calc(80vw - 48px)')
    }

    return(
        <header>
            <div className='logo-wrapper' id='logo'> 
                <img src={require('../media/logo.png')} className="logoImg"/>
            </div>
            <div className='navlink' id="navlink">
                <ul>
                    <div className='navlink-elem active' onClick={() => (setIsUp(false))}><li>Home</li></div>
                    <div className='navlink-elem' onClick={() => (setIsUp(true))}><li>Get To Know Me</li></div>
                    <div className='navlink-elem' onClick={() => (setIsUp(true))}><li>Projects</li></div>
                    <div className='navlink-elem' onClick={() => (setIsUp(true))}><li>Activities</li></div>
                    <div className='navlink-elem' onClick={() => (setIsUp(true))}><li>Contact</li></div>
                </ul>
            </div>
            <div className='toggleLang'>
                <p className='toggle-btn'>Eng<span class="fi fi-gb"></span></p>
            </div>
            <div className='downloadIcon'>
                <FontAwesomeIcon icon={faDownload} className='header-download-icon' />
            </div>
        </header>
    )
}