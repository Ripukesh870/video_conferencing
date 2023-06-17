import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "./css/Validation.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./redux/action/Action";
function Singup() {

  const dispatch = useDispatch();
  const list = useSelector((state) => state.LoginReducer)


  const [user, setUser] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    Cpassword: "",
    number: "",
  });




  const nav = useNavigate();
  const [f_name_err, set_f_name_err] = useState(false);
  const [l_name_err, set_l_name_err] = useState(false);
  const [password_err, set_password_err] = useState(false);
  const [Cpassword_err, set_Cpassword_err] = useState(false);
  const [number_err, set_number_err] = useState(false);


  const handle = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    console.log(name);
    if (name === "f_name") {
      if (val.length < 3) {
        console.log("Error");
        set_f_name_err(true);
      } else {
        set_f_name_err(false);
      }
    }

    if (name === "l_name") {
      if (val.length < 2) {
        console.log("Error");
        set_l_name_err(true);
      } else {
        set_l_name_err(false);
      }
    }


    if (name === "password") {
      if (val.length < 4) {
        // console.log("Error")
        set_password_err(true);
      } else {
        set_password_err(false);
      }
    }


    if (name === "Cpassword") {
      if (val.length < 4) {
        // console.log("Error");
        set_Cpassword_err(true);
      } else {
        set_Cpassword_err(false);
      }
    }


    if (name === "number") {
      if (val.length < 10) {
        // console.log("Error");
        set_number_err(true);
      } else if (val.length > 10) {
        set_number_err(true);
      } else {
        set_number_err(false);
      }
    }

    setUser({ ...user, [name]: val });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.password === user.Cpassword) {
      dispatch(addData(user))
      console.log(list);

      nav("/");
    } else {
      alert("password not match");
    }
  };


  return (
    <div className="validation">
      <form className="form" onSubmit={Submit} >
        <label className="label">First Name</label> <br />
        <input
          className="input"
          type="text"
          name="f_name"
          placeholder="Enter first name"
          value={user.f_name}
          onChange={handle}
        />{" "}
        <br />
        {f_name_err && (
          <span className="span">
            <ErrorIcon /> first name not valid
          </span>
        )}
        <br />
        <label className="label">Last Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="l_name"
          placeholder="Enter last name"
          value={user.l_name}
          onChange={handle}
        />
        <br />
        {l_name_err && (
          <span className="span">
            <ErrorIcon /> last name not valid
          </span>
        )}
        <br />
        <label className="label">Email id :-</label>
        <br />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="enter your email id"
          value={user.email}
          onChange={handle}
        />
        <br /> <br />
        <label className="label">Password</label>
        <br />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="enter your password"
          value={user.password}
          onChange={handle}
        />
        <br />
        {password_err && (
          <span className="span">
            {" "}
            <ErrorIcon /> password not valid
          </span>
        )}
        <br />
        <label className="label">Conform Password</label>
        <br />
        <input
          className="input"
          type="password"
          name="Cpassword"
          placeholder="enter conform password"
          value={user.Cpassword}
          onChange={handle}
        />
        <br />
        {Cpassword_err && (
          <span className="span">
            <ErrorIcon /> password not valid
          </span>
        )}
        <br />
        <label className="label">Phone Number</label> <br />
        <input
          className="input"
          type="number"
          name="number"
          placeholder="enter your number"
          value={user.number}
          onChange={handle}
        />
        <br />
        {number_err && (
          <span className="span">
            <ErrorIcon /> number not valid
          </span>
        )}
        <br />
        <button className="button" type="submit">
          Regester
        </button>
        <button className="button">
          <b>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              login
            </Link>
          </b>
        </button>
      </form>
    </div>
  );
}
export default Singup;


























// const [error,setError]=useState({
//   f_name_err:false,
//   l_name_err:false,
//   email_err:false,
//   password_err:false,
//   Cpassword_err:false,
//   number_err:false
// })

// import React, { useState } from 'react'
// function Validation() {
//     const [user,setUser]=useState("");
//     const [password,setpassword]=useState("");
//     const [userErr,setUserErr]=useState(false);
//     const [passErr,setPassErr]=useState(false);
//     const submit=(e)=>{
//         e.preventDefault();
//         console.log(user,password)
//         if(user.length<3 || password.length<4){
//           setUserErr(true)
//           setPassErr(true)
//         } else {
//           console .log("login succsessfull");
//           setUserErr(false);
//           setPassErr(false);
//         }
//     }
//     const userhandler=(e)=>{
//         let item=e.target.value;
//         if(item.length<3){
//             setUserErr(true)
//         }
//         else{
//           setUserErr(false)
//         }
//         setUser(item)
//     }
//     function passwordhandle(e){
//       let item=e.target.value;
//       if(item.length<=3){
//         console.log("Password not valid")
//         setPassErr(true)
//       }
//       else{
//         setPassErr(false)

//       }
//       setpassword(item);
//     }
//   return (
//     <div className="container">
//       <h1>login</h1>
//       <form onSubmit={submit}>
//         <input type="text" placeholder='Enter user id 'value={user} onChange={userhandler}/> <br />
//        { userErr && <span>username not valid</span>}
//         <br />
//         <input type="text" placeholder='Enter user password' val onChange={passwordhandle}/> <br />
//         {passErr && <span>Password not valid</span>}
//         <br />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   )
// }
// export default Validation




