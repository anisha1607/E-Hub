import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import company from '../images/Company.jpg'
import map from '../images/world.png'
import NavbarLogged from './navbarLogged';
function aboutus(props) {
  if (props.user) {
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
                Over the last many years, ecommerce has changed how people buy and sell online. The Internet offers a quick and easy way for people to buy things without having to visit a real store. An online store can reach customers anywhere in the world. Online businesses are rapidly developing an ecommerce website to face times of economic adversity by offering greater discounts, flat-rate delivery, loyalty programs, and other incentives.  There are many popular ecommerce platforms that make it easy to run promotions and keep your customers happy. Finally, although the boom in online sales has also opened a potential avenue for fraud and scams, site-builders have managed to stay ahead by offering top-of-the-line site protection and payment security to keep the online marketplace as safe as possible.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: "#5e001f", color: "#00e1d9" }}>
            <Card.Body>
              <Card.Title><b>Impact</b></Card.Title>
              <Card.Text>
                India is also witnessing this revolution of ecommerce business in its domestic market. In the context of India, e-commerce players on one hand,
                created new and ample opportunities of employment, improved the quality of products as well as services
                and providing maximum satisfaction to the Indian consumer through discounts, cash-backs and other
                attractive offers. But on the other hand, it is giving intense competition and creating great obstacles in the
                ways of traditional business institutions and unorganized sectors of India. So, this research paper deals with
                the study of positive and negative impact of e-commerce on traditional businesses as well as on the Indian
                economy as a whole.
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
