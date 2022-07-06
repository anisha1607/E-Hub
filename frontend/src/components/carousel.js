import React, { Component,useState,useEffect } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import data from  './data/products.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import axios from "axios";


const createHistory = require("history").createBrowserHistory;

const CarouselSlider = () =>{
    const [data1,setData]=useState();
    const history = createHistory();
    function clickMe(item){
      // console.log(item['item'].name);
      // alert(item['item'].name);
      localStorage.setItem("productClicked",JSON.stringify(item['item']));
      history.push("product");
      let pathUrl = window.location.href;
      window.location.href = pathUrl;
    }
    
    //const clickMe = value => alert(value.name);

    const sendPostRequest = async () => {
        try {
            const resp = await axios.post("http://localhost:9002/homecarousel",{});
            setData(resp.data,[]);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    sendPostRequest();
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
    //console.log(data);
    //var data;
    // axios.post("http://localhost:9002/homecarousel",{})
    // .then(res=>{
    //   data=res.data;
    //   console.log(res.data);
    //   alert(res.data[0]);
    // })
    return (
      <div style={{backgroundImage: "linear-gradient(to right, #FFFFFF , #FAF9F6)",padding:"1%", marginBottom:"2%", marginTop:"2%"}}>
        <h2 style={{textAlign:"left", marginLeft:"20px", marginTop:"2%"}}>Trending Products</h2>
        <Slider {...settings}>
          {data.map((item) => {
          const { id, name, price, image } = item;
            return (
              <div key={id}>
                {/* <ProductCard imgSrc={slide.img} /> */}
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
                <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
                  <Card.Img style={{height: "300px"}} variant="top" src={image} />
                  <Card.Body style={{ height: "140px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <div className="product-actions">
                      <h3>&#x20b9;{price}</h3>
                      <Button variant="warning" onClick={()=>clickMe({item})}>View Product</Button>
                      {/* <Button variant="warning" href="product">View Product</Button> */}
                    </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    //   <div>

    //   </div>
    );
}

export default CarouselSlider;
