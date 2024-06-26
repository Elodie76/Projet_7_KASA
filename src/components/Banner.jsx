import React from 'react';

const Banner = ({imgBanner,title1,title2}) => {
    return (
            <div className="banner">
                <img src={imgBanner} alt="paysage-cotier" className="banner-img" />
                <div className='title-container'>
                    <h1 className="banner-title">{title1}</h1>
                    <p className="banner-title">{title2}</p>
                </div>
                
                
            </div>
    );
};

export default Banner;