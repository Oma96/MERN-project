import {ADD_TO_FAV,REMOVE_FROM_FAV} from "../action-types/cart-action-types"
import axios from "axios"


export const addFav=(_id)=>async(dispatch,getState)=>{

  const {data} = await axios.get (`http://localhost:5000/api/product/get/${_id}`)
   console.log(data)
  dispatch({
    type:ADD_TO_FAV,
    payload:{
      product:data.product._id,
      name: data.product.name,
      price: data.product.price,
      desc:data.product.desc,
      adress: data.product.adress,
      date: data.product.date,
      phone: data.product.phone
    }
})

localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}

export const removeFav=(_id)=> async (dispatch,getState)=>{
  
  dispatch({
    type: REMOVE_FROM_FAV,
    payload:_id
  })

  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
  




  
  
    
  

      
