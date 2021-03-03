import React from 'react'
import Condction from './Condction';
import Policysection from './Policysection';
import LpgLogo from './images/lpg-logo.jpg'
import LpgSecurityIcons from './images/lpg-securityIcons.jpg'
function Footer() {
    return (
        <>
              <footer className="footer">
         <div className="container largeContainer">
            <div className="footerWrapper">
                <div className="logoCopyright">
                    <a href="javascript:;" className="logo">
                        <img data-src={LpgLogo} className="img-fluid lazyload" alt="Logo"/>
                    </a>
                    <p className="copyright">
                        &copy; 2020 Norsehus
                    </p>
                </div>
                <div className="d-flex flex-column flex-lg-row">
                    <ul className="navWrapper">
                        <li>
                            <a href="#termsConditions" className="fancybox">
                                Terms &amp; Conditions
                            </a>
                            <Condction />
                        </li>
                        <li>
                            <a href="#privacyPolicy" className="fancybox">
                                Privacy Policy
                            </a>
                            <Policysection />
                        </li>
                    </ul>
                    <div className="footerIcons"/>
                        <img data-src={LpgSecurityIcons} className="img-fluid lazyload" alt="Icons"/>
                    </div>
                </div>
            </div>
        
    </footer>
        </>
    )
}

export default Footer
