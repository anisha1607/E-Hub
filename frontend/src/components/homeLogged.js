import React from 'react'
import NavbarLogged from './navbarLogged'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselSlider from './carousel';
import HomeCarousel from './homeCarousel';
// import image from '../images/HomeImage.jpg'

function homeLogged() {

  return (
    <div>
        <NavbarLogged/>
        <HomeCarousel />
        <CarouselSlider/>
        <Footer/>
    </div>
  )
}

export default homeLogged
