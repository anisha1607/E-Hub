import React,{useState} from 'react';
import Navbar from './navbar'
import Footer from './footer'
import { Button, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './userProfile.css';
import axios from 'axios';

function ProfileScreenEdit(props) {
	const [user, setUser] = useState({
		email: "",
		phone:"",
		name:"",
		password:"",
		confirmpassword:""
	})
	const handleChange = e => {
		const { name, value } = e.target
		setUser({
			...user,
			[name]: value
		})
	}
	const useredit = () => {
		const { name, email, phone,password,confirmpassword} = user
		if ((name!=="")&&(phone!=="")&&(confirmpassword==password&&(email!=""))) {
		  axios.post("http://localhost:9002/useredit", user)
			.then(res => {
			  alert(res.data.message)
			})
		} else {
		  alert("Invalid Input")
		}
	
	  }
	
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
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Email</h6>
										</div>
										<div class="col-sm-9 text-secondary">
										{/* readonly  */}
											<input type="text" placeholder={props.user.email} class="form-control" name="email" value={user.email} onChange={handleChange} />
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Full Name</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="text" class="form-control" placeholder={props.user.name} name="name" value={user.name}   onChange={handleChange}/>
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Phone</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="text" class="form-control" placeholder={props.user.phone} name="phone" value={user.phone}  onChange={handleChange} />
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Password</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="text" class="form-control" placeholder="password" name="password" value={user.password}  onChange={handleChange} />
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Confirm Password</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="text" class="form-control" placeholder="confirmpassword" name="confirmpassword" value={user.confirmpassword}  onChange={handleChange} />
										</div>
									</div>
									{/* <div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Mobile</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="text" class="form-control" value={user.phone}  onChange={handleChange} />
										</div>
									</div> */}
									{/* <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="Bay Area, San Francisco, CA"/>
								</div>
							</div> */}
									<div class="row">
										<div class="col-sm-3"></div>
										<div class="col-sm-9 text-secondary">
											<a class="btn btn-info " target="__blank" onClick={useredit}>Save Changes</a>
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
				</div>
				<Footer />
			</>
		)
	}

	export default ProfileScreenEdit;