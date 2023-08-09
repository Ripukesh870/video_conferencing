import React, { useState } from 'react';
import './css/login.css';
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
// import { login } from './redux/action/Action';
import { addData } from './redux/action/Action';
import { useSelector } from 'react-redux';
function Login() {
const data={
    name:"Ripukesh870",
    password:"Ripu870@@@"
}
const [user,setuser]=useState("");
const [pass,setpass]=useState("");

// const [Login_data,setLogin_data]=useState({
//   name:"",
//   password:""
// })


const Navigate= useNavigate();
const Dispatch = useDispatch();
const Data=useSelector((state)=>state.LoginReducer);
console.log(Data);


const hendleUser=(e)=>{
  console.log(e.target.value);
  setuser(e.target.value);
}

const hendlePass=(e)=> 
{
    console.log(e.target.value);
    setpass(e.target.value)
}


const handleLogin=()=>{
  if(data.name===user && data.password===pass)
  {
    Dispatch(addData());
    console.log("open new page");
    Navigate('/');
    console.log(Data);
  }
  else
  {
    alert("not match username or password");
  }
}

const forget=()=>{
  Navigate('/forget');
  
}
  return (
    <section className='Login' >
      <form action="">
        <h1 className='heading'><u> login </u></h1>
        
        <div className='label'>
        <label htmlFor="User_name">User_name</label><br />
        <input type="text" placeholder='Enter number / Email id' onChange={hendleUser}/><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" placeholder='Password' onChange={hendlePass}/><br />
        <button className='btn' onClick={handleLogin}><b>login</b></button>
        <button className='btn'><b><Link to="/singup" className='reg' style={{color:"black" , textDecoration:"none"}}> Regester</Link></b></button><br />
        <Link to="/forget" className='for'>Forget password</Link>
        </div>
      </form>
    </section>
  )
}

export default Login