import React from 'react'
import lpgfeaturedIcon from './images/lpg-featuredIcon1.jpg'
import lPgfeaturedIcon from './images/lpg-featuredIcon2.jpg'
import lPGfeaturedIcon from './images/lpg-featuredIcon3.jpg'
import lPGFeaturedIcon from './images/lpg-featuredIcon4.jpg'
import lPGFEAturedIcon from './images/lpg-featuredIcon3.jpg'
import lPGFEATuredIcon from './images/lpg-featuredIcon2.jpg'






function Featured() {
    return (
        <div>
            <section className="sectionFeatured">
<div className="container largeContainer">
    <div className="d-flex flex-column flex-md-row align-items-center">
        <span className="title">
            As featured on…
        </span>
        <div className="sliderWrapper">
            <div className="featuredSlider">
                <div className="item">
                    <div className="iconWrapper">
                        <img src={lpgfeaturedIcon} className="img-fluid" alt="Icon"/>
                    </div>
                </div>
                <div className="item">
                    <div className="iconWrapper">
                        <img src={lPgfeaturedIcon} className="img-fluid" alt="Icon"/>
                    </div>
                </div>
                <div className="item">
                    <div className="iconWrapper">
                        <img src={lPGfeaturedIcon} className="img-fluid" alt="Icon"/>
                    </div>
                </div>
                <div className="item">
                    <div className="iconWrapper">
                        <img src={lPGFeaturedIcon} className="img-fluid" alt="Icon"/>
                    </div>
                </div>
                <div className="item">
                    <div className="iconWrapper">
                        <img src={lPGFEAturedIcon} className="img-fluid" alt="Icon"/>
                    </div>
                </div>
                <div className="item">
                    <div className="iconWrapper">
                        <img src={lPGFEATuredIcon} className="img-fluid" alt="Icon"/>
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

export default Featured;
