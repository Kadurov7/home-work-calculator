import {combineReducers, createStore} from "redux";
import { authSlice } from "./auth/authSlice";
import { calculatorSlice } from "./calculator/calculatorSlice";

const rootReducer = combineReducers({
   [calculatorSlice.name]:calculatorSlice.reducer,
   [authSlice.name]: authSlice.reducer   
})
 export const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log("STORE CHANGED", store.getState());
})