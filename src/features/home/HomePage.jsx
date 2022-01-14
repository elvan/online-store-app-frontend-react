import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../redux/actions/productActions';
import Message from '../../shared/Message';
import ProductItem from '../products/ProductItem';
import ProductItemShimmer from '../products/ProductItemShimmer';

const HomePage = () => {
  const { loading, error, products } = useSelector(
    // @ts-ignore
    (state) => state.productList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (loading) {
    let shimmerArray = [];

    for (let i = 0; i < 3; i++) {
      shimmerArray.push(
        <Col key={i} className='my-3' sm={12} md={6} xl={4}>
          <ProductItemShimmer />
        </Col>
      );
    }

    return <Row>{shimmerArray}</Row>;
  }

  if (!products) {
    return <Message variant='danger'>{error}</Message>;
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
