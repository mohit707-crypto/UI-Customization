import React from 'react';
import Lpgfaq from './images/lpg-faqImg.jpg';
import LpgFaq from './images/lpg-faqImgMobile.jpg'



function Faqsection() {
    return (
        <div>
             <section className="sectionFAQ">
            <h2 className="sectionTitle text-center">
                Frequently Asked Questions
            </h2>
            <div className="rowWrapper">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faqWrapper">
                            <div className="accordion" id="faqAccordion">
                                <div className="card cardActive">
                                    <div className="card-header" id="faqheading1">
                                        <button type="button" className="accordionBtn d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#faqcollapse1" aria-expanded="false">
                                            <div className="question">
                                                Lorem ipsum, or lipsum as it is sometimes known?
                                            </div>
                                            <span className="fas fa-closed"><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </div>
                                    <div id="faqcollapse1" className="collapse show" aria-labelledby="faqheading1" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p className="sectionText">
                                                The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.  The passage is attributed to an unknown.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqheading2">
                                        <button type="button" className="accordionBtn d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#faqcollapse2" aria-expanded="false">
                                            <div className="question">
                                                Dummy text used in laying out print?
                                            </div>
                                            <span className="fas fa-closed"><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </div>
                                    <div id="faqcollapse2" className="collapse" aria-labelledby="faqheading2" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p className="sectionText">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate doloremque natus quae rem, iste itaque obcaecati aspernatur eaque! Corporis at odit quis quibusdam sint nisi voluptas non deleniti totam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqheading3">
                                        <button type="button" className="accordionBtn d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#faqcollapse3" aria-expanded="false">
                                            <div className="question">
                                                Where do you ship?
                                            </div>
                                            <span className="fas fa-closed"><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </div>
                                    <div id="faqcollapse3" className="collapse" aria-labelledby="faqheading3" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p className="sectionText">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate doloremque natus quae rem, iste itaque obcaecati aspernatur eaque! Corporis at odit quis quibusdam sint nisi voluptas non deleniti totam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqheading4">
                                        <button type="button" className="accordionBtn d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#faqcollapse4" aria-expanded="false">
                                            <div className="question">
                                                Finibus Bonorum et Malorum for use in a type?
                                            </div>
                                            <span className="fas fa-closed"><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </div>
                                    <div id="faqcollapse4" className="collapse" aria-labelledby="faqheading4" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p className="sectionText">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate doloremque natus quae rem, iste itaque obcaecati aspernatur eaque! Corporis at odit quis quibusdam sint nisi voluptas non deleniti totam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqheading5">
                                        <button type="button" className="accordionBtn d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#faqcollapse5" aria-expanded="false">
                                            <div className="question">
                                                Do you have a money-back guarantee?
                                            </div>
                                            <span className="fas fa-closed"><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </div>
                                    <div id="faqcollapse5" className="collapse" aria-labelledby="faqheading5" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p className="sectionText">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate doloremque natus quae rem, iste itaque obcaecati aspernatur eaque! Corporis at odit quis quibusdam sint nisi voluptas non deleniti totam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="imgWrapper">
                            <img data-src={Lpgfaq} className="img-fluid lazyload d-none d-lg-block" alt="Image"/>
                            <img data-src={LpgFaq} className="img-fluid lazyload d-block d-lg-none" alt="Image"/>
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
        </section>
        </div>
    )
}

export default Faqsection;
