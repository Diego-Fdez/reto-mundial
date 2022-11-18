import { types } from "../types/types";


export const login = (name) => ({
    type: types.login,
    payload: {
        name
    }
})

export const logout = () => ({
    type: types.logout
})


export const register = (email,password,name) => {

    return{
       type: types.register,
       payload: {
           email,
           password,
           name
       }
    }
}