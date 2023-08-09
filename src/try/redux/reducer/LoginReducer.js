// const initialState={
//     users:[
//         {
//             name:"",
//             email:"",
//             password:"",
//             number:"",
    
//         }
//     ]
// }
const initialstate=1;


// const LoginReducer = (state=initialstate,action)=>{
//     switch(action.type){
//         case "LOGIN" :
//             const {data}=action.payload;

//             return{
//                 ...state,
//                 users:[
//                     ...state.users,
//                     {
//                         data:data
//                     }
//                 ]
//             }
//         case "LOGOUT" : return 1;
//         default : return initialstate
//     }
// }
// export default LoginReducer


const LoginReducer =(state=initialstate,action)=>{
    switch(action.type){
        case "LOGIN" : return 0;
        case "LOGOUT" : return 1;

        default : return state
    }
}

export default LoginReducer;