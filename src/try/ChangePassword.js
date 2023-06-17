import React,{useState} from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from 'react-router-dom';
function ChangePassword() {
    const nav=useNavigate();
    const [user,setUser]=useState({
        new_password:"",
        con_password:""
    });

    const [new_password_err,set_new_password_err]=useState(false);
    const [con_password_err,set_con_password_err]=useState(false);
    

    const handle=(e)=>{
        const name=e.target.name;
        const val=e.target.value;
    if(name === 'new_password'){
        if(val.length<8){
            set_new_password_err(true)
        } else {
            set_new_password_err(false)

        }
    }


    if(name === 'con_password'){
        if(name === 'con_password'){
            set_con_password_err(true);
        } else {
            set_con_password_err(false)
        }
    }

    setUser({...user,[name]:val});

    }

    // console.log(user);
    const changePassword=()=>{
        if(user.new_password === user.con_password && user.new_password.length>=8) 
        {
            
            nav('/login');
        }
    }

  return (
    <Box sx={{boxSizing:"border-box",textAlign:"center"}}>
        <Typography fontSize={30} marginTop={'20px'}>
            Change Password
        </Typography> 
       <Box marginTop={'3.5%'}>
            <Typography>enter atrong password (  DipuKumar123@@@  )</Typography>
            <TextField type='password' label="Enter new Password" variant="outlined" sx={{width:"30%",marginTop:"1.3em", fontSize:"25px"}} value={user.new_password} onChange={handle} name='new_password'/> <br />
            {
                new_password_err && (
                    <span><ErrorIcon sx={{color:'red',marginTop:"5px",paddingTop:'5px'}}/> Wrong password</span>
                )   
            }
            <br />
            <TextField type='password' label="Conform Password" variant="outlined" sx={{width:"30%",marginTop:"1.7em"}} value={user.con_password} onChange={handle} name='con_password' /> <br />
            {
                con_password_err && (
                    <span> <ErrorIcon sx={{color:'red',marginTop:"5px",paddingTop:'5px'}}/> password not match</span>
                )
            }
            
            <br />
            <Button sx={{margin:"16px auto",padding:"6px 20px" ,border:"1px solid red", backgroundColor:"blue", color:"white",borderRadius:"10px"}} onClick={changePassword}>Change Password</Button>
        </Box>
    </Box>
  )
}

export default ChangePassword
