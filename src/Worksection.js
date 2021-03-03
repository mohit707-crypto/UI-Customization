import React from 'react'
import LpghowItwork from './images/lpg-howItWorkCount.jpg';
import LPghowItwork from './images/lpg-howItWorkImg1.jpg';
import LpgHowItwork from './images/lpg-howItWorkImg2.jpg';
import LPghOwItwork from './images/lpg-howItWorkImg3.jpg';
function Worksection() {
    return (
        <div>
              <section className="sectionHowItWork">
            <div className="container largeContainer">
                <h2 className="sectionTitle text-center">
                    How it works
                </h2>
                <div className="countWrapper">
                    <img src={LpghowItwork} className="img-fluid" alt="Image"/>
                </div>
                <div className="rowWrapper d-flex flex-column flex-md-row justify-content-between">
                    <div className="contentWrapper">
                        <span className="count">1</span>
                        <div className="imgWrapper">
                            <img data-src={LPghowItwork} className="img-fluid lazyload" alt="Image"/>
                        </div>
                        <p className="title">
                            Choose Your Print
                        </p>
                    </div>
                    <div className="contentWrapper">
                        <span className="count">2</span>
                        <div className="imgWrapper">
                            <img data-src={LpgHowItwork} className="img-fluid lazyload" alt="Image"/>
                        </div>
                        <p className="title">
                            Upload Your <br />Image Photo
                        </p>
                    </div>
                    <div className="contentWrapper">
                        <span className="count">3</span>
                        <div className="imgWrapper">
                            <img data-src={LPghOwItwork} className="img-fluid lazyload" alt="Image"/>
                        </div>
                        <p className="title">
                            Place Your <br />Order
                        </p>
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

export default Worksection;
