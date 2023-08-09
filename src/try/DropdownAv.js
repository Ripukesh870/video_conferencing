import React, { useState } from 'react';
import './css/Avtar.css';
import { Box, Button } from '@mui/material';
import Ripu from "./img/Ripukesh.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from './redux/action/Action'


const AvatarDropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
    const Dispatch=useDispatch();
    const Navigate=useNavigate();
    const handleProfile=()=>{
      Navigate('/profile')
    }

    const handleSetting=()=>{
      Navigate('/setting')
    }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
    Dispatch(logout());
    console.log("Logout")
  }

  return (
    <Box className="avatar-dropdown-container">
      <button className="avatar-button" onClick={toggleDropdown}>
        <img className="avatar-image" src={Ripu} alt="Avatar" />
      </button>

      {isOpen && (
        <div className="dropdown-content" >
                <Button className='dropbutton' onClick={handleProfile}><Link style={{textDecoration:"none",color:'black'}}>Profile</Link></Button>
                <Button className='dropbutton' onClick={handleSetting}><Link style={{textDecoration:"none",color:'black'}}>Setting</Link></Button>
                <Button className='dropbutton' onClick={handleLogout}><Link style={{textDecoration:"none",color:'black'}}>Logout</Link></Button>  

          {/* <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a> */}
        </div>
      )}
    </Box>
  );
};

export default AvatarDropdownButton;
