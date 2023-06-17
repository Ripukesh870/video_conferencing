import React from 'react'
import homeImg from './img/homeImg.jpg'

import './css/homeAbout.css'
import Same from './Same';
function Home() {
  return (
    <Same
  title="Learning made easy"
  text="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita tenetur odio
            ab nam fugiat? Expedita adipisci nam illum optio,
            sunt neque labore eius impedit tenetur minus modi!
            Repudiandae, nostrum error"
    imgsrc={homeImg}
    btn="Read More"
    />
  )
}

export default Home
