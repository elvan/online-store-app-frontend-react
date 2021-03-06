import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../../shared/Rating';

const ProductItem = ({ product }) => {
  return (
    <Card className='rounded'>
      <Link to={`/products/${product._id}`} className='stretched-link'>
        <Card.Img
          src={product.image}
          alt={product.name}
          className='img-fluid'
          variant='top'
        />
      </Link>
      <Card.Body>
        <Card.Title as='div'>
          <h5>
            <strong>{product.brand}</strong>
          </h5>
          <h6>
            <strong>{product.name}</strong>
          </h6>
        </Card.Title>
        <Card.Text as='div' className='mb-3'>
          <Rating
            rating={product.rating}
            numberOfReviews={product.numberOfReviews}
          />
        </Card.Text>
        <Card.Text as='div'>
          <strong>
            Rp {new Intl.NumberFormat('id-ID').format(product.price)}
          </strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
