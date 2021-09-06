import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../images/logo.png';
const MiddleNavbar = () => {
    return (
        <div>
            <Container>
                <img className="logo" src={logo} alt="logo" />
            </Container>
        </div>
    );
};

export default MiddleNavbar;