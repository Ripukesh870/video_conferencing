import * as React  from 'react';
// import {useState}  from 'react';
import Ripu from '../try/img/Ripukesh.png'
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Dropdownjs from '../try/DropdownAv';
import { Avatar } from '@mui/material';


const drawerWidth = 240;

const navItems = [
  {
    location:'/',
    button:'Home'
  },
  {
    location:'/about',
    button:'About'
  }, {
    location:'/contact',
    button:'Contact'
  },
  {
    location:'/login',
    button:'Login'
  },
  {
    location:'/singup',
    button:'Singup'
  }
];

const navItems1 = [
  {
    location:'/',
    button:'Home',

  },
  {
    location:'/about',
    button:'About',

  }, {
    location:'/contact',
    button:'Contact',

  }

];



function Navbar(props) {
  // const alert=0;

  const { window } = props;
  const Data=useSelector((state)=>state.LoginReducer);
  

  console.log(Data);
  // const [login,setlogin]=useState(1);
  // console.log(props)
  // console.log(window);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography  color={'goldenrod'} variant="h6" sx={{ color:"blue", my: 2 ,fontSize:'24px',fontStyle:"bold" }}> RIPUKESH  </Typography>
      <Divider style={{color:"black"}}/>
      {
        (Data === 1 )?
          <List>
            {
              navItems.map((item) => (
              <ListItem key={item} disablePadding style={{margin:0}}>
                <ListItemButton sx={{ fontSize:"20px", justifyContent:"center" ,borderBottom:"2px solid #606C5D"}}>
                  <Link to={item.location} style={{ color: 'Black',textDecoration:'none' }}>{item.button}</Link>
                </ListItemButton>
              </ListItem>
             ))
            }
          </List> : <List>
          {/* <Avatar>R</Avatar> */}
          {
            navItems1.map((item) => (
            <ListItem key={item} disablePadding style={{margin:0}}>
              <ListItemButton sx={{ fontSize:"20px", justifyContent:"center" ,borderBottom:"2px solid #606C5D"}}>
                <Link to={item.location} style={{ color: 'Black',textDecoration:'none' }} >{item.button}</Link>
              </ListItemButton>
            </ListItem>
            ))
          }
          </List>  
      }
        
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor:"#9B9B93"}}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: "300px" }, }} >
            <MenuIcon />
          </IconButton>


          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {props.name}
          </Typography>
          {
            Data === 1 ?
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button sx={{marginRight:"10px"}}><Link to={item.location} style={{ color: '#fff',textDecoration:'none' }}>{item.button}</Link></Button>
              ))}
            </Box>  : <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight:"50px" }}>
              {navItems1.map((item) => (
                <Button sx={{marginRight:"10px"}} ><Link to={item.location} style={{ color: '#fff',textDecoration:'none' }}>{item.button}</Link></Button>
              ))}
      
              <Dropdownjs/>
            </Box>

          }
              
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export default Navbar;

/*
<ButtonGroup>
              <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button size='small' aria-controls={open ? 'split-button-menu': undefined } aria-expanded={open ? 'true' : undefined } aria-label="select merge strategy" aria-haspopup="menu" onClick={handleToggle}>
                  <ArrowDropDownIcon/>
                </Button>
              </ButtonGroup>
              <Popper
                sx={{
                  zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu"  autoFocusItem >
                          {
                            options.map((option, index) => (
                            <MenuItem
                              key={option}
                              // disabled={index === 2}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))
                          }
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>

*/