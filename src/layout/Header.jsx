import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand='md' bg='primary' variant='dark'>
        <Container fluid='xl'>
          <LinkContainer to='/'>
            <Navbar.Brand>OnlineStore</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/' exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/categories' exact>
                <Nav.Link>Categories</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/brands' exact>
                <Nav.Link>Brands</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to='/cart' exact>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login' exact>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
