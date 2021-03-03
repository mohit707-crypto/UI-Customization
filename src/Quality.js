import React from 'react'
import LpgQualityCanvases from './images/lpg-QualityCanvasesImg.jpg'
import LpgQUalityCanvases from './images/lpg-QualityCanvasesImg.jpg'


function Quality() {
    return (
        <div>
             <section className="sectionQualityCanvases">
            <div className="container largeContainer">
                <div className="rowWrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contentWrapper">
                                <h2 className="sectionTitle">
                                    Our high quality canvases
                                </h2>
                                <p className="sectionText">
                                    Our eye-catching artworks use archival, museum quality, cotton canvas and the Giclée technique to ensure that these beautiful canvases can be enjoyed by your family for years to come.
                                </p>
                                <div className="imgWrapper d-md-none">
                                    <img data-src={LpgQualityCanvases} className="img-fluid lazyload" alt="Image"/>
                                </div>
                                <ul className="pointsWrapper">
                                    <li>
                                        Modern design
                                    </li>
                                    <li>
                                        Premium cotton canvas
                                    </li>
                                    <li>
                                        High-resolution
                                    </li>
                                    <li>
                                        Waterproof ink
                                    </li>
                                </ul>
                                <p className="sectionText">
                                    Due to high demand and to help us offer free shipping it will take between 5 and 15 days to ship to the US. All orders can be tracked through our tracking page
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="imgWrapper d-none d-md-block">
                                <img data-src={LpgQUalityCanvases} className="img-fluid lazyload" alt="Image"/>
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

export default Quality
