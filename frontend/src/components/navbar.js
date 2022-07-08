import React from 'react';
import logo from '../../src/cart.jpg'
import { Image, Container, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import './navbar.css'
import Search from "./search2";
import data from  './data/products.json';


function navbar() {
  return (
    <>
      <Navbar  bg="info"  variant="dark" expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>E Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="mobiles">Mobile Phones</NavDropdown.Item>
                <NavDropdown.Item href="tvs">Televisions</NavDropdown.Item>
                <NavDropdown.Item href="laptops">Laptops</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="aboutus">About Us</Nav.Link>

            </Nav>

            <Search placeholder="Enter a Product" data={data}/>

            {/* <Form className="d-flex" style={{ marginRight: "4px", width: "430px !important" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 input-mysize"
                aria-label="Search"
              />
              <Button variant="outline-light" style={{ marginRight: "10px !important"}} >Search</Button>
            </Form> */}

            <Button className="login" variant="light" href='/login' style={{ color: "#0dcaf0"}}> Login / Sign Up</Button>

            <Nav>
              <a href='cart'>
                <Image src={logo} style={{
                  width: "50px",
                  height: "50px",
                  // marginTop: "px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  marginLeft: "5px"
                }} thumbnail roundedCircle></Image> </a>

              {/* <Nav.Link href="/cart">Cart</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar

