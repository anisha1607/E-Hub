import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Content from './content'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import laptop from '../images/laptop.jfif'
function aboutus() {
  return (
    <div>
      <Navbar/>
      <Content />
      <Footer />
    </div>
  )
}

export default aboutus
