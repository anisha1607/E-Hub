import React, { useState } from 'react'
import Navbar from './navbarLogged'
import Footer from './footer'
import { Button } from 'react-bootstrap';
import axios from "axios"

function Cart() {
  // const [total,setTotal] = useState(0)
  var total=0;

  
  const getUserFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem('user') || '');
    } catch (error) {
      return null;
    }
  }
  const getProductsFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem('products') || '');
    } catch (error) {
      return null;
    }
  }
  const user = getUserFromLocalStorage();
  const products = getProductsFromLocalStorage();

  function clickMe(item){
    alert(item['item'].id);
    axios.post("http://localhost:9002/cartdeleteitem", { id: user._id ,item_id:item['item'].id})
      .then(res => {
        // localStorage.setItem("cart", JSON.stringify(res.data.cartItems));
      })
  }

  


  if (user) {
    axios.post("http://localhost:9002/cartdisplay", { id: user._id })
      .then(res => {
        // alert(res.data.message)
        // alert(res.data.cartItems.id)
        // return (
        //   <div><h1>{res.data.message}</h1>
        //   <h1>{res.data.cartItems.id}</h1></div>
        // )
        localStorage.setItem("cart", JSON.stringify(res.data.cartItems));
        //alert(cart.id);
      })
  }
  else {
    alert("Please login to display items to cart");
    // return <div></div>
  }


  const getCartFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem('cart') || '');
    } catch (error) {
      return null;
    }
  }

  const cart = getCartFromLocalStorage();

  function checkoutItem(){
    // alert(item['item'].id);
    const cart = getCartFromLocalStorage();
    alert(cart.id)
    axios.post("http://localhost:9002/order", { cart:cart})
      .then(res => {
        localStorage.setItem("cart", JSON.stringify(res.data.cartItems));
      })

    // localStorage.setItem('cart','');
  }
  // alert(cart.item_id.length);
  // alert(products.length);
  //return <div>{cart.id}</div>


  const data=[]
  for(var i=0;i<cart.item_id.length;i++){
    for(var j=0;j<products.length;j++){
      if(products[j].id==cart.item_id[i]){
         data.push({id:products[j].id,name:products[j].name,price:(parseInt(products[j].price)*cart.item_quantity[i]),image:products[j].image,quantity:cart.item_quantity[i]});
         //alert(products[j].name)
         //break;
         total+=(parseInt(products[j].price)*cart.item_quantity[i]);
      }
    }
  }
  if(data.length==0){
    return (
      <div>
        <h1>
          No products in your cart 
        </h1>
      </div>
    )
  }
  //alert(data.length);



  return (
    <div  style={{ backgroundColor: "#eee"}}>

    <Navbar />

    <div style={{ marginTop: "6%",marginBottom: "1%" }}>
      <div className="container mt-5 p-3 rounded cart" style={{ backgroundColor: "#fff" }}>
        <div className="row no-gutters">
          <div className="col-md-8">


            <div className="product-details mr-2" style={{ padding: "10px" }}>
              <div className="d-flex flex-row align-items-center">
                <span className="ml-2"> <a href='/'>
                  <Button variant='secondary'> &larr; Continue Shopping</Button></a></span></div>
              <hr />
              <h6 className="mb-0"> <b> Shopping cart </b> </h6>

              <div className="d-flex justify-content-between"><span>You have {data.length} items in your cart</span></div>

              <div style={{ backgroundColor: "#eee" }}>
    {data.map((item) => {
          const { id, name, price, image, quantity } = item;
            return (
              <div key={id} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded fluid" src={image} width="40" />
                  <div className="ml-2"><span className="font-weight-bold d-block"><b style={{ marginLeft: "5px" }}>{name}</b></span><span className="spec" style={{ marginLeft: "5px" }}>256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  {/* <input id='demoInput' type='number' min='1' max='100' placeholder='1' /> */}
                  {quantity}
                  {/* <button onclick="increment()" style={{ marginRight: "2%", marginLeft: "2%" }}>+</button>
            <button onclick="decrement()">-</button> */}
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block font-weight-bold">Rs {price}</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <i className="fa fa-trash-o ml-3" style={{ color: "red !important" }} onClick={()=>clickMe({item})}></i>
                </div>
              </div>
            );
          })}
  </div>


              {/* <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded fluid" src="https://i.imgur.com/o2fKskJ.jpg" width="40" />
                  <div className="ml-2"><span className="font-weight-bold d-block"><b>Google pixel 4 XL</b></span><span className="spec">256GB, Axe black</span></div>
                </div>
                <div className="d-flex flex-row align-items-center"><span className="d-block mr-6">1</span>
                <span className="d-block ml-5 font-weight-bold">Rs 55000</span>
                <i className="fa fa-trash-o ml-3 text-black-50"></i></div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded fluid" src="https://i.imgur.com/Tja5H1c.jpg" width="40" />
                  <div className="ml-2"><span className="font-weight-bold d-block"><b>Samsung Galaxy A52</b>&nbsp;</span><span className="spec">256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center"><span className="d-block">1</span>
                <span className="d-block ml-5 font-weight-bold">Rs 20000</span>
                <i className="fa fa-trash-o ml-3 text-black-50"></i></div>
              </div> */}


            </div>
          </div>


          <div className="col-md-4">
            <div className="payment-info" style={{
              background: "blue",
              padding: "10px",
              borderRadius: "6px",
              color: "#fff",
              fontWeight: "bold"
            }}>
              <div className="d-flex justify-content-between align-items-center"><span>Card details</span></div>

              <span className="type d-block mt-3 mb-1">Card type</span><label className="radio">

                <input type="radio" name="card" value="payment" checked /> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>

              <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>

              <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>


              <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
              <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name" /></div>
              <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" /></div>
              <div className="row">
                <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
                <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342" /></div>
              </div>
              <hr className="line" style={{ borderBottom: "1px solid rgb(102,102,221)" }} />
              <div className="d-flex justify-content-between information" style={{ marginBottom: "5px" }}><span>Subtotal</span><span>Rs. {total}</span></div>
              <div className="d-flex justify-content-between information" style={{ marginBottom: "5px" }}><span>Shipping</span><span>Rs. 20</span></div>
              <div className="d-flex justify-content-between information" style={{ marginBottom: "5px" }}><span>Total</span><span>Rs. {total+20}</span></div><button onClick={()=>checkoutItem()} className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span style={{ marginRight: "5px" }}>Rs. {total+20}</span>
              <span>Checkout <i className="fa fa-long-arrow-right ml-1"></i></span></button></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Cart
