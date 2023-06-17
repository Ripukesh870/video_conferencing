import React from 'react'

import './css/Service.css';
import Card from './Card';
import Data from './Data';
function Service() {
  return (
    <>
      <h1>service</h1>
      <div className="services">
        {
          Data.map((value)=>{
            return(
              <Card
                title1={value.Stitle}
                imgSourse={value.imgsrc}
                desc1={value.desc}
                btnService={value.btnService}
              />
            )
          })
        }
        
      </div>
      
    </>
  )
}

export default Service
