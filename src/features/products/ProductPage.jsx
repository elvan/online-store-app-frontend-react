import React from 'react';
import {
  Breadcrumb,
  Button,
  Col,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import products from '../../seeds/products';
import Rating from '../../shared/Rating';

const ProductPage = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);

  let statusText = '';

  // @ts-ignore
  if (product?.countInStock > 0) {
    statusText = `In Stock: ${product?.countInStock}`;
  } else {
    statusText = 'Out of Stock';
  }

  return (
    <>
      <Row>
        <Col xs={12} md={6} className='mb-sm-3 mb-md-0'>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col xs={12} md={6}>
          <Breadcrumb className='ms-3'>
            <LinkContainer to='/'>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={`/categories/${product?.category}`}>
              <Breadcrumb.Item>{product?.category}</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={`/brands/${product?.brand}`}>
              <Breadcrumb.Item active>{product?.brand}</Breadcrumb.Item>
            </LinkContainer>
          </Breadcrumb>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h1>{product?.brand}</h1>
              <h2>{product?.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product?.rating}
                numberOfReviews={product?.numberOfReviews}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>
                <strong>Price:</strong> {product?.price}
              </h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Product Information</h5>
              <p>{product?.description}</p>
              <p>
                <strong>{statusText}</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='d-grid'>
                <Button
                  variant='primary'
                  size='lg'
                  type='button'
                  disabled={product?.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Link to='/' className='btn btn-light my-3 ms-sm-3 ms-md-0'>
        Back to All Products
      </Link>
    </>
  );
};

export default ProductPage;
