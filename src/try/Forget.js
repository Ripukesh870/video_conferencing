import { Box, TextField, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Forget() {
    const navidate = useNavigate();
    const min = 1;
    const max = 20;

    const [sum, setSum] = useState("");
    
    const [random1,setRandom1]=useState("")
    const [random2,setRandom2]=useState("")


    const number = () => {
        setRandom1(Math.floor(Math.random() * (max - min + 1)) + min);
        setRandom2(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    useEffect(() => {
        number()
    }, [])
    const handleChange = (e) => {


        console.log(e);
        setSum(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Ripukesh kumar");
        console.log(sum);
        console.log(random1,random2);
        if ((random1 + random2 )== sum) {
            
            console.log("data",sum);
            console.log("correct");

            navidate('/forget/changepassword');
        } else {
            alert("please check email or number and captach")
            number();
            setSum("");

            // navidate('/forget/changepassword');
            // console.log("data",sum)
            console.log("else block",sum);

        }

    }
    return (
        <Box sx={{ boxSizing: "border-box", textAlign: "center" }}>
            <Typography component={'h1'} fontSize={'3em'}>
                Forget Password
            </Typography>
            <Box sx={{ boxSizing: "border-box", width: '60%', border: '2px solid red', margin: "2em auto" }}>


                <Typography component={'p'} fontSize={'1.2em'}>
                    To reset your password, please enter your Website.com username.
                    Website.com will send the password reset instructions to the email address for this account.
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                    <TextField id="outlined-basic" label="Enter Email or mobile no" variant="standard" sx={{ width: "40%", marginTop: "1.7em" }} />
                    <Box sx={{ margin: "2em" }}>
                        <button style={{ marginRight: "1em", width: "40px", height: "30px" }}>{random1}</button>
                        <span>+</span>
                        <button style={{ marginLeft: "1em", marginRight: "1em", width: "40px", height: "30px" }}>{random2}</button>
                        <span>=</span>
                        <button style={{ marginLeft: "1em", marginRight: "1em", width: "4.5m", height: "30px" }} > <input type="number" style={{ height: "27px", width: "4em" }} value={sum} onChange={handleChange} /></button>
                    </Box>


                    <Button sx={{ fontSize: "1.2em", padding: "5px 15px", color: 'white', backgroundColor: "blue" }} onClick={handleSubmit}>Submit</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Forget
