import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const ProductItemShimmer = () => {
  return (
    <Card className='rounded'>
      <Placeholder animation='glow'>
        <Placeholder
          className='w-100 vh-50 img-fluid'
          style={{ height: '450px' }}
        />
        <Card.Body>
          <Card.Title as='div'>
            <h5>
              <strong>
                <Placeholder style={{ width: '8rem' }} />
              </strong>
            </h5>
            <h6>
              <strong>
                <Placeholder style={{ width: '15rem' }} />
              </strong>
            </h6>
          </Card.Title>
          <Card.Text as='div' className='mb-3'>
            <Placeholder style={{ width: '9rem' }} />
          </Card.Text>
          <Card.Text as='div'>
            <strong>
              <Placeholder style={{ width: '10rem' }} />
            </strong>
          </Card.Text>
        </Card.Body>
      </Placeholder>
    </Card>
  );
};

export default ProductItemShimmer;
