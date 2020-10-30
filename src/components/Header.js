import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap'
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

                <LinkContainer to='#home'>
                  <Nav.Link><i className="fas fa-home mr-2"></i>Home</Nav.Link>
                  </LinkContainer>
                            
                <LinkContainer to='#projects'>
                  <Nav.Link><i className="fas fa-tasks mr-2"></i>Projects</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to='#resume'>
                  <Nav.Link><i className="far fa-file mr-2"></i>Resume</Nav.Link>
                </LinkContainer>
                            
                <LinkContainer to='#blog'>
                  <Nav.Link><i className="fas fa-blog mr-2"></i>Blog</Nav.Link>
                </LinkContainer>

                <LinkContainer to='#about'>
                  <Nav.Link><i className="fas fa-user mr-2"></i>About Me</Nav.Link>
                </LinkContainer> 
              
               </Nav>
                </Navbar.Collapse>
               </Container>
            </Navbar>
        </header>
    );
};

export default Header;