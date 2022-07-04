import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselSlider from './carousel';
import HomeCarousel from './homeCarousel';
// import image from '../images/HomeImage.jpg'

function home() {
  
  return (
    <div>
        <Navbar/>
        {/* <img src={image} style={{marginTop:"5%", height: "80vh"}}/> */}
        <HomeCarousel />
        <CarouselSlider/>
            {/* <Button variant="primary">Button #1</Button>
            <Button variant="secondary" className="mx-2">Button #2</Button>
            <Button variant="success">Button #3</Button> */}
        <Footer/>
    </div>
  )
}

export default home
