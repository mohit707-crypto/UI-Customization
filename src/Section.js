import React from 'react'
import Lpgjustforyou from './images/lpg-justForYouImg1.jpg'
import LPgjustforyou from './images/lpg-justForYouImg2.jpg'
import LPgJustforyou from './images/lpg-justForYouImg2.jpg'
import LpGjustforyou from './images/lpg-justForYouImg3.jpg'
function Section() {
    return (
        <div>
             <section className="sectionJustForYou">
            <div className="container largeContainer">
                <h2 className="sectionTitle text-center">
                    Just for you
                </h2>
                <p className="sectionText text-center">
                    These exclusive canvases are designed to bring the glamour, elegance and style of the catwalk into your home
                </p>
                <div className="sliderWrapper">
                    <div className="justForYouSlider">
                        <div className="item">
                            <div className="imgWrapper">
                                <img src={Lpgjustforyou} className="img-fluid" alt="Image"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imgWrapper">
                                <img src={LPgjustforyou} className="img-fluid" alt="Image"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imgWrapper">
                                <img src={LpGjustforyou} className="img-fluid" alt="Image"/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imgWrapper">
                                <img src={LPgJustforyou} className="img-fluid" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviewBtnWrapper">
                    <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                        RUSH MY ORDER <span className="handIcon">👉</span>
                    </a>
                    <div className="reviewWrapper">
                        <ul className="starlist list-unstyled d-flex flex-row align-items-center justify-content-center">
                            <li>
                                <i className="material-icons">star</i>
                            </li>
                            <li>
                                <i className="material-icons">star</i>
                            </li>
                            <li>
                                <i className="material-icons">star</i>
                            </li>
                            <li>
                                <i className="material-icons">star</i>
                            </li>
                            <li>
                                <i className="material-icons">star</i>
                            </li>
                        </ul>
                        <p className="text">
                            Rated 4.8/5 by 984 Happy Customers
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Section;
