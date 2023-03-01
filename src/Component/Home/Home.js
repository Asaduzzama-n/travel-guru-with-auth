import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftContainer from './Container/LeftContainer/LeftContainer';
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SharedCarousel from './Container/SharedCarousel/SharedCarousel';




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

    const destinations = [
        {
            id: 1,
            name: "COX'S BAZAR",
            image: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg",
            info:"Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds.",
        },
        {
            id: 2,
            name: "SAJEK",
            image: "https://i.pinimg.com/736x/14/ad/12/14ad1206826308025297e2f8885c30f2.jpg",
            info:"ajek Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet above sea level. Sajek Valley is known as the Queen of Hills & Roof of Rangamati.",

        },
        {
            id: 3,
            name: "SREEMONGOL",
            image: "https://images.squarespace-cdn.com/content/v1/6102abeba9fd55174a180768/557b2833-24a8-4bb7-9409-771430c82a2f/beautiful+sreemangal",
            info:"Srimangal/Sreemangal is a city in Sylhet Division in Bangladesh. Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes.",

        },
        {
            id: 4,
            name: "SUNDARBAN",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg",
            info:"Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh is the largest mangrove forest in the world.",
        },
    ]

    const [destination,setDestination] = useState({});

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