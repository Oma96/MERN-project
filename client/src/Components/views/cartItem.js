import React from 'react'

function CartItem({item}) {
  return (
    <div>
     {console.log(item)}
      <h2>{item.type}</h2>
      <h2>{item.price}</h2>
      </div>
  )
}

export default CartItem