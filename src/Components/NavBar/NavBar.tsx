import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-bootstrap';

export default function NavBar() {
   
    return (
        <div className='Nav' style={{ color: 'white' }}>
            <Navbar className="" expand="lg" style={{ backgroundColor: 'black' }}>
                <Container fluid>
                    <Navbar.Brand href="#home" style={{ color: 'white' }}>PortFolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle-custom'>
                        <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" style={{ borderColor: 'white' }}>
                        <Nav className="me-auto">
                    
                            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>


                            <Nav.Link href="#skills" style={{ color: 'white' }}>Skills</Nav.Link>
                            <Nav.Link href="#projects" style={{ color: 'white' }}>Projects</Nav.Link>
                            <Nav.Link href="#connect" id='navStyle' style={{ color: 'white'}}>Lets_Connect</Nav.Link>
            
                            {/* <Nav.Link className='icons' ><FontAwesomeIcon  icon={faLinkedin} /></Nav.Link>
                            <Nav.Link className='icons' ><FontAwesomeIcon  icon={faGithub} /></Nav.Link>
                            <Nav.Link className='icons'><FontAwesomeIcon  icon={faPhone} /></Nav.Link> */}
                         
                        </Nav>
                        <div className='icons'>
                        <div style={{ paddingLeft: '5px' }}><FontAwesomeIcon className='fontIcon' icon={faLinkedin} /></div>
                            <div style={{ paddingLeft: '5px' }}><FontAwesomeIcon className='fontIcon' icon={faGithub} /></div>
                            <div style={{ paddingLeft: '5px' }}><FontAwesomeIcon className='fontIcon' icon={faPhone} /></div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


