import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    email:"",
    password:"",
    isAuthorized: false,
}


export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state, action){
          state.email = action.email;
          state.password = action.password;
          if(state.email.includes("@") && state.password.length > 4) {
            state.isAuthorized = true;
          }
        },
        logout(state, action){
          return initialState;
        }
    }
})


export const authActions = authSlice.actions