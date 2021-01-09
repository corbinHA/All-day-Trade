import React from 'react'
import Disclaimer from './Disclaimer'
import Product from './Product'
import Support from './Support'


function Footer() {
    return (
        <>
            <div className="footer-grid__main-container">
                <Disclaimer />
                <Product />
                <Support />
            </div>
            <div className="footer__bottom-container">
                <a
                    className="footer-github"
                    href="https://github.com/corbinHA/Duke-and-Duke"
                >
                    <i className="fab fa-github-square"></i>
                </a>
                </div>
        </>
    );
    }

export default Footer;
