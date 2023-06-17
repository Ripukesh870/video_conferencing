import React from 'react'
import { NavLink } from 'react-router-dom';
function Same(props) {
  return (
<>
      <div className="mainSection">
        <div className="contentBox">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to="readMore" className="readMore">{props.btn}</NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={props.imgsrc} alt="Home" style={{width:"100%"}}/>
        </div>
      </div>
    </>
  )
}

export default Same
