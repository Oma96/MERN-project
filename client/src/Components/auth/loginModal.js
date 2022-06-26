import React from "react";

import { Modal,Form,Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../redux/actions/auth-action";
import styled from 'styled-components'

// // const Button= styled.button`
// // padding: 10px;
// // font-size: 20px;
// // background-color: transparent;
// // cursor: pointer;
// // border-radius:10px;
// // background-color:#DB2B39;
// // border:none;

// `
export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(loginHandler({ email, password }));
    handleClose();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Sign in
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="text"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="danger" onClick={loginUser}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}