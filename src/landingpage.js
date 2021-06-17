import React from 'react'
import logo from './images/logo.svg'

function Landingpage() {
    return (
       
            <header class="header">
                <nav class="flex flex-jc-sb">
                    <a href="/" className="header__logo">
                        <img src={logo} alt="Easybank"/>
                    </a>

                    <a href="#" className="header__menu">
                        <span></span>
                        <span></span>
                        <span></span>

                    </a>
                </nav>
               



            </header>


    
    )
}

export default Landingpage
