import React from 'react'
import Navbar from './navbar'
import { useLocation } from 'react-router-dom';
import Footer from './footer'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogged from './navbarLogged';
import data from  './data/products.json';
import laptop from '../images/laptop.jfif'

const createHistory = require("history").createBrowserHistory;

function ProductType(props) {
  const history = createHistory();
  // const location = useLocation();
  // console.log(props.location.state)
  const getProductSearchedFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem('productSearched') || '');
    }
    catch (err) {
      return "productNotSearched";
    }
  }

  const productSearched = getProductSearchedFromLocalStorage();

  function clickMe(item) {
    localStorage.setItem("productClicked", JSON.stringify(item['item']));
    history.push("product");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }

  if(props.user){
  return (
    <div>
      <NavbarLogged />
        {/* <Row style={{ "marginBottom": "2%" }}>
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
        </Row> */}
     
      {/* <CardGroup> */}
      {/* {productSearch.length != 0 && ( */}
        <div style={{marginTop: "6%"}}>
          {productSearched.map((item) => {
            const {id, name, price, image,brand} = item;
            console.log(item)
            return (
                <div key={id}>
                <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
                <Row className='g-0'>
                <Col md='4'>
                  <Card.Img style={{height: "400px"}} variant="top" src={image} />
                </Col>
                <Col md='4'>
                  <Card.Body style={{ width:"800px",height: "140px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Text>
                    <h3>{brand}</h3>
                    <br></br>
                    <div className="product-actions">
                      <h3>&#x20b9;{price}</h3>
        
                      {/* <Button variant="warning" href="product">View Product</Button> */}
                    </div>
                    <br></br>
                    <Button variant="warning" onClick={()=>clickMe({item})}>View Product</Button>
                    </Card.Text>
                  </Card.Body>
                </Col>
                </Row>
                </Card>
              </div>
            );
          })}
        </div>
        <Footer />
      {/* </CardGroup> */}
    </div>
    
  )
  }
  return (
    <div style={{ marginTop: "5%" }}>
      <Navbar />
      {/* <Row style={{ "marginBottom": "2%" }}>
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
        </Row> */}

      {/* <CardGroup> */}
      {/* {productSearch.length != 0 && ( */}
      <div>
        {productSearched.map((item) => {
          const { id, name, price, image, brand } = item;
          console.log(item)
          return (
            <div key={id}>
              <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
                <Row className='g-0'>
                  <Col md='4'>
                    <Card.Img style={{ height: "400px" }} variant="top" src={image} />
                  </Col>
                  <Col md='4'>
                    <Card.Body style={{ width: "800px", height: "140px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <Card.Title><h2>{name}</h2></Card.Title>
                      <Card.Text>
                        <h3>{brand}</h3>
                        <br></br>
                        <div className="product-actions">
                          <h3>&#x20b9;{price}</h3>

                          {/* <Button variant="warning" href="product">View Product</Button> */}
                        </div>
                        <br></br>
                        <Button variant="warning" onClick={() => clickMe({ item })}>View Product</Button>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
          );
        })}
      </div>
      <Footer />
      {/* </CardGroup> */}
    </div>

  )
}

export default ProductType
