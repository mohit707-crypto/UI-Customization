    import React from 'react'

import LpgLogo from './images/lpg-logo.jpg'
import LpgFreeshShipIcon from './images/lpg-freeShipIcon.jpg'
import LpgSecurityIcons from './images/lpg-securityIcons.jpg'

function Header() {
    return (
        <>
        <a href="#CTASection" className="custom-btn scrollTo stickyBtn">
                RUSH MY ORDER <span className="handIcon">👉</span>
            </a>
            <header className="header">
            <div className="headerTop">
                <div className="container largeContainer">
                    <span className="headerText">
                        FREE SHIPPING! <img src={LpgFreeshShipIcon} className="img-fluid" alt="Icon"/>
                    </span>
                </div>
            </div>
            <div className="headerMain">
                <div className="container largeContainer">
                    <div className="headerWrapper">
                        <a href="" className="logo">
                            <img data-src={LpgLogo} className="img-fluid lazyload" alt="Logo"/>
                        </a>
                        <div className="headerIconWrapper">
                            <div className="headerIcons">
                                <img data-src={LpgSecurityIcons} className="img-fluid lazyload" alt="Icons"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header

