import React from 'react';

import logoKasa from "../assets/logo/logo-footer.png";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logoKasa} alt="logo kasa" />
            <p className='copyright'>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;