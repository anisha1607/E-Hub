import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Image, Container, Row, Col } from 'react-bootstrap'
import icon from '../images/icon.png'
import Footer from './footer';

function register() {
  return (
    <div>
      <Container style={{ "margin": "1%" }}>
        <Row >
          <Col sm={8} className="mw-80"><Image src={icon} class="rounded mx-auto d-block" alt="Online image"></Image></Col>
          <Col sm={4}><Form className="mb-6">
            <center><h2>Register</h2></center>
            <Form.Group className="mb-3">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Phone Number</Form.Label> */}
              <Form.Control type="number" placeholder="Phone" />
            </Form.Group>
            <center><p><a style={{"marginLeft":"5%"}} href="http://localhost:3000/login">Already a user?</a><Button variant="primary" style={{"marginLeft":"5%","width":"30%"}} type="submit">
              Register
            </Button></p></center>
          </Form></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default register
