import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer mt-auto'>
      <Container fluid='xl'>
        <Row>
          <Col className='py-3 text-center'>
            &copy; Online Store {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
