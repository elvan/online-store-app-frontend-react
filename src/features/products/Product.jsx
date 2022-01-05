import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../../app/shared/Rating';

export default function Product({ product }) {
  return (
    <Card className='my-3 rounded'>
      <a href={`/products/${product._id}`}>
        <Card.Img
          src={product.image}
          alt={product.name}
          className='img-fluid'
          variant='top'
        />
      </a>
      <Card.Body>
        <Card.Title as='div'>
          <a href='/products/123'>
            <h5>
              <strong>{product.brand}</strong>
            </h5>
          </a>
          <a href='/products/123'>
            <h6>
              <strong>{product.name}</strong>
            </h6>
          </a>
        </Card.Title>
        <Card.Text as='div' className='mb-3'>
          <Rating
            value={product.rating}
            numberOfReviews={product.numberOfReviews}
          />
        </Card.Text>
        <Card.Text as='div'>
          <strong>{product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
