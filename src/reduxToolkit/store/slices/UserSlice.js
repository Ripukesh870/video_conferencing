import {createSlice} from "@reduxjs/toolkit"
import { clearAllUsers } from "../Actions";

const userSlice=createSlice({
    name : "user",
    initialState:[],
    reducers:{
        addUser(state,action) {
            state.push(action.payload);
            console.log(action.payload ,"action");
            console.log(state,"state");
        },
        removeUser(state,action) {
            console.log( action.payload);
            console.log(state,"state")
            state.splice(action.payload,1);
        },
        // clearAllUsers(state,action) {
        //     // return state = []; //not delete asign new array
        //     return [];
        // },
    },
    
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
            return [];
        });
    }

});
// console.log(userSlice.actions,'action');

export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions;
