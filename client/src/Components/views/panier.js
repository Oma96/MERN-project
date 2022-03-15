import React from 'react'
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'

const panier = ({el}) => {
  return (
    <div>
        <Card className='card' style={{ width: '18rem' }}>
  
       <Card.Body>
      <Card.Title>Type: {el.type}</Card.Title>
    
       </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Prix: {el.prix}</ListGroupItem>
    <ListGroupItem>Adresse de récupération: {el.adresse}</ListGroupItem>
    <ListGroupItem>Date de récupération: {el.date}</ListGroupItem>
    <ListGroupItem>Télephone: {el.telephone}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Button variant="primary">Reserve</Button>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default panier


