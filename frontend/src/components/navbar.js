import React from 'react';
import logo from '../../src/cart.jpg'
import { Image, Container, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';


function navbar() {
  return (
    <>
      <Navbar fixed='top' bg="info" variant="dark" expand="lg" style={{ marginBottom: "2%" }}>
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
                <NavDropdown.Item href="#action3">Mobile Phones</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Tablets</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Laptop</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/about">About Us</Nav.Link>

            </Nav>



            <Form className="d-flex" style={{ marginRight: "4px" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 w-100"
                aria-label="Search"
              />
              <Button variant="outline-light" style={{ marginRight: "5px" }}>Search</Button>
            </Form>

            <Button variant="light" href='/login' style={{ color: "#0dcaf0", marginRight: "5px" }}> Login / Sign Up</Button>

            {/* <Button style={{ color:  }} size='sm'>Login / Sign Up</Button> */}

            {/* <Nav.Link href="/login" style={{marginLeft:"2px"}}>Login/Sign Up</Nav.Link> */}

            <Nav>

              {/* <a class="navbar-brand" href=""></a> */}


              <a href='cart'>
              <Image src={logo} style={{
                width: "50px",
                height: "50px",
                // marginTop: "px",
                borderRadius: "100px",
                cursor: "pointer",
                marginLeft: "5px"}} thumbnail  roundedCircle></Image> </a>

            {/* <Nav.Link href="/cart">Cart</Nav.Link> */}

          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default navbar

