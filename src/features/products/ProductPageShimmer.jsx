import React from 'react';
import { Breadcrumb, Col, ListGroup, Placeholder, Row } from 'react-bootstrap';

const ProductPageShimmer = () => {
  return (
    <>
      <Row>
        <Placeholder as={Breadcrumb} animation='glow'>
          <Breadcrumb.Item>
            <Placeholder style={{ width: '4rem' }} />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Placeholder style={{ width: '5rem' }} />
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <Placeholder style={{ width: '5rem' }} />
          </Breadcrumb.Item>
        </Placeholder>
      </Row>
      <Row>
        <Col xs={12} md={6} className='mb-3'>
          <Placeholder animation='glow'>
            <Placeholder
              className='w-100 vh-50 img-fluid'
              style={{ height: '450px' }}
            />
          </Placeholder>
        </Col>
        <Col xs={12} md={6}>
          <Placeholder animation='glow'>
            <ListGroup variant='flush'>
              <ListGroup.Item className='mt-0 pt-0'>
                <h1>
                  <Placeholder style={{ width: '8rem' }} />
                </h1>
                <h2>
                  <Placeholder style={{ width: '16rem' }} />
                </h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Placeholder style={{ width: '8rem' }} />
              </ListGroup.Item>
              <ListGroup.Item className='fs-5'>
                <strong>
                  <Placeholder style={{ width: '8rem' }} />
                </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>
                  <Placeholder style={{ width: '16rem' }} />
                </h3>
                <p>
                  <Placeholder className='w-100' />
                  <Placeholder className='w-100' />
                  <Placeholder className='w-75' />
                </p>
                <p>
                  <strong>
                    <Placeholder style={{ width: '12rem' }} />
                  </strong>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='d-grid'>
                  <Placeholder.Button
                    variant='primary'
                    size='lg'
                    type='button'
                    disabled
                  ></Placeholder.Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Placeholder>
        </Col>
      </Row>
    </>
  );
};

export default ProductPageShimmer;
