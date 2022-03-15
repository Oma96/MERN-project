import React, { useEffect } from 'react'
import Panier from './panier'
import {useDispatch,useSelector} from "react-redux"
import { getAllHandler } from '../../redux/actions/prod-actions'

   export default function PanierList  () {
     const dispatch= useDispatch()
     useEffect(()=>{
     dispatch(getAllHandler())
     },[])
     const product= useSelector(state=>state.products)
  
     return (
      <div>
        
        <div className='panierListContainer'>
            {product.map((el)=>(
                <Panier el={el}/>
            ))
            }  
            </div>
    </div>
  )
}
