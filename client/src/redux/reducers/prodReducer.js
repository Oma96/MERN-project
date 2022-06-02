import { GET_ALL } from "../action-types/prod-action-types"


const initialState={
    products:[],
}

export const productReducer= (state=initialState, {type, payload })=>{
    switch (type) {
        case GET_ALL:
             return{
            ...state,
            products:payload.products
            }
            
           
    
        default:
            return state
          
        }
      }