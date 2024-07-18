import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                    <span>|</span>
                    <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                </div>
                <div className="footer-right">
                    <p>© 2024 FabFashion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
