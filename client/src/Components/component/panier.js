import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { addFav } from '../../redux/actions/cart-actions'
import {AiFillHeart} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
 





const panier = ({el,productID}) => {



const [color,setColor]= useState("grey")
const dispatch = useDispatch()
const addPanier =()=>{
   dispatch(addFav(productID))
  toast("Great! This bascket has been added to your list of favorites. Click on Favorites see your list");
}
  return (
    <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',marginRight:50,marginBottom:50}}>
 
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.desc}</Card.Text>
    <Card.Text>
     To be saved at {el.date}
    </Card.Text>
    <Button onClick={addPanier} variant='light'><AiFillHeart onClick={()=>setColor("#DB2B39")} style={{color:color,fontSize:30}}/> </Button>
    <ToastContainer  position='top-center'/>
</Card.Body>
</Card>

  )
}

export default panier


