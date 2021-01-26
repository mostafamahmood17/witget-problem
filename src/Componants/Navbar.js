import React from 'react';
import { Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
         
            <Nav>
                <Nav.Item as="li" className="mr-3 ml-3">
                <Link to="/">
                Buy
                </Link>
                </Nav.Item>
                
                <Nav.Item as="li">
                <Link to="/sellFrontPage">
                Sell
                
                </Link>
                </Nav.Item>
               
               
            </Nav>

        </div>
    );
};

export default Navbar;