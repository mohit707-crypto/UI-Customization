import React from 'react'
import LpgmoneybackIcon from './images/lpg-moneybackIcon.jpg'

function Moneybacksection() {
    return (
        <div>
             <section className="sectionMoneyBack">
            <div className="container largeContainer">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <div className="iconWrapper">
                        <img src={LpgmoneybackIcon} className="img-fluid lazyload" alt="Moneyback Icon"/>
                    </div>
                    <div className="contentWrapper">
                        <h2 className="title">
                            30 Day Money Back Guarantee
                        </h2>
                        <p className="sectionText">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Moneybacksection;
