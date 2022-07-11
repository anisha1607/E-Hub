import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import NavbarLogged from './navbarLogged'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import laptop from '../images/laptop.jfif'
import axios from "axios"
function product(props) {
    const getProductClickedFromLocalStorage = () => {
        try {
            return JSON.parse(localStorage.getItem('productClicked') || '');
        }
        catch (err) {
            return "productNotClicked";
        }
    }
    const productClicked = getProductClickedFromLocalStorage();
    const getUserFromLocalStorage = () => {
        try {
            return JSON.parse(localStorage.getItem('user') || '');
        } catch (error) {
            return null;
        }
      }
      
    const user = getUserFromLocalStorage();
    function clickMe() {
        const id = productClicked.id;
        if(user){
        axios.post("http://localhost:9002/cart",{id:user._id,item_id:id})
        .then(res => {
          alert(res.data.message)
        })
        }
        else{
            alert("Please login to add items to cart");
        }
    }
    if (props.user) {
        return (
            <div>
                <NavbarLogged />
                <Container style={{ marginTop: "6%" }}>
                    <Row style={{ "marginBottom": "2%" }}>
                        <Col sm={8}>
                            <h1 style={{ "textAlign": "left" }}>{productClicked.name}</h1><br></br>
                            <h5 style={{ "textAlign": "justify" }}>
                                <ul>
                                    <li><h5>Price : {productClicked.price}</h5></li>
                                    <li><h5>Brand  : {productClicked.brand}</h5></li>
                                    <li><h5>Colour : {productClicked.colour}</h5></li>
                                    <li><h5>screen Size : {productClicked.screenSize}</h5></li>
                                    <li><h5>Resolution : {productClicked.resolution}</h5></li>
                                    <li><h5>Refresh Rate: {productClicked.refreshRate}</h5></li>
                                    <li><h5>Weight: {productClicked.weight}</h5></li>
                                </ul>
                            </h5>
                        </Col>
                        <Col sm={4} style={{ marginTop: "3%" }}>
                            <h1 style={{ "textAlign": "left" }}></h1>
                            <center><Image src={productClicked.image} style={{ width: "75%", height: "75%" }} class="rounded mx-auto d-block" alt="Online image"></Image></center>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8} >
                            <center><Button onClick={() => clickMe()}>Add to Cart</Button></center>
                        </Col>
                        <Col sm={4} style={{ "marginTop": "6%" }}>

                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <Container style={{ marginTop: "6%" }}>
                <Row style={{ "marginBottom": "2%" }}>
                    <Col sm={8}>
                        <h1 style={{ "textAlign": "left" }}>{productClicked.name}</h1><br></br>
                        <h5 style={{ "textAlign": "justify" }}>
                            <ul>
                                <li><h5>Price : &#x20b9;{productClicked.price}</h5></li>
                                <li><h5>Brand  : {productClicked.brand}</h5></li>
                                <li><h5>Colour : {productClicked.colour}</h5></li>
                                <li><h5>screen Size : {productClicked.screenSize}</h5></li>
                                <li><h5>Resolution : {productClicked.resolution}</h5></li>
                                <li><h5>Refresh Rate: {productClicked.refreshRate}</h5></li>
                                <li><h5>Weight: {productClicked.weight}</h5></li>
                            </ul>
                        </h5>
                    </Col>
                    <Col sm={4} style={{ marginTop: "3%" }}>
                        <h1 style={{ "textAlign": "left" }}></h1>
                        <center><Image src={productClicked.image} style={{ width: "75%", height: "75%" }} class="rounded mx-auto d-block" alt="Online image"></Image></center>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} >
                        <center><Button onClick={() => clickMe()}>Add to Cart</Button></center>
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
