import React from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  Form,
  InputGroup,
  Dropdown,
  SplitButton,
} from "react-bootstrap";
import { useState } from "react";
import { registerHandler } from "../../redux/actions/auth-action";
import styled from "styled-components";

const MenuItem= styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px
`
const Button= styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius:10px;
background-color:#DB2B39;
border:none;

`
export default function Example() {
  //manipulate the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //local states to get the payload data from the user
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //dispatch the action (send a request)
  const dispatch = useDispatch();
  const registerUser = (e) => {
      e.preventDefault()
    const newUser = { name, email, password };
    dispatch(registerHandler(newUser));
    handleClose()
  };

  return (
    <>
     <MenuItem>
       <Button onClick={handleShow}>Register</Button>
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
              <InputGroup className="mb-3">
                <SplitButton
                  variant="outline-secondary"
                  title="Role"
                  id="segmented-button-dropdown-2"
                  alignRight
                >
                  <Dropdown.Item href="#">Client</Dropdown.Item>
                  <Dropdown.Item href="#">User</Dropdown.Item>

                  <Dropdown.Divider />
                </SplitButton>
              </InputGroup>
            </Form.Group>

            <Button onClick={registerUser}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}