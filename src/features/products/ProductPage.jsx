import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Button,
  Col,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchOneProduct } from '../../redux/actions/productActions';
import Message from '../../shared/Message';
import Rating from '../../shared/Rating';
import ProductPageShimmer from './ProductPageShimmer';

const ProductPage = ({ history, match }) => {
  const [quantity, setQuantity] = useState(1);

  const { loading, error, product } = useSelector(
    // @ts-ignore
    (state) => state.productDetails
  );
  const dispatch = useDispatch();

  const { id } = match.params;

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [id]);

  const handleAddToCart = () => {
    history.push('/cart');
  };

  let statusText = '';

  if (product?.countInStock > 0) {
    statusText = `In Stock: ${product.countInStock}`;
  } else {
    statusText = 'Out of Stock';
  }

  if (loading) {
    return <ProductPageShimmer />;
  }

  if (!product) {
    return <Message variant='danger'>{error}</Message>;
  }

  return (
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
            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col xs={6}>
                    <strong>Quantity</strong>
                  </Col>
                  <Col xs={6}>
                    <input
                      type='number'
                      min='1'
                      max={product.countInStock}
                      step='1'
                      value={quantity}
                      onChange={(event) =>
                        setQuantity(Number(event.target.value))
                      }
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <div className='d-grid'>
                <Button
                  variant='primary'
                  size='lg'
                  type='button'
                  disabled={product.countInStock === 0}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
