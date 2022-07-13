import React from 'react';
import Navbar from './navbarLogged'
import Footer from './footer'
import { Button, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './userProfile.css';
import Order from './order'

function userProfile({ user }) {
  
  return (
    <>
      <Navbar />
      <div style={{ "marginTop": "5%" }}>
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
                    {user.name}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {user.email}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {user.phone}
                  </div>
                </div>
                <hr />
                {/* <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobile</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    9999999991
                  </div>
                </div>
                <hr /> */}
                {/* <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    Sector 1, Noida, New Delhi, India
                </div>
            </div>
            <hr/> */}
                <div class="row">
                  <div class="col-sm-12">
                    <a class="btn btn-info " target="__blank" href="useredit">Edit</a>
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Order />
      </div>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default userProfile;