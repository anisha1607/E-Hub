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
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ (user && user.id) ? <User setLoginUser={setLoginUser}/> : <Home setLoginUser={setLoginUser}/> } />
          <Route path="register" element={ <Register/> } />
          <Route path="cart" element={ <Cart/> } />
          <Route path="login" element={ <Login setLoginUser={setLoginUser}/> } />
          <Route path="producttype" element={ <Producttype/>} />
          <Route path="product" element={ <Product/>} />
          <Route path="aboutus" element={ <AboutUs/>} />
          <Route path="user" element={ <User/>} />
          <Route path="useredit" element={ <UserEdit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
