import React, { useState } from 'react';
import Navbar from './navbar'
import Footer from './footer'
import NavbarLogged from './navbarLogged'
import { Button, Container, Row, Col, Image,Form, Card, CardGroup, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import laptop from '../images/laptop.jfif'
import axios from "axios"
import "./Quantity.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product(props) {
    const [value,setValue]=useState(1);
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

    const decrease = () => {
        if(value!=1)
            setValue(value-1);
  };

    const increase = () => {
        setValue(value+1);
  };
      
    const user = getUserFromLocalStorage();

    function clickMe() {
        const id = productClicked.id;
        if(user){
        axios.post("http://localhost:9002/cart",{id:user._id,item_id:id,item_quantity:value})
        .then(res => {
          toast(res.data.message)
        })
        }
        else{
            toast("Please login to add items to cart");
        }
    }
    if (props.user) {
        return (
            <div>
                <ToastContainer position="top-center" hideProgressBar autoClose={3000}/>
                <NavbarLogged />
                <Container style={{ marginTop: "6%" }}>
                <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
                    <Row>
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
                        <Col sm={4}>
                            <h1 style={{ "textAlign": "left" }}></h1>
                            <center><Image src={productClicked.image} style={{ width: "75%", height: "75%" }} class="rounded mx-auto d-block" alt="Online image"></Image></center>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} >
                        <div className="def-number-input number-input" style={{marginBottom:"4%"}}>
                            <Form>
                                <Button onClick={() => increase()} className="plus"></Button>
                            <FormControl
                                className="quantity"
                                name="quantity"
                                value={value}
                                onChange={() => console.log("change")}
                                type="number"
                            />
                                <Button onClick={() => decrease()} className="minus"></Button>
                            </Form>
                        </div>
                        </Col>
                        <Col sm={4}>
                            <center><Button style={{marginTop:"25px"}} onClick={() => clickMe()}>Add to Cart</Button></center>
                        </Col>
                    </Row>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <ToastContainer position="top-center" hideProgressBar autoClose={3000}/>
            <Navbar />
            <Container style={{ marginTop: "6%" }}>
            <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
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
                    <center><Button style={{marginBottom:"5%"}} onClick={() => clickMe()}>Add to Cart</Button></center>
                    </Col>
                </Row>
            </Card>
            </Container>
            <Footer />
        </div>
    )

}

export default Product
