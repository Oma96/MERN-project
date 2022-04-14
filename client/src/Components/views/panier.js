import React from 'react'
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'
import "./panier.css"
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/actions/cart-actions'

const panier = ({el,productID}) => {
  let navigate=useNavigate()
  const dispatch = useDispatch()
  
  const addPanier =()=>{
    dispatch(addToCart(productID))
    navigate('/cart')
  }
  return (
    <div >
        <Card className='card' style={{width: '18rem'}} >
  
       <Card.Body id ='title'>
      <Card.Title id='title'>{el.type}</Card.Title>
    
       </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem >{el.price}</ListGroupItem>
    <ListGroupItem>Adress: {el.adress}</ListGroupItem>
    <ListGroupItem>Date: {el.date}</ListGroupItem>
    <ListGroupItem>Phone: {el.phone}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button onClick={addPanier} id="button">Reserve</Button>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default panier


