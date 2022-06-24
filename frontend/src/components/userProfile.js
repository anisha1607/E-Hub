import React from 'react';
import Navbar from './navbar'
import Footer from './footer'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './userProfile.css';

function ProfileScreen() {
    return(
    <>
    <Navbar />
    <Card style={{ maxWidth: '100vw' }}>
      <Row className='g-0'>
        <Col md='4'>
          <Card.Img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' alt='...' fluid />
        </Col>
        <Col md='8'>
          <Card.Body>
            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    ABCXYZ
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    abc@se.com
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    01125694234
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    9999999991
                </div>
            </div>
                  <hr/>
            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    Sector 1, Noida, New Delhi, India
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-sm-12">
                    <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                </div>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
      <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
      <Card.Body style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Card.Title>Brand Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="text-center"> 
          <Button href="product" variant="primary">Show Product</Button>
          {/* <Button variant="secondary">Add to cart</Button> */}
        </div>
      </Card.Body>
    </Card>
    <Footer />
    </>
    )
}

export default ProfileScreen;