import React from 'react';
import './SharedCarousel.css'
const SharedCarousel = ({destination,getDestination}) => {
    const {image,name} = destination;

    



    return (
        <div>
            <div onClick={()=>{getDestination(destination.id)}} id='card-box' className='carousel-container card mx-2' >
                <img className='card-img' src={image} height="400px" width="300px" alt="" />
                <h2>{name}</h2>
            </div>
            
        </div>
    );
};

export default SharedCarousel;