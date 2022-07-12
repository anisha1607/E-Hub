import React from 'react'
import Footer from './footer'
import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogged from './navbarLogged';
import data from  './data/products.json';
import laptop from '../images/laptop.jfif'

function OrderSuccessful(){
return(
<>
<NavbarLogged/>
<div style={{marginTop:"6%"}}>
<Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
<Card.Img style={{marginLeft:"35vw" ,height:"60vh",width:"25vw"}} variant="cent" src="https://ml1bqp5ajnmj.i.optimole.com/7fTCrYI-ZBdofYxV/w:637/h:723/q:75/https://mindjjo.in/wp-content/uploads/2021/08/green-check-mark-icon-in-a-circle-tick-symbol-in-vector-23713629-1.jpg" />
    <Card.Body style={{ height: "140px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>                  
    <Card.Title style={{marginLeft:"25vw"}}><h2>Your Order has been successfully placed</h2></Card.Title>
    <Card.Text>
        <Button href="/" variant='secondary' style={{marginLeft:"40vw"}}>Continue Shopping</Button>
    </Card.Text>
    </Card.Body>
</Card>
</div>
<Footer/>
</>
)
}
export default OrderSuccessful;