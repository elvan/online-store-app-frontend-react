import React from 'react';
import { Card } from 'react-bootstrap';

export default function Product() {
  return (
    <Card className='my-3 rounded'>
      <a href='/products/123'>
        <Card.Img
          src='https://via.placeholder.com/200x200'
          alt='prduct image placeholder'
          className='img-fluid'
          variant='top'
        />
      </a>
      <Card.Body>
        <Card.Title as='div'>
          <a href='/products/123'>
            <strong>Product Name</strong>
          </a>
        </Card.Title>
        <Card.Text as='div' className='mb-3'>
          <div>4.5 from 9 reviews</div>
        </Card.Text>
        <Card.Text as='div'>
          <strong>$9.99</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
