import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import './addProduct.css'
import { addProduct } from '../../redux/actions/prod-actions'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Container= styled.div`
margin-top:100px;
margin-bottom: 200px;
max-width:500px;
margin-left:450px
`



function AddProduct() {
  const navigate= useNavigate()
  const [name,setName]= useState('')
const [desc,setDesc]= useState('')
const [price,setPrice]= useState('')
const [adress,setAdress]= useState('')
const [date,setDate]=useState('')
const [phone,SetPhone]= useState('')


const addNameHandler=(e)=>{
setName(e.target.value)
}
const addDescHandler=(e)=>{
  setDesc(e.target.value)
}
const addPriceHandler=(e)=>{
  setPrice(e.target.value)
}
const addAdressHandler=(e)=>{
  setAdress(e.target.value)
}
const  addDateHandler=(e)=>{
  setDate(e.target.value)
}
const addPhoneHandler=(e)=>{
  SetPhone(e.target.value)
}
const dispatch= useDispatch()
const addHandler=()=>{
 dispatch(addProduct({name,desc,price,adress,date,phone}))

 setName('')
 setDesc('')
 setPrice('')
 setAdress('')
 setDate('')
 SetPhone('')
 navigate("/prodAdmin")
}
  return (
    <div>
    
    <Container>
    <h4 className='text'>Name:</h4>
    <input className='input'
    placeholder="Add the name"
    value={name}
    onChange={addNameHandler}/>

   <h4 className='text'>Description:</h4>
    <input className='input'
    placeholder="Add a description"
    value={desc}
    onChange={addDescHandler}/>

   <h4 className='text'>Price:</h4>
    <input className='input'
    placeholder="Add the price"
    value={price}
    onChange={addPriceHandler}/>


   <h4 className='text'>Adress:</h4>
    <input className='input'
    placeholder="Add the adress"
    value={adress}
    onChange={addAdressHandler}/>

<h4 className='text'>Date:</h4>
    <input className='input'
    placeholder="Add the date and time"
    value={date}
    onChange={addDateHandler}/>

<h4 className='text'>Phone:</h4>
    <input className='input'
    placeholder="Add the phone"
    value={phone}
    onChange={addPhoneHandler}/>

<Button variant="success" onClick={addHandler}>Save</Button>
   </Container>
    </div>
  )
}

export default AddProduct