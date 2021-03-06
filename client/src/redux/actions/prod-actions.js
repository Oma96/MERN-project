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

export const addProduct=(product)=> async (dispatch)=>{
  await axios
  .post("http://localhost:5000/api/product/add",product)
  .then(res=>dispatch(getAllHandler()))
  .catch(err=>console.log(err))
}

export const deleteProduct=(_id)=> async (dispatch)=>{
  await axios
  .delete(`http://localhost:5000/api/product/delete/${_id}`)
  .then(res=> dispatch(getAllHandler()))
  .catch(err=>console.log(err))
}

export const EditProduct=(_id,editedProduct)=> async (dispatch)=>{
axios.put(`http://localhost:5000/api/product/edit/${_id}`,editedProduct)
.then(res=> dispatch(getAllHandler()))
.catch(err=>console.log(err))
}