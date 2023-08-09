import React from 'react'
import { useState } from 'react'
import "./style.css"
import { Button } from '@mui/material';

function App5() {
    const [value,setvalue]=useState("");
  return (
    <div className='App' style={{textAlign:"center"}}>
        <div className="mydiv">
            <span>Search</span>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}/>
            <Button sx={{height:"60px",fontSize:"20px"}}>send</Button>
        </div>
    </div>
  )
}

export default App5
