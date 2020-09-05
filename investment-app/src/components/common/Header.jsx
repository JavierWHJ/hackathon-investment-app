import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="primary" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src="/pear.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    P.E.A.R
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/academy">Academy</Nav.Link>
                        <Nav.Link href="/financials">Financials</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
