import React from 'react'

import '../comp/css/homeAbout.css'

import {Link} from 'react-router-dom'
import img from './img/aboutImg.jpg'

function About() {
  return (
    <>
    <div className="mainSection">
        <div className="contentBox">
          <h1>About</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sint ipsam voluptas obcaecati nostrum laudantium necessitatibus quod quisquam. Commodi, porro. Voluptatem sequi repellat vitae ad?</p>
          <div className="btnBox">
            <div className="btn">
              <Link to="buycourse" className="readMore">Read more</Link>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={img} alt="Home" style={{width:"100%"}}/>
        </div> 
      </div>
    </>
  )
}

export default About