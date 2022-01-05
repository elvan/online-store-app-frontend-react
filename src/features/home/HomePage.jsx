import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../seeds/products';
import ProductItem from '../products/ProductItem';

const HomePage = () => {
  return (
    <>
      <h1>Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col className='my-3' sm={12} md={6} lg={4} xl={4} xxl={3}>
            <ProductItem key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
