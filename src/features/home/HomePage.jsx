import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../products/Product';

export default function HomePage() {
  const renderProducts = () => {
    let products = [];

    for (let i = 0; i < 6; i++) {
      const productItem = (
        <Col className='my-3' sm={12} md={6} lg={4} xl={3}>
          <Product />
        </Col>
      );

      products.push(productItem);
    }

    return products;
  };

  return (
    <div>
      <h1>Featured Products</h1>
      <Row>{renderProducts()}</Row>
    </div>
  );
}
