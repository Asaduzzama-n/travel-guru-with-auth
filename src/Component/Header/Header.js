import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {

    const {user,logOutUser} = useContext(AuthContext);

    const handleSignOut = () =>{

        logOutUser()
        .then(()=>{
            console.log("out");
        })
        .catch((error)=> console.error(error.message));
    }


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
                                {
                                    user?.uid ? <Link className='mx-3'> <button onClick={handleSignOut} className='px-4 rounded'>Logout</button> </Link> : 
                                    
                                    <Link className='mx-3' to={'/login'}> <button className='px-4 rounded'>Login</button> </Link>

                                }
                                

                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;