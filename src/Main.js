import React from 'react'


import LpgMainSlide from './images/lpg-mainSlide-1.jpg'
import LPgMainSlide from './images/lpg-mainSlide-1.jpg'
import LPGMainSlide from './images/lpg-mainSlide-1.jpg'
import LPGMAinSlide from './images/lpg-mainSlide-1.jpg'
import LPGMAInSlide from './images/lpg-mainSlide-1.jpg'
import LPGMAINSlide from './images/lpg-mainSlide-1.jpg'
import LpGMAINSlide from './images/lpg-mainSlide-1.jpg'
import freeShipIcon from './images/lpg-freeShipIcon2.jpg'
import paymentIcons from './images/lpg-paymentIcons.jpg'
import clientImage from './images/lpg-clientImg.jpg'

import LpgClient from './images/lpg-clientImg.jpg'
import LPgClient from './images/lpg-clientImg.jpg'

import LpgnavSlide from './images/lpg-navSlide-1.jpg'
import LPgnavSlide from './images/lpg-navSlide-2.jpg'
import LPGnavSlide from './images/lpg-navSlide-3.jpg'
import LPGNavSlide from './images/lpg-navSlide-4.jpg'
import LpGNavSlide from './images/lpg-navSlide-4.jpg'
import LPGnAvSlide from './images/lpg-navSlide-5.jpg'
import LPGNAvSlide from './images/lpg-navSlide-6.jpg'






function Main() {
    const script = document.createElement("script");

    script.src = "./../public/js/lpg-plugins.js";
    script.async = true;

    document.body.appendChild(script);

    
    return (
      <div>
        <section className="sectionBanner">
        <div className="container largeContainer">
            <div className="row">
                <div className="col-lg-6">
                    <div className="sliderWrapper">
                        <div className="mainSlider" id="mainSlider">
                          <div className="item">
                              <div className="imgWrapper">
                                  <img src={LpgMainSlide} className="img-fluid" alt="Product Image"/>
                              </div>
                          </div>
                          <div className="item">
                              <div className="imgWrapper">
                                  <img src={LPgMainSlide} className="img-fluid" alt="Product Image"/>
                              </div>
                          </div>
                          <div className="item">
                              <div className="imgWrapper">
                                  <img src={LPGMainSlide} className="img-fluid" alt="Product Image"/>
                              </div>
                          </div>
                          <div className="item">
                              <div className="imgWrapper">
                                  <img src={LPGMAinSlide} className="img-fluid" alt="Product Image"/>
                              </div>
                          </div>
                          <div className="item">
                              <div className="imgWrapper">
                                  <img src={LPGMAInSlide} className="img-fluid" alt="Product Image"/>
                              </div>
                          </div>
                          <div className="item">
                              <div className="imgWrapper">
                                  <img src={LPGMAINSlide} className="img-fluid" alt="Product Image"/>
                              </div>
                          </div>
                          <div className="item">
                              <div className="imgWrapper">
                                  <img src={LpGMAINSlide} className="img-fluid" alt="Product Image"/>
                              </div>
                          </div>
                        </div>
                        <div className="navSlider" id="navSlider">
                          <div className="item">
                            <div className="imgWrapper">
                                <img src={LpgnavSlide} className="img-fluid" alt="Image"/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="imgWrapper">
                                <img src={LPgnavSlide} className="img-fluid" alt="Image"/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="imgWrapper">
                             <img src={LPGnavSlide} className="img-fluid" alt="Image"/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="imgWrapper">
                                <img src={LPGNavSlide} className="img-fluid" alt="Image"/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="imgWrapper">
                                <img src={LPGnAvSlide} className="img-fluid" alt="Image"/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="imgWrapper">
                                <img src={LPGNAvSlide} className="img-fluid" alt="Image"/>
                            </div>
                          </div>
                          <div className="item">
                            <div className="imgWrapper">
                                <img src={LpGNavSlide} className="img-fluid" alt="Image"/>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contentWrapper">
                        <div className="happyCUstomer">
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
                            Rated 4.8/5 by 984 Happy Customers
                        </div>
                        <h1 className="sectionTitle">
                            The perfect antidote to plain, boring walls or uninspiring decor.
                        </h1>
                        <h4 className="sectionText bannerText">
                            These exclusive canvases are designed to bring the glamour, elegance and style of the catwalk into your home
                        </h4>
                        <div className="d-flex flex-column flex-xl-row align-items-center">
                            <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                                RUSH MY ORDER <span className="handIcon">👉</span>
                            </a>
                            <div className="">
                                <span className="shippingText sectionText">
                                    free shipping
                                    <img src={freeShipIcon} className="img-fluid" alt="Icon"/>
                                </span>
                                <p className="moneyBackText">
                                   <span>100%</span> money back guarantee
                                </p>
                                <div className="paymentIcons">
                                    <img src={paymentIcons} className="img-fluid" alt="Payment Icons"/>
                                </div>
                            </div>
                        </div>
                        <div className="commentWrapper">
                            <div className="banerCommentSlider banerCommentSlider2">
                                <div className="item">
                                    <div className="commentContent">
                                        <div className="clientImage">
                                            <img data-src={LPgClient} className="img-fluid lazyload" alt="Client Image"/>
                                        </div>
                                        <div>
                                            <ul className="starlist list-unstyled d-flex flex-row align-items-center">
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
                                            <p className="comment sectionText">
                                                “Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and”
                                            </p>
                                            <span className="clientName">
                                                Miter G
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="commentContent">
                                        <div className="clientImage">
                                            <img data-src={LpgClient} className="img-fluid lazyload" alt="Client Image"/>
                                        </div>
                                        <div>
                                            <ul className="starlist list-unstyled d-flex flex-row align-items-center">
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
                                            <p className="comment sectionText">
                                                “Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and”
                                            </p>
                                            <span className="clientName">
                                                Miter G
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="commentContent">
                                        <div className="clientImage">
                                            <img data-src={clientImage} className="img-fluid lazyload" alt="Client Image"/>
                                        </div>
                                        <div>
                                            <ul className="starlist list-unstyled d-flex flex-row align-items-center">
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
                                            <p className="comment sectionText">
                                                “Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and”
                                            </p>
                                            <span className="clientName">
                                                Miter G
                                            </span>
                                        </div>
                                    </div>
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



export default Main;
