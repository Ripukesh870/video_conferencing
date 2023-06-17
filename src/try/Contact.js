import React from 'react'
import "../comp/css/contact.css"
import { NavLink } from 'react-router-dom'
function Contact() {
  return (
    <>
      <h1>contact us</h1>
      <form className="contact">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter your name'/>
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder='Enter your email'/>
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='Enter password'/>
        </div>
        <div>
          <label htmlFor="number">Mobilr_no</label>
          <input type="mobile" placeholder='Enter Mobile no'/>
        </div>
        <div className="btnBox">
            <div className="btn">
              <NavLink to="readMore" className="readMore">Sabmit Detials</NavLink>
            </div>
          </div>
      </form>
    </>
  )
}

export default Contact
