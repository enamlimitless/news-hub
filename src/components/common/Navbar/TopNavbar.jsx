import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import './Topbar.css';
const TopNavbar = () => {
    return (
        <div className="py-3 bg-light border-bottom">
            <Container className="d-flex justify-content-between  align-content-center">
                <ul className="d-flex topbar-info">
                    <li>Monday, September 6, 2021</li>
                    <li><a href="/"> Contact</a></li>
                    <li>London, 27 o C</li>
                </ul>
                <ul className="d-flex topbar-social-icon align-items-center">
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaGooglePlusG /></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaPinterest /></a></li>
                    <li className="sign-in"><a href="/"> Sign In / Join</a></li>
                </ul>
                
            </Container>
        </div>
    );
};

export default TopNavbar;