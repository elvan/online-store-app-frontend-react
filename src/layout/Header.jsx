import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand='md' bg='primary' variant='dark'>
        <Container fluid='lg'>
          <LinkContainer to='/' exact>
            <Navbar.Brand>OnlineStore</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='w-100'>
              <span className='d-flex me-auto'>
                <LinkContainer to='/' exact>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/categories' exact>
                  <Nav.Link>Categories</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/brands' exact>
                  <Nav.Link>Brands</Nav.Link>
                </LinkContainer>
              </span>
              <span className='d-flex'>
                <LinkContainer to='/cart' exact>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i> Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login' exact>
                  <Nav.Link>
                    {/* <i className='fas fa-user'></i> */}
                    Login
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register' exact>
                  <Nav.Link className='btn btn-outline-primary'>
                    {/* <i className='fas fa-user'></i> */}
                    Register
                  </Nav.Link>
                </LinkContainer>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
