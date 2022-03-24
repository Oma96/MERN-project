import { ADD } from "../action-types/cart-action-types"

const initialState={
    cart:[],
}


export const cartReducer=(state=initialState,action)=>{
switch (action.type) {
    case ADD:
        const item= action.payload
        const exist= state.cart.find((x)=>x._id===item._id)
        if (exist){
        return state.cart.map((x)=>
        x._id===item._id ? item : x
        )}
        else{
        return{
            ...state, 
            cart: [...state.cart,item]
        }}
        
        

    default: return state
        
}
}