import { Avatar, Button } from "@mui/material";
import React from 'react';
import logo from "./img/google.svg";
import SearchIcon from "@mui/icons-material/Search";
import { ImageSearch, Mic, Facebook,Twitter,Instagram,LinkedIn,YouTube,WhatsApp,VideoChat, Add, GitHub} from "@mui/icons-material";

function Search() {
  const handleGmail=()=>{

  }

  return (
    <>
        <div className="" style={{border:"2px solid red",width:"100vw",height:"100vh",boxSizing:"border-box"}}>
            <div className="nav"style={{textAlign:"center",display:"inline-block" ,float:"right",position:"relative"}}>
                    <Button onClick={()=>handleGmail()}>Gmail</Button>
                    <Button>Image</Button>
                    <Button>Apps</Button>
                    <Button><Avatar /> </Button>
            </div>
            <div style={{marginTop:"12%",boxSizing:"border-box"}}>
                <div className="logo"style={{ width:"500px", height:"200px",position:"relative",alignItems:"center",margin:"0 auto",top:"-100px"}}>
                    <img src={logo} alt="google.logo" width="500px" style={{border:"none"}}/>
                </div>
                <div className="search" style={{border:"2px solid blue",padding:"0 12px",width:"40%",position:"relative",margin:"auto",top:"-40px",borderRadius:"20px"}}>
                    <SearchIcon sx={{paddingBottom:"3px",fontSize:"30px",color:"blue",margin:"0 3px"}} />
                    <input  type="text" placeholder="Search Google to type a URL" style={{width:"82%",fontSize:"22px",border:"2px solid white",outline:"none"}} />
                    <Mic sx={{fontSize:"32px",paddingBottom:"3px",color:"blue",margin:"0 3px"}}/>
                    <ImageSearch sx={{fontSize:"32px",paddingBottom:"6px",color:"blue"}}/>
                </div>
                <div className="icons" style={{display:"flex",width:"45%",margin:"auto",flexWrap:"wrap",paddingLeft:"30px"}}>
                    <div style={{margin:"1.3em"}}><Facebook sx={{fontSize:"4.5em",borderRadius:"80px",backgroundColor:"blue",color:"white"}}/> <h6>Facebook</h6> </div>
                    <div style={{margin:"1.3em"}}><Twitter  sx={{fontSize:"4.5em",color:"blue",borderRadius:"70px",background:"black"}}/> <h6>Twitter</h6> </div>
                    <div style={{margin:"1.3em"}}><Instagram sx={{fontSize:"4.5em",color:"orangered",borderRadius:"70px",background:"black"}}/><h6>Instagram</h6></div>
                    <div style={{margin:"1.3em"}}><LinkedIn sx={{fontSize:"4.5em",color:"blue",borderRadius:"70px",background:"white"}}/><h6>LinkedIn</h6></div>
                    <div style={{margin:"1.3em"}}><YouTube sx={{fontSize:"4.5em",color:"red",borderRadius:"70px",background:"black"}} /><h6>YouTube</h6></div>
                    <div style={{margin:"1.3em"}}><WhatsApp sx={{fontSize:"4.5em",color:"white",borderRadius:"70px",background:"green"}} /><h6>WhatsApp</h6></div>
                    <div style={{margin:"1.3em"}}><VideoChat sx={{fontSize:"4.5em",color:"blue",borderRadius:"70px",background:"white"}} /><h6>VideoChat</h6></div>
                    <div style={{margin:"1.3em"}}><GitHub  sx={{fontSize:"4.5em",color:"black",borderRadius:"70px",background:"white"}}/><h6>GItHub</h6></div>
                    <div style={{margin:"1.3em"}}><Add sx={{fontSize:"4.5em",color:"white",borderRadius:"70px",background:"black"}} /><h6>Add shortCuts</h6></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Search
