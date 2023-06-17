import React from 'react'
import homeImg from '../comp/img/homeImg.jpg'
// import Divider from '@mui/material/Divider';
import '../comp/css/homeAbout.css'
import Card1 from './Card1';
import { Typography } from '@mui/material';


function Home() {
  
  return (
    <>
    <Typography component={"div"} mt={8}>
    <Card1
      title="Learning made easy"
      text="Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita tenetur odio
                ab nam fugiat? Expedita adip/isci nam illum optio,
                sunt neque labore eius impedit tenetur minus modi!
                Repudiandae, nostrum error"
        imgsrc={homeImg}
        btn="BUY COURSE"
        />
    </Typography>
    </>
  )
}

export default Home