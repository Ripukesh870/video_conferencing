import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost=createAsyncThunk("post/getPosts",
({id})=>{
    return fetch(`https://jsonplaceholder.typicode.com/postes/${id}`)
    .then(res => res.json())
})

const PostSlice=createSlice({
    name:"post",
    initialState:{
        loading:false,
        post:[],
        error:null
    },
    extraReducers:{
        [getPost.pending]:(state,action)=>{
            // console.log(state , "pending")
            state.loading=true;
        },
        [getPost.fulfilled]:(state,action)=>{
            console.log(action, "fullFill")
            state.loading=false;
            state.post=[action.payload];
        },
        [getPost.rejected]:(state,action)=>{
            console.log(action.payload)
            state.loading=false;
            state.error=action.payload;
        }
    }
})
export default PostSlice.reducer;