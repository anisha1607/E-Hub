import React, { useEffect, useState } from 'react'
import axios from "axios"
import products from './data/products.json';

import { Button, Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap'

function Order() {

    const [data1,setData]= useState();

    // useEffect(()=>{
    //     try {
    //                 let user = JSON.parse(localStorage.getItem('user'))
    //                 axios.post("http://localhost:9002/orderhistory", { id: user._id})
    //             .then(res => {
    //                 setData(res.data,[]);
    //                 for(let i=0; i< data1.length ; i++){
    //                     for(let j=0; j<data.length; j++){
    //                         if(data[j].id === data1[i].item_id){
    //                             console.log(data[j].name)
    //                         }
    //                     }
    //                 }
    //             })
    //             } catch (err) {
    //                 console.error(err);
    //             }
    // },[])

    const getUserFromLocalStorage = () => {
        try {
            return JSON.parse(localStorage.getItem('user') || '');
        } catch (error) {
            return null;
        }
    }
    const user = getUserFromLocalStorage();
    axios.post("http://localhost:9002/orderhistory", { id: user._id })
        .then(res => {
            var orderHistory=[];
            for(var i=0;i<res.data.length;i++){
                if(res.data[i].id==user._id){
                    orderHistory.push(res.data[i]);
                }
            }
            localStorage.setItem("orderHistory", JSON.stringify(res.data));
        })
        const getorderHistoryFromLocalStorage = () => {
            try {
                return JSON.parse(localStorage.getItem('orderHistory') || '');
            } catch (error) {
                return null;
            }
        }
        const orderHistory = getorderHistoryFromLocalStorage();
    // const sendPostRequest = async () => {
    //     try {
    //         let user = JSON.parse(localStorage.getItem('user'))
    //         axios.post("http://localhost:9002/orderhistory", { id: user._id})
    //     .then(res => {
    //         setData(res.data,[]);
            // for(let i=0; i< data1.length ; i++){
            //     for(let j=0; j<data.length; j++){
            //         if(data[j].id === data1[i].item_id){
            //             console.log(data[j].name)
            //         }
            //     }
            // }
    //     })
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // sendPostRequest();
  const data = []
  for (var i = orderHistory.length-1; i >= 0; i--) {
    for (var j = products.length-1; j >= 0; j--) {
      if (products[j].id == orderHistory[i].item_id) {
        const dateArray = orderHistory[i].date.substring(0,10).split("-");
        const splitReverse = dateArray.reverse();
        const reverseDate = splitReverse.join("-");
        data.push({ date: reverseDate, id: orderHistory[i].id, name: products[j].name, price: (parseInt(products[j].price) * parseInt(orderHistory[i].item_quantity)),quantity: parseInt(orderHistory[i].item_quantity), image: products[j].image});
      }
    }
  }
    return (
        <div style={{"marginTop":"1%"}}>
        <center><h1><b>Order History</b></h1></center>
        {data.map((item) => {
            const {id, date, name, price, image, quantity} = item;
            console.log(item)
            return (
                <div key={id}>
                <Card style={{ width: "inherit", margin: "10px", padding: "10px", borderRadius: "16px", display: "flex" }}>
                <Row className='g-0'>
                <Col md='4'>
                  <Card.Img style={{height: "200px",width:"200px"}} variant="top" src={image} />
                </Col>
                <Col md='4'>
                  <Card.Body style={{ width:"800px",height: "140px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                    <Card.Title><h4><b>{name}</b></h4></Card.Title>
                    <Card.Text>
                    {/* <h3>{brand}</h3> */}
                    <div className="product-actions">
                      <h6>Total Quantity : <b>{quantity}</b></h6>
        
                      {/* <Button variant="warning" href="product">View Product</Button> */}
                    </div>
                    <div className="product-actions">
                      <h6>Total Price : &#x20b9;<b>{price}</b></h6>
        
                      {/* <Button variant="warning" href="product">View Product</Button> */}
                    </div>
                    <div className="product-actions">
                      <h6>Date of Purchase : <b>{date}</b></h6>
        
                      {/* <Button variant="warning" href="product">View Product</Button> */}
                    </div>
                    <br></br>
                    {/* <Button variant="warning" >View Product</Button> */}
                    </Card.Text>
                  </Card.Body>
                </Col>
                </Row>
                </Card>
              </div>
            );
          })}
        </div>
    )
}

export default Order
