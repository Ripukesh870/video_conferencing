export const addData = (data) => {
    return {
        type: "LOGIN",
        playload: {
            data: data
        }
    }
}


// export const login = () => {
//     return {
//         type: "LOGIN"
//     }
// }

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

