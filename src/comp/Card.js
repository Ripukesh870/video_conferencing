import React from 'react'
// import homeImg from "./img/homeImg.jpg"
import { NavLink } from 'react-router-dom'
function Card(props) {
  return (
    <>
        <div className="card">
          <h2>{props.title1}</h2>
          <div className='serviceimage'>
            <img src={props.imgSourse} alt="Service1" className='serviceImg'/>
          </div>
          <p>{props.desc1}</p>
           <div className="btnBox">
            <div className="btn">
              <NavLink to="/Startlearning" className="readMore">{props.btnService}</NavLink>
            </div>
          </div>
        </div>
       
    </>
  )
}

export default Card
