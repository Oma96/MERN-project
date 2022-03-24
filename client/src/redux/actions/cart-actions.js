import { ADD } from "../action-types/cart-action-types"
import {axios} from "axios"

export const addToCart=()=> async(dispatch)=>{
    await axios
    .get("http://localhost:5000/api/product/all/:id") 
    .then((res)=>
    dispatch({
        type:ADD,
        payload: res.data
    }))

    .catch(err=>console.log(err))
}