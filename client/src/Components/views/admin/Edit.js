
import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import {EditProduct, editProduct} from '../../../redux/actions/prod-actions'
import { useDispatch } from 'react-redux';


function Edit({el}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name,setName]= useState('')
    const [desc,setDesc]= useState('')
    const [price,setPrice]= useState('')
    const [adress,setAdress]= useState('')
    const [date,setDate]=useState('')
    const [phone,SetPhone]= useState('')






    const editNameHandler =(e)=>{
        setName(e.target.value)
     }
     const editDescHandler =(e)=>{
        setDesc(e.target.value)
     }
     const editPriceHandler =(e)=>{
        setPrice(e.target.value)
     }
     const editAdressHandler =(e)=>{
        setAdress(e.target.value)
     }
     const editDateHandler =(e)=>{
        setDate(e.target.value)
     }
     const editPhoneHandler =(e)=>{
        SetPhone(e.target.value)
     }

    const dispatch= useDispatch()
    const EditHandler=()=>{
        dispatch(EditProduct(el._id,{name,desc,price,adress,date,phone}))
    }

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  
                  placeholder="Edit the name"
                  autoFocus
                  value={name}
                  onChange={editNameHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  
                  placeholder="Edit the description"
                  autoFocus
                  value={desc}
                  onChange={editDescHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  
                  placeholder="Edit the date"
                  autoFocus
                  value={date}
                  onChange={editDateHandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                  
                  placeholder="Edit the adress"
                  autoFocus
                  value={adress}
                  onChange={editAdressHandler}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  
                  placeholder="Edit the price"
                  autoFocus
                  value={price}
                  onChange={editPriceHandler}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  
                  placeholder="Edit the Phone number"
                  autoFocus
                  value={phone}
                  onChange={editPhoneHandler}
                />
              </Form.Group>
           
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose,EditHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Edit