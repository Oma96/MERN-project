import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./prodReducer";


export const rootReducer=combineReducers({
    auth:authReducer,
    products:productReducer
})