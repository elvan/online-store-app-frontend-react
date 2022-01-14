import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../redux/actions/productActions';
import ProductItem from '../products/ProductItem';
import ProductItemShimmer from '../products/ProductItemShimmer';

const HomePage = () => {
  // @ts-ignore
  const { loading, products } = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <Row>
        <Col className='my-3' sm={12} md={6} xl={4}>
          <ProductItemShimmer />
        </Col>
        <Col className='my-3' sm={12} md={6} xl={4}>
          <ProductItemShimmer />
        </Col>
        <Col className='my-3' sm={12} md={6} xl={4}>
          <ProductItemShimmer />
        </Col>
      </Row>
    );
  }

  if (products.length === 0) {
    return <p>No products found!</p>;
  }

  return (
    <>
      <h1>Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} className='my-3' sm={12} md={6} xl={4}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
