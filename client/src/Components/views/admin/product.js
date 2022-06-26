import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {deleteProduct} from '../../../redux/actions/prod-actions'
import Edit from './Edit'




  function    Product({el}) {
    const dispatch= useDispatch()
    const deleteHandler =()=>{
     dispatch(deleteProduct(el._id))
    } 
    return (
    <div>
         <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', marginRight:50,marginBottom:50}}>
  {/* <Card.Img variant="top" src="https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/science/scientists-link-highly-processed-foods-to-memory-loss/12927114-1-eng-GB/Scientists-link-highly-processed-foods-to-memory-loss.jpg" /> */}
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>To be saved at: {el.date} </Card.Text>
    <Card.Text>Description: {el.desc} </Card.Text>
    <Card.Text>Price: {el.price} </Card.Text>
    <Card.Text>Adress: {el.adress} </Card.Text>
    <Card.Text>Phone: {el.phone} </Card.Text>
</Card.Body>
<Edit el={el}/>
<Button onClick={deleteHandler} variant="danger" style={{marginTop:10}}>Delete</Button>

</Card>
    </div>
  )
}

export default Product