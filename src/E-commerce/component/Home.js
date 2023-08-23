import React from 'react'
import CardData from "./CardData";
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AddToCart } from './redux/cartSlice/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';



const Home = () => {
  const [cartData, setCartData] = useState(CardData)
  const dispatch=useDispatch();
  const send=(e)=>{
    // console.log(e);
    dispatch(AddToCart(e));
    toast.success("item added in your card ")
  }
  return (
    <section className='iteam_section mt-4 container'>
      <h2 className='px-4' style={{ fontWeight: 400 }}>Restorent in jehanabad Open now</h2>
      <div className='row mt-2 d-flex justify-content-around align-item-center'>
        {
          cartData.map((element, index) => {
            return (
              <>
                <Card style={{ width: '22rem', border: "none" }} className='hove mb-4'>
                  <Card.Img variant="top" className='cd' src={element.imgdata} />
                  <Card.Body>
                    <div className="card_body">
                      <div className='upper_data d-flex justify-content-between align-items-center'>
                        <h4 className='mt-2'>{element.dish}</h4>
                        <span>{element.rating}&nbsp;★</span>
                      </div>
                    </div>

                    <div className='lower_data d-flex justify-content-between align-items-center'>
                      <h5 className='mt-2'>{element.address}</h5>
                      <span>{element.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className='last_data d-flex justify-content-between align-items-center'>
                      <img src={element.arrimg} className='limg' alt="" />
                      <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant="outline-light" className='mt-2 mb-2' onClick={()=>send(element)}>Add To Cart</Button>
                      <img src={element.delimg} className='laimg' alt="" />

                    </div>
                  </Card.Body>
                </Card>

              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default Home
