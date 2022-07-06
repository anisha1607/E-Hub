import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import laptop from '../images/laptop.jfif'
function producttype() {
  return (
    <div>
      <Navbar />
      <Container style={{marginTop:"6%"}}>
        <Row style={{ "marginBottom": "2%" }}>
          <Col sm={8}>
            <h1 style={{ "textAlign": "left" }}>Laptops</h1><br></br>
          </Col>
          <Col sm={4}>
          </Col>
          <Col sm={8}>
            <h5 style={{ "textAlign": "justify" }}>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard. Laptops typically have a clam shell form factor with the screen mounted on the inside of the upper lid and the keyboard on the inside of the lower lid, although 2-in-1 PCs with a detachable keyboard are often marketed as laptops or as having a laptop mode.Laptops are folded shut for transportation, and thus are suitable for mobile use.[1] They are so named because they can be practically placed on a person's lap when being used. </h5>
          </Col>
          <Col sm={4}>
            <h1 style={{ "textAlign": "left" }}></h1>
            <center><Image src={laptop} class="rounded mx-auto d-block" alt="Online image"></Image></center>
          </Col>
        </Row>
      </Container>
      <CardGroup>
        <Card onClick={''} style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
          <Card.Img variant="top" src={laptop} />
          <Card.Body style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Card.Title>Brand Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="text-center"> 
              <Button href="product" variant="primary">Show Product</Button>
              {/* <Button variant="secondary">Add to cart</Button> */}
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
          <Card.Img variant="top" src={laptop} />
          <Card.Body style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Card.Title>Brand Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="text-center"> 
              <Button href="product" variant="primary">Show Product</Button>
              {/* <Button variant="secondary">Add to cart</Button> */}
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
          <Card.Img variant="top" src={laptop} />
          <Card.Body style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Card.Title>Brand Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="text-center"> 
              <Button href="product" variant="primary">Show Product</Button>
              {/* <Button variant="secondary">Add to cart</Button> */}
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
          <Card.Img variant="top" src={laptop} />
          <Card.Body style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Card.Title>Brand Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="text-center"> 
              <Button href="product" variant="primary">Show Product</Button>
              {/* <Button variant="secondary">Add to cart</Button> */}
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
      <Footer />
    </div>
  )
}

export default producttype
