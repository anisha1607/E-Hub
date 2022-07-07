import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselSlider from './carousel';
import HomeCarousel from './homeCarousel';
import Search from "./search2";
// import image from '../images/HomeImage.jpg'

function home() {
  
  return (
    <div>
        <Navbar/>
        <HomeCarousel />
        <CarouselSlider/>
        <Footer/>
    </div>
  )
}

export default home
