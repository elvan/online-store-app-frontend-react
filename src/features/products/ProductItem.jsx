import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../../shared/Rating';

const ProductItem = ({ product }) => {
  return (
    <Card className='my-3 rounded'>
      <Link to={`/products/${product._id}`}>
        <Card.Img
          src={product.image}
          alt={product.name}
          className='img-fluid'
          variant='top'
        />
      </Link>
      <Card.Body>
        <Card.Title as='div'>
          <Link to={`/products/${product._id}`}>
            <h5>
              <strong>{product.brand}</strong>
            </h5>
          </Link>
          <Link to={`/products/${product._id}`}>
            <h6>
              <strong>{product.name}</strong>
            </h6>
          </Link>
        </Card.Title>
        <Card.Text as='div' className='mb-3'>
          <Rating
            rating={product.rating}
            numberOfReviews={product.numberOfReviews}
          />
        </Card.Text>
        <Card.Text as='div'>
          <strong>{product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
