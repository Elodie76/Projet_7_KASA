import React from 'react';

const Banner = ({imgBanner,title}) => {
    return (
        
            <div className="home">
            <div className="banner">
                <img src={imgBanner} alt="paysage-cotier" className="banner-img" />
                <h1 className="banner-title">{title}</h1> 
                
            </div>
            
        </div>
        
    );
};

export default Banner;