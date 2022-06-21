import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
function footer() {
  return (
    <>
    <div className="container-fluid text-center text-md-left pt-3" style={{"background-color": "black"}}>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase" style={{"color": "white"}}>Footer Content</h5>
                <p style={{"color": "gray"}}>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{"color": "white"}}>Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 1</a></li>
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 2</a></li>
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 3</a></li>
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{"color": "white"}}>Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 1</a></li>
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 2</a></li>
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 3</a></li>
                    <li><a href="#!" style={{"color":"darkgray"}}>Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{"background-color": "black","color":"white"}}>© 2022 Copyright:
        <a href="https://se.com/" style={{"color": "white"}}> E-Hub.com</a>
    </div>
    </>
  )
}

export default footer
