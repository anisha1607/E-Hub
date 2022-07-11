import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import company from '../images/Company.jpg'
import map from '../images/world.png'
import NavbarLogged from './navbarLogged';
function aboutus(props) {
  if(props.user){
    return (
      <div>
        <NavbarLogged />
        <Container style={{ marginTop: "8%", marginBottom: "5%" }}>
          <div style={{ height: "20vh", backgroundImage: "linear-gradient(to right, #4169E1 , #39c7dd)" }}>
            <h2 style={{ color: "white", textAlign: "center", verticalAlign: "middle", lineHeight: "100px", fontSize: "3em" }}>OUR COMPANY</h2>
          </div>
          <div style={{ backgroundImage: "linear-gradient(to right, #FFFFFF , #FAF9F6)", paddingBottom: "2%" }}>
            <Row style={{ paddingTop: "2%" }}>
              <Col sm={7}>
                <h5 style={{ textAlign: "center", paddingTop: "2%", fontSize: "2em" }} >We provide electronics to help fulfil the needs of our customers.</h5>
                <p style={{ textAlign: "center" }}>Teams around the world invent on behalf of our customers every day to meet their desire for lower prices, better selection, and convenient services. One way we guarantee a wide selection of products and services for customers is by creating programs to support the thousands of businesses in India that sell here.</p>
              </Col>
              <Col sm={5}><center><Image style={{ width: "100%" }} src={company} class="rounded" alt="Online image"></Image></center></Col>
            </Row>
  
          </div>
  
  
          <CardGroup style={{ marginTop: "2%" }}>
            <Card style={{ marginRight: "2%", backgroundColor: "#00e1d9", color: "#5e001f" }}>
              <Card.Body>
                <Card.Title><b>Technology</b></Card.Title>
                <Card.Text>
                  Integer non turpis elit. Proin quis semper turpis. Morbi vitae diam vel tellus condimentum vehicula. Praesent ultricies magna ac augue ultricies, eu dapibus nulla accumsan. Vestibulum at tincidunt quam. Ut porttitor purus eu dolor gravida, non tincidunt est mollis. Vestibulum sodales eros libero, nec elementum purus pellentesque ut. Duis sit amet malesuada augue, sed rutrum felis. Nunc pellentesque velit eget nibh semper pretium. Donec vel quam tincidunt, sodales est et, varius nunc. Aenean faucibus a est in aliquet. In varius interdum dui at semper. Integer malesuada, lectus sed cursus aliquam, eros ex ornare purus, et venenatis leo eros nec tortor. Cras risus ligula, malesuada eget lobortis a, fermentum vitae libero.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ backgroundColor: "#5e001f", color: "#00e1d9" }}>
              <Card.Body>
                <Card.Title><b>Impact</b></Card.Title>
                <Card.Text>
                  Integer non turpis elit. Proin quis semper turpis. Morbi vitae diam vel tellus condimentum vehicula. Praesent ultricies magna ac augue ultricies, eu dapibus nulla accumsan. Vestibulum at tincidunt quam. Ut porttitor purus eu dolor gravida, non tincidunt est mollis. Vestibulum sodales eros libero, nec elementum purus pellentesque ut. Duis sit amet malesuada augue, sed rutrum felis. Nunc pellentesque velit eget nibh semper pretium. Donec vel quam tincidunt, sodales est et, varius nunc. Aenean faucibus a est in aliquet. In varius interdum dui at semper. Integer malesuada, lectus sed cursus aliquam, eros ex ornare purus, et venenatis leo eros nec tortor. Cras risus ligula, malesuada eget lobortis a, fermentum vitae libero.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
  
          <div style={{ backgroundImage: "linear-gradient(to right, #FFFFFF , #FAF9F6)", paddingBottom: "2%", marginTop: "2%" }}>
            <Row style={{ paddingTop: "2%" }}>
              <Col sm={7}>
                <h5 style={{ textAlign: "center", paddingTop: "2%", fontSize: "2em" }} >Where can we be Found?</h5>
                <p style={{ textAlign: "center" }}>We have offices all around the globe to cater to the needs of customers. We have around 20 offices in Asia, 30 in Europe, 25 in North America. Our headquarters are in India. Find us in your location!</p>
              </Col>
              <Col sm={5}><center><Image style={{ width: "100%", height: "45vh", paddingRight: "1%" }} src={map} class="rounded" alt="Online image"></Image></center></Col>
            </Row>
  
          </div>
  
  
        </Container>
        <Footer />
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: "8%", marginBottom: "5%" }}>
        <div style={{ height: "20vh", backgroundImage: "linear-gradient(to right, #4169E1 , #39c7dd)" }}>
          <h2 style={{ color: "white", textAlign: "center", verticalAlign: "middle", lineHeight: "100px", fontSize: "3em" }}>OUR COMPANY</h2>
        </div>
        <div style={{ backgroundImage: "linear-gradient(to right, #FFFFFF , #FAF9F6)", paddingBottom: "2%" }}>
          <Row style={{ paddingTop: "2%" }}>
            <Col sm={7}>
              <h5 style={{ textAlign: "center", paddingTop: "2%", fontSize: "2em" }} >We provide electronics to help fulfil the needs of our customers.</h5>
              <p style={{ textAlign: "center" }}>Teams around the world invent on behalf of our customers every day to meet their desire for lower prices, better selection, and convenient services. One way we guarantee a wide selection of products and services for customers is by creating programs to support the thousands of businesses in India that sell here.</p>
            </Col>
            <Col sm={5}><center><Image style={{ width: "100%" }} src={company} class="rounded" alt="Online image"></Image></center></Col>
          </Row>

        </div>


        <CardGroup style={{ marginTop: "2%" }}>
          <Card style={{ marginRight: "2%", backgroundColor: "#00e1d9", color: "#5e001f" }}>
            <Card.Body>
              <Card.Title><b>Technology</b></Card.Title>
              <Card.Text>
                Integer non turpis elit. Proin quis semper turpis. Morbi vitae diam vel tellus condimentum vehicula. Praesent ultricies magna ac augue ultricies, eu dapibus nulla accumsan. Vestibulum at tincidunt quam. Ut porttitor purus eu dolor gravida, non tincidunt est mollis. Vestibulum sodales eros libero, nec elementum purus pellentesque ut. Duis sit amet malesuada augue, sed rutrum felis. Nunc pellentesque velit eget nibh semper pretium. Donec vel quam tincidunt, sodales est et, varius nunc. Aenean faucibus a est in aliquet. In varius interdum dui at semper. Integer malesuada, lectus sed cursus aliquam, eros ex ornare purus, et venenatis leo eros nec tortor. Cras risus ligula, malesuada eget lobortis a, fermentum vitae libero.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: "#5e001f", color: "#00e1d9" }}>
            <Card.Body>
              <Card.Title><b>Impact</b></Card.Title>
              <Card.Text>
                Integer non turpis elit. Proin quis semper turpis. Morbi vitae diam vel tellus condimentum vehicula. Praesent ultricies magna ac augue ultricies, eu dapibus nulla accumsan. Vestibulum at tincidunt quam. Ut porttitor purus eu dolor gravida, non tincidunt est mollis. Vestibulum sodales eros libero, nec elementum purus pellentesque ut. Duis sit amet malesuada augue, sed rutrum felis. Nunc pellentesque velit eget nibh semper pretium. Donec vel quam tincidunt, sodales est et, varius nunc. Aenean faucibus a est in aliquet. In varius interdum dui at semper. Integer malesuada, lectus sed cursus aliquam, eros ex ornare purus, et venenatis leo eros nec tortor. Cras risus ligula, malesuada eget lobortis a, fermentum vitae libero.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <div style={{ backgroundImage: "linear-gradient(to right, #FFFFFF , #FAF9F6)", paddingBottom: "2%", marginTop: "2%" }}>
          <Row style={{ paddingTop: "2%" }}>
            <Col sm={7}>
              <h5 style={{ textAlign: "center", paddingTop: "2%", fontSize: "2em" }} >Where can we be Found?</h5>
              <p style={{ textAlign: "center" }}>We have offices all around the globe to cater to the needs of customers. We have around 20 offices in Asia, 30 in Europe, 25 in North America. Our headquarters are in India. Find us in your location!</p>
            </Col>
            <Col sm={5}><center><Image style={{ width: "100%", height: "45vh", paddingRight: "1%" }} src={map} class="rounded" alt="Online image"></Image></center></Col>
          </Row>

        </div>


      </Container>
      <Footer />
    </div>
  )
}

export default aboutus
