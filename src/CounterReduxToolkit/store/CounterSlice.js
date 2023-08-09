import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : "counter",
    initialState:0,
    reducers:{
        DEC(state,action){ 
            console.log("DEC");
            console.log(state,"state");
            console.log(action.type,"action");
            console.log(action.payload,"action");
            return state-1;
        },
        RESET(state,action){ 
            console.log("RESET");
            console.log(state,"state");
            console.log(action.type,"action");
            console.log(action.payload,"action");
            return state-state;
        },
        INC(state,action){
            console.log("INC");
            console.log(state,"state");
            console.log(action.type,"action");
            console.log(action.payload,"action");
            return state+1;
        },
    }
})
export default counterSlice.reducer;
export const {DEC,RESET,INC}=counterSlice.actions;