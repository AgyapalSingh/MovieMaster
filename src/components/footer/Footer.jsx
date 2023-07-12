import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";


import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                {/* <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul> */}

                <h1>MOVIEMASTER</h1>


                <div className="infoText">
                    Experience the thrill of anticipation with MovieMaster's extensive collection of high-quality movie trailers and clips. Get a sneak peek into upcoming releases, witness the visual spectacle, and feel the excitement build. MovieMaster ensures that you're always up to date with the latest trailers, allowing you to make informed decisions about your next movie adventure.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/agyapal.singh.58726/" target='_blank'><FaFacebookF /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/agya_aujla/" target='_blank'><FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/agyapal-singh-020983241/" target='_blank'><FaLinkedin /></a>
                    </span>

                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
