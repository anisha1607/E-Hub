import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Button } from 'react-bootstrap';


// function increment() {
//   document.getElementById('demoInput').stepUp();
// }
// function decrement() {
//   document.getElementById('demoInput').stepDown();
// }

function cart() {
  return (
    <div  style={{ background: "#eee"}}>

    <Navbar />

    <div style={{ marginTop: "6%",marginBottom: "1%" }}>
      <div className="container mt-5 p-3 rounded cart" style={{ background: "#fff" }}>
        <div className="row no-gutters">
          <div className="col-md-8">


            <div className="product-details mr-2" style={{ padding: "10px" }}>
              <div className="d-flex flex-row align-items-center">
                <span className="ml-2"> <a href='/'>
                  <Button variant='secondary'> &larr; Continue Shopping</Button></a></span></div>
              <hr />
              <h6 className="mb-0"> <b> Shopping cart </b> </h6>

              <div className="d-flex justify-content-between"><span>You have 4 items in your cart</span></div>


              {/* <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded fluid" src="https://i.imgur.com/QRwjbm5.jpg" width="40" />
                  <div><span className="font-weight-bold d-block"> <b>Iphone 11 pro</b></span><span className="spec">256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block">2</span>
                  <span className="d-block ml-5 font-weight-bold">Rs 70000</span>
                  <i className="fa fa-trash-o ml-3 text-black-50"></i>
                </div>
              </div> */}


              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded fluid" src="https://i.imgur.com/QRwjbm5.jpg" width="40" />
                  <div className="ml-2"><span className="font-weight-bold d-block"><b style={{marginLeft:"5px"}}>Iphone 11</b></span><span className="spec" style={{marginLeft:"5px"}}>256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <input id='demoInput' type='number' min='1' max='100' placeholder='1' />
                  {/* <button onclick="increment()" style={{ marginRight: "2%", marginLeft: "2%" }}>+</button>
                  <button onclick="decrement()">-</button> */}
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block font-weight-bold">Rs 50000</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <i className="fa fa-trash-o ml-3" style={{ color: "red !important" }}></i>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded fluid" src="https://i.imgur.com/GQnIUfs.jpg" width="40" />
                  <div className="ml-2"><span className="font-weight-bold d-block"><b style={{marginLeft:"5px"}}>One pro 7T</b></span><span className="spec" style={{marginLeft:"5px"}}>256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <input id='demoInput' type='number' min='1' max='100' placeholder='1' />
                  {/* <button onclick="increment()" style={{ marginRight: "2%", marginLeft: "2%" }}>+</button>
                  <button onclick="decrement()">-</button> */}
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block font-weight-bold">Rs 50000</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <i className="fa fa-trash-o ml-3" style={{ color: "red !important" }}></i>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded fluid" src="https://i.imgur.com/Tja5H1c.jpg" width="40" />
                  <div className="ml-2" style={{ marginRight: "2px"}}><span className="font-weight-bold d-block"><b style={{marginLeft:"5px"}}>Samsung Galaxy</b></span><span className="spec" style={{marginLeft:"5px"}}>256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <input id='demoInput' type='number' min='1' max='100' placeholder='1' />
                  {/* <button onclick="increment()" style={{ marginRight: "2%", marginLeft: "2%" }}>+</button>
                  <button onclick="decrement()">-</button> */}
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block font-weight-bold">Rs 50000</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <i className="fa fa-trash-o ml-3" style={{ color: "red !important" }}></i>
                </div>
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
              <div className="d-flex justify-content-between information" style={{ marginBottom: "5px" }}><span>Subtotal</span><span>$3000.00</span></div>
              <div className="d-flex justify-content-between information" style={{ marginBottom: "5px" }}><span>Shipping</span><span>$20.00</span></div>
              <div className="d-flex justify-content-between information" style={{ marginBottom: "5px" }}><span>Total(Incl. taxes)</span><span>$3020.00</span></div><button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span style={{ marginRight: "5px" }}>$3020.00 </span><span>Checkout <i className="fa fa-long-arrow-right ml-1"></i></span></button></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default cart
