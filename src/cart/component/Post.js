import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPost } from '../redux/features/PostSlice';
const Post = () => {
    const [id,setId]=useState();
    const nav=useNavigate();
    const dispatch=useDispatch();

    const handleFetchData=(e)=>{
        console.log("Ripukesh")
        e.preventDefault();
        if(!id)
        {
            alert("please provide Post Id : ");
        }
        else {
            console.log(id)
            dispatch(getPost({id}));
            setId("");
        }
    }
    return (
        <div className='row mt-4 d-flex align-item-center justify-content-center'>
            <div className="col-md-8">
                <form action="">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Search by ID:</label>
                        <input 
                            type="number" 
                            onChange={(e)=>setId(e.target.value)}
                            className="form-control" 
                            id="exampleInputEmail1"
                            aria-describedby='emailHelp'
                        />
                    </div> 
                    <button onClick={handleFetchData} type='submit' className='btn btn-primary'>Fetch Post</button>
                    <button onClick={()=>nav("/createpost")} type='button' className='btn btn-primary ms-4'>create Post</button>

                </form>
            </div>
        </div>
    )
}

export default Post
