import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {


    return (
        <div>
            <Navbar className='navBar' bg="" expand="lg">
                <Container fluid>
                    <div className='logo'>
                        <Link to={'/'}> <img src={logo} height="50px"></img> </Link>
                    </div>

                    <div className='navLink'>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                                <Link className='mx-3' to={'/'}>Home</Link>
                                <Link className='mx-3' to={'/destination'}>Destination</Link>
                                <Link className='mx-3' to={'/blog'}>Blog</Link>
                                <Link className='mx-3' to={'/contact'}>Contact</Link>
                                <Link className='mx-3' to={'/contact'}> <button className='px-4 rounded'>Login</button> </Link>

                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;