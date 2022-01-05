import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductItem from '../products/ProductItem';

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_API}/products`);

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Featured Products</h1>
      <Row>
        {products.map((/** @type {any} */ product) => (
          <Col className='my-3' sm={12} md={6} lg={4} xl={4} xxl={3}>
            <ProductItem key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
