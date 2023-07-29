import React from 'react';
import "./Footer.scss";
import logoFooter from "../img/logo-footer.png";

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer__logo'>
                <img src={logoFooter} alt="logofooter" />
            </div>
            <div className='Footer__text'>© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer;