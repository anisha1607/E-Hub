import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselSlider from './carousel';

function home() {
  return (
    <div>
        <Navbar/>
            <CarouselSlider/>
            {/* <Button variant="primary">Button #1</Button>
            <Button variant="secondary" className="mx-2">Button #2</Button>
            <Button variant="success">Button #3</Button> */}
        <Footer/>
    </div>
  )
}

export default home
