import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="#">
                    <img
                        src="/pear.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    P.E.A.R
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Academy</Nav.Link>
                        <Nav.Link href="#pricing">Financials</Nav.Link>
                        <Nav.Link href="#pricing">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
