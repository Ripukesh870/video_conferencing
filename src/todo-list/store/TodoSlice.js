import { createSlice } from "@reduxjs/toolkit";

const todoslice=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        AddToDo(state,action){
            if(action.payload==="")
            {
                return state;
            }
           state.push(action.payload);   
           console.log(state,"state");
           console.log(action.payload,"payload");
        },
        RemoveToDo(state,action){
            state.splice(action.payload,1);
        },
        ClearAll(state){
            return [];
        }
    }
})
// console.log(todoslice.actions)
export default todoslice.reducer;
export const {AddToDo,RemoveToDo,ClearAll} =todoslice.actions;