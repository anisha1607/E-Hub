import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import Cart from './components/cart'
import Producttype from './components/producttype'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route path="register" element={ <Register/> } />
          <Route path="cart" element={ <Cart/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="producttype" element={ <Producttype/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
