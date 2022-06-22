import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Button,Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import laptop from '../images/laptop.jfif'
function producttype() {
  return (
    <div>
      <Navbar />
      <Container>
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
      {/* <Container>
        <Row>
          <Col>
            <Row xs={1} md={2} className="g-4">
              <Col>
                  <Card style={{"margin":"2%"}}>
                    <Card.Img variant="top" src={laptop} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{"margin":"2%"}}>
                    <Card.Img variant="top" src={laptop} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
              <Col>
                  <Card style={{"margin":"2%","marginBottom":"4%"}}>
                    <Card.Img variant="top" src={laptop} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{"margin":"2%","marginBottom":"4%"}}>
                    <Card.Img variant="top"  src={laptop} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
      <CardGroup>
        {/* <Card>
          <Card.Img variant="top" src={laptop}/>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={laptop} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={laptop} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={laptop} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card> */}
        <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
                  <Card.Img variant="top" src={laptop} />
                  <Card.Body style={{ height: "200px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title>Brand Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <div className="product-actions">
                      <Button variant="primary">Buy Now</Button>
                      <Button variant="secondary">Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
                  <Card.Img variant="top" src={laptop} />
                  <Card.Body style={{ height: "200px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title>Brand Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <div className="product-actions">
                      <Button variant="primary">Buy Now</Button>
                      <Button variant="secondary">Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
                  <Card.Img variant="top" src={laptop} />
                  <Card.Body style={{ height: "200px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title>Brand Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <div className="product-actions">
                      <Button variant="primary">Buy Now</Button>
                      <Button variant="secondary">Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card style={{ width: "inherit",margin:"10px",padding: "10px",borderRadius: "16px",display:"flex"}}>
                  <Card.Img variant="top" src={laptop} />
                  <Card.Body style={{ height: "200px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title>Brand Name</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <div className="product-actions">
                      <Button variant="primary">Buy Now</Button>
                      <Button variant="secondary">Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
      </CardGroup>
      <Footer />
    </div>
  )
}

export default producttype
