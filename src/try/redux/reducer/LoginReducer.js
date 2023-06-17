const initialState={
    users:[
        {
            name:"",
            email:"",
            password:"",
            number:"",
    
        }
    ]
}

const LoginReducer = (state=initialState,action)=>{
    switch(action.type){
        case "LOGIN" :
            const {data}=action.payload;

            return{
                ...state,
                users:[
                    ...state.users,
                    {
                        data:data
                    }
                ]
            }
        case "LOGOUT" : return 1;
        default : return initialState
    }
}
export default LoginReducer