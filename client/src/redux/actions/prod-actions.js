import axios from "axios"
import { GET_ALL } from "../action-types/prod-action-types"

export const getAllHandler=()=> async (dispatch)=>{
    await axios
    
    .get("http://localhost:5000/api/product/all")
    .then((res)=>
      dispatch({
        type:GET_ALL,
        payload:res.data
    }))
  .catch(err=>console.log(err))
}