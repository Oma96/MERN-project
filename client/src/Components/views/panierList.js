import React, { useEffect } from 'react'
import Panier from './panier'
import {useDispatch,useSelector} from "react-redux"
import { getAllHandler } from '../../redux/actions/prod-actions'

   export default function PanierList  () {
     const dispatch= useDispatch()
     useEffect(()=>{
     dispatch(getAllHandler())
     },[])
    
     const product = useSelector(state=>state.products.products)
  
     return (
      <div>
        
        <div className='panierListContainer'>
              {product.map((el,key)=>(
                <Panier el={el} key={el.id}/>))}    
            </div>
    </div>
  )
}
