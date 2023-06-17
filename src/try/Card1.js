import React from 'react'
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Data from './Data';
function Card1(props) {
  return (
    <>
      <div className="mainSection">
        <div className="contentBox">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="btnBox">
            <div className="btn">
              <Link to="buycourse" className="readMore">{props.btn}</Link>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={props.imgsrc} alt="Home" style={{width:"100%"}}/>
        </div> 
      </div>
      <Divider sx={{ border:"4px solid black",fontStyle:"bold", width:"100%",height:"5px"}}/>
      <div className="container" style={{boxSizing:"border-box"}}>
        <h1>Our Courses</h1>



      <div style={{display:'flex', justifyContent:"space-between" ,gap:"20px",flexWrap:"wrap",width:"100%",boxSizing:"border-box",marginTop:"3em",marginBottom:"10vh"}}>
      {
        Data.map((data)=>{

          return(
          <Card sx={{ width:"30%" ,}}>
          <CardMedia
            sx={{ height: 300}}
            image={data.imgsrc}
            title={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.Stitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.desc}
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">buy Course</Button>
              <Button size="small">More Detials</Button>
            </CardActions>
          </Card>
          )
        })
      }       
       
        </div>
      </div>
    </>
  )
}

export default Card1
