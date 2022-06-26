import React from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  Form,
  InputGroup,
  Dropdown,
  SplitButton,
  DropdownButton,
  Button
} from "react-bootstrap";
import { useState } from "react";
import { registerHandler } from "../../redux/actions/auth-action";
import styled from "styled-components";
import Select from "react-select"

const MenuItem= styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px
`
// const Button= styled.button`
// padding: 10px;
// font-size: 20px;
// background-color: transparent;
// cursor: pointer;
// border-radius:10px;
// background-color:#DB2B39;
// border:none;

// `

const options =[
  {value:'Client', label:'Client'},
  {value:'Vendor',label:'Vendor'}
]
export default function Example() {
  //manipulate the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //local states to get the payload data from the user
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role,setRole]=useState("")
  console.log(role)
  //dispatch the action (send a request)
  const dispatch = useDispatch();
  const registerUser = (e) => {
      e.preventDefault()
    const newUser = { name, email, password,role };
    dispatch(registerHandler(newUser));
    handleClose()
  };

  return (
    <>
     <MenuItem>
       <Button variant="danger" onClick={handleShow}>Register</Button>
     </MenuItem>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>user Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setname(e.target.value)}
              />

              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />

               <Form.Label>Role</Form.Label>
              {/* <Form.Control
                type="role"
                placeholder="Vendor or Client"
                onChange={(e) => setRole(e.target.value)}
              />  */}
               <Select
                defaultValue={role}
                onChange={(e)=>setRole(e.target.value)}
                options={options}
                />

              
          
              
            </Form.Group>

            <Button variant="danger" onClick={registerUser}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}