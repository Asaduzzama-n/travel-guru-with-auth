import React, { useContext } from 'react';
import { Button, Col, Row, Form, } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Destination.css'
const Destination = () => {
    const destination = useLoaderData();

    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <Row>
                <Col lg="6">
                    <div className='destination-info'>
                        <h1>{destination.name}</h1>
                        <p>{destination.info}</p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className='booking-container'>
                        <div className="booking-card">
                            <form>
                                <label htmlFor="origin">Origin</label>
                                <input type="text" id='origin' name='origin' placeholder='Starting location' required />
                                <label htmlFor="destination">Destination</label>
                                <input type="text" id='destination' name='destination' value={destination.name} readOnly required />
                                <div className='d-flex justify-content-between'>
                                    <div className='custom-design'>
                                        <label htmlFor="start-date">Form</label>
                                        <input type="date" id='start-date' name='start-date' required />
                                    </div>
                                    <div className='custom-design'>
                                        <label htmlFor="end-date">To</label>
                                        <input type="date" id='end-date' name='end-date' required />
                                    </div>
                                </div>
                                <Link  to={'/booking'}><button className='mt-4'>Start Booking</button></Link>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Destination;