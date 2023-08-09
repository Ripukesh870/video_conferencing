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

const SingupReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SINGUP" : return 

        default : return state;
    }
}