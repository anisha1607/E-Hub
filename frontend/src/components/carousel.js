import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import data from  './data/shoes.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
class CarouselSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{width:"100%"}}>
        <h2 style={{textAlign:"left", marginLeft:"60px", marginTop:"20px"}}>Trending Products</h2>
        <Slider {...settings}>
          {data.map((item) => {
          const { id, name, price, image } = item;
            return (
              <div key={id}>
                {/* <ProductCard imgSrc={slide.img} /> */}
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
                <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body style={{ height: "140px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <div className="product-actions">
                      <Button variant="primary">{price}</Button>
                      <Button variant="secondary" href="cart">Add to cart</Button>
                    </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default CarouselSlider;
