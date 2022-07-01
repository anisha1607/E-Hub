import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Image, Container, Row, Col } from 'react-bootstrap'
import icon from '../images/icon.png'
import Footer from './footer';
import axios from "axios"
//import { useNavigate } from "react-router-dom"

const createHistory = require("history").createBrowserHistory;

const Register = () => {
  const history = createHistory();
  //const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { name, email, password, confirmPassword, phone} = user
    if (name && email && password && (password === confirmPassword) && (phone!=="")) {
      axios.post("http://localhost:9002/register", user)
        .then(res => {
          alert(res.data.message)
          //print(res.data.user);
            //setLoginUser(res.data.user)
            history.push("login");
            let pathUrl = window.location.href;
            window.location.href = pathUrl;
        })
    } else {
      alert("invalid input")
    }

  }

  return (
    <div>
      <Container style={{ "margin": "1%" }}>
        <Row >
          <Col sm={8} className="mw-80"><center><a href="/"><Image style={{ "height": "100", "width": "auto" }} src={icon} class="rounded mx-auto d-block" alt="Online image"></Image></a></center></Col>
          <Col sm={4}><Form className="mb-6">
            <center><h2>Register</h2></center>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
            </Form.Group>
            <center><p><a style={{ "marginLeft": "5%" }} href="login">Already a user?</a><Button onClick={register} variant="primary" style={{ "marginLeft": "5%", "width": "30%" }} type="submit">
              Register
            </Button></p></center>
          </Form></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Register
