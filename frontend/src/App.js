import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Home from './components/home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/cart'
import Producttype from './components/producttype'
import Product from './components/product'
import AboutUs from './components/aboutus'
import User from './components/userProfile'
import UserEdit from './components/userProfileEdit'
import {useState} from 'react'
function App() {
  const [ user, setLoginUser] = useState({
    name:"Rahul",
    phone:"5675675678",
    email:"ladi.rahul@gmail.com",
    password:"",
    confirmpassword:""

  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ (user && user._id) ? <User user={user}/> : <Home setLoginUser={setLoginUser}/> } />
          <Route path="register" element={ <Register setLoginUser={setLoginUser}/> } />
          <Route path="cart" element={ <Cart/> } />
          <Route path="login" element={ <Login setLoginUser={setLoginUser}/> } />
          <Route path="producttype" element={ <Producttype/>} />
          <Route path="product" element={ <Product/>} />
          <Route path="aboutus" element={ <AboutUs/>} />
          <Route path="user" element={ <User user={user}/>} />
          <Route path="useredit" element={ <UserEdit user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
