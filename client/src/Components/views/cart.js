import React from 'react'
import CartItem from './cartItem'
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

export default function Cart() {

  const cart= useSelector((state)=>state.cart.cart)
  return (
    <div className="cartscreen">
      <h2>Shopping Cart</h2>
      {cart.length ===0 ?(<>
        <h1>Your cart is empty</h1> <Link to="/Products">Go Back</Link></>
      ):(
        cart.map((item)=>(
          <CartItem item={item}/>
        ))
      )}
        </div>
  )
}
