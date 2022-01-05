import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand='md' bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>OnlineStore</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/products'>Products</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/cart'>Cart</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
