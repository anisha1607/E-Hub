import data from './data/tvs.json';
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Slider from "react-slick";
import NavbarLogged from './navbarLogged'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import laptop from '../images/television.jpg'

const createHistory = require("history").createBrowserHistory;

function TvsRange(props) {
    const history = createHistory();
    function clickMe(item) {
        localStorage.setItem("productClicked", JSON.stringify(item['item']));
        history.push("product");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
    }
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
    if (props.user) {
        return (
            <div>
                <NavbarLogged />
                <Container style={{ marginTop: "6%" }}>
                    <Row style={{ "marginBottom": "2%" }}>
                        <Col sm={8}>
                            <h1 style={{ "textAlign": "left" }}>Televisions</h1><br></br>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={8}>
                            <h5 style={{ "textAlign": "justify" }}>Television, sometimes shortened to TV, is a telecommunication medium for transmitting moving images and sound. The term can refer to a television set, or the medium of television transmission. Television is a mass medium for advertising, entertainment, news, and sports.Television signals were initially distributed only as terrestrial television using high-powered radio-frequency television transmitters to broadcast the signal to individual television receivers. </h5>
                        </Col>
                        <Col sm={4}>
                            <h1 style={{ "textAlign": "left" }}></h1>
                            <center><Image src={laptop} class="rounded mx-auto d-block" alt="Online image"></Image></center>
                        </Col>
                    </Row>
                </Container>
                <div style={{ backgroundImage: "linear-gradient(to right, #FFFFFF , #FAF9F6)", padding: "1%", marginBottom: "2%", marginTop: "2%" }}>
                    <h2 style={{ textAlign: "left", marginLeft: "20px", marginTop: "2%" }}>Trending Products</h2>
                    <Slider {...settings}>
                        {data.map((item) => {
                            const { id, name, price, image } = item;
                            return (
                                <div key={id}>
                                    {/* <ProductCard imgSrc={slide.img} /> */}
                                    {/* <img src={slide.img} alt={`slide${index}`} /> */}
                                    <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
                                        <Card.Img style={{ height: "300px" }} variant="top" src={image} />
                                        <Card.Body style={{ height: "140px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                <div className="product-actions">
                                                    <h3>&#x20b9;{price}</h3>
                                                    <Button variant="warning" onClick={() => clickMe({ item })}>View Product</Button>
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
                <Footer/>
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <Container style={{ marginTop: "6%" }}>
                <Row style={{ "marginBottom": "2%" }}>
                    <Col sm={8}>
                        <h1 style={{ "textAlign": "left" }}>Televisions</h1><br></br>
                    </Col>
                    <Col sm={4}>
                    </Col>
                    <Col sm={8}>
                        <h5 style={{ "textAlign": "justify" }}>Television, sometimes shortened to TV, is a telecommunication medium for transmitting moving images and sound. The term can refer to a television set, or the medium of television transmission. Television is a mass medium for advertising, entertainment, news, and sports.Television signals were initially distributed only as terrestrial television using high-powered radio-frequency television transmitters to broadcast the signal to individual television receivers.</h5>
                    </Col>
                    <Col sm={4}>
                        <h1 style={{ "textAlign": "left" }}></h1>
                        <center><Image src={laptop} class="rounded mx-auto d-block" alt="Online image"></Image></center>
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundImage: "linear-gradient(to right, #FFFFFF , #FAF9F6)", padding: "1%", marginBottom: "2%", marginTop: "2%" }}>
                <h2 style={{ textAlign: "left", marginLeft: "20px", marginTop: "2%" }}>Trending Products</h2>
                <Slider {...settings}>
                    {data.map((item) => {
                        const { id, name, price, image } = item;
                        return (
                            <div key={id}>
                                {/* <ProductCard imgSrc={slide.img} /> */}
                                {/* <img src={slide.img} alt={`slide${index}`} /> */}
                                <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
                                    <Card.Img style={{ height: "300px" }} variant="top" src={image} />
                                    <Card.Body style={{ height: "140px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                            <div className="product-actions">
                                                <h3>&#x20b9;{price}</h3>
                                                <Button variant="warning" onClick={() => clickMe({ item })}>View Product</Button>
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
            <Footer/>
        </div>
    )
}

export default TvsRange
