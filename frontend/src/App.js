import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Home from './components/home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Producttype from './components/ProductType'
import Product from './components/product'
import AboutUs from './components/aboutus'
import User from './components/userProfile'
import UserEdit from './components/userProfileEdit'
import HomeLogged from './components/homeLogged'
import TvsRange from './components/TvsRange'
import LaptopRange from './components/LaptopRange'
import MobileRange from './components/MobileRange'
import data from './components/data/products.json'
// import {useState} from 'react'

// localStorage.setItem("user", "");

function App() {
  
  const getUserFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('user') || '');
    } catch (error) {
        return null;
    }
  }
  
  const user = getUserFromLocalStorage();
  console.log(user);
  // const user = localStorage.getItem("user");
  // if(user !==""){
  //   console.log(JSON.parse(user));
  // }else{
  //   console.log('User is not found');
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ (user) ? <HomeLogged /> : <Home/> } />
          <Route path="register" element={ <Register/> } />
          <Route path="cart" element={<Cart/> }/>
          <Route path="login" element={ (user) ? <HomeLogged user={user.name}/> : <Login/> }></Route>
          <Route path="producttype" element={ <Producttype/>} />
          <Route path="product" element={ <Product user={user}/>} />
          <Route path="aboutus" element={ <AboutUs/>} />
          <Route path="user" element={ (user) ? <User user={user}/> : <Home/> } />
          <Route path="useredit" element={ <UserEdit user={user}/>} />
          <Route path="tvs" element={ <TvsRange user={user}/> } />
          <Route path="laptops" element={ <LaptopRange user={user}/> } />
          <Route path="mobiles" element={ <MobileRange user={user}/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;