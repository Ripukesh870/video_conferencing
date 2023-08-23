import React, { useEffect, useState } from 'react'
import { AddToDo,RemoveToDo,ClearAll } from './store/TodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from "@mui/icons-material/Delete";


// to get the data from localstorage 
const getLocalItems=()=>{
  let list = localStorage.getItems("data");
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem("list"));
  }
  else {
    return [];
  }
}


function ToDo() {

    const [val,setval]=useState("");
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.todo)
    // console.log(data)
    const handleClick=()=>{
        console.log(val);
        dispatch(AddToDo(val));
        setval("");
    }
    const remove=(value)=>{
      console.log(value);
      dispatch(RemoveToDo(value));
    }
    const clear=()=>{
      dispatch(ClearAll());
    }




    // add data to localStorage
    useEffect(()=>{
        localStorage.dispatch(AddToDo('lists',JSON.stringify(data)));
    },[data])




  return (
    <div className='container' style={{width:"98vw",height:"96vh",boxSizing:""}}>

      <div style={{width:"80vw",margin:"4em auto",marginTop:"5rem",textAlign:"center"}}>
        <h1 style={{margin:"10px 40%"}}>TO-DO-List</h1>


        <div style={{textAlign:"center"}}>
            <input type="text" 
              style={{fontSize:"20px",border:"2px solid black",width:"40%",borderRadius:"20px",padding:"2px 1em"}}
              onChange={(e)=>setval(e.target.value)} 
              value={val}
            />
            <button
                style={{margin:"5px",padding:"2px 1em",background:"gray",borderRadius:"20px",fontSize:"20px"}} 
                onClick={()=>handleClick()}
            >
              add
            </button>
        </div>

        <ul style={{textAlign:"center",margin:"35px auto",boxSizing:"border-box",listStyle:"none"}}>
            {/* <ul style={{border:"2px solid red",}}> */}
               {
                  data.map((data,index)=>{
                    return <div style={{width:"45%",display:"flex",borderBottom:"2px solid blue",margin:"0px auto"}}>
                    
                    <li key={index} style={{fontSize:"22px",width:"80%"}}> {data} </li>
                    <button className='btn' onClick={(key)=>remove(index)}>
                        <DeleteIcon sx={{color:"red",fontSize:"22px"}}/>
                    </button>
                    </div> 
                  })
                }
            {/* </ul> */}
            <hr style={{border:"2px solid black",marginTop:"5rem"}}/>
            <button className='btn' style={{margin:"0px 45%",background:"red",color:"whitesmoke",textTransform:"uppercase"}} onClick={()=>clear()}> clear all </button>
        </ul>
      </div>
    </div>
  )
}

export default ToDo;
