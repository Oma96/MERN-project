import React, { useEffect } from 'react'
import Product from './product'
import {useDispatch,useSelector} from "react-redux"
import { getAllHandler } from '../../../redux/actions/prod-actions'
import styled from 'styled-components'


const Container= styled.div`
margin-top:100px;
margin-bottom: 200px;
display: flex;
padding: 20px;
justify-content: center;
flex-wrap:wrap;
`

   export default function ProductList ({input}) {
     const dispatch= useDispatch()
     useEffect(()=>{
     dispatch(getAllHandler())
     },[])
    
     const product = useSelector(state=>state.products.products)
  
     return (
     
        
        <Container>
              {product
              .filter(el => el.name.toUpperCase().includes(input.toUpperCase()))
              .map((el,key)=>(
                <Product el={el} key={el._id} productID={el._id}/>))}    
            </Container>
   
  )
}