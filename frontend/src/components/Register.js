import React, { useState , useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Image, Container, Row, Col } from 'react-bootstrap'
import icon from '../images/Logo.png'
import Footer from './footer';
import axios from "axios"
//import { useNavigate } from "react-router-dom"

const createHistory = require("history").createBrowserHistory;

// const regExp = RegExp(
//   /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// )

function Register({setLoginUser}){
  const history = createHistory();
  //const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  })

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const urlSubmit = (event) => {
    event.preventDefault();
    //event.target.className += " was-validated";
    setFormErrors(validate(user));
    setIsSubmit(true);
  }
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  useEffect(() => {
    //console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPhone = /^[0-9]{10}$/i;
    // const email1 = document.querySelectorAll('.email')
    // console.log(email1)
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
      //email1.classList.add('isInvalid')   
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
      //email.classList.add('is-invalid')  
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if(values.password !== values.confirmPassword){
      errors.confirmPassword = "Password does not match confirm password";
    }
    if (!regexPhone.test(values.phone)) {
      errors.phone = "This is not a valid phone number!";
    }
    return errors;
  };


  const register = () => {
    const { name, email, password, confirmPassword, phone} = user
    
    if(Object.keys(formErrors).length !== 0){
      
    }
    else if (name && email && password && (phone!=="") && isSubmit ) {
      axios.post("http://localhost:9002/register", user)
        .then(res => {
          alert(res.data.message)
            //setLoginUser(res.data.user)
            history.push("/login");
            let pathUrl = window.location.href;
            window.location.href = pathUrl;
        })
    } else {
      //alert("invalid input")
    }

  }

  return (
    <div>
      <Container style={{ "margin": "1%" }}>
        <Row >
          <Col sm={8} className="mw-80"><center><a href="/"><Image style={{ "height": "100", "width": "auto" }} src={icon} class="rounded mx-auto d-block" alt="Online image"></Image></a></center></Col>
          <Col sm={4}>
            <Form className="mb-6" noValidate onSubmit={urlSubmit} >
            <center><h2>Register</h2></center>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter email" />
            </Form.Group>
            <p style={{color: "red"}}>{formErrors.email}</p>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter name" />
            </Form.Group>
            <p style={{color: "red"}}>{formErrors.name}</p>
            <Form.Group className="mb-3">
              <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
            </Form.Group>
            <p style={{color: "red"}}>{formErrors.password}</p>
            <Form.Group className="mb-3">
              <Form.Control type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
            </Form.Group>
            <p style={{color: "red"}}>{formErrors.confirmPassword}</p>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
            </Form.Group>
            <p style={{color: "red"}}>{formErrors.phone}</p>
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
