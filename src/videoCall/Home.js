import { Button } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [roomID,setRoomID]=useState();
    const navigate=useNavigate();

    const handleJoin=()=>{
        navigate(`/room/${roomID}`)
    }

  return (
    <div className="container" style={{textAlign:"center"}}>
        <input type="text" placeholder='Enter Room ID' style={{marginTop:"5px",border:"2px solid black",width:"40%"}} value={roomID} onChange={(e)=>setRoomID(e.target.value)}/>
        <Button sx={{fontSize:"20px",color:'black',backgroundColor:"blue"}} onClick={handleJoin}>Join</Button>
        
    </div>
  )
}

export default Home
