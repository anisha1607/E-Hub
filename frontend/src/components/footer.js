import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from 
function footer() {
  return (
    <>
    <div className="container-fluid text-center text-md-left pt-3" style={{"backgroundColor": "black"}}>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h3 className="text" style={{"color": "white"}}><b>E-Hub</b></h3>
                <p style={{"color": "gray"}}>Trusted E-Commerce website for Electronic items!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text" style={{"color": "white"}}><b>About E-Hub</b></h5>
                <ul className="list-unstyled">
                    <li><a href="aboutus" style={{"color":"darkgray","textDecoration": "none"}}>About us</a></li>
                    <li><a href="/" style={{"color":"darkgray","textDecoration": "none"}}>Home</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text" style={{"color": "white"}}><b>My E-Hub</b></h5>
                <ul className="list-unstyled">
                    <li><a href="user" style={{"color":"darkgray","textDecoration": "none"}}>My Profile</a></li>
                    <li><a href="cart" style={{"color":"darkgray","textDecoration": "none"}}>My Cart</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text" style={{"color": "white"}}><b>Contact Us</b></h5>
                <ul className="list-unstyled">
                    <li><a href="/" style={{"color":"darkgray","textDecoration": "none"}}>Facebook</a></li>
                    <li><a href="/" style={{"color":"darkgray","textDecoration": "none"}}>Instagram</a></li>
                    <li><a href="/" style={{"color":"darkgray","textDecoration": "none"}}>Twitter</a></li>
                    <li><a href="/" style={{"color":"darkgray","textDecoration": "none"}}>Gmail</a></li> */
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{"backgroundColor": "black","color":"white"}}>© 2022 Copyright : 
        <a href="https://se.com/" target="blank" style={{"color": "white","textDecoration": "none"}}> E-Hub.com</a>
    </div>
    </>
  )
}

export default footer
