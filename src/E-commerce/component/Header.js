import React from 'react'
import "./css/style.css";
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Header = () => {

  const carts=useSelector((state)=>state.allCart);
  console.log(carts);

  return (
    <>
      <nav className="navbar" style={{ background: "black", color: "white" }}>
        <div className="container">
        <NavLink to="/" className="text-decoration-none text-light mx-2">
          <h2 style={{color:"white"}}>Ecommerce</h2>
        </NavLink>
          
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
          <div id='ex4'>
            <Badge badgeContent={carts.cart.length} color="error">
              <ShoppingCartIcon style={{fontSize:"1.6em"}}/>
            </Badge>
          </div>
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Header
