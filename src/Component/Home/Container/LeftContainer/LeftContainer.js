import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeftContainer.css';

const LeftContainer = ({destination}) => {

    return (
        <div className='info-container'>
            <h1>{destination.name}</h1>
            <p>{destination.info}</p>
            <Link to={`/destination/${destination.id}`}><button className='book-now'>Book Now</button></Link>
        </div>
    );
};

export default LeftContainer;