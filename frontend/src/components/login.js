import React, { useState} from 'react'
import { Button, Form, Image ,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
//import './login.css'
import icon from '../images/icon.png'
import axios from 'axios';
//import {useNavigate } from 'react-router-dom';

const createHistory = require("history").createBrowserHistory;

function Login({setLoginUser}){
  const history = createHistory();
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const login = () => {
    axios.post("http://localhost:9002/login", user)
    .then(res => {
<<<<<<< HEAD
        alert(res.data.user._id)
=======
        alert(res.data.message)
        //setUser(res.data.user)
        //navigate('/');
        // navigate("/home");
>>>>>>> 169970a46619d003e65e58a2a266db86d970f8ff
        if(res.data.message!=="Password didn't match"){
          setLoginUser(res.data.user)
          history.push("/");
          let pathUrl = window.location.href;
          window.location.href = pathUrl;
        }
    })
}

  return (
    <>
      <Container style={{ "margin": "1%" }}>
        <Row>
          <Col lg={8} className="mw-80"><center><a href="/"><Image src={icon} class="rounded mx-auto d-block" alt="Online image"></Image></a></center></Col>
          <Col lg={4}><Form className="mb-6">
            <center><h2>Login</h2></center>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
            </Form.Group>
            <center><p><a style={{"marginLeft":"5%"}} href="register">Don't have a user account?</a><Button onClick={login} variant="primary" style={{"marginLeft":"5%","width":"30%"}} type="submit">
              Login
            </Button></p></center>
          </Form></Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Login
