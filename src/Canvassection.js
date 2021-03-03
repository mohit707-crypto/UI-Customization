import React from 'react';
import LpgCanvas from './images/lpg-ExclusiveCanvasesImg.jpg';

function Canvassection() {
    return (
        <div>
             <section className="sectionExclusiveCanvases">
            <div className="container largeContainer">
                <h2 className="sectionTitle text-center">
                    These exclusive canvases are designed to bring the glamour
                </h2>
                <div className="rowWrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="imgWrapper">
                                <img src={LpgCanvas} className="img-fluid lazyload" alt="Image"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contentWrapper">
                                <div className="sectionText">
                                    These exclusive canvases are designed to bring the glamour, elegance and style of the catwalk into your home.
                                </div>
                                <div className="sectionText">
                                    The perfect antidote to plain, boring walls or uninspiring decor. You can feel the movement, strength and dynamism of the women as they sashay down the catwalk spreading joy as they walk.
                                </div>
                                <div className="sectionText">
                                    This set of 3 vibrant artworks will allow you to easily refresh the look of your home and bring more color, joy and energy into your life.
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Canvassection;
