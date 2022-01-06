import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Button,
  Col,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from '../../shared/Rating';
import ProductPageShimmer from './ProductPageShimmer';

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const ProductPage = ({ match }) => {
  /** @type {[any, React.Dispatch<any>]} */
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = `${BACKEND_API}/products/${match.params.id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(url);

        setProduct(data.product);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchProduct();
  }, [url]);

  let statusText = '';

  if (product?.countInStock > 0) {
    statusText = `In Stock: ${product.countInStock}`;
  } else {
    statusText = 'Out of Stock';
  }

  return (
    <>
      {isLoading && <ProductPageShimmer />}
      {!isLoading && !product && <p>Error fetching the product!</p>}
      {!isLoading && product && (
        <>
          <Row>
            <Breadcrumb>
              <LinkContainer to='/'>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to={`/categories/${product.category}`}>
                <Breadcrumb.Item>{product.category}</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to={`/brands/${product.brand}`}>
                <Breadcrumb.Item active>{product.brand}</Breadcrumb.Item>
              </LinkContainer>
            </Breadcrumb>
          </Row>
          <Row>
            <Col xs={12} md={6} className='mb-3'>
              <Image
                src={product.image}
                alt={product.name}
                fluid
                className='w-100'
              />
            </Col>
            <Col xs={12} md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item className='mt-0 pt-0'>
                  <h1>
                    <a
                      href={`/brands/${product.brand}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {product.brand}
                    </a>
                  </h1>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={product.rating}
                    numberOfReviews={product.numberOfReviews}
                  />
                </ListGroup.Item>
                <ListGroup.Item className='fs-5'>
                  <strong>
                    Rp {new Intl.NumberFormat('id-ID').format(product.price)}
                  </strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>Product Information</h3>
                  <p>{product.description}</p>
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
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;
