import React from 'react'
import CartItem from './cartItem'


import {useSelector} from "react-redux"


export default function Cart() {

  const cart= useSelector((state)=>state.cart.cart)
 
  
  
  // const dispatch= useDispatch()
  // useEffect(()=>{
    
  //      dispatch(addToCart(id))
    
  // },[])


  return (
    <div className="cartscreen">
      <h2>Shopping Cart</h2>
      
        {cart.map((item)=>(
          <CartItem item={item} key={item.id}/>
        ))}
      
        </div>
  )
}
