import React from 'react'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/index.css'

function Navbarcomp() {
  return (
    <div>
    <Navbar className='navbar' expand="lg">
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='navlink' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='navlink' as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link className='navlink' as={Link} to="/about">About</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbarcomp