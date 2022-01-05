import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../seeds/products';
import ProductItem from '../products/ProductItem';

const HomePage = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col className='my-3' sm={12} md={6} lg={4} xl={3}>
            <ProductItem key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
