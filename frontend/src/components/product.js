import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import laptop from '../images/laptop.jfif'
function product() {
    return (
        <div>
            <Navbar />
            <Container>
                <Row style={{ "marginBottom": "2%" }}>
                    <Col sm={8}>
                        <h1 style={{ "textAlign": "left" }}>HP Laptop</h1><br></br>
                        <h5 style={{ "textAlign": "justify" }}>
                            <ul>
                                <li>CPU: 11th Generation Intel Core i5 or i7 processor with 4 cores.</li>
                                <li>GPU: Intel Iris Xe Graphics.</li>
                                <li>Memory: 16GB RAM up to 32GB.</li>
                                <li>Display: 13.3-inch diagonal BrightView LED FHD touchscreen with Corning® Gorilla® Glass display.</li>
                                <li>Battery life: Starting at 24.5 hours.</li>
                            </ul>
                        </h5>
                    </Col>
                    <Col sm={4} style={{ "marginTop": "6%" }}>
                        <h1 style={{ "textAlign": "left" }}></h1>
                        <center><Image src={laptop} class="rounded mx-auto d-block" alt="Online image"></Image></center>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} >
                    <center><Button>Add to Cart</Button></center>
                    </Col>
                    <Col sm={4} style={{ "marginTop": "6%" }}>
                        
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default product
