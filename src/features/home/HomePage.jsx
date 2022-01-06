import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductItem from '../products/ProductItem';

const HomePage = () => {
  /** @type {[any[], React.Dispatch<any>]} */
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const BACKEND_API = process.env.REACT_APP_BACKEND_API;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`${BACKEND_API}/products`);

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Featured Products</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && products.length === 0 && <p>No products found!</p>}
      {!isLoading && products.length > 0 && (
        <Row>
          {products.map((/** @type {any} */ product) => (
            <Col
              key={product._id}
              className='my-3'
              sm={12}
              md={6}
              lg={6}
              xl={4}
              xxl={4}
            >
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
