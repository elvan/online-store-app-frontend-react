import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer mt-auto'>
      <Container>
        <Row>
          <Col className='py-3 text-center'>
            &copy; Online Store {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
