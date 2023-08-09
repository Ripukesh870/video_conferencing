import React from 'react'
// import "./style.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { INC,DEC,RESET } from './store/CounterSlice';

function App6() {

  const dispatch=useDispatch();
  const data=useSelector((state)=>state.counter);

  const Decrease=()=>{
    dispatch(DEC());
  }
  const Reset=()=>{
    dispatch(RESET());
  }

  const Increase=()=>{
    dispatch(INC());
  }

  return (
    <>
        <div className="container"style={{width:"100vw",height:"70vh" }}>
            <div style={{marginTop:"15rem"}}>
                <h1>{data}</h1>
                <button className='btn' style={{margin:"7px"}} onClick={()=>Decrease()}><RemoveIcon/></button>
                <button className='btn' style={{margin:"7px"}} onClick={()=>Reset()}>reset</button>
                <button className='btn' style={{margin:"7px"}} onClick={()=>Increase()}><AddIcon/></button>
            </div>
        </div>
    </>
  )
}

export default App6
