import React from 'react'
import { Button, Form, Image ,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
//import './login.css'
import icon from '../images/icon.png'

function login() {
  return (
    <>
      <Container style={{ "margin": "1%" }}>
        <Row>
          <Col lg={8} className="mw-80"><center><Image src={icon} class="rounded mx-auto d-block" alt="Online image"></Image></center></Col>
          <Col lg={4}><Form className="mb-6">
            <center><h2>Login</h2></center>
            <Form.Group className="mb-3">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <center><p><a style={{"marginLeft":"5%"}} href="http://localhost:3000/register">Don't have a user account?</a><Button variant="primary" style={{"marginLeft":"5%","width":"30%"}} type="submit">
              Login
            </Button></p></center>
          </Form></Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default login
