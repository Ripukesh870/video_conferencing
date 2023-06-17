import React, { useState } from 'react';
import './css/Avtar.css';
import { Box, Button } from '@mui/material';
import Ripu from "./img/Ripukesh.png";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from './redux/action/Action'


const AvatarDropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
    const Dispatch=useDispatch();



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
                <Button className='dropbutton'><Link to='/profile' style={{textDecoration:"none",color:'black'}}>Profile</Link></Button>
                <Button className='dropbutton'><Link to='/setting' style={{textDecoration:"none",color:'black'}}>Setting</Link></Button>
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
