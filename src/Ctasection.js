import React from 'react'
import LpgctaSlider from './images/lpg-ctaSliderImg1.jpg'
import LPgctaSlider from './images/lpg-ctaSliderImg1.jpg'
import LpGctaSlider from './images/lpg-ctaSliderImg1.jpg'
import LpgCtaSlider from './images/lpg-ctaSliderImg1.jpg'
import LpgcTaSlider from './images/lpg-ctaSliderImg1.jpg'
import LpgctASlider from './images/lpg-ctaSliderImg1.jpg'
import LpgcTASlider from './images/lpg-ctaSliderImg1.jpg'

import LpgnavSlider from './images/lpg-navSlide-1.jpg'
import LPgnavSlider from './images/lpg-navSlide-2.jpg'
import LpGnavSlider from './images/lpg-navSlide-3.jpg'
import LpgnAvSlider from './images/lpg-navSlide-4.jpg'
import LPGNnAvSlider from './images/lpg-navSlide-4.jpg'
import LpgnaVSlider from './images/lpg-navSlide-5.jpg'
import LpgnavSlideR from './images/lpg-navSlide-6.jpg'

import freeShipIcon from './images/lpg-freeShipIcon3.jpg'
import paymentIcons from './images/lpg-paymentIcons.jpg'
import clientImage from  './images/lpg-clientImg.jpg'
import ClientImage from './images/lpg-clientImg.jpg'
import ClientImaGe from './images/lpg-clientImg.jpg'



function Ctasection() {
    return (
        <div>
               <section className="sectionCTA" id="CTASection">
            <div className="container largeContainer">
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
                <h2 className="sectionTitle">
                    The perfect antidote to plain, boring walls or uninspiring decor.
                </h2>
                <div className="sliderWrapper">
                    <div className="mainSlider2" id="mainSlider2">
                      <div className="item">
                          <div className="imgWrapper">
                              <img src={LpgctaSlider} className="img-fluid" alt="Product Image"/>
                          </div>
                      </div>
                      <div className="item">
                          <div className="imgWrapper">
                              <img src={LPgctaSlider} className="img-fluid" alt="Product Image"/>
                          </div>
                      </div>
                      <div className="item">
                          <div className="imgWrapper">
                              <img src={LpGctaSlider} className="img-fluid" alt="Product Image"/>
                          </div>
                      </div>
                      <div className="item">
                          <div className="imgWrapper">
                              <img src={LpgCtaSlider} className="img-fluid" alt="Product Image"/>
                          </div>
                      </div>
                      <div className="item">
                          <div className="imgWrapper">
                              <img src={LpgcTaSlider} className="img-fluid" alt="Product Image"/>
                          </div>
                      </div>
                      <div className="item">
                          <div className="imgWrapper">
                              <img src={LpgctASlider} className="img-fluid" alt="Product Image"/>
                          </div>
                      </div>
                      <div className="item">
                          <div className="imgWrapper">
                              <img src={LpgcTASlider} className="img-fluid" alt="Product Image"/>
                          </div>
                      </div>
                    </div>
                    <div className="navSlider2" id="navSlider2">
                      <div className="item">
                        <div className="imgWrapper">
                            <img src={LpgnavSlider} className="img-fluid" alt="Image"/>
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgWrapper">
                            <img src={LPgnavSlider} className="img-fluid" alt="Image"/>
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgWrapper">
                            <img src={LpGnavSlider} className="img-fluid" alt="Image"/>
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgWrapper">
                            <img src={LpgnAvSlider} className="img-fluid" alt="Image"/>
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgWrapper">
                            <img src={LpgnaVSlider} className="img-fluid" alt="Image"/>
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgWrapper">
                            <img src={LpgnavSlideR} className="img-fluid" alt="Image"/>
                        </div>
                      </div>
                      <div className="item">
                        <div className="imgWrapper">
                            <img src={LPGNnAvSlider} className="img-fluid" alt="Image"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="priceWrapper">
                    <span className="wasPrice">
                        Was $287.95
                    </span>
                    <span className="nowPrice">
                        Now $137.95
                    </span>
                </div>
                <div className="customDropdown">
                    <select className="sectionText">
                        <option>12x16 inches [30x40 cm] 3 Piece Set</option>
                        <option>12x16 inches [30x40 cm] 2 Piece Set</option>
                        <option>12x16 inches [30x40 cm] 1 Piece Set</option>
                    </select>
                </div>
                <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center">
                    <a href="" className="custom-btn nonStickyBtn">
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
                    <div className="banerCommentSlider banerCommentSlider1">
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
                        <div className="item">
                            <div className="commentContent">
                                <div className="clientImage">
                                    <img data-src={ClientImage} className="img-fluid lazyload" alt="Client Image"/>
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
                                    <img data-src={ClientImaGe} className="img-fluid lazyload" alt="Client Image"/>
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
        </section>
        </div>
    )
}

export default Ctasection;
