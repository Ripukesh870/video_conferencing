import React, { useEffect, useState } from 'react'
import "./css/cardStyle.css"
import { Delete, ShoppingCart,Add, Remove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart ,RemoveToCart,RemoveSingleItem,emptyCart} from './redux/cartSlice/cartSlice';
import toast from 'react-hot-toast';

const CardDetials = () => {
  const dispatch=useDispatch();
  const carts=useSelector((state)=>state.allCart)
  const data=carts.cart;
  const [totalprice,setTotal]=useState(0)
  const [totalQuantity,setQuentaty]=useState(0);
  
  const handleIncrement=(e)=>{
    dispatch(AddToCart(e))

  }
  const handleDelete=(e)=>{
    dispatch(RemoveToCart(e.id));
    toast.success("Item Removed from Your Cart")

  }

  const handleDecrement=(e)=>{
    dispatch(RemoveSingleItem(e));

  }
  const handleEmpty=()=>{
    dispatch(emptyCart());
    toast.success("your cart is Empty ")

  }

  const total=()=>{
    let totalprice=0;
    data.map((ele,ind)=>{
      totalprice=ele.price*ele.qnty+totalprice
    })
    setTotal(totalprice)
  }

  const Quentaty=()=>{
    let totalQuantity=0;
    data.map((ele,ind)=>{
      totalQuantity=ele.qnty+totalQuantity
    })
    setQuentaty(totalQuantity)
  }

  useEffect(()=>{
      total();
  },[total])

  useEffect(()=>{
    Quentaty();
},[Quentaty])
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetials">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className='text-white'>Cart Calculation({data.length>0?`${data.length}`:""})</h5>
                {
                  data.length > 0 ? <button className='btn btn-danger mt-0 btn-sm' onClick={()=>handleEmpty()}><Delete /> empty cart</button> : ""
                }
              </div>
            </div>
            <div className="card-body p-0">
              {
                data.length === 0 ? <table className='table cart-table mb-0'>
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className='cart-empty'>
                          <ShoppingCart style={{ fontSize: "5rem", color: "light" }} />
                          <p>your cart is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table> :
                  <table className='table cart-table mb-0 table-responsive-sm'>
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th className='text-right'> <span is='amount' className='amount'>Total Amount</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((data, index) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <button className='prdct-delete' onClick={()=>handleDelete(data)}><Delete /></button>
                                </td>
                                <td>
                                  <div className='product-img'>
                                    <img src={data.imgdata} alt="" />
                                  </div>
                                </td>
                                <td>
                                  <div className='product-name'>
                                    <p>{data.dish}</p>
                                  </div>
                                </td>
                                <td>
                                  {data.price}
                                </td>
                                <td>
                                  <div className="prdct-qty-container">
                                    <button className='prdct-qty-btn' type='button' onClick={data.qnty<=1 ? ()=>handleDelete(data) :()=>handleDecrement(data)}>
                                      <Remove/>
                                    </button>
                                    <input type="text" className='qty-input-box' value={data.qnty} disabled />
                                    <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(data)}>
                                      <Add/>
                                    </button>
                                  </div>
                                </td>
                                <td className='text-right'>
                                  {data.qnty*data.price}
                                </td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={4}>&nbsp;</th>
                        <th>Item in cart <span className='ml-2 mr-2'>:</span> <span className='text-danger'>{totalQuantity}</span></th>
                        <th className='text-right'>Total Price <span className='ml-2 mr-2'>:</span> <span className='text-danger'>{totalprice}</span></th>
                      </tr>
                    </tfoot>
                  </table>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDetials
