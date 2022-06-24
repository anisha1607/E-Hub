import React from 'react';
import {Carousel} from 'react-bootstrap';
import image from '../images/HomeImage.jpg'
import image2 from '../images/HomeImage2.jpg'
import image3 from '../images/HomeImage3.jpg'

function homeCarousel() {
    return (
        <Carousel style={{marginTop:"5%"}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image}
                alt="First slide"
                style ={{maxHeight: "90vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                style ={{maxHeight: "90vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                style ={{maxHeight: "90vh"}}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default homeCarousel;