import './App.css';
import Register from "./register.js";
import Login from "./login.js";
import Items from './items';
import Cart from './cart';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'

function App() {
  return (
    <Router>

      <nav className='nav_head '>
      <header className='container'>
      <Link to="/Items" className="link">Items</Link>
      <Link to="/Register" className="link">Register</Link>
      
      <Link to="/Login" className="link">Login</Link>
      <Link to="/Cart" className="link">Cart</Link>
     
      </header>
      </nav>
      <Routes>
      <Route path='/items' element={<Items />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/cart' element={<Cart />}/>
         
    </Routes>
  </Router>
  );
}

export default App;


