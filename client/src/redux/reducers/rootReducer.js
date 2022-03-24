import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./prodReducer";
import {cartReducer} from "./cartReducer"


export const rootReducer=combineReducers({
    auth :authReducer,
    products:productReducer,
    cart: cartReducer
})