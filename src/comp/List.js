import React from 'react'
import logo from '../comp/ppmLogo.png'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import './css/list.css';
function List() {
  return (
    <>
        <header>
            <div className="container container-flex text-aline-center" >
                <div className="logoContainer ">
                    <img src={logo} alt="" className='logo'/>
                </div>
                <nav>
                    <div className="list">
                        <NavLink to="/" exact className="listItem" activeClassName="activeItem">Home</NavLink>
                        <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                        <NavLink to="/service" className="listItem" activeClassName="activeItem">Service</NavLink>
                        <NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                        <NavLink to="/policy" className="listItem" activeClassName="activeItem">Policy</NavLink>

                    </div>
                </nav>
                <div className="icons">
                    <SearchIcon className='icon'/>
                    <PersonIcon className='icon'/>
                    <CallIcon className='icon'/>
                </div>
            </div>
        </header> 
    </>
  )
}

export default List
