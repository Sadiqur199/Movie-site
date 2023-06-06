import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import DesignCard from './DesignCard/DesignCard';

const Cards = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('movie.json')
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      <h1 className='text-center mt-5 mb-5'>Movie Card Is Here:</h1>
      <Row xs={1} md={3} className="g-4 ms-3 mr-3 mt-3 mb-5">
        {
          movies.map(movie => (
            <Col key={movie.show.id}>
              <Card>
                <DesignCard movie={movie} />
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Cards;