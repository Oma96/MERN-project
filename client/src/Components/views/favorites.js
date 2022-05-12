import React,{useState,useEffect} from 'react'
import { Button, Card,ListGroup,ListGroupItem ,Modal} from 'react-bootstrap'
import {useSelector,useDispatch} from "react-redux"
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { addFav, removeFav } from '../../redux/actions/cart-actions'



const Container= styled.div`
margin-top:100px;
margin-bottom: 200px;
display: flex;
padding: 20px;
justify-content: center;
flex-wrap:wrap;
`

 export default function Favorites() {
  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {id}= useParams
const dispatch= useDispatch()
const removeHandler=(id)=>{
  dispatch(removeFav(id))
}
const cart= useSelector(state=>state.cart)


console.log(cart)
 
 
 


return ( 
  
  <Container>
    <>
  {cart.cartItems.map((item)=>(
  <Card style={{ width: '25rem',margin:50,boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
  <Card.Img variant="top" src="https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/science/scientists-link-highly-processed-foods-to-memory-loss/12927114-1-eng-GB/Scientists-link-highly-processed-foods-to-memory-loss.jpg" />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>{item.desc}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{item.price}</ListGroupItem>
    <ListGroupItem> To be saved today at: {item.date}</ListGroupItem>
    <ListGroupItem> Adress: {item.adress}</ListGroupItem>
    <ListGroupItem>Phone number: {item.phone}</ListGroupItem>
    </ListGroup>
  <Button variant="success" onClick={handleShow}>Reserve</Button>
  <Button variant="danger" onClick={()=>removeHandler(item.product)}>Remove</Button>
  <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body style={{fontSize:20}}>To reserve the meal, please call this number: {item.phone}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
 
</Card>
 ))}
 
 </>
</Container>

  
  )
}
