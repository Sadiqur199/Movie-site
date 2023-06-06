import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './DesignCard.css'
import { Link } from 'react-router-dom';

const DesignCard = ({ movie }) => {
  const { show } = movie;
  const {id, network } = show;
  console.log(id)
  console.log(network?.name)
  return (
    <div className=''>
      <Card style={{ width: '100%' }} className='bg-light'>
        <Card.Img variant="top" className='image-resize' src={movie.show.image.original} />
        <Card.Body>
          <Card.Title>{network?.name}</Card.Title>
          <div className='d-flex justify-content-between'>
            <p>Genres:{movie.show.genres[0]}</p>
            <p>Ratting:{movie.show.rating.average ? movie.show.rating.average : '0'}</p>
          </div>
          <div className='d-flex justify-content-between'>
            <p>Language:{movie.show.language}</p>
            <p>Day:{movie.show.schedule.days}</p>
          </div>
          <a href="MovieDetails.jsx" className="btn btn-primary" > <Link to={`/details/${id}`} className='text-body'> View Details</Link>
            </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DesignCard;