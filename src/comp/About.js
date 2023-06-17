import React from 'react'
import aboutImg from './img/aboutImg.jpg'
import './css/homeAbout.css'
import Same from './Same'
function About() {
  return (
    <>
      <Same
         title="Know More about"
  text="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita tenetur odio
            ab nam fugiat? Expedita adipisci nam illum optio,
            sunt neque labore eius impedit tenetur minus modi!
            Repudiandae, nostrum error"
    imgsrc={aboutImg}
    btn="Read More"
      />
    </>
  )
}

export default About
