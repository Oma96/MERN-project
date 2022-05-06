import { ADD_TO_FAV,REMOVE_FROM_FAV } from "../action-types/cart-action-types"


export const cartReducer=(state={cartItems:[]},action)=>{
switch (action.type) {
    case ADD_TO_FAV:
      
     const item= action.payload;
     const existItem= state.cartItems.find((x)=>x.product===item.product)   
     if (existItem){
         return{
             ...state,
             cartItems:state.cartItems.map((x)=>
             x.product===existItem.product?item:x)
         }
     }
     else{
         return {
             ...state,
             cartItems:[...state.cartItems,item]
            }
            }
     case REMOVE_FROM_FAV:
       return{
           ...state,
           cartItems: state.cartItems.filter((x)=>x.product!==action.payload)
       }
    default: return state
    

}
}