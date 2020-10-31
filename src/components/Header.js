import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
              <Navbar.Brand>Ringku Rahman</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home"><i className="fas fa-home mr-2"></i>Home</Nav.Link>
              <Nav.Link href="#projects"><i className="fas fa-tasks mr-2"></i>Projects</Nav.Link>
              <Nav.Link href="#resume"><i className="far fa-file mr-2"></i>Resume</Nav.Link>
              <Nav.Link href="#blog"><i className="fas fa-blog mr-2"></i>Blog</Nav.Link>
              <Nav.Link href="#contact"><i className="fas fa-user mr-2"></i>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
    );
};

export default Header