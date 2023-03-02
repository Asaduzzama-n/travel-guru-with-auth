import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftContainer from './Container/LeftContainer/LeftContainer';
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SharedCarousel from './Container/SharedCarousel/SharedCarousel';
import { useLoaderData } from 'react-router-dom';




const Home = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const [destination,setDestination] = useState({});

    const destinations = useLoaderData();


    const getDestination = (id) =>{
        const selectedDestination = destinations.find(destination => destination.id === id);
        setDestination(selectedDestination);
    }


    return (
        <div>
            <Row className=''>
                <Col lg='5' className='left-container'>
                    {
                        <LeftContainer destination = {destination} ></LeftContainer>
                    }
                    
                </Col>

                <Col lg='7' className='right-container'>
                <Carousel responsive={responsive}>
                        {
                            destinations.map(destination => <SharedCarousel key={destination.id} getDestination={getDestination} destination={destination}></SharedCarousel>)
                        }
                    </Carousel>;
                </Col>
            </Row>
        </div>
    );
};

export default Home;