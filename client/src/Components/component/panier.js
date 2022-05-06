import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { addFav } from '../../redux/actions/cart-actions'
import {AiFillHeart} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'
 
 





const panier = ({el,productID}) => {

const notify = () => toast("Great! This bascket has been added to your list of favorites");

const {id}= useParams()
const dispatch = useDispatch()
const addPanier =()=>{
   dispatch(addFav(productID))
}
  return (
    <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
  <Card.Img variant="top" src="https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/science/scientists-link-highly-processed-foods-to-memory-loss/12927114-1-eng-GB/Scientists-link-highly-processed-foods-to-memory-loss.jpg" />
  <Card.Body>
    <Card.Title>{el.type}</Card.Title>
    <Card.Text>
     To be saved at {el.date}
    </Card.Text>
    <Button onClick={addPanier} variant='light'><AiFillHeart onClick={notify} style={{color:"#DB2B39",fontSize:30}}/> </Button>
    <ToastContainer  position='top-center'/>
</Card.Body>
</Card>

  )
}

export default panier


