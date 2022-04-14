import { ADD } from "../action-types/cart-action-types"
import axios from "axios"



export const addToCart=(id)=> async(dispatch,getState)=>{
    
    await axios
    .get(`http://localhost:5000/api/product/get/${id}`)
    .then((res)=>
      dispatch({
        type:ADD,
        payload:res.data
        
    }))
  .catch(err=>console.log(err))


localStorage.setItem( 'cart',JSON.stringify(getState().cart.cart))
}