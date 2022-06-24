import React from 'react';
import Navbar from './navbar'
import Footer from './footer'
import { Button, Card,Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './userProfile.css';

function ProfileScreenEdit() {
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
          <div class="row mb-3">
				<div class="col-sm-3">
					<h6 class="mb-0">Full Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="John Doe"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="john@example.com"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="(239) 816-9029"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mobile</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="(320) 380-4539"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="Bay Area, San Francisco, CA"/>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
                                <a class="btn btn-info " target="__blank" href="user">Save Changes</a>
								</div>
							</div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
      <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
      <Card.Body style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Card.Title>Order History</Card.Title>
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

export default ProfileScreenEdit;